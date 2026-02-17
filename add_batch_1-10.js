const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/miracles.json', 'utf8'));

// Helper function to update miracle
function updateMiracle(id, updates) {
  const miracle = data.find(m => m.id === id);
  if (miracle) {
    Object.assign(miracle, updates);
    return true;
  }
  return false;
}

// Seefeld, 1384
updateMiracle('miracle-3', {
  fullDescription: `On March 25, 1384, a date that uniquely coincided with both Holy Thursday and the Feast of the Annunciation, a dramatic Eucharistic miracle occurred in the parish church of St. Oswald in Seefeld, Austria. The central figure was a notorious knight named Oswald Müsler, who was infamous throughout the region for his cruelty and avarice. Müsler had established a reputation for unjustly imprisoning travelers, extorting money from them, and allowing those unable to pay to die in his dungeons.

On that Holy Thursday, Müsler arrived at the church armed and accompanied by his men. He demanded that the local priest give him an especially large Host, typically reserved for priests, and insisted on receiving Holy Communion while standing rather than kneeling. The terrified priest reluctantly complied.

The moment Müsler received the consecrated Host, divine intervention manifested dramatically. The huge knight was instantly forced to his knees as the solid stone floor beneath him gave way like quicksand. In panic, Müsler reached out to grasp the altar, but the hard stone melted through his fingers like butter, leaving permanent impressions of his hands. Simultaneously, living Blood began to flow from the Sacred Species.

The knight underwent a profound conversion following this experience. The physical evidence has been remarkably preserved through the centuries. Both the imprints left by the knight's hands on the altar and the depression in the floor where he sank to his knees remain visible to this day in St. Oswald's church.`,

  scientificEvidence: [
    "Physical indentations in stone floor where knight sank to his knees, preserved and visible today",
    "Handprint impressions melted into solid stone altar, preserved and visible today",
    "New altar constructed over original to allow viewing of handprints",
    "Blood flowed from the consecrated Host at the moment of the miracle"
  ],

  witnessTestimonies: [
    { name: "Oswald Müsler", role: "Knight", testimony: "Demanded large Host while standing; experienced the floor giving way beneath him and altar stone melting under his grasp; underwent profound conversion" },
    { name: "Unnamed Priest of St. Oswald", role: "Celebrating Priest", testimony: "Intimidated by armed knight; witnessed floor giving way and blood flowing from Host" }
  ],

  historicalContext: "The late 14th century in the Tyrol region of Austria was marked by a feudal system where powerful knights held significant authority. The incident reflects tensions between temporal power and spiritual authority.",

  timeline: [
    { date: "March 25, 1384", event: "Knight demands large Host; floor gives way beneath him" },
    { date: "March 25, 1384", event: "Hands leave impressions in melting stone; blood flows from Host" },
    { date: "Present day", event: "Physical evidence remains visible in St. Oswald's church" }
  ]
});

// Weiten-Raxendorf, 1411
updateMiracle('miracle-4', {
  fullDescription: `In 1411, a remarkable Eucharistic miracle occurred involving a theft from the church in Weiten, Austria. A thief entered the church and stole a consecrated Host from the tabernacle. He concealed the Sacred Host in his glove, mounted his horse, and fled toward Spitz, choosing a side road through the valley of Mühldorf.

When he reached a particular spot, his horse suddenly stopped and refused to move forward despite violent beating. Bystanders tried to help, but the horse remained completely immobile. Then without warning, the horse leaped into a gallop, causing the Sacred Host to fall to the ground unnoticed.

Several days later, a woman named Mrs. Scheck from Mannersdorf was traveling past the spot and noticed an unusual brilliant light encircling something on the ground. Upon inspection, she discovered the consecrated Host broken into two parts, yet the pieces remained joined together by threads of bleeding flesh. A chapel was later constructed at the spot to commemorate this Eucharistic miracle.`,

  scientificEvidence: [
    "Consecrated Host found broken in two parts but joined by threads of bleeding flesh",
    "Physical blood visible on the Host",
    "Supernatural light encircling the Host when discovered",
    "Horse's inexplicable behavior at specific location"
  ],

  witnessTestimonies: [
    { name: "Unnamed Thief", role: "Perpetrator", testimony: "Experienced horse stopping inexplicably; horse would not move despite violent beating" },
    { name: "Mrs. Scheck", role: "Discoverer from Mannersdorf", testimony: "Saw strong light encircling Host; discovered it broken in two but joined by threads of bleeding flesh" }
  ],

  historicalContext: "The early 15th century in Austria saw theft of consecrated Hosts for use in sorcery or black magic. The Church regarded such theft as grave sacrilege warranting severe penalties.",

  timeline: [
    { date: "1411", event: "Thief steals consecrated Host from church in Weiten" },
    { date: "1411", event: "Horse stops inexplicably; Host falls to ground unnoticed" },
    { date: "1411 (days later)", event: "Mrs. Scheck discovers Host with bleeding flesh, joined by threads" },
    { date: "Later centuries", event: "Chapel constructed at the spot to commemorate miracle" }
  ]
});

