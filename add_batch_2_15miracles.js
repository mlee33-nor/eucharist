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

// ============ BELGIUM & EGYPT & FRANCE (Agent 1) ============

// Bruges, 1203 (Belgium)
updateMiracle('miracle-6', {
  fullDescription: `The Holy Blood relic of Bruges has its origins in the Fourth Crusade of 1203-1204, when Constantinople fell to Crusader forces. Baldwin IX, Count of Flanders, was crowned as the new Latin Emperor of Constantinople following the city's conquest. Among the treasures looted from the Imperial Palace of Bucoleon was a sacred relic of the Precious Blood of Christ, which had been preserved in the Maria Chapel of the imperial palace. Baldwin IX sent this relic back to his homeland of Bruges, where it would become one of the most venerated relics in all of Christendom.

The relic consists of a rock-crystal vial, dated to the 11th century Byzantine period, which contains what is believed to be a cloth stained with the blood of Jesus Christ. The oldest documentary evidence of the relic's presence in Bruges dates from 1256, leaving a gap of over fifty years in the historical record. Modern analysis has confirmed that the phial is indeed an 11th or 12th century Byzantine perfume bottle, consistent with an origin in Constantinople.

The veneration of this relic gave rise to one of Europe's most famous religious processions, the Procession of the Holy Blood, which has been celebrated annually since 1291 on the Feast of the Ascension. During this internationally renowned event, citizens of Bruges dress in historical costumes and reenact biblical scenes, culminating in a solemn procession carrying the relic through the streets of the medieval city. The tradition continues to this day, drawing thousands of pilgrims and visitors each year.`,

  scientificEvidence: [
    "Rock-crystal vial dated to 11th century by modern analysis, consistent with Byzantine origin",
    "Phial identified as 11th or 12th century Byzantine perfume bottle, supporting Constantinople provenance",
    "Oldest documentary evidence of relic's presence in Bruges dates to 1256",
    "Relic preserved in the Basilica of the Holy Blood in Bruges for over 800 years",
    "Physical characteristics of the container match artifacts from the Imperial Palace of Bucoleon in Constantinople"
  ],

  witnessTestimonies: [
    {
      name: "Baldwin IX, Count of Flanders",
      role: "Latin Emperor of Constantinople, donor of the relic",
      testimony: "After being crowned Emperor of Constantinople in 1204, sent the relic of the Precious Blood from the Imperial Palace to his native country of Bruges"
    },
    {
      name: "Citizens of Bruges",
      role: "Recipients and guardians of the relic",
      testimony: "Documented veneration of the relic beginning in 1256, establishing it as a central devotional focus of the city"
    }
  ],

  historicalContext: `The arrival of the Holy Blood relic in Bruges occurred during the tumultuous period of the Fourth Crusade (1202-1204), which controversially diverted from its original goal of recapturing Jerusalem to instead sack the Christian city of Constantinople. This event marked a low point in relations between Eastern and Western Christianity. Baldwin IX of Flanders' elevation to Latin Emperor represented the Western Church's temporary dominance over Byzantium. The 13th century was also a period of growing Eucharistic devotion in Western Europe, making relics associated with Christ's Passion increasingly important. The relic's arrival in Bruges transformed the city into a major pilgrimage destination and contributed to its prosperity during the medieval period.`,

  timeline: [
    { date: "1203-1204", event: "Fourth Crusade conquers Constantinople; Baldwin IX crowned Latin Emperor" },
    { date: "1204", event: "Baldwin IX sends the relic of the Precious Blood from Constantinople to Bruges" },
    { date: "1256", event: "Earliest documented evidence of the Holy Blood relic in Bruges" },
    { date: "1291", event: "First recorded Procession of the Holy Blood on Ascension Day" },
    { date: "Present", event: "Annual Procession of the Holy Blood continues, recognized by UNESCO as Intangible Cultural Heritage" }
  ]
});

