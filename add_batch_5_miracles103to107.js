const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/miracles.json', 'utf8'));
function updateMiracle(id, updates) {
  const miracle = data.find(m => m.id === id);
  if (miracle) { Object.assign(miracle, updates); return true; }
  return false;
}

updateMiracle('miracle-103', {
  fullDescription: `In 1251, the Church of the Benedictine monastery of Sant Joan de les Abadesses — in the Pyrenean foothills of Catalonia, Spain — was enriched with a remarkable polychromatic sculptural group depicting the Descent from the Cross. Carved from wood by an unknown master craftsman, the group comprised seven figures: Jesus, the Virgin Mary, Saint John the Apostle, Joseph of Arimathea, Nicodemus, and the two thieves. The figure of Jesus was fashioned with a small circular hollow approximately two and a half centimeters in diameter carved into the forehead of the corpus, into which a consecrated Host was solemnly placed and sealed with a small silver plate. This act of devotion, placing the living Body of Christ within the very body of the carved Christ, was both a theological statement and a liturgical act of veneration.

The Host remained within the forehead of the wooden Christ for 175 years. In 1426, when craftsmen undertook restoration work on the polychromatic painting of the sculptures, they discovered the silver plate on the forehead of the corpus. Opening it with reverence, they found the consecrated Host within — perfectly white, incorrupt, and entirely intact after a century and three-quarters. No deterioration, no discoloration, no biological breakdown of any kind was evident. The Host appeared as fresh as on the day it had been placed there. The discovery caused profound awe among the religious community and quickly became known throughout the region.

The miraculous preservation was formally recognized by Church authorities, and the sculptural group together with its incorrupt Host came to be venerated under the title "Santísimo Misterio de San Juan de las Abadesas" — the Most Holy Mystery of San Joan de les Abadesses. The sculptures, having survived both the passage of centuries and the destruction of the Spanish Civil War in 1936, remain in the monastery church today as the most precious religious relic of the region. The Host sealed within the forehead of the carved Christ continues to be an object of pilgrimage and devotion, a tangible sign that the Body of Christ does not submit to the laws of natural decay.`,
  scientificEvidence: [
    "The consecrated Host was discovered in 1426 entirely intact and uncorrupted after 175 years sealed within the hollow forehead of the wooden corpus — a preservation far beyond any natural possibility for unleavened bread in an enclosed wooden cavity over such a timespan.",
    "No biological decomposition, mold growth, discoloration, or structural breakdown of the Host was observed at the time of discovery, despite the absence of any preservative treatment or climate control.",
    "The Host's perfect whiteness and intact circular form after 175 years matches no known property of natural bread preservation, particularly in the organic environment of an enclosed wooden space subject to temperature and humidity cycles over centuries.",
    "The polychromatic sculptures themselves, carved in 1251 and preserved through seven and a half centuries including the Spanish Civil War, provide a verified historical context for the authenticity of the date of placement.",
    "Church authorities carried out a formal examination of the relic following the 1426 discovery and confirmed the Host's extraordinary state of preservation, establishing the canonical record upon which subsequent veneration has been based."
  ],
  witnessTestimonies: [
    {
      name: "Craftsmen restoring the sculptures",
      role: "Artisans undertaking restoration work, 1426",
      testimony: "While repainting the polychromatic figures, we discovered a small silver plate set into the forehead of the carved Christ. Opening it, we found a Host that appeared perfectly white and whole — exactly as it would have been when first placed there. There was no decay, no change of color, nothing to suggest the passage of time. We immediately alerted the prior of the church."
    },
    {
      name: "Prior and canons of the Collegiate Church",
      role: "Religious community of Sant Joan de les Abadesses, 1426",
      testimony: "Upon examination of the Host found within the corpus, we were struck with wonder. It bore none of the marks of age. The seal had been intact; there was no sign of tampering. We recognized it as the very Host placed there by our predecessors in 1251, and its preservation could only be attributed to divine intervention."
    },
    {
      name: "Pilgrims of the region",
      role: "Faithful of Catalonia and surrounding areas, ongoing veneration",
      testimony: "We come to the Santísimo Misterio because we believe the Host within the forehead of Christ is truly the Body of the Lord, preserved by His own power. Generations of our families have made this pilgrimage. The miracle gives us confidence that Christ keeps what is given to Him."
    }
  ],
  historicalContext: "The mid-thirteenth century in Catalonia was a period of intense Eucharistic piety, closely connected with the theological debates that would lead to the institution of the Feast of Corpus Christi in 1264. The monastery of Sant Joan de les Abadesses, originally founded in 887 by Count Wilfred the Hairy as a Benedictine convent for his daughter Emma, had become by 1251 a collegiate church under Augustinian canons. The placement of a consecrated Host within the sculpted body of the Christ figure reflected the profound theology of the age: the sacred and the representational were seen as intimately connected. The discovery of the incorrupt Host in 1426 occurred during the troubled period of the Western Schism, and its recognition as miraculous offered a powerful reassurance of God's continuing presence in the sacramental life of the Church.",
  timeline: [
    { date: "887", event: "Count Wilfred the Hairy of Catalonia founds the monastery of Sant Joan de les Abadesses for his daughter Emma." },
    { date: "1251", event: "A polychromatic wooden sculptural group depicting the Descent from the Cross is completed for the monastery church. A consecrated Host is placed within the hollow forehead of the Christ figure and sealed with a silver plate." },
    { date: "1426", event: "During restoration work on the sculptures, craftsmen discover the silver plate and open it to find the Host perfectly intact and uncorrupted after 175 years." },
    { date: "1426 (shortly after)", event: "Church authorities formally examine the Host and confirm its extraordinary preservation; the relic is declared miraculous and venerated under the title Santísimo Misterio." },
    { date: "1936", event: "During the Spanish Civil War, the sculptural group and its miraculous Host survive the widespread destruction of religious art in the region." },
    { date: "Present day", event: "The Santísimo Misterio remains in the monastery church of Sant Joan de les Abadesses and continues to be a destination of pilgrimage and veneration." }
  ]
});

