const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/miracles.json', 'utf8'));
function updateMiracle(id, updates) {
  const miracle = data.find(m => m.id === id);
  if (miracle) { Object.assign(miracle, updates); return true; }
  return false;
}

updateMiracle('miracle-68', {
  fullDescription: `On June 6, 1453 — the Feast of Corpus Christi — a group of French soldiers plundered the main church in Exilles, a small town in the Val di Susa near Turin. Among the sacred items they stole was a monstrance containing a consecrated Host. The soldiers loaded their spoils onto a mule and set out toward Turin to sell the booty. As the mule entered the crowded Via Carlo Alberto in the center of Turin, it suddenly stumbled and fell to the ground. The monstrance carrying the Blessed Sacrament was flung into the air.

To the astonishment of the growing crowd, the monstrance did not crash to the earth. Instead it rose upward, hovering ten to twelve feet above the street, luminous and suspended in the air as though held by invisible hands. The consecrated Host shone with a brilliance compared by eyewitnesses to a second sun, flooding the entire square with golden light. Word spread instantly through the city, and citizens poured into the street to witness the phenomenon.

Among the first to be notified was a canon named Don Bartholomew Coccolo, who ran at once to inform the Bishop of Turin, the Marquis Ludovico di Romagnano. The Bishop hurried to the piazza, prostrated himself in adoration on the cobblestones, and with the words of the disciples at Emmaus prayed aloud, "Stay with us, Lord." Rising, he lifted a chalice toward the hovering Host. The consecrated Host then slowly and gently descended through the air and came to rest within the chalice, as if placed there by unseen hands.

The miracle was immediately embraced by the city of Turin. An aedicule was erected on the exact spot, and within decades a church was raised in its place. Pope Pius IX later approved a proper Office and Mass commemorating the miracle for the Archdiocese of Turin, and in 1928 Pope Pius XI elevated the church to the dignity of a Minor Basilica — the Basilica of Corpus Domini — which stands today as a pilgrimage destination in Turin's historic center.`,
  scientificEvidence: [
    "The monstrance containing the consecrated Host was observed by multiple witnesses rising and remaining suspended ten to twelve feet above ground with no physical support",
    "The Host emitted an intense luminosity described consistently by eyewitnesses as comparable to a second sun illuminating the entire piazza",
    "The Host descended slowly and precisely into the chalice raised by the Bishop — controlled directional motion inexplicable by any natural cause",
    "The event was officially documented by ecclesiastical authorities immediately following the occurrence and recognized by subsequent papal acts including approval of a proper Mass by Pope Pius IX",
    "The Basilica of Corpus Domini was constructed on the precise site of the miracle, its foundation authenticated by centuries of continuous civic and ecclesiastical tradition"
  ],
  witnessTestimonies: [
    { name: "Don Bartholomew Coccolo", role: "Canon of Turin Cathedral", testimony: "Was among the first to witness the monstrance hovering in the air above the piazza; immediately ran to inform Bishop Ludovico di Romagnano of the phenomenon taking place in the street." },
    { name: "Bishop Ludovico di Romagnano", role: "Bishop of Turin", testimony: "Arrived at the square, prostrated himself before the floating Host, prayed the words of the disciples at Emmaus, then lifted a chalice into which the Host slowly and gently descended of its own accord." },
    { name: "Citizens of Turin", role: "Assembled crowd in Via Carlo Alberto", testimony: "Numerous residents witnessed the monstrance rise from the fallen mule and remain suspended in brilliant light above the street; their accounts formed the basis of the immediate ecclesiastical record." }
  ],
  historicalContext: "The miracle occurred during the ongoing conflict between the Duchy of Savoy and France in the mid-fifteenth century, a period in which military raids on churches and sacrilege against the Blessed Sacrament were distressingly common throughout northern Italy. Turin was a growing civic and religious center under Savoyard rule, and the miracle occurred on the very feast day instituted to honor Christ's Real Presence in the Eucharist — Corpus Christi — lending the event a profound theological significance that resonated throughout the region.",
  timeline: [
    { date: "June 6, 1453", event: "French soldiers plunder the church at Exilles in the Val di Susa and steal a monstrance containing a consecrated Host" },
    { date: "June 6, 1453", event: "The mule carrying the stolen sacred items falls in Via Carlo Alberto, Turin; the monstrance rises and hovers in the air emitting brilliant light" },
    { date: "June 6, 1453", event: "Bishop Ludovico di Romagnano arrives, prostrates himself, and the Host descends into his raised chalice" },
    { date: "1453 (shortly after)", event: "A commemorative aedicule is erected at the exact location of the miracle" },
    { date: "1521", event: "Archbishop Innocenzo Cybo commissions a permanent oratory on the site, designed by Matteo Sanmicheli" },
    { date: "1607", event: "Construction of the new Basilica of Corpus Domini begins, designed by Ascanio Vitozzi" },
    { date: "1928", event: "Pope Pius XI elevates the church to the dignity of a Minor Basilica" }
  ]
});

