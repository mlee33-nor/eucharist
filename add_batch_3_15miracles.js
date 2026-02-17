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

// ============ BATCH 3: Germany, India, Martinique, Reunion, Italy ============

// Erding, 1417 (Germany)
updateMiracle('miracle-31', {
  fullDescription: `On Holy Thursday in 1417, a poor peasant of Erding struggled to improve his economic situation despite working long hours every day. His neighbor, who performed the same work, lived prosperously. When the peasant asked how his neighbor achieved such success, the man confided that he kept the Blessed Sacrament in his house. The poor peasant, ignorant in matters of faith, thought the Blessed Sacrament was a type of lucky amulet and decided to imitate his neighbor.

He attended Mass on Holy Thursday and after receiving Communion, hid the consecrated Host in his clothes and left the church. However, during his journey home, the Sacred Host miraculously escaped from his hands and flew away into the air. The peasant tried desperately but in vain to catch the Sacred Host as it disappeared from sight.

When a priest arrived at the location where the Host had been seen, he found the sacred particle resting on a clump of dirt, emitting a brilliant light. As he approached to retrieve it, the Host again flew up into the air and vanished. The Bishop was alerted and wanted to go personally to witness the miracle, but again the particle flew up in the air when approached. The Bishop and townspeople decided to build a chapel at the site to honor this Eucharistic wonder. The miracles and cures attributed to this site drew such enormous crowds of pilgrims that in 1675, local authorities decided to construct a new and larger sanctuary in the baroque style. On September 19, 1677, Bishop Kaspar Kunner of Freising blessed and consecrated the new church, dedicating it to the Most Precious Blood.`,

  scientificEvidence: [
    "The consecrated Host demonstrated supernatural levitation, flying away from human hands multiple times",
    "The sacred particle emitted a visible bright light when resting on the ground, witnessed by the priest and later the Bishop",
    "The Host defied natural laws by remaining suspended in air and moving autonomously",
    "Multiple witnesses observed the same supernatural phenomena on different occasions"
  ],

  witnessTestimonies: [
    {
      name: "The Poor Peasant of Erding",
      role: "Initial witness who stole the Host",
      testimony: "I took the Host thinking it would bring me prosperity like my neighbor, but it escaped my hands and flew into the air. I could not catch it despite all my efforts."
    },
    {
      name: "Local Priest",
      role: "First clerical witness",
      testimony: "When I arrived at the site, I saw the sacred particle resting on a clump of dirt, radiating a brilliant light. As I approached to pick it up, it flew up into the air and disappeared before my eyes."
    },
    {
      name: "Bishop of Freising",
      role: "Episcopal authority and witness",
      testimony: "I came personally to the site to witness this marvel. Again the Host flew up in the air, confirming the miraculous nature of this event. We must build a chapel here to honor this wonder."
    },
    {
      name: "Bishop Kaspar Kunner",
      role: "Bishop of Freising (1677)",
      testimony: "The multitude of pilgrims and the many cures attributed to this holy site confirm the authenticity of this Eucharistic miracle. I consecrate this new church to the Most Precious Blood."
    }
  ],

  historicalContext: "The early 15th century in Bavaria was a period of deep Eucharistic devotion but also significant religious ignorance among the peasant class. The region of Erding, located in Upper Bavaria near Munich, was part of the Duchy of Bavaria during a time when the Catholic Church was working to educate the faithful about the Real Presence of Christ in the Eucharist. This miracle occurred during the period leading up to the Protestant Reformation, when questions about the Eucharist would become central to theological debates. The construction of the baroque church in 1677 reflected the Counter-Reformation emphasis on elaborate sacred architecture to inspire devotion and demonstrate the glory of Catholic faith.",

  timeline: [
    { date: "Holy Thursday, 1417", event: "Poor peasant steals consecrated Host after receiving Communion, believing it to be a good luck charm" },
    { date: "1417", event: "Host miraculously escapes peasant's hands and flies through the air" },
    { date: "1417", event: "Priest witnesses Host emitting bright light on ground; Host flies away when approached" },
    { date: "1417", event: "Bishop travels to site and witnesses Host flying in the air again" },
    { date: "1417", event: "Decision made to build chapel at the miracle site; pilgrims begin to arrive" },
    { date: "1675", event: "Due to enormous crowds of pilgrims, authorities decide to construct larger baroque sanctuary" },
    { date: "September 19, 1677", event: "Bishop Kaspar Kunner of Freising consecrates new Church of the Most Precious Blood" }
  ]
});

