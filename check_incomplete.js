const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/miracles.json', 'utf8'));

const incomplete = data.filter(m => !m.fullDescription || !m.scientificEvidence || !m.witnessTestimonies);
const complete = data.filter(m => m.fullDescription && m.scientificEvidence && m.witnessTestimonies);

console.log('✓ Complete:', complete.length);
console.log('⨯ Incomplete:', incomplete.length);
console.log('━ Total:', data.length);
console.log('\nNext 15 incomplete miracles:');
incomplete.slice(0, 15).forEach(m => {
  console.log(`- ${m.id}: ${m.name} (${m.country}) - ${m.url}`);
});