updateMiracle('miracle-69', {
  fullDescription: `On May 12, 1640, during the French siege of Turin led by Count d'Harcourt, a detachment of soldiers took possession of the strategically elevated Convent of Santa Maria al Monte on the hill known as Monte dei Cappuccini, overlooking the city. The French commander had ordered troops to occupy the height to control troop movements and direct artillery fire. The Capuchin friars who served the church were spared, but the soldiers committed terrible violence inside the building: many civilians who had sought shelter there were cut down in the church pews by bullets and sword thrusts.

Emboldened by the violence and contemptuous of the sacred, a French soldier — described in testimonies as a Huguenot heretic — climbed onto the altar and forced open the tabernacle door, intending to seize the silver ciborium containing several consecrated Hosts and carry it off as plunder. At the moment his hands seized the ciborium, a sudden burst of flame erupted from within, blazing directly toward him. The flames burned his uniform and his face. Screaming in terror, he threw himself to the floor and cried out for God's forgiveness, while the church filled with dense smoke.

The episode brought all desecration of the church to an immediate halt. The soldier survived but bore the burns as a lasting sign of what had occurred. The physical evidence of the forced entry is preserved to this day: the tabernacle door — adorned with agate and lapis lazuli — retains the scorched imprint of the soldier's hand where he gripped it. A manuscript of survivor testimony was preserved in the archive of the Savigliano Court Tribunal. The event has been venerated in Turin as a miraculous defense of the Blessed Sacrament.`,
  scientificEvidence: [
    "The tabernacle door at Santa Maria al Monte, adorned with agate and lapis lazuli, retains the visible scorched imprint of the soldier's hand to this day",
    "Eyewitness accounts of flame emerging from the ciborium causing burns to the soldier's face and uniform are preserved in manuscript form in the Savigliano Court Tribunal archive",
    "The church filled with dense smoke at the moment of the attempted desecration, corroborated by multiple survivor testimonies",
    "The physical damage to the tabernacle door is consistent with forced entry combined with intense localized heat rather than general fire damage to the surrounding structure"
  ],
  witnessTestimonies: [
    { name: "Unnamed Huguenot soldier", role: "French soldier attempting desecration", testimony: "Forced open the tabernacle and seized the ciborium; flames erupted burning his face and uniform; he fell to the floor screaming and begged God's forgiveness." },
    { name: "Capuchin Friars of Monte dei Cappuccini", role: "Religious community on site", testimony: "Survived the military occupation; witnessed the soldier's attack on the tabernacle and the subsequent miraculous fire; their accounts were formally recorded in tribunal documents." },
    { name: "Civilian survivors", role: "Refugees sheltering in the church", testimony: "Present in the church during the French occupation; provided depositions preserved in the archive of the Savigliano Court Tribunal attesting to the burst of flame and the sudden cessation of further sacrilege." }
  ],
  historicalContext: "The year 1640 saw northern Italy engulfed in the wider conflicts of the Franco-Spanish War (1635–59), with Piedmont and the Duchy of Savoy repeatedly contested by French and Spanish forces. Count d'Harcourt's siege of Turin was part of France's effort to dominate the Savoy corridor. Monte dei Cappuccini, rising sharply above the Po River opposite the city, was a natural military vantage point whose Capuchin church made it simultaneously a sacred and strategic site. Religious desecration by soldiers — particularly those of Protestant or Huguenot confession — was a recurring feature of the wars of religion that devastated European churches throughout the sixteenth and seventeenth centuries.",
  timeline: [
    { date: "May 12, 1640", event: "French forces under Count d'Harcourt occupy the Convent of Santa Maria al Monte on Monte dei Cappuccini during the siege of Turin" },
    { date: "May 12, 1640", event: "Soldiers kill civilians sheltering in the church; Capuchin friars are spared" },
    { date: "May 12, 1640", event: "A Huguenot soldier forces open the tabernacle; flames erupt from the ciborium, burning the soldier and filling the church with smoke" },
    { date: "May 12, 1640", event: "Terrified soldier falls to the ground and cries for God's forgiveness; all desecration ceases" },
    { date: "1640 (subsequent months)", event: "Survivor depositions recorded and preserved in the Savigliano Court Tribunal archive" },
    { date: "Present day", event: "Scorched handprint of the soldier remains visible on the tabernacle door, preserved in the church" }
  ]
});