// Liège, 1374 (Belgium) - Note: This is about Blessed Juliana establishing Corpus Christi
updateMiracle('miracle-10', {
  fullDescription: `The Eucharistic miracle associated with Liège, Belgium, centers on the mystical visions of Blessed Juliana of Cornillon and the subsequent establishment of the Feast of Corpus Christi. Juliana was born in 1192 or 1193 near Liège and was orphaned at age five along with her twin sister Agnes. The orphaned girls were placed in the hospice at Mont Cornillon, run by Augustinian nuns, where Juliana would spend most of her life as a Norbertine canoness regular.

Beginning around 1208, when she was only sixteen years old, Juliana experienced recurring mystical visions of a radiant full moon marked by a single dark spot. After years of prayer and discernment, she came to understand that the moon represented the Church, while the dark spot symbolized the absence of a special liturgical feast dedicated entirely to honoring the Blessed Sacrament. Despite her initial reluctance to share these visions, Juliana eventually confided in her spiritual directors and ecclesiastical authorities. In 1230, she brought her concerns to Bishop Robert de Thorete of Liège and to the local archdeacon, Jacques Pantaléon, who would later become Pope Urban IV.

With the support of Bishop Robert de Thorete and the learned Dominican Hugh of St-Cher, the first local Feast of Corpus Christi was celebrated in the Diocese of Liège on June 28, 1246. Juliana faced considerable opposition and persecution throughout her life, being twice expelled from Mont Cornillon due to political conflicts. She died in poverty and exile on April 5, 1258, in Fosses-la-Ville. Six years after her death, in 1264, her former supporter Jacques Pantaléon, now Pope Urban IV, extended the feast to the universal Catholic Church through the papal bull "Transiturus de hoc mundo." The Pope's bull even referenced Juliana's mystical experiences, corroborating their authenticity.`,

  scientificEvidence: [
    "Original documentation of Juliana's visions preserved in 13th century ecclesiastical records",
    "Papal bull 'Transiturus de hoc mundo' (August 11, 1264) officially establishing Corpus Christi feast, referencing Juliana's experiences",
    "Historical records from Mont Cornillon Abbey documenting Juliana's life from 1192-1258",
    "Documentation of the first local celebration of Corpus Christi in Liège on June 28, 1246",
    "Archives showing Bishop Robert de Thorete's and Hugh of St-Cher's support for the feast"
  ],

  witnessTestimonies: [
    {
      name: "Blessed Juliana of Cornillon",
      role: "Norbertine canoness regular, mystic, visionary",
      testimony: "Experienced recurring visions from age 16 of a full moon with a dark spot, revealed to represent the Church's lack of a special feast honoring the Eucharist"
    },
    {
      name: "Bishop Robert de Thorete",
      role: "Bishop of Liège (1240-1246)",
      testimony: "After hearing Juliana's account of her visions, authorized the first celebration of the Feast of Corpus Christi in his diocese in 1246"
    },
    {
      name: "Hugh of St-Cher",
      role: "Dominican Prior Provincial for France, theologian",
      testimony: "Provided learned theological support for the establishment of the Corpus Christi feast based on Juliana's visions"
    },
    {
      name: "Jacques Pantaléon (Pope Urban IV)",
      role: "Former Archdeacon of Liège, later Pope",
      testimony: "Having met Juliana during his ministry in Liège, extended the Corpus Christi feast to the universal Church in 1264, six years after her death, citing her mystical experiences in the papal bull"
    }
  ],

  historicalContext: `The 13th century witnessed an extraordinary flourishing of Eucharistic devotion throughout Western Europe, with increasing emphasis on the Real Presence of Christ in the consecrated Host. This period saw the development of new liturgical practices, including the elevation of the Host during Mass and the use of monstrances for Eucharistic exposition. The Fourth Lateran Council of 1215 had formally defined the doctrine of transubstantiation, providing theological foundation for intensified Eucharistic worship. Women mystics like Juliana of Cornillon played significant roles in shaping medieval spirituality, despite facing considerable skepticism and opposition. The establishment of Corpus Christi as a universal feast represented a pivotal moment in Catholic liturgical history, giving the Eucharist its own solemnity separate from Holy Thursday. The feast would inspire some of Christianity's greatest theological and artistic works, including Saint Thomas Aquinas's Eucharistic hymns.`,

  timeline: [
    { date: "1192-1193", event: "Juliana born near Liège, Belgium" },
    { date: "1198", event: "Juliana and her twin sister Agnes orphaned and placed at Mont Cornillon hospice" },
    { date: "1208", event: "Juliana, age 16, begins experiencing visions of the full moon with a dark spot" },
    { date: "1230", event: "Juliana confides her visions to Bishop Robert de Thorete and Archdeacon Jacques Pantaléon" },
    { date: "June 28, 1246", event: "First celebration of Corpus Christi feast in the Diocese of Liège" },
    { date: "1247", event: "Following Bishop Robert's death, Juliana expelled from Mont Cornillon" },
    { date: "April 5, 1258", event: "Death of Blessed Juliana in exile at Fosses-la-Ville" },
    { date: "August 11, 1264", event: "Pope Urban IV extends Corpus Christi feast to universal Church through bull 'Transiturus de hoc mundo'" },
    { date: "1374", event: "Listed date associated with Eucharistic miracle commemorations in Liège" }
  ]
});