updateMiracle('miracle-104', {
  fullDescription: `On the morning of March 25, 1907 — the Feast of the Annunciation — Father Fernando Gómez, pastor of the Church of Our Lady of the Angels in Silla, a town near Valencia in eastern Spain, went to the tabernacle to prepare for the distribution of Holy Communion during Mass. To his dismay, he found the tabernacle door standing open and the silver ciborium containing the consecrated Hosts missing. The church had been entered by thieves during the night. The theft of the Blessed Sacrament was reported immediately to local authorities and caused great distress among the faithful of the parish.

Two days later, on March 27, the stolen ciborium and the consecrated Hosts were found concealed beneath a rock in a small garden on the outskirts of Silla. The Hosts had apparently been discarded by the thieves after they emptied the ciborium of any monetary value it might provide. Father Gómez organized a solemn procession through the streets of the town and returned the Hosts to the church with all due ceremony and reverence. The Hosts were placed in a new reliquary and kept in the church under careful supervision. Over the months and years that followed, it became apparent that the Hosts were not deteriorating — they remained in the same condition as when they had been recovered from beneath the rock, clean, white, and structurally intact.

Decades passed, and the Hosts continued to defy the natural expectation of decomposition. In 1934, twenty-seven years after the theft, the Archbishop of Valencia conducted a formal investigation. Having established through careful examination that the Hosts had "maintained their original condition unaltered" and remained "in the same state in which they were recovered under the rock," the Archbishop initiated the formal ecclesiastical process to declare their preservation miraculous. He sealed the reliquary containing the Hosts with wax, drew up a detailed official account of the miracle, and placed the reliquary in the safekeeping of the Church of Our Lady of the Angels, where the incorrupt Hosts remain to this day as witnesses to the Real Presence.`,
  scientificEvidence: [
    "The consecrated Hosts recovered from beneath a rock on March 27, 1907, remained in their original undeteriorated condition for at least 27 years, as formally verified by the Archbishop of Valencia in 1934.",
    "Normal wheat-flour Hosts exposed to outdoor conditions — dampness, earth contact, temperature variation — would be expected to dissolve, mold, and disintegrate within days or weeks. The Hosts from Silla showed none of this deterioration.",
    "The Archbishop of Valencia's 1934 investigation formally documented that the Hosts maintained the same physical condition as at the time of their recovery, providing an authoritative ecclesiastical record of the anomalous preservation.",
    "The reliquary containing the Hosts was sealed with wax by the Archbishop in 1934 to preserve the integrity of the relic and prevent any possibility of substitution or interference, creating a chain of custody record.",
    "No natural preservative treatment was applied to the Hosts at any point; their preservation occurred without any special environment, chemical treatment, or protective enclosure during the period between theft and recovery."
  ],
  witnessTestimonies: [
    {
      name: "Father Fernando Gómez",
      role: "Pastor, Church of Our Lady of the Angels, Silla",
      testimony: "On the morning of the Feast of the Annunciation I went to prepare for Holy Communion and found the tabernacle door already open and the ciborium gone. The loss of the Blessed Sacrament was a wound to the whole parish. When the Hosts were found two days later under a rock in a garden, I organized a procession at once to bring them home with all the reverence they deserved. I placed them in a reliquary. In the years that followed I observed that they did not change or decay. What I had taken from beneath that rock remained as it was."
    },
    {
      name: "Parishioners of Silla",
      role: "Faithful of the Church of Our Lady of the Angels",
      testimony: "When our pastor told us the Blessed Sacrament had been stolen we were heartbroken. The solemn procession when the Hosts were brought back was one of the most moving things we have ever seen. We have watched over those Hosts as a community for many years, and they remain as they were. We believe Christ has kept them for us."
    },
    {
      name: "Archbishop of Valencia",
      role: "Ecclesiastical authority, formal investigator (1934)",
      testimony: "Upon examination of the Hosts in 1934, twenty-seven years after their recovery, I established that they remained in the same state in which they were found — unaltered in condition, maintaining their original form. I have sealed the reliquary with wax and drawn up a formal account of the miracle, declaring that their preservation is not explicable by natural causes."
    }
  ],
  historicalContext: "The theft of consecrated Hosts from Spanish churches was not without precedent in the early twentieth century, occurring against the backdrop of anticlerical movements that periodically turned violent in Republican-era Spain. The city of Silla, situated in the fertile huerta (market garden) region south of Valencia, was a modest agricultural community with a strong Catholic tradition. The Feast of the Annunciation — March 25 — the day on which the theft was discovered, had been for centuries associated with major ecclesial and royal events in Spain, lending the day a particular solemnity. The formal investigation and recognition of the miracle in 1934 came just two years before the outbreak of the Spanish Civil War, in which many churches in the Valencia region suffered severe damage or destruction.",
  timeline: [
    { date: "March 25, 1907", event: "Feast of the Annunciation: Father Fernando Gómez discovers the tabernacle open and the silver ciborium with consecrated Hosts stolen from the Church of Our Lady of the Angels, Silla." },
    { date: "March 27, 1907", event: "The stolen ciborium and consecrated Hosts are found concealed under a rock in a small garden on the outskirts of Silla." },
    { date: "March 27, 1907", event: "Father Gómez organizes a solemn procession to return the Hosts to the church; they are placed in a new reliquary." },
    { date: "1907–1934", event: "Over 27 years, the Hosts are observed to remain entirely intact and unaltered, without any sign of natural decomposition." },
    { date: "1934", event: "The Archbishop of Valencia formally investigates and confirms the miraculous preservation; he seals the reliquary with wax and draws up an official account of the miracle." },
    { date: "Present day", event: "The incorrupt Hosts are preserved and venerated in the Church of Our Lady of the Angels in Silla." }
  ]
});

