const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const NodeGeocoder = require('node-geocoder');
const https = require('https');
const http = require('http');

// Configure geocoder
const geocoder = NodeGeocoder({
  provider: 'openstreetmap',
  httpAdapter: 'https',
  formatter: null
});

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Create directories if they don't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images', 'miracles');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

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

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function scrapeMiracleDetails(miracle, index, total) {
  console.log(`[${index}/${total}] Scraping details: ${miracle.name}`);

  try {
    const html = await fetchHTML(miracle.url);
    if (!html) {
      console.log(`  ✗ Failed to fetch page`);
      return miracle;
    }

    const $ = cheerio.load(html);

    // Extract full description
    // The website stores the miracle story in various div containers
    let fullDescription = '';

    // Try to find the main content area
    const contentSelectors = [
      'div.testo',
      'div.descrizione',
      'div#content p',
      'div.miracle-content',
      'div.corpo p'
    ];

    for (const selector of contentSelectors) {
      const content = $(selector);
      if (content.length > 0) {
        fullDescription = content.text().trim();
        if (fullDescription.length > 100) break;
      }
    }

    // If no specific selector worked, try to get all paragraphs
    if (!fullDescription || fullDescription.length < 100) {
      const paragraphs = [];
      $('p').each((i, elem) => {
        const text = $(elem).text().trim();
        if (text.length > 50) {
          paragraphs.push(text);
        }
      });
      fullDescription = paragraphs.join('\n\n');
    }

    // Extract images
    const images = [];
    const imageSelectors = [
      'img[src*="miracle"]',
      'img[src*="foto"]',
      'img[src*="image"]',
      'div.gallery img',
      'div.foto img',
      'img.miracle-image'
    ];

    const foundImages = new Set();

    imageSelectors.forEach(selector => {
      $(selector).each((i, elem) => {
        let src = $(elem).attr('src');
        if (src) {
          // Convert relative URLs to absolute
          if (src.startsWith('/')) {
            src = 'https://www.miracolieucaristici.org' + src;
          } else if (src.startsWith('../')) {
            src = 'https://www.miracolieucaristici.org/en/liste/' + src.replace('../', '');
          } else if (!src.startsWith('http')) {
            const baseUrl = miracle.url.substring(0, miracle.url.lastIndexOf('/') + 1);
            src = baseUrl + src;
          }

          // Filter out small images, icons, and logos
          const isValidImage =
            !src.includes('logo') &&
            !src.includes('icon') &&
            !src.includes('banner') &&
            !src.includes('button') &&
            (src.includes('foto') || src.includes('miracle') || src.includes('image') || src.includes('.jpg') || src.includes('.png'));

          if (isValidImage && !foundImages.has(src)) {
            foundImages.add(src);
          }
        }
      });
    });

    // Also check for any large images in the page
    $('img').each((i, elem) => {
      let src = $(elem).attr('src');
      if (src && (src.includes('.jpg') || src.includes('.png') || src.includes('.jpeg'))) {
        if (src.startsWith('/')) {
          src = 'https://www.miracolieucaristici.org' + src;
        } else if (!src.startsWith('http')) {
          const baseUrl = miracle.url.substring(0, miracle.url.lastIndexOf('/') + 1);
          src = baseUrl + src;
        }

        const isValidImage =
          !src.includes('logo') &&
          !src.includes('icon') &&
          !src.includes('banner') &&
          !src.includes('button') &&
          !src.includes('spacer') &&
          !src.includes('bg_');

        if (isValidImage && !foundImages.has(src)) {
          foundImages.add(src);
        }
      }
    });

    // Download images
    const downloadedImages = [];
    const imageArray = Array.from(foundImages);

    for (let i = 0; i < Math.min(imageArray.length, 10); i++) {
      const imageUrl = imageArray[i];
      try {
        const ext = path.extname(imageUrl).split('?')[0] || '.jpg';
        const filename = `${miracle.id}-${i + 1}${ext}`;
        const filepath = path.join(imagesDir, filename);

        await downloadImage(imageUrl, filepath);
        downloadedImages.push(`/images/miracles/${filename}`);
        console.log(`  ✓ Downloaded image ${i + 1}`);

        await delay(500); // Small delay between image downloads
      } catch (err) {
        console.log(`  ✗ Failed to download image: ${err.message}`);
      }
    }

    console.log(`  ✓ Found ${fullDescription.length} chars of text, ${downloadedImages.length} images`);

    return {
      ...miracle,
      fullDescription: fullDescription || miracle.description || '',
      images: downloadedImages
    };

  } catch (error) {
    console.log(`  ✗ Error scraping details: ${error.message}`);
    return miracle;
  }
}