updateMiracle('miracle-70', {
  fullDescription: `During the Easter season of 1570, the Church of St. Erasmus in Veroli, in the Ciociaria region southeast of Rome, was hosting the traditional Forty Hours Devotion — a continuous period of public adoration before the exposed Blessed Sacrament. For this exposition the consecrated Host had been placed in a small round silver pyx with a hinged lid, which was then set inside a larger ceremonial silver chalice; the chalice was covered with its paten and the entire arrangement was wrapped in an elegant silk cloth and placed on the altar for veneration.

It was the custom of Veroli's civil and religious confraternities to take turns in hour-long watches of adoration. When the members of the Confraternity of Mercy arrived — dressed in their distinctive black robes and kneeling in silent prayer — an extraordinary vision appeared before them. A witness named Giacomo Meloni, who was among the first to see it, later gave a formal deposition: "Raising my eyes towards the chalice, I saw a most brilliant star at the base of the chalice's cup, and above the star, the Blessed Sacrament in the size of the Host used by the priest at Mass. The star was attached to the Blessed Sacrament." The vision continued as small angelic figures resembling children appeared in adoration around the Sacred Host, surrounding it with a scene of celestial reverence.

The vision was witnessed by multiple members of the confraternity and was reported immediately to the diocesan chancery, which opened a formal record. The most authentic document describing the miracle was secured by the chancery and deposited in the archives of the Church of St. Erasmus. Remarkably, the consecrated Host itself was not consumed for 112 years following the miracle, being preserved and venerated as a relic until it was finally consumed. The miracle is commemorated annually in Veroli on the Tuesday within the Octave of Easter with a solemn ceremony presided over by the Bishop.`,
  scientificEvidence: [
    "The original notarized deposition of Giacomo Meloni describing the vision was taken immediately by the diocesan chancery and preserved in the archives of the Church of St. Erasmus in Veroli",
    "Multiple members of the Confraternity of Mercy present during the Forty Hours adoration independently witnessed and attested to the luminous apparition above the chalice",
    "The consecrated Host (Sacred Species) was preserved incorrupt and venerated as a relic for 112 years following the miracle — an anomalous longevity for a consecrated Host",
    "The original silver chalice, paten, and pyx in which the Blessed Sacrament was exposed at the time of the miracle are preserved among the reliquaries of the Church of St. Erasmus",
    "The annual solemn episcopal commemoration represents continuous institutional recognition of the event spanning over four centuries"
  ],
  witnessTestimonies: [
    { name: "Giacomo Meloni", role: "Member of the Confraternity of Mercy, primary witness", testimony: "\"Raising my eyes towards the chalice, I saw a most brilliant star at the base of the chalice's cup, and above the star, the Blessed Sacrament in the size of the Host used by the priest at Mass. The star was attached to the Blessed Sacrament. The vision ended when small children in adoration, similar to small angels, were seen around the Sacred Host.\"" },
    { name: "Members of the Confraternity of Mercy", role: "Brothers on adoration watch", testimony: "Multiple brothers kneeling in black robes before the exposed Blessed Sacrament witnessed the luminous star and angelic figures; their collective testimony was recorded by the chancery alongside Meloni's deposition." }
  ],
  historicalContext: "The sixteenth century was a period of intense Eucharistic controversy in Europe, as Protestant reformers denied the Real Presence of Christ in the Eucharist. The Council of Trent (1545–1563) had recently reaffirmed and clarified the Catholic doctrine of the Real Presence and transubstantiation. Within this climate, Eucharistic devotions such as the Forty Hours were spreading throughout Italy as a form of reparation and renewed Eucharistic faith. The vision at Veroli in 1570 came just seven years after the close of Trent and was received as a divine confirmation of the Church's teaching.",
  timeline: [
    { date: "Easter season, 1570", event: "Forty Hours Devotion begins at the Church of St. Erasmus in Veroli; the consecrated Host is exposed in the silver pyx within a large ceremonial chalice" },
    { date: "Easter season, 1570", event: "Members of the Confraternity of Mercy witness a brilliant star and the Host appearing above the chalice surrounded by angelic figures" },
    { date: "Easter season, 1570", event: "The vision is reported to the diocesan chancery; Giacomo Meloni provides a formal notarized deposition" },
    { date: "c. 1682", event: "The consecrated Host is finally consumed after 112 years of preservation as a relic" },
    { date: "Annual (present)", event: "Solemn commemoration of the miracle held in Veroli on the Tuesday within the Octave of Easter, presided over by the Bishop" }
  ]
});