// St. Mary of Egypt, IV-V cent. (Egypt)
updateMiracle('miracle-14', {
  fullDescription: `Saint Mary of Egypt's life represents one of the most remarkable accounts of conversion and penance in early Christian history, culminating in an extraordinary Eucharistic miracle. Born in Egypt around 344 AD, Mary left her home at the age of twelve and traveled to Alexandria, where she lived as a public prostitute for seventeen years. Her conversion came dramatically when she joined a pilgrimage to Jerusalem, financing her passage by continuing her sinful lifestyle aboard the ship. Upon arriving in Jerusalem, she attempted to enter the Church of the Holy Sepulchre but found herself physically prevented by an invisible force. After multiple attempts to cross the threshold, she looked up and saw an icon of the Theotokos (the Virgin Mary). Struck with sudden awareness of her sinfulness, she fell to her knees and prayed for forgiveness, promising to renounce the world completely.

Immediately after her prayer, Mary was able to enter the church, where she venerated the True Cross. Following an interior voice, she traveled to the Jordan River that very evening, received Holy Communion in a church dedicated to Saint John the Baptist, and then crossed the river to wander into the Arabian desert. For the next forty-seven years, Mary lived in complete solitude, subsisting on herbs and the three loaves of bread she had brought with her (which miraculously sustained her for years), enduring extreme physical hardships and spiritual battles as she did penance for her former life.

The Eucharistic miracle occurred when an elderly priest and monk named Zosimus, following his monastery's custom of spending Lent in the desert, encountered Mary by divine providence. Despite her ragged appearance and sun-darkened skin, she called him by name and recognized him as a priest, demonstrating supernatural knowledge. After hearing her life story and praying with her, Mary asked Zosimus to return to the banks of the Jordan River on Holy Thursday of the following year, bringing her the Blessed Sacrament, of which she had not partaken since her conversion forty-seven years earlier. When Zosimus returned the next year as promised, he witnessed Mary walking across the surface of the Jordan River to receive Communion. After receiving the Eucharist, she spoke the words of Simeon: "Now thou dost dismiss thy servant, O Lord, according to thy word in peace, because my eyes have seen thy salvation." The following year, Zosimus returned and found Mary lying dead in the desert, with an inscription in the sand requesting burial and revealing that she had died the very night she received her last Communion.`,

  scientificEvidence: [
    "Ancient biographical text written by Sophronius (later Patriarch of Jerusalem, 635 AD) or possibly earlier author before 500 AD",
    "Account preserved in multiple ancient manuscripts and hagiographical collections",
    "Story included in the official Bollandist compilation of saints' lives",
    "Narrative details consistent with 5th century desert monasticism and geography",
    "Veneration of Saint Mary of Egypt documented continuously from early medieval period to present"
  ],

  witnessTestimonies: [
    {
      name: "Saint Zosimus of Palestine",
      role: "Elderly priest and monk who encountered Mary in the desert",
      testimony: "Witnessed Mary walking across the Jordan River to receive Holy Communion on Holy Thursday; found her body the following year with a miraculous inscription in the sand revealing the time of her death"
    },
    {
      name: "Saint Mary of Egypt",
      role: "Desert hermit and penitent",
      testimony: "Recounted her own life story to Zosimus, describing seventeen years of prostitution, her miraculous conversion in Jerusalem, and forty-seven years of desert penance; demonstrated supernatural knowledge by calling Zosimus by name and recognizing his priesthood"
    },
    {
      name: "Sophronius of Jerusalem (attributed author)",
      role: "Monk, later Patriarch of Jerusalem (634-638)",
      testimony: "Recorded the Life of Saint Mary of Egypt based on oral tradition preserved by Zosimus's monastery, documenting the Eucharistic miracle for posterity"
    }
  ],

  historicalContext: `The 4th and 5th centuries marked the golden age of desert monasticism in Egypt, Syria, and Palestine, when thousands of men and women fled to the wilderness seeking spiritual perfection through prayer, fasting, and solitude. Following the example of Saint Anthony the Great (251-356), the Egyptian desert became populated with hermits, anchorites, and monastic communities. This was also the period of the great theological controversies and Ecumenical Councils that defined Christian orthodoxy. The story of Saint Mary of Egypt exemplifies several key themes of early Christian spirituality: the possibility of radical conversion regardless of past sins, the power of penance, the importance of the Eucharist in sustaining the spiritual life, and the reality of supernatural gifts granted to holy ascetics. Her account served as a powerful testament to God's mercy and became especially associated with the season of Lent, when her life is commemorated in the Byzantine liturgical tradition. The Eucharistic dimension of her story—particularly her walking on water to receive Communion—emphasized the supreme importance early Christians placed on receiving the Body and Blood of Christ.`,

  timeline: [
    { date: "c. 344", event: "Birth of Mary in Egypt" },
    { date: "c. 356", event: "Mary leaves home at age 12, travels to Alexandria" },
    { date: "c. 356-373", event: "Mary lives as a prostitute in Alexandria for 17 years" },
    { date: "c. 373", event: "Mary joins pilgrimage to Jerusalem; conversion experience at Church of the Holy Sepulchre before icon of the Theotokos" },
    { date: "c. 373", event: "Mary receives Holy Communion at church of St. John the Baptist at the Jordan, then crosses river into Arabian desert" },
    { date: "c. 373-420", event: "Mary lives 47 years as a hermit in complete solitude in the desert" },
    { date: "c. 419", event: "Monk Zosimus encounters Mary in the desert; she recounts her life story and asks him to bring Communion the following year" },
    { date: "Holy Thursday, c. 420", event: "Zosimus witnesses Mary walking across the Jordan River to receive Holy Communion" },
    { date: "April 1, 421", event: "Death of Saint Mary of Egypt shortly after receiving her last Communion" },
    { date: "c. 422", event: "Zosimus discovers Mary's body with miraculous inscription in sand requesting burial" },
    { date: "7th century", event: "Sophronius (or earlier author) composes the Life of Saint Mary of Egypt" }
  ]
});