async function parseAndGeocode() {
  console.log('=== Enhanced Eucharistic Miracles Scraper ===\n');
  console.log('Fetching miracle list...');

  const listHtml = await fetchHTML('https://www.miracolieucaristici.org/en/liste/list.html');
  if (!listHtml) {
    console.error('Failed to fetch miracle list');
    process.exit(1);
  }

  const $ = cheerio.load(listHtml);
  const miracles = [];

  // Parse all miracles
  $('div.crp').each((index, element) => {
    const $section = $(element);
    const countryName = $section.find('h2').first().text().trim();

    if (countryName.toUpperCase().includes('INTRODUCTORY') ||
        countryName.toUpperCase().includes('PANEL')) {
      return;
    }

    $section.find('p a.ac').each((idx, link) => {
      const $link = $(link);
      const fullText = $link.text().trim();
      const href = $link.attr('href');

      if (!fullText || !href) return;

      let city = fullText;
      let date = '';
      let year = undefined;

      const yearMatch = fullText.match(/(\d{3,4}(?:-\d{3,4})?(?:,\s*\d{4})*)/);
      if (yearMatch) {
        date = yearMatch[1];
        const firstYear = yearMatch[1].match(/\d{3,4}/);
        if (firstYear) {
          year = parseInt(firstYear[0]);
        }
        city = fullText.replace(/,?\s*\d{3,4}(?:-\d{3,4})?(?:,\s*\d{4})*/g, '').trim();
      }

      const id = `miracle-${miracles.length + 1}`;
      const baseUrl = 'https://www.miracolieucaristici.org/en/liste/';
      const url = href.startsWith('http') ? href : baseUrl + href;

      miracles.push({
        id,
        name: fullText,
        city: city || fullText,
        country: countryName,
        date: date || 'Unknown',
        year: year,
        url
      });
    });
  });

  console.log(`✓ Found ${miracles.length} miracles\n`);

  // Geocode all miracles
  console.log('Geocoding locations...');
  const geocodedMiracles = [];

  for (let i = 0; i < miracles.length; i++) {
    const miracle = miracles[i];
    console.log(`[${i + 1}/${miracles.length}] Geocoding: ${miracle.city}, ${miracle.country}`);

    const queries = [
      `${miracle.city}, ${miracle.country}`,
      `${miracle.city}`,
      miracle.country
    ];

    let geocoded = false;
    for (const query of queries) {
      try {
        const results = await geocoder.geocode(query);
        if (results && results.length > 0) {
          const location = results[0];
          geocodedMiracles.push({
            ...miracle,
            lat: location.latitude,
            lng: location.longitude
          });
          console.log(`  ✓ ${location.latitude}, ${location.longitude}`);
          geocoded = true;
          break;
        }
      } catch (err) {
        // Try next query
      }
    }

    if (!geocoded) {
      console.log(`  ✗ Failed to geocode`);
    }

    await delay(1500); // Respect rate limits
  }

  console.log(`\n✓ Geocoded ${geocodedMiracles.length} miracles\n`);

  // Scrape full content for each miracle
  console.log('Scraping full content and images...\n');
  const fullMiracles = [];

  for (let i = 0; i < geocodedMiracles.length; i++) {
    const enrichedMiracle = await scrapeMiracleDetails(
      geocodedMiracles[i],
      i + 1,
      geocodedMiracles.length
    );
    fullMiracles.push(enrichedMiracle);
    await delay(2000); // Longer delay between page scrapes
  }

  // Save to JSON
  const outputPath = path.join(__dirname, '..', 'public', 'miracles.json');
  fs.writeFileSync(outputPath, JSON.stringify(fullMiracles, null, 2));

  console.log(`\n✓ Saved ${fullMiracles.length} complete miracles to ${outputPath}`);
  console.log(`✓ Downloaded images to ${imagesDir}`);
  console.log('\n=== Scraping Complete ===');
}

parseAndGeocode().catch(console.error);