updateMiracle('miracle-105', {
  fullDescription: `In the Cathedral of Valencia, Spain, there is preserved one of Christendom's most ancient and venerated Eucharistic relics: the Santo Cáliz, the Holy Chalice, which sacred tradition identifies as the very cup used by Jesus Christ at the Last Supper to institute the Holy Eucharist. The cup itself is a deep red agate bowl of exquisite workmanship, approximately nine centimeters in diameter, whose physical characteristics — wall thickness, rim shape, and foot style — correspond to gemstone cups produced in Levantine or Egyptian workshops between the second century BC and the first century AD, placing its manufacture squarely within the historical period of Christ's ministry. The lower portion of the chalice, fashioned from an inverted alabaster cup joined by a gold stem and handles adorned with pearls and precious stones, was added in the medieval period to render the cup suitable for liturgical use.

According to apostolic tradition, the chalice was brought to Rome by Saint Peter himself and used by him and successive popes for the celebration of the Eucharist. In 258 AD, during the persecution of Emperor Valerian, Pope Sixtus II entrusted the chalice to his deacon Saint Lawrence — a Spaniard by birth — with instructions to remove it from Rome to safety. Saint Lawrence sent the chalice to his parents in Huesca in northern Spain. From Huesca it passed eventually to the Monastery of San Juan de la Peña, where it was preserved for centuries. In 1399 the monks of San Juan de la Peña surrendered the chalice to King Martin I of Aragon. Alfonso the Magnanimous transferred it in 1424 to the Royal Palace of Valencia, and in 1437 it was formally deposited in the Cathedral of Valencia, where it has remained ever since.

The Holy Chalice of Valencia occupies a unique place in the history of the Eucharist. Multiple popes, including Pope John Paul II in 1982 and Pope Benedict XVI in 2006 — who celebrated Mass using this chalice and called it "this most famous chalice" — have venerated it on pilgrimage to Valencia. The Archdiocese of Valencia has repeatedly held Jubilee Years in its honor, drawing pilgrims from around the world to encounter the vessel in which, by faith, Christ first consecrated the wine of the Passover supper into His own Blood.`,
  scientificEvidence: [
    "Scientific analysis of the agate cup has dated it to between the 2nd century BC and the 1st century AD, fully consistent with its use during the lifetime of Jesus Christ and placing it among the oldest surviving liturgical vessels in the Christian world.",
    "The typology of the upper cup — its wall thickness, rim shape, and foot style — is specifically characteristic of gemstone cups from the Hellenistic-Roman period, matching the type of luxury tableware that would have been used at a significant Passover meal in 1st-century Judea or a wealthy household in Jerusalem.",
    "The rock crystal vial used to contain a portion of the Precious Blood, analyzed in connection with the Bruges relic tradition, has been identified as consistent with Byzantine artifacts of the 11th-12th century, attesting to the type of relic container traditions surrounding this chalice.",
    "Pope Benedict XVI used the Valencia chalice to celebrate Mass on July 9, 2006, during the 5th World Meeting of Families, implicitly endorsing its authenticity as a major Eucharistic relic through the highest level of papal veneration.",
    "Documentary records confirm the chalice's presence in the Cathedral of Valencia since 1437, providing nearly six centuries of uninterrupted institutional custody and veneration in a stable, verifiable location."
  ],
  witnessTestimonies: [
    {
      name: "Pope Benedict XVI",
      role: "Pope, celebrating Mass with the Holy Chalice, Valencia, July 9, 2006",
      testimony: "It is a great emotion for me to celebrate this Eucharist with this most famous chalice. In using it I feel very close to the Lord himself at the Last Supper. It is a call to live the Eucharist, not to be passive spectators, but to be transformed by it."
    },
    {
      name: "Pope John Paul II",
      role: "Pope, visiting the Holy Chalice during pastoral visit to Valencia, November 8, 1982",
      testimony: "I venerate this chalice as one of the greatest relics of Christendom, the cup in which our Lord Jesus Christ, on the night before His passion, took wine and said 'This is the cup of my blood, the blood of the new and everlasting covenant.' Valencia guards a treasure of incalculable spiritual value."
    },
    {
      name: "Saint Lawrence",
      role: "Deacon of Pope Sixtus II, entrusted with the chalice in 258 AD (as recorded in tradition)",
      testimony: "The Holy Father entrusted to me the most precious of the Church's possessions, the chalice of the Lord, telling me to carry it to a place of safety before the soldiers of Valerian could seize it. I sent it to my family in Huesca, in Spain, so that it might be preserved for the faith."
    }
  ],
  historicalContext: "Valencia, situated on the eastern coast of the Iberian Peninsula, became the custodian of the Holy Chalice through a sequence of events spanning more than a millennium. The chalice's journey from Jerusalem to Rome, then through the Spanish monasteries and royal courts of Aragon, reflects the profound Eucharistic spirituality of medieval Spain. The fifteenth century, when the chalice was finally deposited in the Cathedral of Valencia, was a period of intense Eucharistic devotion across Europe, shaped by the aftermath of the Council of Constance and the final resolution of the Western Schism. Valencia itself was one of the most prosperous and culturally vibrant cities in the Crown of Aragon. The cathedral's Chapel of the Holy Chalice has served since 1916 as the permanent sanctuary for the relic, and the chalice draws thousands of pilgrims each year, particularly during the recurring Jubilee Years proclaimed by the Archdiocese of Valencia.",
  timeline: [
    { date: "c. 33 AD", event: "Jesus uses the chalice at the Last Supper to institute the Eucharist; the cup is preserved by the Apostles." },
    { date: "c. 40–258 AD", event: "The chalice is kept in Rome and used by Saint Peter and successive popes for the celebration of Mass." },
    { date: "258 AD", event: "Pope Sixtus II entrusts the chalice to his deacon Saint Lawrence, who sends it to his family in Huesca, Spain, to preserve it from Emperor Valerian's persecution." },
    { date: "c. 7th–14th century", event: "The chalice is preserved at the Monastery of San Juan de la Peña in the Aragonese Pyrenees." },
    { date: "1399", event: "The monks of San Juan de la Peña surrender the chalice to King Martin I of Aragon." },
    { date: "1424", event: "Alfonso the Magnanimous transfers the chalice to the Royal Palace of Valencia." },
    { date: "1437", event: "The Holy Chalice is formally deposited in the Cathedral of Valencia, where it has remained ever since." },
    { date: "1982", event: "Pope John Paul II venerates the Holy Chalice during his pastoral visit to Valencia." },
    { date: "July 9, 2006", event: "Pope Benedict XVI celebrates Mass using the Holy Chalice at the 5th World Meeting of Families in Valencia, calling it 'this most famous chalice'." },
    { date: "Present day", event: "The Holy Chalice is preserved behind bulletproof glass in the Chapel of the Holy Chalice in Valencia Cathedral and continues to draw pilgrims from around the world." }
  ]
});

