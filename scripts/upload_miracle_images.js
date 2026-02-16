#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const prompts = require('prompts');

const MIRACLES_JSON_PATH = path.join(__dirname, '../public/miracles.json');
const IMAGES_DIR = path.join(__dirname, '../public/images/miracles');

// Ensure images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
  console.log('✅ Created images directory:', IMAGES_DIR);
}

async function main() {
  console.log('\n🙏 ═══════════════════════════════════════════════════');
  console.log('   Eucharistic Miracles Image Upload Tool');
  console.log('   ═══════════════════════════════════════════════════\n');

  // Load miracles data
  let miracles;
  try {
    const data = fs.readFileSync(MIRACLES_JSON_PATH, 'utf8');
    miracles = JSON.parse(data);
    console.log(`📖 Loaded ${miracles.length} miracles from database\n`);
  } catch (error) {
    console.error('❌ Error loading miracles.json:', error.message);
    process.exit(1);
  }

  // Main menu
  const { action } = await prompts({
    type: 'select',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      { title: '📤 Upload images for a miracle', value: 'upload' },
      { title: '👁️  View current images for a miracle', value: 'view' },
      { title: '🗑️  Remove images from a miracle', value: 'remove' },
      { title: '📊 Show statistics', value: 'stats' },
      { title: '❌ Exit', value: 'exit' }
    ]
  });

  if (!action || action === 'exit') {
    console.log('\n👋 Goodbye!\n');
    return;
  }

  switch (action) {
    case 'upload':
      await uploadImages(miracles);
      break;
    case 'view':
      await viewImages(miracles);
      break;
    case 'remove':
      await removeImages(miracles);
      break;
    case 'stats':
      showStatistics(miracles);
      break;
  }
}

async function uploadImages(miracles) {
  // Search/select miracle
  const { searchTerm } = await prompts({
    type: 'text',
    name: 'searchTerm',
    message: 'Search for miracle (name, city, or country):',
  });

  if (!searchTerm) return;

  // Filter miracles based on search
  const filtered = miracles.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filtered.length === 0) {
    console.log('❌ No miracles found matching your search.\n');
    return;
  }

  const { selectedMiracle } = await prompts({
    type: 'select',
    name: 'selectedMiracle',
    message: 'Select a miracle:',
    choices: filtered.map(m => ({
      title: `${m.name} (${m.city}, ${m.country}) - ${m.year || 'Unknown year'}`,
      value: m
    }))
  });

  if (!selectedMiracle) return;

  console.log('\n📍 Selected:', selectedMiracle.name);
  console.log('📅 Year:', selectedMiracle.year || 'Unknown');
  console.log('📍 Location:', `${selectedMiracle.city}, ${selectedMiracle.country}`);

  if (selectedMiracle.images && selectedMiracle.images.length > 0) {
    console.log('🖼️  Current images:', selectedMiracle.images.length);
    selectedMiracle.images.forEach((img, i) => {
      console.log(`   ${i + 1}. ${img}`);
    });
  } else {
    console.log('🖼️  Current images: None');
  }

  console.log('');

  // Get image files
  const { imagePaths } = await prompts({
    type: 'list',
    name: 'imagePaths',
    message: 'Enter image file paths (comma-separated):',
    separator: ','
  });

  if (!imagePaths || imagePaths.length === 0) {
    console.log('❌ No image paths provided.\n');
    return;
  }

  // Process each image
  const newImages = [];
  let successCount = 0;

  for (const imagePath of imagePaths) {
    const trimmedPath = imagePath.trim();

    if (!fs.existsSync(trimmedPath)) {
      console.log(`⚠️  File not found: ${trimmedPath}`);
      continue;
    }

    // Check if it's an image
    const ext = path.extname(trimmedPath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      console.log(`⚠️  Not a valid image format: ${trimmedPath}`);
      continue;
    }

    // Generate new filename
    const imageCount = (selectedMiracle.images?.length || 0) + newImages.length;
    const newFilename = `${selectedMiracle.id}-${imageCount + 1}${ext}`;
    const destPath = path.join(IMAGES_DIR, newFilename);

    // Copy file
    try {
      fs.copyFileSync(trimmedPath, destPath);
      newImages.push(`/images/miracles/${newFilename}`);
      console.log(`✅ Copied: ${newFilename}`);
      successCount++;
    } catch (error) {
      console.log(`❌ Error copying ${trimmedPath}:`, error.message);
    }
  }

  if (newImages.length === 0) {
    console.log('\n❌ No images were successfully uploaded.\n');
    return;
  }

  // Update miracle data
  const miracleIndex = miracles.findIndex(m => m.id === selectedMiracle.id);
  if (!miracles[miracleIndex].images) {
    miracles[miracleIndex].images = [];
  }
  miracles[miracleIndex].images.push(...newImages);

  // Save updated data
  try {
    fs.writeFileSync(MIRACLES_JSON_PATH, JSON.stringify(miracles, null, 2));
    console.log(`\n✅ Successfully uploaded ${successCount} image(s) for ${selectedMiracle.name}`);
    console.log('📝 Updated miracles.json\n');
  } catch (error) {
    console.error('❌ Error saving miracles.json:', error.message);
  }
}

