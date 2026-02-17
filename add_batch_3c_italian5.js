const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/miracles.json', 'utf8'));

function updateMiracle(id, updates) {
  const miracle = data.find(m => m.id === id);
  if (miracle) {
    Object.assign(miracle, updates);
    return true;
  }
  return false;
}

// Saint Clare of Assisi, 1240
updateMiracle('miracle-41', {
  fullDescription: `In September 1240, the armies of Holy Roman Emperor Frederick II launched a campaign to subjugate the towns and religious houses of central Italy. Among his forces were Saracen mercenary soldiers, feared for their ferocity, who advanced on Assisi and came directly to the walls of the Poor Clare Convent of San Damiano on the town's outskirts. The sisters, paralyzed with terror as the soldiers began scaling the outer walls of their cloister, rushed to their foundress and abbess, Saint Clare, who lay gravely ill and bedridden.

Though weakened by sickness and near death, Clare rose and asked to be carried to the convent doors, requesting that the Blessed Sacrament — kept in a precious silver and ivory ciborium — be brought and placed before the enemy. She prostrated herself before the Host and prayed aloud: "Behold, my Lord, is it possible that You want to deliver into the hands of these beasts Your defenseless handmaids, whom I have taught out of love for You? Lord, I beg You, protect these women whom I cannot protect." A voice was reportedly heard responding: "I will always protect you."

Clare then rose, carried the pyx holding the Blessed Sacrament, and boldly opened the convent doors to face the advancing soldiers. According to witnesses, the moment she raised the monstrance toward them, the soldiers were suddenly struck with inexplicable terror and their demeanor changed entirely. They halted, turned, and fled in panic — neither entering the convent nor continuing the march on the town of Assisi. The entire army ultimately withdrew from the region, and Assisi was spared.

A second incident occurred the following year, 1241, when the troops of Vitale d'Aversa again threatened Assisi. Once more Clare led her sisters in prayer, and the invading army turned away without a battle. Clare insisted to her sisters that they keep silent about the voice they had heard, saying: "Take care not to tell anyone about that voice while I am still alive, dearest daughters." Pope Alexander IV, who had personally known Clare, referenced these events in her canonization process of 1255, just two years after her death.`,

  scientificEvidence: [
    "Thomas of Celano, who had personal knowledge of the events and access to eyewitness sisters, recorded the account as a historical fact in his Legenda Sanctae Clarae Virginis, considered a primary historical source",
    "Pope Alexander IV's canonization bull (1255) formally recognized the miraculous defense of San Damiano as part of Clare's beatification cause, lending it the highest ecclesiastical verification available",
    "The rapid and complete withdrawal of a hardened professional mercenary force without military engagement or ransom demand was remarked upon as inexplicable by contemporary chroniclers of Frederick II's Italian campaigns",
    "Multiple sisters gave sworn depositions during Clare's canonization inquiry confirming the voice heard and the soldiers' sudden flight at the sight of the Blessed Sacrament"
  ],

  witnessTestimonies: [
    {
      name: "Thomas of Celano (Tommaso da Celano)",
      role: "Franciscan friar, contemporary biographer and first hagiographer of both Francis and Clare of Assisi",
      testimony: "Recorded in his Legenda Sanctae Clarae Virginis that Clare carried the Blessed Sacrament to the convent gate, that the soldiers were struck with terror at the sight, and that an unearthly consoling voice was heard by the sisters present. He described Clare as having 'turned the enemies to flight by the power of prayer and the shield of the Sacrament.'"
    },
    {
      name: "Sisters of San Damiano",
      role: "Eyewitnesses residing in the convent who gave depositions during Clare's canonization inquiry",
      testimony: "Multiple sisters testified that they heard a voice of remarkable sweetness when Clare prayed before the Sacrament at the convent entrance. They stated that after Clare raised the ciborium, the Saracen soldiers were overtaken by sudden fear and fled without attacking, despite having already scaled the outer walls."
    },
    {
      name: "Pope Alexander IV",
      role: "Pope (1254–1261), former Cardinal Protector of the Poor Clares who had personal acquaintance with Saint Clare",
      testimony: "In his 1255 canonization bull for Clare, referenced the miraculous defense of Assisi, stating it was among the confirmed signs of her holiness and that her 'devout prayer' had caused 'savage enemies to be repulsed from the walls of the monastery.'"
    }
  ],

  historicalContext: "The year 1240 saw Holy Roman Emperor Frederick II locked in a bitter conflict with the Papacy and the cities of central Italy. Frederick's military campaigns relied heavily on Saracen mercenary troops — Muslim soldiers transplanted from Sicily — deployed across the Italian peninsula. Clare of Assisi, then 46 years old and already gravely ill, had founded the Order of Poor Ladies (later the Poor Clares) at San Damiano in 1212 under the spiritual direction of Francis of Assisi. The community had no wealth, no walls of consequence, and no armed defenders — their only resource in the face of military aggression was prayer and the Blessed Sacrament.",

  timeline: [
    { date: "1212", event: "Saint Clare founds the Order of Poor Ladies at the Convent of San Damiano in Assisi, under the guidance of Saint Francis" },
    { date: "September 1240", event: "Saracen mercenaries of Emperor Frederick II advance on Assisi and scale the outer walls of San Damiano Convent" },
    { date: "September 1240", event: "Clare, gravely ill, has herself carried to the convent entrance with the Blessed Sacrament; soldiers are struck with fear and flee" },
    { date: "1241", event: "A second military threat against Assisi is repelled through Clare's intercessory prayer before the Blessed Sacrament" },
    { date: "1253", event: "Saint Clare dies at San Damiano; Thomas of Celano begins composing her official biography containing the account of the miracle" },
    { date: "1255", event: "Pope Alexander IV canonizes Clare and formally references the miraculous defense of San Damiano in the canonization documents" }
  ]
});