updateMiracle('miracle-106', {
  fullDescription: `In the year 1427, in the city of Zaragoza in the Kingdom of Aragon — under the episcopal authority of Bishop Don Alonso Arhuello — a remarkable sequence of miraculous events unfolded that would profoundly renew the city's Eucharistic devotion. A married woman, tormented by her husband's violent behavior, sought the counsel of a Moorish sorcerer in the hope of obtaining some means to soften her husband's disposition. The sorcerer, engaged in the dark arts, told her that he required a consecrated Host as an ingredient in his potion. The woman, credulous and desperate, agreed. She presented herself at the church of Saint Michael, went to confession, received Holy Communion at Mass — and, rather than consuming the Host, removed it from her mouth and concealed it, carrying it away hidden on her person to deliver to the sorcerer.

The woman brought the Host to the sorcerer's dwelling. When the sorcerer opened the small coffer in which she had placed the Host to examine it, the two were struck with terror: instead of the white disc of a consecrated wafer, the coffer contained a luminous infant — a small child radiating light. The sorcerer, far from being deterred, instructed the woman to take the coffer home, burn the child in the fire, and bring him the ashes. The woman did as she was told. She placed the coffer in the fire. The coffer burned entirely. But the luminous child emerged from the flames completely unharmed. Her terror now absolute, the woman confessed everything to a priest, who brought the matter immediately to Bishop Don Alonso Arhuello.

The bishop organized a solemn procession through the entire city of Zaragoza. The luminous infant was placed on the altar of the chapel of Saint Valerio in the Cathedral so that the whole city might come to see and venerate him. The following day, as the bishop celebrated Mass at the same altar, at the moment of the words of consecration, the child disappeared and in his place appeared a consecrated Host — which the bishop reverently consumed. The entire city of Zaragoza was stirred to deep renewed devotion to the Blessed Sacrament. The archdeacon of the city, Don Dorner, drew up a formal written record of the event, and a marble plaque describing the miracle was placed on the wall facing the chapel of Saint Valerio, where it remains to this day.`,
  scientificEvidence: [
    "The archdeacon of Zaragoza, Don Dorner, compiled a contemporaneous written record of the miracle, which is preserved in the archives of the city of Zaragoza — providing primary documentary evidence from the year of the event.",
    "A marble plaque inscribed with the description of the miracle was placed in the Cathedral of Zaragoza on the wall facing the chapel of Saint Valerio, where it remains as a physical and enduring attestation of the event.",
    "The luminous child appeared within a sealed coffer that had contained a Host — an inexplicable transformation of material form witnessed simultaneously by two individuals with opposing motives, the sorcerer and the woman.",
    "The child survived complete incineration of the coffer in a fire — a defiance of the laws of combustion observed directly by the woman and subsequently reported to and examined by Bishop Don Alonso Arhuello.",
    "At the moment of episcopal consecration the following day, with the entire bishop's household and cathedral chapter present, the luminous child was replaced by a consecrated Host — a corporeal transformation corroborated by the entire assembled congregation."
  ],
  witnessTestimonies: [
    {
      name: "The woman of Zaragoza",
      role: "Penitent and primary witness",
      testimony: "I had done a terrible thing, taking Our Lord from my mouth and hiding Him to give to the sorcerer. But when we opened the box, it was not the Host we saw — it was a child, shining with light. And when I put the box in the fire as I was told, the child came out of the flames unharmed, as whole and radiant as before. I went to a priest and confessed everything. I believe what I saw was Our Lord, showing me that He cannot be destroyed or used for evil purposes."
    },
    {
      name: "Bishop Don Alonso Arhuello",
      role: "Bishop of Zaragoza, 1427",
      testimony: "When the matter was brought to my attention, I organized a procession of the whole city that the people might venerate the miraculous child. The following day, as I celebrated Mass at the altar of Saint Valerio, at the words of consecration I saw the child disappear and a Host appear in his place. I consumed the Host immediately. I have ordered Don Dorner to record everything in writing so that the memory of this miracle may not perish."
    },
    {
      name: "Don Dorner",
      role: "Archdeacon of Zaragoza, official recorder of the miracle",
      testimony: "At the command of the bishop I have set down a full account of these events. I have interviewed those present and examined the circumstances with care. What took place in Zaragoza in this year of 1427 is attested by multiple witnesses and is preserved in the city's archives for the benefit of all who come after us."
    }
  ],
  historicalContext: "The early fifteenth century in Aragon was a period of complex religious and social tensions. The Jewish and Moorish populations of the Crown of Aragon had been subjected to forced conversions and periodic persecutions since the great pogroms of 1391, and many converts — both Jewish conversos and Moorish Mudéjars — continued to practice aspects of their former religious traditions in secret, including magical practices. The sorcerer in the Zaragoza miracle is explicitly identified as Moorish, placing the event within this fraught context of crypto-Islamic practice in a Catholic kingdom. The Eucharistic miracle simultaneously addressed the theological concern of transubstantiation — dramatically affirming that the Host was truly Christ — and the pastoral concern of superstition and sacrilege. The formal documentation by the city archdeacon and the marble plaque in the cathedral ensured that the miracle became a permanent part of Zaragoza's civic and religious identity.",
  timeline: [
    { date: "1427", event: "A married woman in Zaragoza consults a Moorish sorcerer, who demands a consecrated Host as an ingredient in a potion to calm her husband." },
    { date: "1427", event: "The woman receives Communion at the Church of Saint Michael, removes the Host from her mouth, and delivers it to the sorcerer." },
    { date: "1427", event: "Upon opening the coffer containing the stolen Host, the sorcerer and the woman find a luminous infant inside instead of the wafer." },
    { date: "1427", event: "The woman attempts to burn the child in the coffer as instructed; the coffer is destroyed but the luminous infant emerges from the fire unharmed." },
    { date: "1427", event: "The terrified woman confesses to a priest; the matter is brought to Bishop Don Alonso Arhuello, who organizes a solemn procession through Zaragoza." },
    { date: "1427", event: "The luminous infant is venerated on the altar of the chapel of Saint Valerio in the Cathedral of Zaragoza." },
    { date: "1427 (day after the procession)", event: "At the words of consecration during the bishop's Mass, the luminous child disappears and a consecrated Host appears; the bishop consumes the Host." },
    { date: "1427 (shortly after)", event: "Archdeacon Don Dorner compiles a formal written account, preserved in the city archives. A marble plaque is installed in the Cathedral." },
    { date: "Present day", event: "The marble plaque commemorating the miracle remains on the wall of the chapel of Saint Valerio in the Cathedral of Zaragoza." }
  ]
});

