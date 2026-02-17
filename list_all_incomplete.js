const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/miracles.json', 'utf8'));
const incomplete = data.filter(m => !m.fullDescription || !m.scientificEvidence || !m.witnessTestimonies);
console.log('Total incomplete:', incomplete.length);
incomplete.forEach(m => {
  const url = m.url || 'no-url';
  console.log(m.id + '|' + m.name + '|' + url);
});