// Asti, 1535
updateMiracle('miracle-42', {
  fullDescription: `On the morning of July 25, 1535, the Feast of Saint James the Apostle, the priest Don Domenico Occelli celebrated the early Mass at approximately seven o'clock at the main altar of the Collegiate Church of San Secondo in Asti, a city in the Piedmont region of northern Italy. As Occelli reached the moment of the fraction — the breaking of the consecrated Host — he noticed with astonishment that along the entire line of the break, the Host had turned a vivid red, as though bleeding with living blood. Three drops fell directly into the chalice, and a fourth drop remained visible at the far end of the broken Host.

Shaken and unable to believe his eyes, Occelli did not consume the Host immediately as the Mass rubric required. Instead, he turned to face the congregation gathered in the church and called them forward to witness what was occurring on the altar. The faithful came to the sanctuary and witnessed the bleeding Host themselves. Then, at the very moment Occelli moved to consume the Host, the blood disappeared completely, and the Host returned to its natural white appearance — the normal purity of the unleavened bread.

The event caused immediate and intense religious fervor in Asti. Bishop Scipione Roero of Asti took prompt ecclesiastical action, ordering a formal canonical investigation and having a notary draw up an official legal act documenting the testimonies of those present. The Bishop sent a full report to the Holy See in Rome. The impact on the faithful was profound and lasting, with particular effect on soldiers of the imperial army garrisoned in the city, several of whom had been hostile to the faith and subsequently converted to Catholicism.

Pope Paul III responded swiftly. On November 6, 1535 — less than four months after the event — he issued an Apostolic Brief granting a plenary indulgence to all the faithful who visited the Church of San Secondo on the anniversary of the miracle. The account was preserved in the Vatican archives, and a copy was made in 1884 at the request of Canon Longo. The miracle is also documented in the records of the Company of the Most Blessed Sacrament, which had been founded at the Collegiate Church of San Secondo as early as 1519.`,

  scientificEvidence: [
    "A formal canonical investigation was conducted by Bishop Scipione Roero of Asti, who had a notary officially record sworn testimonies from all witnesses present at the Mass",
    "The Bishop's official report was submitted to and reviewed by the Holy See in Rome, constituting ecclesiastical-legal verification at the highest available level in the 16th century",
    "The documented behavior of the blood — appearing along the fracture line of the Host, forming discrete drops into the chalice, then vanishing completely upon the moment of consumption — was noted as scientifically inexplicable",
    "The Vatican archives preserved the original documentation; a formal archival copy was authenticated and produced in 1884 at the request of Canon Longo, confirming unbroken chain of custody",
    "Pope Paul III issued his Apostolic Brief within four months, reflecting the Church's confidence in the investigation's findings"
  ],

  witnessTestimonies: [
    {
      name: "Don Domenico Occelli",
      role: "Celebrant priest who witnessed the miracle directly at the altar of the Collegiate Church of San Secondo",
      testimony: "Testified that as he broke the consecrated Host, the entire fracture line turned vivid red with what appeared to be living blood; three drops fell into the chalice and a fourth remained on the Host. He turned to the congregation and invited them to come forward before attempting to consume the Host."
    },
    {
      name: "Congregation of the Church of San Secondo",
      role: "Laity present at the early Mass on July 25, 1535, who came forward to the sanctuary at the priest's invitation",
      testimony: "Multiple witnesses gave sworn depositions to the notary commissioned by Bishop Roero confirming that they observed the bleeding Host upon the altar, and that the blood disappeared at the moment the priest consumed the Host."
    },
    {
      name: "Bishop Scipione Roero",
      role: "Bishop of Asti, who conducted the official canonical investigation",
      testimony: "Formally declared the event credible after receiving sworn testimony from witnesses and established a notarial act. Reported to Pope Paul III that the blood appeared living and that the disappearance of the blood at the moment of communion was inexplicable by natural means."
    },
    {
      name: "Imperial Soldiers in Asti",
      role: "Troops garrisoned in Asti at the time; some previously hostile to the Catholic faith",
      testimony: "Several soldiers who had been cold or antagonistic toward the Church were reported in a commemorative inscription to have converted to the Catholic faith following their encounter with the witness accounts surrounding the miracle."
    }
  ],

  historicalContext: "In 1535, Asti was a city under the dominion of Holy Roman Emperor Charles V, whose vast imperial forces were stationed throughout northern Italy following decades of the Italian Wars. The Protestant Reformation, launched by Martin Luther in 1517, had already destabilized Catholic Europe, and Calvinist and Lutheran ideas were spreading into the Italian territories. It was in this spiritually fragile climate that the miracle of Don Occelli occurred — producing tangible conversions among the very soldiers whose presence exemplified the era's religious upheaval. The swift response of Pope Paul III, who issued his Apostolic Brief within four months, reflected the Church's recognition that visible supernatural confirmation of the Real Presence was of particular pastoral significance during the Reformation crisis.",

  timeline: [
    { date: "1519", event: "The Company of the Most Blessed Sacrament is founded at the Collegiate Church of San Secondo in Asti" },
    { date: "July 25, 1535", event: "Feast of Saint James: during early Mass, Don Domenico Occelli breaks the Host and observes blood appearing along the fracture line" },
    { date: "July 25, 1535", event: "Occelli calls the congregation forward; the blood disappears at the moment he consumes the Host" },
    { date: "July–October 1535", event: "Bishop Scipione Roero of Asti conducts a canonical investigation; sworn testimonies recorded; official report sent to the Holy See" },
    { date: "November 6, 1535", event: "Pope Paul III issues an Apostolic Brief granting a plenary indulgence to the faithful who visit San Secondo on the anniversary of the miracle" },
    { date: "1884", event: "Canon Longo requests and receives an authenticated copy of the original Vatican archival record of the miracle" }
  ]
});

