const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const NodeGeocoder = require('node-geocoder');

// Configure geocoder (using OpenStreetMap/Nominatim - free, no API key needed)
const geocoder = NodeGeocoder({
  provider: 'openstreetmap',
  httpAdapter: 'https',
  formatter: null
});

// Add delay to respect rate limits
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchHTML() {
  console.log('Fetching miracle list from miracolieucaristici.org...');
  try {
    const response = await fetch('https://www.miracolieucaristici.org/en/liste/list.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    console.log('✓ HTML fetched successfully');
    return html;
  } catch (error) {
    console.error('Error fetching HTML:', error.message);
    throw error;
  }
}

function parseHTML(html) {
  console.log('Parsing miracle data...');
  const $ = cheerio.load(html);
  const miracles = [];

  // The website uses <div class="crp"> sections for each country
  // Each section has an <h2> with the country name
  // And <p><a> links for each miracle
  $('div.crp').each((index, element) => {
    try {
      const $section = $(element);

      // Get country name from h2
      const countryName = $section.find('h2').first().text().trim();

      // Skip introductory panels
      if (countryName.toUpperCase().includes('INTRODUCTORY') ||
          countryName.toUpperCase().includes('PANEL')) {
        return;
      }

      // Get all miracle links in this country section
      $section.find('p a.ac').each((idx, link) => {
        const $link = $(link);
        const fullText = $link.text().trim();
        const href = $link.attr('href');

        if (!fullText || !href) return;

        // Parse the text (usually "City, Year" or "City")
        let city = fullText;
        let date = '';
        let year = undefined;

        // Try to extract year from text (look for 4-digit years or date ranges)
        const yearMatch = fullText.match(/(\d{3,4}(?:-\d{3,4})?(?:,\s*\d{4})*)/);
        if (yearMatch) {
          date = yearMatch[1];
          // Extract first year for sorting
          const firstYear = yearMatch[1].match(/\d{3,4}/);
          if (firstYear) {
            year = parseInt(firstYear[0]);
          }
          // Remove year from city name
          city = fullText.replace(/,?\s*\d{3,4}(?:-\d{3,4})?(?:,\s*\d{4})*/g, '').trim();
        }

        // Generate ID
        const id = `miracle-${miracles.length + 1}`;

        // Build full URL (relative to the base path)
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

    } catch (err) {
      console.error('Error parsing section:', err.message);
    }
  });

  console.log(`✓ Parsed ${miracles.length} miracles`);
  return miracles;
}

async function geocodeMiracles(miracles) {
  console.log('Geocoding miracle locations...');
  const geocodedMiracles = [];
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < miracles.length; i++) {
    const miracle = miracles[i];
    console.log(`[${i + 1}/${miracles.length}] Geocoding: ${miracle.city}, ${miracle.country}`);

    try {
      // Try multiple query variations for better results
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
              lng: location.longitude,
              // Update city and country with geocoded data if available
              city: location.city || miracle.city,
              country: location.country || miracle.country
            });
            console.log(`  ✓ Found: ${location.latitude}, ${location.longitude}`);
            successCount++;
            geocoded = true;
            break;
          }
        } catch (err) {
          // Try next query variation
        }
      }

      if (!geocoded) {
        console.log(`  ✗ Failed to geocode, skipping...`);
        failCount++;
      }

      // Respect rate limits (1 request per 1.5 seconds for Nominatim)
      await delay(1500);

    } catch (error) {
      console.log(`  ✗ Error geocoding ${miracle.city}: ${error.message}`);
      failCount++;
    }
  }

  console.log(`\n✓ Geocoding complete: ${successCount} successful, ${failCount} failed`);
  return geocodedMiracles;
}

async function main() {
  try {
    console.log('=== Eucharistic Miracles Data Pipeline ===\n');

    // Step 1: Fetch HTML
    const html = await fetchHTML();

    // Step 2: Parse miracles
    const miracles = parseHTML(html);

    if (miracles.length === 0) {
      console.error('No miracles found! The website structure may have changed.');
      process.exit(1);
    }

    // Step 3: Geocode all miracles
    const geocodedMiracles = await geocodeMiracles(miracles);

    // Step 4: Save to JSON
    const outputPath = path.join(__dirname, '..', 'public', 'miracles.json');
    fs.writeFileSync(outputPath, JSON.stringify(geocodedMiracles, null, 2));

    console.log(`\n✓ Saved ${geocodedMiracles.length} geocoded miracles to ${outputPath}`);
    console.log('\n=== Pipeline Complete ===');

  } catch (error) {
    console.error('\n✗ Pipeline failed:', error.message);
    process.exit(1);
  }
}

// Run the pipeline
main();
