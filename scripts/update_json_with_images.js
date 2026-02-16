const fs = require('fs');
const path = require('path');

// Read miracles
const miraclesPath = path.join(__dirname, '..', 'public', 'miracles.json');
const miracles = JSON.parse(fs.readFileSync(miraclesPath, 'utf8'));

// Read all images in the directory
const imagesDir = path.join(__dirname, '..', 'public', 'images', 'miracles');
const imageFiles = fs.readdirSync(imagesDir);

// Group images by miracle ID
const imagesByMiracle = {};
imageFiles.forEach(filename => {
  const match = filename.match(/^(miracle-\d+)-\d+\.(jpg|png|jpeg)$/);
  if (match) {
    const miracleId = match[1];
    if (!imagesByMiracle[miracleId]) {
      imagesByMiracle[miracleId] = [];
    }
    imagesByMiracle[miracleId].push('/images/miracles/' + filename);
  }
});

// Update miracles with images
miracles.forEach(miracle => {
  if (imagesByMiracle[miracle.id]) {
    miracle.images = imagesByMiracle[miracle.id].sort();
  }
});

// Save updated JSON
fs.writeFileSync(miraclesPath, JSON.stringify(miracles, null, 2));

console.log('✓ Updated miracles with images:');
Object.keys(imagesByMiracle).sort().forEach(id => {
  const miracleName = miracles.find(m => m.id === id)?.name || id;
  console.log(`  ${id} (${miracleName}): ${imagesByMiracle[id].length} images`);
});
console.log(`\n✓ Total miracles with images: ${Object.keys(imagesByMiracle).length}`);