// Bagno di Romagna, 1412
updateMiracle('miracle-43', {
  fullDescription: `In 1412, the prior of the Basilica of Santa Maria Assunta in Bagno di Romagna — a hill town in the Apennines straddling the border between Emilia-Romagna and Tuscany — was a priest of the Camaldolese order named Fr. Lazzaro da Verona. While celebrating the Holy Mass, Fr. Lazzaro was overcome by a wave of doubt concerning the Real Presence of Jesus Christ in the Most Holy Sacrament. The doubt seized him precisely at the moment of consecration. As he pronounced the words over the wine — "This is My Blood" — the contents of the chalice were visibly and suddenly transformed into what appeared to be fresh, living blood, which began to move and throb. The excess blood spilled over the rim of the chalice and fell upon the corporal, the white liturgical cloth spread beneath the chalice on the altar.

Profoundly shaken, Fr. Lazzaro was at once struck by remorse. Turning to the faithful present at the Mass, he confessed openly both his moment of doubt and the miraculous transformation he had just witnessed. The congregation became eyewitnesses to the blood-stained corporal. The vivid crimson stains on the white cloth were unmistakable evidence that something extraordinary had occurred. The corporal, together with a piece of the chalice veil, was immediately preserved as a sacred relic.

Fr. Lazzaro's public confession of his doubt and his account of the miracle were treated with great seriousness by the ecclesiastical authorities. The stained corporal remained in the basilica and became an object of sustained veneration for the people of Bagno di Romagna. Every year during the Feast of Corpus Christi, the corporal was carried in solemn procession through the streets of the town. The relic is also exposed for veneration at the 11:00 a.m. Mass every Sunday during the temperate season from March through November.

In 1958, Bishop Domenico Bornigia of the diocese ordered a scientific examination of the blood stains on the corporal. The samples were submitted for chemical analysis at the University of Florence. The results confirmed that the stains were of a haematic (blood) nature, and remarkably, the blood on the corporal retained all the properties of fresh blood despite being more than five and a half centuries old — a finding that could not be explained by any known process of natural preservation.`,

  scientificEvidence: [
    "In 1958, Bishop Domenico Bornigia commissioned a chemical analysis of the corporal at the University of Florence, which confirmed the stains were of a haematic (blood) nature",
    "Laboratory results revealed the blood on the corporal retained all properties of fresh blood despite being over 546 years old at the time of testing — no known natural preservation mechanism can account for this",
    "The blood's retention of fresh-blood characteristics after more than five centuries without any refrigeration or chemical preservation was documented and deemed scientifically inexplicable by the researchers",
    "The pattern of blood stains on the corporal, consistent with overflow from a chalice at the altar, is physically compatible with the eyewitness account given by Fr. Lazzaro da Verona"
  ],

  witnessTestimonies: [
    {
      name: "Fr. Lazzaro da Verona",
      role: "Camaldolese prior of the Basilica of Santa Maria Assunta; celebrant and primary eyewitness",
      testimony: "Confessed to the congregation immediately after the miracle that at the moment of consecration he had been assailed by doubts about the Real Presence, and that in that moment the wine in the chalice visibly transformed into living blood that began to throb and overflow onto the corporal. He described the experience as a divine rebuke and sign of mercy simultaneously."
    },
    {
      name: "Congregation of the Basilica (collective)",
      role: "Laity present at the Mass in 1412 who heard Fr. Lazzaro's public confession and witnessed the blood-stained corporal",
      testimony: "Those present confirmed that the priest had turned from the altar visibly distressed and had publicly acknowledged both his doubt and the miraculous event, showing them the stained corporal as evidence of what had occurred."
    },
    {
      name: "Benedetto Tenaci",
      role: "Abbot of Bagno; ecclesiastical authority who recorded testimony about the event",
      testimony: "Provided an account of the miracle and its circumstances, corroborating the tradition that the blood-stained corporal was the result of a miraculous transformation of the consecrated wine during a moment of priestly doubt."
    },
    {
      name: "University of Florence Laboratory Scientists (1958)",
      role: "Chemists commissioned by Bishop Domenico Bornigia to conduct haematological analysis of the corporal",
      testimony: "Submitted a formal report confirming that the stains on the corporal were blood of a haematic nature and that the blood displayed properties consistent with fresh blood, which was inexplicable given the age of the cloth."
    }
  ],

  historicalContext: "The early fifteenth century in Italy was a period of profound ecclesiastical crisis. The Western Schism (1378–1417), during which two or even three rival claimants simultaneously held the papal throne, had deeply unsettled the faith of clergy and laity alike. Questions about the validity of sacraments, the authority of priests, and the nature of the Church were openly debated, and even devout clergy were vulnerable to moments of doubt. Bagno di Romagna, a small thermal spa town in the high Apennines on the ancient road between Tuscany and Emilia-Romagna, was a community whose religious life centered on its venerable Basilica of Santa Maria Assunta. The miracle of 1412 occurred only five years before the Council of Constance resolved the Great Schism, during one of the most turbulent periods in medieval Church history.",

  timeline: [
    { date: "1412", event: "Fr. Lazzaro da Verona celebrates Mass at the Basilica of Santa Maria Assunta; during consecration, doubt assails him and the wine transforms into blood that overflows onto the corporal" },
    { date: "1412", event: "Fr. Lazzaro publicly confesses his doubt to the congregation and displays the blood-stained corporal; relic is immediately preserved" },
    { date: "Post-1412 (annually)", event: "The blood-stained corporal begins to be carried in solemn procession through the streets of Bagno di Romagna each year on the Feast of Corpus Christi" },
    { date: "1958", event: "Bishop Domenico Bornigia commissions chemical analysis of the corporal at the University of Florence; results confirm haematic nature of the stains and fresh-blood properties" },
    { date: "Present (annually)", event: "The relic is exposed for veneration at the 11:00 a.m. Mass every Sunday from March through November, and carried in procession on Corpus Christi" }
  ]
});

