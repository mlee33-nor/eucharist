const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchHTML(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    return null;
  }
}

async function getImagesFromMiraclePage(url, miracleId) {
  console.log(`\n[${miracleId}] Fetching: ${url}`);

  const html = await fetchHTML(url);
  if (!html) return [];

  // Extract URL parameters
  const urlParams = new URL(url).searchParams;
  const nat = urlParams.get('nat');
  const wh = urlParams.get('wh');

  if (!nat || !wh) {
    console.log('  ✗ Missing nat or wh parameters');
    return [];
  }

  // Construct iframe URL
  const iframeUrl = `https://www.miracolieucaristici.org/en/${nat}/${wh}.html`;
  console.log(`  Fetching iframe: ${iframeUrl}`);

  const iframeHtml = await fetchHTML(iframeUrl);
  if (!iframeHtml) return [];

  const $ = cheerio.load(iframeHtml);
  const localImagePaths = [];
  let imageCount = 0;

  // Find all images
  $('img').each((i, elem) => {
    let src = $(elem).attr('src');
    if (!src) return;

    // Skip logos, icons, etc
    if (src.includes('logo') || src.includes('icon') || src.includes('banner') ||
        src.includes('button') || src.includes('spacer') || src.includes('sfondo')) {
      return;
    }

    // Handle base64 images
    if (src.startsWith('data:image')) {
      imageCount++;
      const matches = src.match(/^data:image\/(\w+);base64,(.+)$/);
      if (matches) {
        const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
        const base64Data = matches[2];
        const filename = `${miracleId}-${imageCount}.${ext}`;
        const filepath = path.join(__dirname, '..', 'public', 'images', 'miracles', filename);

        try {
          const buffer = Buffer.from(base64Data, 'base64');
          fs.writeFileSync(filepath, buffer);
          localImagePaths.push(`/images/miracles/${filename}`);
          console.log(`  ✓ Saved image ${imageCount} (${(buffer.length / 1024).toFixed(1)}KB)`);
        } catch (err) {
          console.log(`  ✗ Failed to save image ${imageCount}: ${err.message}`);
        }
      }
    }
  });

  console.log(`  ✓ Total images saved: ${localImagePaths.length}`);
  return localImagePaths;
}

async function updateMiraclesWithImages() {
  const miraclesPath = path.join(__dirname, '..', 'public', 'miracles.json');
  const miracles = JSON.parse(fs.readFileSync(miraclesPath, 'utf8'));

  console.log(`Processing ${miracles.length} miracles...`);

  for (let i = 0; i < miracles.length; i++) {
    const miracle = miracles[i];

    // Only process miracles with URLs and without images
    if (miracle.url && (!miracle.images || miracle.images.length === 0)) {
      const images = await getImagesFromMiraclePage(miracle.url, miracle.id);

      if (images.length > 0) {
        miracle.images = images;
        console.log(`  ✓ Added ${images.length} images to ${miracle.name}`);
      }

      await delay(1500); // Be nice to the server
    } else if (miracle.images && miracle.images.length > 0) {
      console.log(`\n[${miracle.id}] ${miracle.name} - Already has images, skipping`);
    }
  }

  // Save updated miracles.json
  fs.writeFileSync(miraclesPath, JSON.stringify(miracles, null, 2));
  console.log(`\n✓ Updated miracles.json with image paths`);
}

updateMiraclesWithImages().catch(console.error);