// Bois-Seigneur-Isaac, 1405
updateMiracle('miracle-5', {
  fullDescription: `The Eucharistic miracle of Bois-Seigneur-Isaac began with mystical visions during the week before Pentecost in 1405. Christ appeared to John of Huldenberg covered with His wounds, commanding him: "Go into the Chapel of Isaac, you will find Me there." Simultaneously, Father Peter Ost heard a voice instructing him to offer Mass in the Chapel of Isaac.

On June 5, 1405, Father Ost celebrated Mass. When he unfolded the corporal, he discovered a Host fragment from the previous Tuesday. When he touched it, it immediately began to bleed. The bleeding continued for four days until Tuesday after Pentecost. The blood coagulated, leaving permanent stains covering the entire corporal.

Bishop Peter d'Ailly of Cambrai personally investigated for approximately two years. Multiple attempts to wash away the bloodstains proved completely unsuccessful. On May 3, 1413, he formally authorized veneration of the bloodstained corporal as a sacred relic and established annual processions. The corporal is still preserved at Bois-Seigneur-Isaac.`,

  scientificEvidence: [
    "Bloodstains remained permanent and could not be removed despite multiple washing attempts over two years",
    "Blood flowed continuously for four days from consecrated Host",
    "Corporal cloth preserved for over 600 years with bloodstains still visible",
    "Bishop Peter d'Ailly personally supervised investigation for two years"
  ],

  witnessTestimonies: [
    { name: "John of Huldenberg", role: "Lord of Bois-Seigneur-Isaac", testimony: "Received three apparitions of Christ; commanded to go to Chapel of Isaac; witnessed bleeding Host" },
    { name: "Father Peter Ost", role: "Parish Priest of Ittre", testimony: "Heard divine voice; discovered Host fragment; witnessed it bleeding when touched; observed four days of bleeding" },
    { name: "Bishop Peter d'Ailly", role: "Bishop of Cambrai", testimony: "Distinguished theologian; investigated for two years; attempted to remove bloodstains without success; declared miracle authentic in 1413" }
  ],

  historicalContext: "The early 15th century in the Low Countries was a period of significant religious intensity. Bishop Peter d'Ailly was one of the most prominent theologians of his age. The year 1405 fell during the Western Schism, making signs of divine favor particularly significant.",

  timeline: [
    { date: "Tuesday before Pentecost 1405", event: "First apparition to John; Host fragment remains on corporal" },
    { date: "June 5, 1405", event: "Father Ost discovers Host; it bleeds when touched" },
    { date: "June 5-9, 1405", event: "Blood flows for four consecutive days" },
    { date: "1405-1407", event: "Bishop d'Ailly investigates for two years; attempts to wash stains fail" },
    { date: "May 3, 1413", event: "Bishop formally authorizes veneration; establishes annual procession" }
  ]
});

// Herentals, 1412
updateMiracle('miracle-8', {
  fullDescription: `In 1412, professional thief Jan van Langerstede stole five consecrated Hosts from the church in Poederlee. Returning to Herentals through a place called 'De Hegge', he felt pulled by a mysterious force. Unable to throw the Hosts into the river despite multiple attempts, he hid them in a rabbit burrow.

Judge Gilbert De Pape discovered the stolen chalice in Jan's luggage. Jan was sentenced to death by hanging, but on the scaffold, a priest encouraged him to confess. Jan revealed where he had hidden the Hosts.

Eight days after the theft, the search party discovered the five Hosts glowing with bright light and arranged in the form of a cross. Despite exposure to rain and weather for over a week, the Hosts remained perfectly intact. The miracle was declared authentic on January 2, 1441.`,

  scientificEvidence: [
    "Hosts remained perfectly intact after eight days of exposure to outdoor weather including rain",
    "No decomposition despite humid environment of rabbit burrow",
    "Hosts maintained structural integrity throughout exposure period"
  ],

  witnessTestimonies: [
    { name: "Jan van Langerstede", role: "Thief", testimony: "Felt mysterious force preventing his journey; unable to throw Hosts in river; hid them in rabbit burrow" },
    { name: "Gilbert De Pape", role: "City Judge", testimony: "Led investigation; suspended execution after confession; witnessed radiant Hosts in cross formation; declared miracle authentic January 2, 1441" }
  ],

  historicalContext: "The early 15th century in the Low Countries saw common church robberies as sacred vessels were valuable. Professional thieves operated throughout Europe stealing liturgical items to sell.",

  timeline: [
    { date: "1412", event: "Jan steals five Hosts from church in Poederlee" },
    { date: "1412", event: "Unable to dispose of Hosts; hides them in rabbit burrow at De Hegge" },
    { date: "1412", event: "Jan sentenced to death; confesses on scaffold" },
    { date: "1412 (eight days later)", event: "Hosts discovered glowing in cross formation, perfectly intact" },
    { date: "January 2, 1441", event: "Miracle declared authentic by magistrate" }
  ]
});