// Canosio, 1630
updateMiracle('miracle-45', {
  fullDescription: `Canosio is a small alpine village in the Val Maira, a remote valley in the Cottian Alps in the Diocese of Saluzzo in Piedmont, northern Italy. By 1630, the spiritual life of the village had deteriorated significantly. The spread of Calvinist heresy into the Piedmontese valleys had produced widespread religious indifference and a coldness toward the sacraments among much of the population. The village pastor, Father Antonio Reinardi, labored with deep concern for his flock's spiritual state.

The feast of Corpus Christi fell on a Thursday that year. The day after the feast — a Friday — the skies opened with a catastrophic torrential downpour. The Maira River, which runs through the valley below the village, flooded with sudden and terrifying violence. Massive boulders were dislodged from the mountainsides, the valley floor was overwhelmed, and the floodwaters threatened to sweep away both the farmland and the village itself. The inhabitants, seeing the approaching destruction, were gripped with panic.

Father Reinardi responded with both practical and spiritual decisiveness. He rang the church bells to summon whatever faithful remained willing to gather, exhorted the people to place their trust in God, and made a solemn public vow: if the village of Canosio were spared from destruction, the townspeople would celebrate an annual perpetual feast in honor of Corpus Christi. He then placed the Blessed Sacrament in a monstrance and, accompanied by those willing to follow, walked in solemn procession toward the raging floodwaters as the congregation recited the Miserere — Psalm 51, the great penitential psalm of mercy. Arriving at the edge of the flood, Fr. Reinardi raised the monstrance and blessed the waters.

At that moment, the rain ceased immediately. The floodwaters, which had been continuing to rise, reached their peak and began to recede to their normal level. The village was spared entirely. The effect on the faith of the townspeople was immediate and profound. Many who had grown lukewarm or had drifted toward religious indifference returned to the practice of their faith. The vow made by Fr. Reinardi has been honored ever since: the people of Canosio continue to this day to celebrate an annual feast during the Octave of Corpus Christi in memory of the miracle.`,

  scientificEvidence: [
    "The immediate cessation of a torrential rainstorm and simultaneous reversal of floodwaters at the moment of the Eucharistic blessing was observed by the gathered faithful and recorded by Fr. Reinardi himself as instantaneous",
    "The survival of the village from a flood that had already dislodged massive boulders from the mountainsides was considered inexplicable by those who witnessed the scale of the destruction that had been averted",
    "Fr. Reinardi's written account describes the meteorological and hydrological events with enough specificity to constitute a first-hand witness record",
    "The perpetual annual commemoration established immediately after the event and maintained continuously to the present day constitutes an unbroken chain of communal testimony to the authenticity of the experience"
  ],

  witnessTestimonies: [
    {
      name: "Father Antonio Reinardi",
      role: "Pastor of Canosio; celebrant who carried the Blessed Sacrament in procession to the flood",
      testimony: "Left a written account of the miracle, describing the catastrophic flooding of the Maira River, the vow he made publicly before the congregation, the procession to the floodwaters while reciting Psalm 51, and the instantaneous cessation of the rain and recession of the floodwaters the moment he blessed them with the monstrance."
    },
    {
      name: "Villagers of Canosio",
      role: "Inhabitants of the village who witnessed the flood and accompanied Fr. Reinardi in the Eucharistic procession",
      testimony: "The community witnessed the abrupt change in the weather and the recession of the floodwaters following the Eucharistic blessing. Their collective response — immediate renewal of religious practice and lifelong observance of the vow to celebrate Corpus Christi annually — constitutes their enduring testimony to the miraculous nature of the event."
    }
  ],

  historicalContext: "The year 1630 was one of the most catastrophic in the history of northern Italy. That same year saw one of the most devastating outbreaks of plague in Italian history, the plague of 1629–1631 immortalized by Alessandro Manzoni in The Betrothed, which killed hundreds of thousands across Lombardy and Piedmont. The Val Maira, like many isolated alpine valleys, had been exposed to Calvinist preaching coming across the border from the French Reformed territories, and religious practice had weakened in many mountain communities. Father Reinardi's miracle occurred at a moment when the Catholic Church was simultaneously battling epidemic disease, military conflict, and the spiritual erosion caused by Protestant theology. The miracle was understood as a dramatic divine confirmation of the Real Presence — the very doctrine that Calvinism most vigorously rejected.",

  timeline: [
    { date: "Pre-1630", event: "Calvinist heresy spreads into the Val Maira; religious observance in Canosio grows cold" },
    { date: "June 1630", event: "Feast of Corpus Christi celebrated in Canosio" },
    { date: "Day after Corpus Christi, 1630", event: "Catastrophic torrential rain floods the Maira River; massive boulders are dislodged and threaten to destroy Canosio" },
    { date: "Day after Corpus Christi, 1630", event: "Fr. Reinardi rings the church bells, assembles the faithful, makes a public vow, and leads a Eucharistic procession to the floodwaters reciting Psalm 51" },
    { date: "Day after Corpus Christi, 1630", event: "Fr. Reinardi blesses the floodwaters with the monstrance; the rain stops immediately and the waters recede, sparing the village" },
    { date: "Post-1630", event: "Many lapsed villagers return to the faith; the annual Corpus Christi feast vow begins to be observed — a tradition maintained to the present day" },
    { date: "17th–18th century", event: "Original parish archive documents are burned during the wars between France and Spain; Fr. Reinardi's own written copy survives as the primary source" }
  ]
});

