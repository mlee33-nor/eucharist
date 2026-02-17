const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/miracles.json', 'utf8'));

// Update Fiecht
const fiecht = data.find(m => m.id === 'miracle-2');
if (fiecht) {
  fiecht.fullDescription = `In 1310, a profound Eucharistic miracle occurred in the small village of St. Georgenberg-Fiecht in the Inn Valley of Austria. During the celebration of Mass, a priest experienced severe temptations and doubts regarding the Real Presence of Jesus Christ in the consecrated elements. Specifically, after consecrating the wine, he was seized with uncertainty as to whether the Blood of Christ was truly present under the species of wine.

Immediately following the consecration, the wine underwent a dramatic transformation. It changed visibly into Blood and began to boil violently, overflowing from the chalice onto the altar. The priest, terrified by what he witnessed, found himself unable to consume all of the Holy Blood that had manifested. The abbot of the monastery took the remaining Sacred Blood and placed it in a special vessel, which was then stored in the tabernacle of the main altar along with the cloth used to wipe the chalice.

The miracle's authenticity was preserved through the centuries in a remarkable way. In 1480, a full 170 years after the event, the chronicler of that era documented that the Sacred Blood remained "still fresh as though coming out of a wound." This extraordinary preservation defied all natural explanation and served as ongoing testimony to the supernatural nature of the event.

As news of the miraculous event spread throughout the region, increasing numbers of pilgrims began making their way to Fiecht to venerate the Sacred Blood. The devotion grew so significantly that by 1472, Bishop Georg von Brixen felt compelled to order an official ecclesiastical investigation. He dispatched the abbot of Wilten, Johannes Lösch, along with two respected pastors, Sigmund Thaur and Kaspar of Absam, to thoroughly study and document the phenomenon. Following their investigation, the miracle was officially declared authentic, and the adoration of the Blessed Blood was formally encouraged by the Church. The Precious Blood continues to be preserved in a reliquary at the Monastery of St. Georgenberg to this day.`;

  fiecht.scientificEvidence = [
    "The Sacred Blood remained fresh and liquid for 170 years (documented in 1480)",
    "The blood appeared 'as though coming out of a wound' even after nearly two centuries",
    "The substance defied natural decomposition and coagulation processes",
    "Physical relic preserved in reliquary at Monastery of St. Georgenberg continues to present day"
  ];

  fiecht.witnessTestimonies = [
    {
      name: "Unnamed Priest",
      role: "Celebrating Priest at Mass",
      testimony: "Experienced severe doubts about the Real Presence during consecration; witnessed the wine transform into blood that boiled and overflowed the chalice; was unable to consume all of the miraculous Blood due to fear"
    },
    {
      name: "Unnamed Abbot of St. Georgenberg",
      role: "Monastic Superior",
      testimony: "Collected the remaining Sacred Blood and placed it in a vessel in the tabernacle, ensuring its preservation"
    },
    {
      name: "Chronicler of 1480",
      role: "Historical Recorder",
      testimony: "Documented 170 years after the event that the Sacred Blood was 'still fresh as though coming out of a wound'"
    }
  ];

  fiecht.historicalContext = "The early 14th century in Austria was a period of intense religious devotion and theological debate about the doctrine of transubstantiation. The Inn Valley region of Tyrol was dotted with monasteries and religious communities that served as centers of faith and learning.";

  fiecht.timeline = [
    { date: "1310", event: "Eucharistic miracle occurs during Mass when wine transforms into blood and overflows the chalice" },
    { date: "1472", event: "Bishop Georg von Brixen orders official ecclesiastical investigation" },
    { date: "1480", event: "Chronicler documents that after 170 years, the Sacred Blood remains fresh" },
    { date: "Present day", event: "Precious Blood preserved in reliquary at Monastery of St. Georgenberg" }
  ];
}

console.log('Updated miracles successfully!');
console.log('Total miracles:', data.length);

fs.writeFileSync('public/miracles.json', JSON.stringify(data, null, 2));