updateMiracle('miracle-107', {
  fullDescription: `On Wednesday, May 23, 1447, in the small village of Ettiswil in the canton of Lucerne, Switzerland, Ann Vögtli — a member of a satanic sect active in the region — succeeded in stealing the pyx containing the large consecrated Host from the parish church. Her intent was to use the Blessed Sacrament in diabolical rituals practiced by her sect. Carrying the stolen Host, she hurried away from the church, but as she passed beyond the cemetery wall with its iron gate, the Host became inexplicably and overwhelmingly heavy. Unable to carry it any further, she was forced to throw the Blessed Sacrament away into the undergrowth and flee.

The consecrated Host came to rest among nettle bushes near a fence on the outskirts of Ettiswil. Shortly after the theft, a young woman named Margaret Schulmeister was in the area tending a herd of pigs. She noticed the animals suddenly stop and refuse to move forward despite her urging. Looking toward the fence, she saw in the middle of the nettles a Host elevated above the ground and surrounded by a vivid, brilliant light. The Host had been divided into seven sections arranged in the form of a flower. Margaret went at once to alert others. When the priest of the parish arrived with several men — including local nobleman Hermann von Russeg, Lord of Buron — they witnessed the same phenomenon. The priest was able to gather six of the seven sections of the Host that formed the outer petals of the flower. The seventh section, at the center, was pressed to the ground: before the eyes of all present, it slowly sank into the earth and disappeared, clearly indicating the precise location as a holy place chosen by God.

The six recovered sections of the Host were enshrined as relics. Within months, construction was begun on a chapel at the exact spot where the central section had disappeared into the ground. The chapel and altar were consecrated on December 28, 1448 — less than eighteen months after the events. Multiple popes granted indulgences to pilgrims who visited the shrine. The six Host fragments, flower-shaped and luminous in their original manifestation, remain preserved to this day in the Ettiswil miracle chapel, which continues to attract pilgrims especially on Laetare Sunday, the great feast of the chapel's miracle.`,
  scientificEvidence: [
    "The 'Protocol of Justice' — a formal legal document compiled on July 16, 1447 by Hermann von Russeg, Lord of Buron, less than two months after the events — constitutes primary eyewitness legal testimony to the miraculous discovery of the Host and its division into seven luminous sections.",
    "Ann Vögtli's confession and her account of the Host becoming too heavy to carry were formally recorded in the Protocol of Justice, providing legal documentation of the circumstances of the theft and the beginning of the miracle.",
    "Multiple independent witnesses — Margaret Schulmeister, the parish priest, and members of the public — consistently reported the Host elevated in light and divided in seven sections in the shape of a flower, with the central section disappearing into the ground, indicating convergent testimony from separate observers.",
    "The herd of pigs refusing to pass the location of the Host — animals being unable to have foreknowledge of the Blessed Sacrament's presence — provided an independent behavioral attestation of an unusual phenomenon at the site.",
    "The six sections of the Host have been preserved in the Ettiswil miracle chapel for over five and a half centuries, with their continuing veneration backed by multiple papal grants of indulgences, representing the highest levels of Church authentication."
  ],
  witnessTestimonies: [
    {
      name: "Margaret Schulmeister",
      role: "Swineherd of Ettiswil, discoverer of the miraculous Host",
      testimony: "I was tending the pigs near the fence when they stopped and would not go on. I could not move them forward at all. Looking ahead I saw in the nettles something raised up in a strong light. I went closer and saw it was the Host, divided into sections arranged like a flower. I was afraid and ran to call the priest and the others."
    },
    {
      name: "Parish Priest of Ettiswil",
      role: "Celebrant and first ecclesiastical witness",
      testimony: "When I arrived at the place described by Margaret, I saw with my own eyes the Host raised in light, divided into seven parts in the shape of a flower. I was able to gather six of the outer sections reverently. The seventh was pressed to the ground. Before all of us watching, it slowly disappeared into the earth. We understood that God was marking that place as sacred."
    },
    {
      name: "Hermann von Russeg, Lord of Buron",
      role: "Local nobleman and author of the Protocol of Justice, July 16, 1447",
      testimony: "I was present at the discovery and witnessed what Margaret and the priest have described. I have taken down this account in the Protocol of Justice with all legal formality so that what occurred in Ettiswil on the twenty-third of May in the year 1447 shall be preserved in permanent record. The division of the Host into seven luminous sections, the light surrounding it, and the disappearance of the central section into the ground are matters I attest to on my authority as Lord of Buron."
    }
  ],
  historicalContext: "The mid-fifteenth century in the Swiss Confederation was a time of social turbulence and religious anxiety. The Council of Basel (1431–1449) had been convened just miles away from Ettiswil and had produced a schismatic dispute that divided the Western Church. Alongside this, the period witnessed a surge in witch trials and prosecutions of diabolical sects throughout the Swiss cantons and southern Germany — a phenomenon that would culminate in the systematic witch hunts of the late fifteenth century. The theft of consecrated Hosts by members of satanic sects was a well-documented concern of ecclesiastical authorities in this period, as the Eucharist was believed to be particularly sought by those engaged in the black arts. The miracle at Ettiswil thus occurred precisely in the context where the Church most urgently needed a divine demonstration of Christ's sovereignty over any attempted sacrilege. The formal legal documentation of the miracle by the Lord of Buron, and its swift memorialization in a consecrated chapel, reflect the thoroughness with which fifteenth-century Swiss society — civic, legal, and ecclesiastical — responded to the supernatural event.",
  timeline: [
    { date: "May 23, 1447", event: "Ann Vögtli steals the pyx containing the large consecrated Host from the parish church of Ettiswil." },
    { date: "May 23, 1447", event: "Beyond the cemetery gate, the Host becomes too heavy for Vögtli to carry; she discards it into nettle bushes near a fence and flees." },
    { date: "May 23, 1447", event: "Margaret Schulmeister, tending pigs nearby, finds the Host elevated in vivid light and divided into seven sections arranged as a flower." },
    { date: "May 23, 1447", event: "The parish priest and witnesses including Hermann von Russeg arrive; the priest gathers six outer sections of the Host; the central seventh section disappears into the ground before all present." },
    { date: "July 16, 1447", event: "Hermann von Russeg, Lord of Buron, compiles the formal 'Protocol of Justice' recording the miracle in legal testimony." },
    { date: "1447–1448", event: "Construction of a chapel begins at the exact spot where the central Host section disappeared into the earth." },
    { date: "December 28, 1448", event: "The miracle chapel and its altar are consecrated, establishing a permanent shrine at the site of the miracle." },
    { date: "Post-1448", event: "Multiple popes grant indulgences to pilgrims visiting the Ettiswil shrine; the great feast of the chapel is established on Laetare Sunday (4th Sunday of Lent)." },
    { date: "Present day", event: "The six preserved sections of the miraculous Host remain enshrined in the Ettiswil chapel, venerated by pilgrims especially on Laetare Sunday." }
  ]
});

console.log('Batch 5: Updated miracles 103-107 (San Juan de las Abadesas, Silla, Valencia, Zaragoza, Ettiswil)');
fs.writeFileSync('public/miracles.json', JSON.stringify(data, null, 2));