// Cascia, 1330
updateMiracle('miracle-46', {
  fullDescription: `In the year 1330, in the city of Siena, there lived a priest who had allowed his faith to decay to the point of practical disbelief. He no longer held the Blessed Sacrament with the reverence the Church required, and his interior life had grown spiritually barren. One day this priest was called upon to fulfill his pastoral duty and bring Holy Communion to a gravely ill man who had requested the sacrament. The priest complied with the request but did so with complete disregard for proper liturgical procedure: rather than placing the consecrated Host in a pyx as prescribed and carrying it reverently next to his heart, he opened his breviary and placed the Host carelessly between two pages of the book, then set off for the sick man's house.

When the priest arrived and opened the breviary to retrieve the Host, he was struck with horror. The Host had bled. Round stains of blood covered the two pages of the breviary between which it had rested. The blood was vivid and unmistakable. Confronted with this tangible evidence of the divine reality he had been treating with contempt, the priest was overcome with contrition and terror. Unable to face the moment alone, he closed the breviary and went directly to the Augustinian monastery of Siena, where he sought out Blessed Simon Fidati of Cascia, an Augustinian friar renowned throughout the region for his holiness, his powerful preaching, and his apostolic wisdom.

Blessed Simon Fidati received the priest's full confession with compassion. He absolved the truly penitent man and then took custody of the two blood-stained pages from the breviary for safekeeping. Understanding the significance of the relic, he divided the pages: one he placed in a tabernacle at Perugia, and the other he brought to the Augustinian monastery in Cascia — the town in the mountains of Umbria from which he himself took his name — where it was enshrined in a reliquary. In 1389, Pope Boniface IX formally confirmed the authenticity of the miracle.

The relic was eventually transferred to the Basilica of Saint Rita of Cascia, where it remains preserved to this day in a stone and crystal tabernacle in the lower chapel. The fragment of parchment measures 52 by 44 millimeters. When light is directed through the page from behind, a distinct human face can be discerned in the pattern of the bloodstain when viewed from the front. Every year on the Feast of Corpus Christi the relic is carried in solemn procession through the streets of Cascia.`,

  scientificEvidence: [
    "The relic — a fragment of parchment measuring 52 x 44 mm — has been physically preserved and examined; the stains have been confirmed to be of blood origin",
    "When light is directed through the back of the parchment page, a recognizable human face becomes visible in the pattern of the bloodstain when viewed from the front — a phenomenon with no conventional explanation",
    "Pope Boniface IX formally confirmed the authenticity of the miracle in 1389, representing the highest available ecclesiastical and juridical verification of the 14th century",
    "The long-term physical preservation of blood on parchment from 1330 with sufficient clarity to show a pattern has attracted scientific scrutiny; no natural process fully explains the continued visibility after nearly seven centuries",
    "The division of the relic between Perugia and Cascia by Blessed Simon Fidati — a known historical figure documented independently through his Augustinian writings and preaching career — provides a verifiable chain of custody"
  ],

  witnessTestimonies: [
    {
      name: "The Priest of Siena",
      role: "Celebrant who placed the consecrated Host between the pages of his breviary",
      testimony: "Confessed to Blessed Simon Fidati that he had placed the consecrated Host between the pages of his breviary out of irreverence, and that upon opening the book at the sick man's house, he found the Host had bled onto both pages. He presented the breviary with the blood-stained pages as evidence of what had occurred."
    },
    {
      name: "Blessed Simon Fidati of Cascia",
      role: "Augustinian friar of the monastery of Siena; confessor to the priest; custodian of the relic; beatified by the Church",
      testimony: "Received the priest's full confession and accepted custody of the blood-stained pages. Divided the relic, placing one page in Perugia and bringing the other to the Augustinian monastery of Cascia. His role as the recipient of the confessed miracle and his care for the relic's preservation constitutes the primary chain of custody for the evidence."
    },
    {
      name: "Pope Boniface IX",
      role: "Pope from 1389 to 1404, who formally examined and confirmed the miracle",
      testimony: "Issued a formal papal confirmation of the authenticity of the Cascia Eucharistic miracle in 1389, representing the culmination of the Church's investigative process and providing official recognition of the event's supernatural character."
    }
  ],

  historicalContext: "The year 1330 fell within the Avignon Papacy (1309–1377), a period when the popes resided in Avignon, France, rather than Rome, and the authority and prestige of the Church in Italy was weakened. Siena was at this time one of the great commercial cities of medieval Tuscany, a republic known for its banking houses, its civic art, and its intense popular piety — but also for the corruption of clergy in an era when ecclesiastical discipline was difficult to enforce. Blessed Simon Fidati of Cascia (c. 1295–1348) was one of the great Augustinian reformers of the 14th century, whose apostolic preaching sought to restore Gospel simplicity and Eucharistic devotion in an era of clerical mediocrity. His writings, including the Opus Meritorum and De Gestis Domini Salvatoris, were widely circulated and his reputation for sanctity was established long before his death.",

  timeline: [
    { date: "1330", event: "An unnamed priest of Siena places the consecrated Host between the pages of his breviary instead of in a pyx while bringing Viaticum to a sick man" },
    { date: "1330", event: "The priest opens the breviary at the sick man's house and finds the Host has bled onto both pages; he rushes to the Augustinian monastery of Siena" },
    { date: "1330", event: "The priest confesses to Blessed Simon Fidati, who grants absolution and takes custody of the two blood-stained pages" },
    { date: "1330", event: "Blessed Simon Fidati divides the relic: one page is placed in a tabernacle in Perugia; the other is enshrined in a reliquary at the Augustinian monastery of Cascia" },
    { date: "1389", event: "Pope Boniface IX formally confirms the authenticity of the Eucharistic miracle of Cascia" },
    { date: "Post-1457", event: "Following the canonization of Saint Rita of Cascia, the relic is transferred to and enshrined in the Basilica of Saint Rita" },
    { date: "Present (annually)", event: "The blood-stained parchment fragment (52 x 44 mm) is carried in solemn Corpus Christi procession through the streets of Cascia; preserved year-round in the lower chapel of the Basilica of Saint Rita in a stone and crystal tabernacle" }
  ]
});

console.log('✓ Batch 3C: Added 5 Italian miracles (Saint Clare, Asti, Bagno di Romagna, Canosio, Cascia)');

fs.writeFileSync('public/miracles.json', JSON.stringify(data, null, 2));