// Scete, III-V cent. (Egypt)
updateMiracle('miracle-15', {
  fullDescription: `During the 3rd through 5th centuries, the Egyptian desert region known as Scetis (modern Wadi El Natrun) became one of the three great centers of early Christian monasticism, alongside Nitria and Kellia. Inspired by the example of Saint Anthony the Abbot, thousands of men and women retreated to these wilderness areas to pursue lives of prayer, contemplation, and extreme asceticism. Saint Macarius of Egypt first came to Scetis around 330 AD and established a solitary monastic site; his reputation for holiness attracted a growing community of hermits and monks who settled in individual cells scattered across the desert landscape.

The Eucharistic miracle of Scete is preserved in one of the most important documents of early monasticism, the "Sayings of the Desert Fathers" (Apophthegmata Patrum), a collection of wisdom and stories from these early monks. According to this ancient account, there lived among the monks of Scetis a brother who was zealous in manual labor and devoted to the ascetic life, but lacked formal education in theology and the Faith. This monk harbored doubts about the Church's teaching on the Real Presence of Christ in the Eucharist. He would openly tell his fellow monks: "The Bread we receive is not really the Body of Christ, but is a symbol of that Body." When more experienced monks challenged his views and urged him to accept the Church's doctrine, the doubting monk replied firmly: "Unless you can show me evidence, I will not change my mind."

Two of the more spiritually mature monks decided to pray to God about this matter, asking that the divine truth would be revealed to settle the dispute. The following Sunday, when the monastic community gathered for the Divine Liturgy, God granted a miraculous vision to all present except the doubting monk. As the priest spoke the words of consecration over the bread and wine, all the other monks saw the appearance of a small child in place of the Host on the altar. When the priest raised the Eucharistic bread to break it for distribution, the monks witnessed an angel descending with a sword, who pierced the child. As the priest broke the sacred Host, blood flowed from it into the chalice. However, the uneducated monk who doubted saw none of this; to his eyes, the liturgy proceeded normally.

When the time came for Holy Communion, each monk in turn approached to receive the Sacrament. Each received what appeared to be bread, as normal. But when the doubting monk extended his hand, the morsel he received was not bread but a piece of bloody flesh. Horrified and shaken by this sight, he cried out: "Lord, I believe! The Bread is Your Body and Your Blood is in the chalice!" At that instant, the flesh in his hand became bread again, as it appeared to all the others. The monk received reverently, giving thanks to God for the mercy shown to him and the correction of his doubt. This miracle served as a powerful witness to the Real Presence of Christ in the Eucharist and was preserved in the oral and written traditions of the desert communities.`,

  scientificEvidence: [
    "Account preserved in the Apophthegmata Patrum (Sayings of the Desert Fathers), ancient collection compiled 4th-5th centuries",
    "Story appears in multiple manuscript traditions of the Desert Fathers' sayings",
    "Historical documentation of monastic communities in Scetis from 3rd century onward",
    "Archaeological evidence of extensive monastic settlements in Wadi El Natrun region",
    "Four ancient monasteries in Wadi El Natrun continue in use today, maintaining connection to early desert tradition"
  ],

  witnessTestimonies: [
    {
      name: "The Doubting Monk",
      role: "Hard-working but uneducated monk who questioned the Real Presence",
      testimony: "Initially declared 'The Bread we receive is not really the Body of Christ, but is a symbol of that Body'; after receiving flesh instead of bread, cried out 'Lord, I believe! The Bread is Your Body and Your Blood is in the chalice!' and immediately received bread as the flesh transformed"
    },
    {
      name: "Two Elder Monks",
      role: "Spiritually experienced monks who interceded for the doubting brother",
      testimony: "Decided to pray to God about the theological dispute, asking that divine truth would be revealed to settle the matter and convert the doubter"
    },
    {
      name: "The Monastic Community of Scetis",
      role: "Fellow monks present at the Divine Liturgy",
      testimony: "All except the doubting monk witnessed the vision of a child appearing in place of the Host, saw an angel with a sword pierce the child, and observed blood flowing into the chalice when the priest broke the Host"
    },
    {
      name: "The Priest Celebrant",
      role: "Monk-priest celebrating the Divine Liturgy",
      testimony: "Performed the liturgy during which the miraculous vision occurred; distributed Holy Communion, giving flesh to the doubter and bread to all others"
    }
  ],

  historicalContext: `The 3rd through 5th centuries witnessed the birth and rapid expansion of Christian monasticism, particularly in Egypt. Saint Anthony the Great (c. 251-356) is considered the father of monasticism, and his example inspired thousands to embrace the eremitical (hermit) life in the desert. Scetis (Wadi El Natrun), along with Nitria and Kellia, formed the three major centers of this movement in the Nitrian Desert of the northwestern Nile Delta. By the 4th and 5th centuries, hundreds of thousands of people from throughout the Christian world had joined the monastic communities in these locations. The desert monks developed a rich spiritual tradition, emphasizing prayer, manual labor, fasting, and spiritual warfare against demonic temptation. The Sayings of the Desert Fathers preserves their wisdom in short, pithy statements and stories that became foundational texts for all later Christian monasticism. This period also saw significant theological controversies in the broader Church, including debates about the nature of Christ and the Trinity. In this context, the Eucharistic miracle of Scete served as divine confirmation of orthodox teaching on the Real Presence, a doctrine that would remain central to Christian faith. The survival of ancient monasteries in Wadi El Natrun to the present day provides a living link to this foundational period of Christian spirituality.`,

  timeline: [
    { date: "c. 270-320", event: "Saint Anthony the Great's years in the Egyptian desert, establishing model for monastic life" },
    { date: "c. 330", event: "Saint Macarius of Egypt establishes solitary monastic site in Scetis (Wadi El Natrun)" },
    { date: "c. 330-338", event: "Growth of monastic settlements in Scetis, Nitria, and Kellia regions" },
    { date: "338", event: "Saint Amun founds Kellia under spiritual guidance of Saint Anthony" },
    { date: "4th-5th centuries", event: "Golden age of desert monasticism; Eucharistic miracle of the doubting monk occurs in Scetis community" },
    { date: "4th-5th centuries", event: "Oral tradition of Desert Fathers' sayings develops, including account of Eucharistic miracle" },
    { date: "Late 5th-6th centuries", event: "Apophthegmata Patrum (Sayings of the Desert Fathers) compiled in written form" },
    { date: "7th century onward", event: "Arab conquest of Egypt; monastic communities decline but four monasteries in Wadi El Natrun survive" },
    { date: "Present", event: "Four ancient Coptic Orthodox monasteries continue active monastic life in Wadi El Natrun" }
  ]
});