updateMiracle('miracle-71', {
  fullDescription: `In 1472, the city of Volterra in Tuscany became the scene of both military catastrophe and Eucharistic miracle. Volterra had attempted to assert its independence from Florence, but the rebellion was crushed by Florentine forces commanded by Federico da Montefeltro. The city was sacked following its fall, and Florentine soldiers dispersed through Volterra's streets and churches in search of valuables.

A soldier entered the Cathedral of Volterra — or, in some accounts, the Church of St. Francis within the city — and discovered the precious ivory ciborium on the altar. The ciborium contained a number of consecrated Hosts. The soldier took possession of it. Priests present in the church, terrified by the armed man, did not intervene. As the soldier left the church carrying the sacred vessel, fury overtook him and he hurled the ivory ciborium violently against the stone wall of the church.

The ciborium shattered, and all the consecrated Hosts tumbled out. But rather than scattering to the ground, the Hosts were suddenly enveloped in a mysterious light and rose upward from where they had fallen. Illuminated brilliantly, they remained suspended in the air for a sustained period, visible to the soldier and to numerous witnesses gathered in and around the church. The soldier, struck with terror and overcome with remorse, fell to the ground weeping. He repented aloud. The physical evidence of the miracle — the ivory ciborium and the records of the event — was preserved in the archives of the Church of St. Francis. The miracle became part of Volterra's permanent civic and religious memory.`,
  scientificEvidence: [
    "Multiple eyewitnesses present attested to the consecrated Hosts rising from the floor and remaining suspended in the air after the ciborium was thrown against the wall",
    "The Hosts were observed emitting a mysterious light while suspended — a luminous phenomenon with no natural explanation given the circumstances",
    "The documents describing the miracle are preserved in the archives of the Church of St. Francis in Volterra, providing primary source attestation from near the time of the event",
    "The ivory ciborium involved in the miracle was preserved as a relic in the church as tangible evidence",
    "The soldier's immediate prostration and public repentance was itself witnessed and recorded as a response to the inexplicable phenomenon"
  ],
  witnessTestimonies: [
    { name: "Unnamed Florentine soldier", role: "Perpetrator of the sacrilege", testimony: "Having seized the ivory ciborium and thrown it against the church wall in fury, he witnessed the Hosts rise and hover in luminous suspension; fell to the ground in terror and wept, openly repenting his action." },
    { name: "Priests of the church", role: "Clergy present in the church", testimony: "Were present but initially too afraid of the armed soldier to intervene; witnessed the ciborium being thrown and the subsequent miraculous elevation and illumination of the Hosts; their accounts formed the basis of the documentary record." },
    { name: "Citizens of Volterra present at the scene", role: "Eyewitnesses", testimony: "Multiple witnesses gathered in and around the church observed the Hosts hovering suspended in light; their collective testimony is referenced in the historical documentation of the miracle." }
  ],
  historicalContext: "The sack of Volterra in 1472 was one of the most notorious military events in fifteenth-century Tuscany. The city had risen against Florentine rule following a dispute over alum mines, and Lorenzo de' Medici hired Federico da Montefeltro with a large mercenary force to suppress the revolt. Despite negotiated terms of surrender, the city was plundered for a day, an event that shocked contemporary observers and tarnished even Lorenzo's reputation. The pillaging of churches was a common feature of such sacks, and the desecration of the Eucharist occurred in this context of widespread sacrilegious violence.",
  timeline: [
    { date: "1472", event: "Volterra rebels against Florentine rule; Federico da Montefeltro leads forces to besiege the city" },
    { date: "1472 (following the city's fall)", event: "Volterra is sacked; Florentine soldiers enter churches in search of valuables" },
    { date: "1472", event: "A soldier seizes the ivory ciborium containing consecrated Hosts and throws it against the church wall in fury" },
    { date: "1472", event: "The Hosts rise from the ground and remain suspended in mysterious light; the soldier falls weeping and repents" },
    { date: "1472 (shortly after)", event: "The miracle is documented; records placed in the archives of the Church of St. Francis in Volterra" },
    { date: "Present day", event: "The ivory ciborium is preserved, and the miracle is commemorated as part of Volterra's religious history" }
  ]
});

