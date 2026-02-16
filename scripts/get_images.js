const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

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

async function getImagesFromMiraclePage(url) {
  console.log(`Fetching: ${url}`);

  const html = await fetchHTML(url);
  if (!html) return [];

  const $ = cheerio.load(html);

  // Extract URL parameters
  const urlParams = new URL(url).searchParams;
  const nat = urlParams.get('nat');
  const wh = urlParams.get('wh');

  if (!nat || !wh) {
    console.log('  Missing nat or wh parameters');
    return [];
  }

  // Construct iframe URL
  const iframeUrl = `https://www.miracolieucaristici.org/en/${nat}/${wh}.html`;
  console.log(`  Iframe URL: ${iframeUrl}`);

  const iframeHtml = await fetchHTML(iframeUrl);
  if (!iframeHtml) return [];

  const $iframe = cheerio.load(iframeHtml);
  const images = [];

  // Find all images
  $iframe('img').each((i, elem) => {
    let src = $iframe(elem).attr('src');
    if (!src) return;

    // Skip logos, icons, etc
    if (src.includes('logo') || src.includes('icon') || src.includes('banner') ||
        src.includes('button') || src.includes('spacer')) {
      return;
    }

    // Convert relative URLs to absolute
    if (src.startsWith('/')) {
      src = 'https://www.miracolieucaristici.org' + src;
    } else if (src.startsWith('../')) {
      src = 'https://www.miracolieucaristici.org/en/liste/' + src.replace(/\.\.\//g, '');
    } else if (!src.startsWith('http')) {
      const baseUrl = iframeUrl.substring(0, iframeUrl.lastIndexOf('/') + 1);
      src = baseUrl + src;
    }

    images.push(src);
  });

  console.log(`  Found ${images.length} images`);
  return images;
}

// Test with Buenos Aires
getImagesFromMiraclePage('https://www.miracolieucaristici.org/en/liste/scheda_c.html?nat=argentina&wh=buenosaires')
  .then(images => {
    console.log('\nImages found:');
    images.forEach((img, i) => console.log(`${i + 1}. ${img}`));
  });