// Avignon, 1433 (France)
updateMiracle('miracle-16', {
  fullDescription: `The Eucharistic miracle of Avignon occurred during a catastrophic natural disaster in the year 1433. The miracle took place in the Chapel of the Holy Cross, which served as the seat of a pious confraternity known as the "Gray Penitents." This confraternity traced its origins to the devout King Louis VIII of France, who in 1226 had organized a solemn act of reparation on September 14, the liturgical feast of the Exaltation of the Cross, to celebrate his victory over the Albigensian heretics who denied the Real Presence of Jesus in the Eucharist. The founding of the Gray Penitents was thus intimately connected with defense of the doctrine of the True Presence from its very beginning.

On November 30, 1433, the Blessed Sacrament was exposed in a monstrance for perpetual adoration in the Gray Penitents' chapel. That same day, disaster struck when the Rodano River, which flows through Avignon, suddenly overflowed its banks in a devastating flood. The waters rose rapidly, inundating the city and threatening to destroy everything in their path, including the small chapel where the Holy Eucharist was exposed for adoration.

Amidst the chaos and danger, two members of the Gray Penitents, Armand and Jehan de Pourzillhac-Fature, became desperately concerned for the safety of the consecrated Host. Jehan served as the head of the confraternity at that time. Despite the enormous risk to their own lives, these two brave men struggled through the floodwaters, eventually obtaining a boat and rowing with great difficulty toward the chapel. They feared they would find the altar destroyed and the sacred Host swept away by the surging waters.

When they finally reached the chapel and entered, however, they witnessed an extraordinary sight that left them awestruck. The floodwaters, which had risen to a depth of almost six feet inside the building, had divided to the right and left of the altar, forming two standing walls of water reminiscent of the parting of the Red Sea in Exodus. In the space between these walls, the altar and the monstrance containing the Blessed Sacrament remained completely dry and untouched. The water had literally parted to avoid contact with the Real Presence of Christ.

News of this miraculous event spread rapidly throughout the flooded city. For several days the miracle was maintained, with the waters continuing to part around the altar even as the flood persisted. Several hundred residents of Avignon, despite the dangers and difficulties caused by the flooding, made their way to the chapel to witness the miracle with their own eyes. The population, together with civil and religious authorities, gathered at the site singing hymns of praise and thanksgiving to the Lord for this visible sign of His power and presence. The miracle served as a powerful vindication of the Real Presence of Christ in the Eucharist, the very doctrine for which the Gray Penitents' confraternity had been founded two centuries earlier.`,

  scientificEvidence: [
    "Historical records documenting the Rodano River flood of November 30, 1433, in Avignon",
    "Eyewitness accounts from several hundred residents of Avignon who visited the chapel during the days the miracle persisted",
    "Documentation from both civil and ecclesiastical authorities of Avignon confirming the event",
    "Physical evidence: the Chapel of the Holy Cross (Chapelle des Pénitents Gris) still exists in Avignon",
    "Continuous annual commemoration of the miracle every November 30th at the chapel from 1433 to present day",
    "Records from the Gray Penitents confraternity archives describing the event"
  ],

  witnessTestimonies: [
    {
      name: "Jehan de Pourzillhac-Fature",
      role: "Head of the Gray Penitents confraternity in 1433",
      testimony: "Together with Armand, struggled by boat through dangerous floodwaters to reach the chapel; witnessed the waters divided in two walls on either side of the altar, with the monstrance and altar remaining completely dry despite six feet of water in the chapel"
    },
    {
      name: "Armand de Pourzillhac-Fature",
      role: "Member of the Gray Penitents confraternity",
      testimony: "Accompanied Jehan to rescue the Blessed Sacrament; witnessed the miraculous parting of the floodwaters around the altar and monstrance"
    },
    {
      name: "Several Hundred Citizens of Avignon",
      role: "Residents who visited the chapel during the days following November 30, 1433",
      testimony: "Witnessed the miracle maintained over several days, with floodwaters consistently parting to avoid the altar where the Blessed Sacrament was exposed"
    },
    {
      name: "Civil and Religious Authorities of Avignon",
      role: "Officials who investigated and documented the miracle",
      testimony: "Came to the chapel site to verify the miracle, led the population in hymns of praise and thanksgiving, and created official records of the event"
    }
  ],

  historicalContext: `The 15th century was a tumultuous period in French and European history. Avignon held special significance in Church history, having served as the papal residence during the "Avignon Papacy" (1309-1377) when seven successive popes resided there instead of Rome. The Western Schism that followed (1378-1417) had only recently been resolved, and the Church was still recovering from this period of division. France was embroiled in the Hundred Years' War with England (1337-1453), which brought widespread devastation. In this context of political and religious upheaval, Eucharistic devotion provided stability and hope to the faithful. The Gray Penitents confraternity represented a tradition of lay piety focused on penance, works of mercy, and Eucharistic adoration. Their founding was connected to King Louis VIII's 1226 victory over the Albigensian (Cathar) heretics, who had rejected the Real Presence and other Catholic doctrines. The 1433 miracle thus carried special significance as divine vindication of orthodox teaching against heresy, occurring in a chapel specifically dedicated to defending this doctrine. The miraculous parting of the waters echoed the biblical account of the Exodus, suggesting God's continuing intervention in salvation history to protect and honor the Blessed Sacrament.`,

  timeline: [
    { date: "1226", event: "King Louis VIII organizes act of reparation on September 14 (Feast of Exaltation of the Cross) celebrating victory over Albigensian heretics" },
    { date: "c. 1226", event: "Foundation of the Gray Penitents confraternity and their chapel in Avignon" },
    { date: "1309-1377", event: "Avignon Papacy period, when Avignon serves as papal residence" },
    { date: "November 30, 1433", event: "Blessed Sacrament exposed for adoration in Chapel of the Holy Cross" },
    { date: "November 30, 1433", event: "Rodano River floods, inundating Avignon with waters rising six feet inside the chapel" },
    { date: "November 30, 1433", event: "Armand and Jehan de Pourzillhac-Fature row through flood to reach chapel, discover waters parted around altar and monstrance" },
    { date: "November 30 - early December, 1433", event: "Miracle maintained for several days; hundreds of witnesses visit the chapel" },
    { date: "November 30, 1433 onward", event: "Annual commemoration of the miracle established at the Chapel of the Holy Cross" },
    { date: "Present", event: "Gray Penitents continue to gather at Chapelle des Pénitents Gris every November 30 to celebrate the miracle's anniversary" }
  ]
});

console.log('✓ Batch 2A: Added 5 miracles (Belgium, Egypt, France)');

fs.writeFileSync('public/miracles.json', JSON.stringify(data, null, 2));