updateMiracle('miracle-73', {
  fullDescription: `In 1429, in the Laurenskerk (the Cathedral of Saint Lawrence) in Alkmaar, in the County of Holland, a young priest named Folkert was celebrating one of his first Masses. Following the consecration, he accidentally knocked over the chalice containing the consecrated wine, spilling it across the altar and onto his chasuble. Horrified, Folkert and the other priests assisting at the Mass immediately attempted to clean the stains. No matter what was done, the wine could not be removed from the chasuble — it had transformed in appearance into blood, and it clung to the fabric with an inexplicable permanence.

The priests resolved to cut away the stained section of the chasuble and burn it. After burning the spotted cloth and repairing the vestment, however, the bloodstains reappeared on the chasuble in the same place. Every attempt to remove or destroy the evidence of the miracle was frustrated. The section of the chasuble soaked with the miraculous blood was eventually preserved as a sacred relic, placed in an altar of the Laurenskerk for veneration.

The miracle came to wider attention in the winter of 1430 through a remarkable secondary event. A ship from Alkmaar was caught in a violent storm at sea and faced disaster. An angel appeared to the sailors carrying a cloth marked with three drops of blood and told them that the ship would not perish if they made pilgrimage to honor the miracle at Alkmaar. The sailors arrived safely in port and sought out the relic, whereupon they immediately recognized it as the cloth shown to them at sea. Bishop Zweder van Kuilenburg issued orders for the relic to be formally venerated. An annual procession was established within the Laurenskerk on May 1st, and in 1501 the city magistrates granted permission for the procession to move publicly through the streets of Alkmaar. The precious relic is preserved to this day in the Cathedral of Saint Lawrence.`,
  scientificEvidence: [
    "The consecrated wine spilled on the chasuble resisted all attempts at removal and presented the visible characteristics of blood rather than wine",
    "After the stained section was cut away and burned, the bloodstains reappeared on the repaired chasuble in the same location — a phenomenon of recurrence with no natural explanation",
    "The relic of the blood-soaked chasuble was examined and formally authenticated by Bishop Zweder van Kuilenburg, who ordered its public veneration",
    "The relic has been preserved continuously in the Cathedral of Saint Lawrence in Alkmaar for nearly six centuries, with unbroken institutional custody",
    "A secondary miraculous attestation — the sailors' vision at sea — was investigated and corroborated by church authorities in 1430, further establishing the credibility of the original event"
  ],
  witnessTestimonies: [
    { name: "Folkert", role: "Priest celebrating Mass (primary witness)", testimony: "Accidentally spilled the consecrated chalice during one of his early Masses; witnessed the stain refuse all attempts at removal; after the section was burned and the vestment repaired, saw the bloodstains reappear in the identical location." },
    { name: "Assisting priests", role: "Clergy present at the Mass", testimony: "Attempted alongside Folkert to remove the stain using normal means; witnessed the failure of all cleaning efforts and later the reappearance of stains after burning; their testimony was reported to diocesan authorities." },
    { name: "Sailors from the storm at sea", role: "Secondary witnesses and pilgrims", testimony: "After surviving a violent storm following an apparition directing them to Alkmaar, arrived at the Laurenskerk in 1430. Upon seeing the relic of the bloodstained chasuble, identified it as the cloth shown to them at sea; their account was formally received by church authorities." },
    { name: "Bishop Zweder van Kuilenburg", role: "Bishop of Utrecht (ecclesiastical authority)", testimony: "Received the testimony of the miracle and ordered that the blood-stained relic be formally venerated; his episcopal decree provided official church recognition of the event." }
  ],
  historicalContext: "The early fifteenth century in the Netherlands was a time of deep popular Eucharistic devotion, expressed through the proliferation of Corpus Christi processions, Eucharistic confraternities, and the Devotio Moderna movement. The County of Holland was part of the Burgundian Netherlands, a prosperous region of intense civic and religious life. Eucharistic miracles in this period — such as the earlier Amsterdam miracle of 1345 — drew enormous pilgrim traffic and civic pride. The miracle at Alkmaar rapidly became a focus of local and regional pilgrimage. The chasuble relic survived the Reformation and subsequent centuries of upheaval by being carefully protected by the local Catholic community.",
  timeline: [
    { date: "1429", event: "Priest Folkert spills the consecrated chalice during Mass at the Laurenskerk in Alkmaar; the stain resists removal and appears as blood" },
    { date: "1429", event: "The stained section of the chasuble is cut away and burned; bloodstains reappear on the repaired vestment in the same place" },
    { date: "1429", event: "The miraculous relic is placed in an altar of the Laurenskerk for veneration" },
    { date: "Winter 1430", event: "Sailors imperiled in a storm receive an apparition directing them to Alkmaar; they survive and make pilgrimage to venerate the relic" },
    { date: "1430", event: "Bishop Zweder van Kuilenburg issues orders for formal veneration of the blood-stained relic" },
    { date: "1501", event: "City magistrates of Alkmaar grant permission for an annual public procession through the streets in honor of the miracle" },
    { date: "Present day", event: "The chasuble relic is preserved in the Cathedral of Saint Lawrence (Grote Kerk) in Alkmaar" }
  ]
});

console.log('✓ Batch 4D: Added 5 miracles (Turin 1453, Turin 1640, Veroli, Volterra, Alkmaar)');
fs.writeFileSync('public/miracles.json', JSON.stringify(data, null, 2));