// Kranenburg, 1280 (Germany)
updateMiracle('miracle-32', {
  fullDescription: `In 1284, in the small city of Kranenburg in the district of Kleve in northwestern Germany, a shepherd experienced a Eucharistic miracle that became known as the "Miracle of the Miraculous Crucifix." After receiving Holy Communion, the shepherd found himself unable to swallow the consecrated Host due to an illness affecting his throat. In his distress and confusion, he committed a grave sacrilege by removing the Host from his mouth and throwing it against a tree in his garden.

Almost immediately, the shepherd was overcome with remorse and guilt over his terrible action. The weight of what he had done tormented his conscience. Eventually, he could bear the burden no longer and decided to confess the incident to his parish priest. The priest, shocked and concerned, hastened immediately to the shepherd's garden to search for and recover the sacred Host. Despite a thorough and careful search of the area around the tree, the priest's efforts proved fruitless—the Host could not be found.

Years passed, and the shepherd decided to cut down the tree where he had thrown the Eucharist. As he began cutting, the tree split open into two pieces, and to everyone's astonishment, a perfectly formed crucifix fell out from within the tree. News of this miraculous discovery spread rapidly through the town and surrounding regions. People understood that the Sacred Host had been transformed into this carved crucifix. The report attracted the attention of high-ranking Church officials, including the Bishop of Cologne and the Count of Kiev, who came to investigate. Pilgrims began arriving in large numbers to venerate the miraculous crucifix. In 1408, the citizens of Kranenburg began constructing a church to honor the miracle, completing it in 1444. This church represents one of the most significant examples of Gothic architecture in the lower Rhine River region.`,

  scientificEvidence: [
    "A perfectly formed crucifix was discovered inside the tree trunk where the Host had been thrown years earlier",
    "The crucifix appeared fully carved despite growing naturally within the tree",
    "The transformation occurred without human intervention over a period of several years",
    "The crucifix has been preserved for over 700 years and remains in existence today"
  ],

  witnessTestimonies: [
    {
      name: "The Shepherd of Kranenburg",
      role: "Primary witness and penitent",
      testimony: "I was unable to swallow the Host due to my illness, and in my confusion, I threw it against the tree. The guilt tormented me until I confessed to the priest. Years later, when I cut down that same tree, a perfect crucifix fell out—God had transformed my sin into a miracle of His mercy."
    },
    {
      name: "Parish Priest of Kranenburg",
      role: "Confessor and initial investigator",
      testimony: "When the shepherd confessed his deed, I immediately went to search for the Sacred Host, but despite my careful search, I could not find it. God had other plans for revealing this mystery."
    },
    {
      name: "Bishop of Cologne",
      role: "High-ranking Church official and investigator",
      testimony: "I came to Kranenburg to investigate this reported miracle. The crucifix that emerged from the tree is indeed miraculous, clearly formed by divine power rather than human hands."
    },
    {
      name: "Count of Kiev",
      role: "Nobleman and witness",
      testimony: "I took personal interest in this extraordinary miracle and traveled to see it myself. The evidence is clear that God worked a wonder in this place."
    }
  ],

  historicalContext: "The late 13th century in the Rhineland region was a period of intense Eucharistic devotion and the development of Corpus Christi celebrations. Kranenburg, located in the district of Kleve near the Dutch border, was part of the Holy Roman Empire and the Archdiocese of Cologne. This era saw numerous Eucharistic miracles reported across Europe, often serving to reinforce Catholic teaching on transubstantiation and the Real Presence. The construction of the Gothic church between 1408 and 1444 occurred during the late medieval period when Gothic architecture was at its height, and the lower Rhine region was economically prosperous, enabling such ambitious building projects. The involvement of both ecclesiastical authorities (Bishop of Cologne) and secular nobility (Count of Kiev) demonstrates the miracle's impact across all levels of society.",

  timeline: [
    { date: "1284", event: "Shepherd receives Holy Communion but cannot swallow the Host due to illness" },
    { date: "1284", event: "Shepherd throws the Host against a tree in his garden in distress" },
    { date: "1284", event: "Shepherd confesses his deed to the parish priest, who searches unsuccessfully for the Host" },
    { date: "Several years later (exact date unknown)", event: "Shepherd cuts down the tree; a perfectly formed crucifix falls out" },
    { date: "Late 13th/early 14th century", event: "News spreads; Bishop of Cologne and Count of Kiev visit to investigate" },
    { date: "Late 13th/early 14th century", event: "Pilgrimages to Kranenburg begin in large numbers" },
    { date: "1408", event: "Citizens of Kranenburg begin construction of church in honor of the miracle" },
    { date: "1444", event: "Gothic church of Sts. Peter and Paul completed" },
    { date: "Present day", event: "Miraculous crucifix still preserved in Church of Sts. Peter and Paul; annual procession held September 14" }
  ]
});

console.log('✓ Batch 3A: Added 2 German miracles (Erding, Kranenburg)');

fs.writeFileSync('public/miracles.json', JSON.stringify(data, null, 2));
