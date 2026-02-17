const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/miracles.json', 'utf8'));
const noCoords = data.filter(m => !m.lat || !m.lng || m.lat === 0 || m.lng === 0);
console.log('No/zero coords:', noCoords.length);
noCoords.forEach(m => console.log(m.id + ' | ' + m.name + ' | lat:' + m.lat + ' lng:' + m.lng));