async function viewImages(miracles) {
  const { searchTerm } = await prompts({
    type: 'text',
    name: 'searchTerm',
    message: 'Search for miracle:',
  });

  if (!searchTerm) return;

  const filtered = miracles.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filtered.length === 0) {
    console.log('❌ No miracles found.\n');
    return;
  }

  const { selectedMiracle } = await prompts({
    type: 'select',
    name: 'selectedMiracle',
    message: 'Select a miracle:',
    choices: filtered.map(m => ({
      title: `${m.name} (${m.city}, ${m.country})`,
      value: m
    }))
  });

  if (!selectedMiracle) return;

  console.log('\n═══════════════════════════════════════════════════');
  console.log(`📍 ${selectedMiracle.name}`);
  console.log(`📍 ${selectedMiracle.city}, ${selectedMiracle.country}`);
  console.log('═══════════════════════════════════════════════════\n');

  if (selectedMiracle.images && selectedMiracle.images.length > 0) {
    console.log(`🖼️  Images (${selectedMiracle.images.length}):\n`);
    selectedMiracle.images.forEach((img, i) => {
      const fullPath = path.join(__dirname, '../public', img);
      const exists = fs.existsSync(fullPath);
      const status = exists ? '✅' : '❌';
      console.log(`   ${i + 1}. ${status} ${img}`);
      if (exists) {
        const stats = fs.statSync(fullPath);
        const sizeKB = (stats.size / 1024).toFixed(2);
        console.log(`      Size: ${sizeKB} KB`);
      }
    });
  } else {
    console.log('🖼️  No images uploaded yet.');
  }
  console.log('');
}

async function removeImages(miracles) {
  const { searchTerm } = await prompts({
    type: 'text',
    name: 'searchTerm',
    message: 'Search for miracle:',
  });

  if (!searchTerm) return;

  const filtered = miracles.filter(m =>
    (m.images && m.images.length > 0) &&
    (m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     m.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
     m.country.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (filtered.length === 0) {
    console.log('❌ No miracles with images found.\n');
    return;
  }

  const { selectedMiracle } = await prompts({
    type: 'select',
    name: 'selectedMiracle',
    message: 'Select a miracle:',
    choices: filtered.map(m => ({
      title: `${m.name} (${m.images?.length || 0} images)`,
      value: m
    }))
  });

  if (!selectedMiracle) return;

  const { imagesToRemove } = await prompts({
    type: 'multiselect',
    name: 'imagesToRemove',
    message: 'Select images to remove:',
    choices: selectedMiracle.images.map((img, i) => ({
      title: `${i + 1}. ${img}`,
      value: img
    }))
  });

  if (!imagesToRemove || imagesToRemove.length === 0) return;

  const { confirm } = await prompts({
    type: 'confirm',
    name: 'confirm',
    message: `Remove ${imagesToRemove.length} image(s)?`,
    initial: false
  });

  if (!confirm) return;

  // Remove from filesystem
  imagesToRemove.forEach(img => {
    const fullPath = path.join(__dirname, '../public', img);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
      console.log(`🗑️  Deleted: ${img}`);
    }
  });

  // Update JSON
  const miracleIndex = miracles.findIndex(m => m.id === selectedMiracle.id);
  miracles[miracleIndex].images = selectedMiracle.images.filter(
    img => !imagesToRemove.includes(img)
  );

  fs.writeFileSync(MIRACLES_JSON_PATH, JSON.stringify(miracles, null, 2));
  console.log('\n✅ Images removed successfully\n');
}

function showStatistics(miracles) {
  console.log('\n═══════════════════════════════════════════════════');
  console.log('   📊 Image Statistics');
  console.log('═══════════════════════════════════════════════════\n');

  const withImages = miracles.filter(m => m.images && m.images.length > 0);
  const totalImages = miracles.reduce((sum, m) => sum + (m.images?.length || 0), 0);

  console.log(`📖 Total Miracles: ${miracles.length}`);
  console.log(`🖼️  Miracles with Images: ${withImages.length} (${((withImages.length / miracles.length) * 100).toFixed(1)}%)`);
  console.log(`📸 Total Images: ${totalImages}`);
  console.log(`📊 Average Images per Miracle: ${(totalImages / withImages.length).toFixed(2)}`);

  console.log('\n🏆 Top 5 Most Illustrated Miracles:\n');
  const sorted = [...miracles]
    .filter(m => m.images && m.images.length > 0)
    .sort((a, b) => (b.images?.length || 0) - (a.images?.length || 0))
    .slice(0, 5);

  sorted.forEach((m, i) => {
    console.log(`   ${i + 1}. ${m.name} - ${m.images.length} images`);
  });

  console.log('\n');
}

// Run main function
main().catch(console.error);