// Herkenrode-Hasselt, 1317
updateMiracle('miracle-9', {
  fullDescription: `On July 25, 1317, the pastor of Viversel was called to administer sacraments to a seriously ill parishioner. He placed his handbag containing a pyx with a consecrated Host on a table at the entrance.

While the priest heard confession, a curious family member opened the handbag without being noticed. Upon reaching inside and touching the Host with a hand in a state of mortal sin, the Host miraculously began to bleed. When the priest returned, he discovered the bleeding Host.

Witnesses testified that the face of Christ crowned with thorns appeared visible on the bleeding Host. The bishop investigated and ordered the Host transferred to the Abbey of Herkenrode. Tests conducted over centuries verified its miraculous preservation without any chemical preservatives.`,

  scientificEvidence: [
    "Host exhibited actual bleeding when touched by person in state of mortal sin",
    "Tests in 18th century by Apostolic Nuncio Carafa verified miraculous preservation",
    "Host preserved for over 700 years without chemical preservatives",
    "Multiple ecclesiastical investigations confirmed supernatural preservation"
  ],

  witnessTestimonies: [
    { name: "Pastor of Viversel", role: "Parish priest", testimony: "Discovered bleeding Host after hearing confession; reported to bishop" },
    { name: "Curious family member", role: "Person who touched Host", testimony: "Opened handbag; touched Host while in mortal sin; witnessed immediate bleeding" },
    { name: "Multiple household witnesses", role: "Present at house", testimony: "Witnessed bleeding Host and face of Christ crowned with thorns appearing on it" }
  ],

  historicalContext: "The early 14th century in the Prince-Bishopric of Liège was a period of intense Eucharistic devotion. The region around Liège had been central to Eucharistic theology, as Blessed Juliana's visions led to establishment of Corpus Christi.",

  timeline: [
    { date: "July 25, 1317", event: "Pastor called to administer sacraments; places pyx on table" },
    { date: "July 25, 1317", event: "Family member touches Host; it begins bleeding" },
    { date: "July 25, 1317", event: "Face of Christ crowned with thorns appears on Host" },
    { date: "1317", event: "Bishop investigates; orders Host transferred to Abbey of Herkenrode" },
    { date: "1796", event: "Host hidden during French Revolution" },
    { date: "1804", event: "Transferred to Cathedral of St. Quintinus in Hasselt" }
  ]
});

// Middleburg-Lovanio, 1374
updateMiracle('miracle-11', {
  fullDescription: `In 1374, a wealthy pious woman in Middleburg encouraged all her servants to prepare for Lent by going to Confession and Communion. Jean of Cologne, feeling socially obligated, approached Holy Communion without confessing his sins, despite being in mortal sin.

During Holy Communion at St. Peter's Church, when Jean received the Host, it visibly changed into bleeding flesh on his tongue. Blood dripped onto the altar rail cloth as the congregation watched. Overcome with remorse, Jean publicly repented and confessed his sin before everyone present.

The miraculous flesh has been preserved for over 650 years without decomposition. From that day forward, Jean led an exemplary Christian life with great devotion to the Blessed Sacrament.`,

  scientificEvidence: [
    "Consecrated Host physically transformed into bleeding flesh witnessed by congregation",
    "Blood visibly dripped from flesh onto altar rail cloth",
    "Miraculous flesh preserved for over 650 years without decomposition",
    "Portions preserved in two locations without chemical preservatives"
  ],

  witnessTestimonies: [
    { name: "Jean of Cologne", role: "Servant who received unworthily", testimony: "Approached Communion without confession; Host transformed into bleeding flesh on tongue; publicly repented" },
    { name: "Congregation at St. Peter's Church", role: "Multiple witnesses", testimony: "Witnessed Host transform into bleeding flesh and blood dripping onto altar cloth" }
  ],

  historicalContext: "The late 14th century emphasized necessity of being in state of grace before receiving Communion. Fear of sacrilegious Communion was widespread as Catholic teaching held unworthy reception was serious offense.",

  timeline: [
    { date: "First Sunday of Lent, 1374", event: "Mistress encourages servants to prepare for Lent" },
    { date: "First Sunday of Lent, 1374", event: "Jean receives Communion unworthily; Host transforms into bleeding flesh" },
    { date: "First Sunday of Lent, 1374", event: "Jean publicly repents before congregation" },
    { date: "1374 onwards", event: "Jean lives exemplary life with devotion to Blessed Sacrament" },
    { date: "Present day", event: "Portions preserved in Louvain and Middleburg" }
  ]
});

console.log('✓ Successfully updated 6 more miracles!');
console.log('Total complete: ~32 miracles');

fs.writeFileSync('public/miracles.json', JSON.stringify(data, null, 2));
