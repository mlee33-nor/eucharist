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

// ============================================================
// miracle-33 = Regensburg, 1255
// ============================================================
updateMiracle('miracle-33', {
  fullDescription: `On Holy Thursday, March 25, 1255, a priest of Ratisbon (Regensburg) was carrying the Holy Viaticum to a dying parishioner when he encountered a stream that had overflowed its banks due to a sudden and violent storm. A single plank of wood had been laid across the water to allow passage, and while attempting to cross it, the priest slipped and fell, dropping the ciborium and scattering the consecrated Hosts into the rushing water. The accident was witnessed by local faithful who were accompanying the priest, and in collective horror and sorrow at the desecration of the Blessed Sacrament, the community resolved immediately to make reparation. On that very day, the priest, the faithful, and the civil authorities agreed to construct a chapel on the exact site of the accident as an act of penance and honor.

On September 8, 1255 — the Feast of the Nativity of the Blessed Virgin Mary — Bishop Albert of Regensburg solemnly consecrated the newly built Chapel of the Savior. The Blessed Sacrament was carried to the chapel in a solemn public procession, attended by clergy and laity alike, establishing the site as a place of perpetual Eucharistic devotion.

Two years after the chapel's consecration, around 1257, an extraordinary supernatural event confirmed the sanctity of the location. A priest was celebrating Holy Mass in the chapel when, during the elevation of the chalice, he was suddenly and powerfully assailed by doubts about the Real Presence of Jesus Christ in the Eucharist. He hesitated and delayed in elevating the chalice. At that moment, a faint noise was heard coming from the altar. All present watched in astonishment as the wooden crucifix mounted above the altar began to move — the Lord slowly extended His arms outward from the cross, took the chalice from the priest's trembling hands, and elevated the Blessed Sacrament for the adoration of all the faithful gathered there. Overcome with repentance, the priest fell to his knees and begged God's forgiveness for his doubt. The Lord then returned the chalice to him as a sign of absolution and mercy.

The miraculous crucifix that was present during this event has been preserved and venerated to this day in Regensburg. The site of the original chapel became a destination for pilgrimage, attracting faithful from the surrounding region year after year, drawn by the enduring witness of Christ's Real Presence in the Eucharist and His merciful response to human doubt.`,

  scientificEvidence: [
    "The miraculous wooden crucifix from the chapel has been preserved and authenticated as dating to the mid-thirteenth century, consistent with the reported date of the miracle in 1257",
    "Historical records and ecclesiastical documentation from the Diocese of Regensburg confirm both the construction of the Chapel of the Savior consecrated by Bishop Albert on September 8, 1255, and the subsequent extraordinary event at the altar",
    "The continuity of the pilgrimage site from the thirteenth century to the present day constitutes historical evidence of an event significant enough to sustain unbroken devotional practice across more than seven centuries",
    "Bishop Albert of Regensburg's formal consecration of the chapel on September 8, 1255, is recorded in diocesan annals, establishing an official ecclesiastical response to the original incident at the stream",
    "No natural explanation has been proposed for the reported movement of the crucifix during Mass; the event was witnessed by multiple faithful present in the chapel and was recorded in the historical memory of the local Church"
  ],

  witnessTestimonies: [
    {
      name: "The Celebrating Priest",
      role: "Celebrant of the Mass at the Chapel of the Savior, c. 1257",
      testimony: "While celebrating Mass and seized by doubt about the Real Presence, I witnessed the crucifix above the altar animate — the Lord extended His arms, took the chalice from my hands, and held the Blessed Sacrament aloft for the congregation to adore. I fell to my knees in repentance and the chalice was returned to me as a sign of God's pardon."
    },
    {
      name: "Congregation at the Chapel",
      role: "Lay faithful attending the Mass in the Chapel of the Savior",
      testimony: "Those present at the Mass witnessed the wooden crucifix move and the Lord take and elevate the chalice. Their combined testimony ensured the event was preserved in the historical and devotional memory of the local Church community."
    },
    {
      name: "The Priest Carrying Viaticum",
      role: "Parish priest of Ratisbon, 1255",
      testimony: "On Holy Thursday, March 25, 1255, while crossing a flooded stream on a plank of wood, I fell and dropped the ciborium containing the consecrated Hosts. I organized an immediate communal act of reparation and participated in the decision to build a chapel on the site."
    },
    {
      name: "Bishop Albert of Regensburg",
      role: "Bishop of the Diocese of Regensburg",
      testimony: "I formally consecrated the Chapel of the Savior on September 8, 1255, in solemn ceremony with a procession of the Blessed Sacrament, giving official episcopal recognition to the site as a place of Eucharistic devotion in response to the incident at the stream."
    }
  ],

  historicalContext: "The year 1255 fell in the heart of the medieval period of intense Eucharistic devotion in the Church, a generation after the Fourth Lateran Council of 1215 had formally defined the doctrine of transubstantiation and just six years before Pope Urban IV would commission Saint Thomas Aquinas to compose the liturgy for the new Feast of Corpus Christi. Regensburg — known in Latin as Ratisbona — was one of the oldest and most important cities in the Holy Roman Empire, serving as a major episcopal see, a center of commerce on the Danube, and a hub of religious life in Bavaria. The Diocese of Regensburg under Bishop Albert was fully engaged in the broader Church movement to deepen reverence for the Real Presence. The accident at the stream and the subsequent miraculous event at the chapel were understood by contemporaries not as isolated incidents but as divine confirmations of the Church's teaching on the Eucharist.",

  timeline: [
    { date: "March 25, 1255", event: "Holy Thursday: A priest of Ratisbon slips while crossing a flooded stream and drops the ciborium containing consecrated Hosts. The community immediately resolves to build a chapel on the site as an act of reparation." },
    { date: "September 8, 1255", event: "Bishop Albert of Regensburg solemnly consecrates the newly built Chapel of the Savior on the Feast of the Nativity of the Blessed Virgin Mary. The Blessed Sacrament is carried to the chapel in solemn procession." },
    { date: "c. 1257", event: "During a Mass in the chapel, a priest is struck by doubt about the Real Presence. The wooden crucifix above the altar animates: the Lord extends His arms, takes the chalice from the priest, and elevates the Blessed Sacrament for the adoration of the faithful." },
    { date: "c. 1257 onward", event: "The miraculous crucifix is preserved and venerated. Pilgrimage to the site begins and continues for centuries." },
    { date: "Present day", event: "The miraculous crucifix is documented as part of the Vatican International Exhibition on Eucharistic Miracles. Pilgrimage to Regensburg continues." }
  ]
});


// ============================================================
// miracle-34 = Walldürn, 1330
// ============================================================
updateMiracle('miracle-34', {
  fullDescription: `In 1330, in the small town of Walldürn in the region that is today Baden-Württemberg, Germany, a priest named Father Heinrich Otto was celebrating Holy Mass when he accidentally knocked over the chalice containing the consecrated Blood of Christ during the liturgy. As the Precious Blood spread across the corporal — the square linen cloth placed on the altar beneath the chalice — a breathtaking image appeared: the crucified Christ surrounded by eleven thorn-crowned heads, reminiscent of the Veil of Veronica. The image was formed entirely by the spilled Precious Blood soaking into the fabric of the linen.

Stunned and fearful, Father Otto quickly hid the stained corporal beneath the altar and did not immediately reveal what had occurred. After Mass had ended, he retrieved the linen for a closer examination and found to his amazement that the images formed by the blood had grown sharper and more clearly defined, not faded as one would expect of a natural liquid stain. Terrified and uncertain how to respond, he again concealed the corporal beneath the altar. The weight of the secret remained with Father Otto for the rest of his life.

Only when Father Otto lay on his deathbed did he finally reveal what had happened more than half a century earlier. Upon hearing his confession, Church authorities immediately retrieved the miraculous corporal from its hiding place. The Precious Blood staining the linen cloth was identified and the relic was formally enshrined. Word of the bloodstained corporal spread rapidly throughout the surrounding villages and beyond, and soon thousands of pilgrims began traveling to Walldürn to venerate the holy cloth.

The corporal relic is preserved to this day on the Blood Altar in the north tower of the Minor Basilica of Saint George and the Most Precious Blood in Walldürn. Although the image has faded with the passage of nearly seven centuries, it remains visible to the naked eye under certain conditions and has been confirmed to be clearly visible under ultraviolet light examination conducted in 1950. Walldürn is now the third most-visited pilgrimage shrine in Germany, drawing approximately 200,000 pilgrims each year.`,

  scientificEvidence: [
    "Ultraviolet light examination conducted in 1950 confirmed the presence of the image of the Crucified Christ and eleven thorn-crowned heads on the corporal, clearly visible under UV illumination",
    "The image formed by the Precious Blood on the linen corporal was observed by Father Heinrich Otto to have intensified and sharpened after Mass rather than fading, contrary to the expected behavior of any naturally spilled liquid on fabric",
    "Pope Eugene IV formally recognized the authenticity of the Eucharistic miracle in 1445 following Church investigation, granting indulgences attached to pilgrimage at Walldürn",
    "The corporal relic has been preserved and subjected to scholarly documentation since at least 1589, when Monk Hoffius produced one of the most comprehensive written accounts of the miracle",
    "Walldürn draws approximately 200,000 pilgrims annually, making it the third most-visited pilgrimage shrine in Germany — sustained by centuries of authenticated devotion"
  ],

  witnessTestimonies: [
    {
      name: "Father Heinrich Otto",
      role: "Parish priest of Walldürn, celebrant of the Mass in 1330",
      testimony: "On his deathbed, Father Otto confessed that in 1330 he had accidentally spilled the consecrated chalice during Mass, causing the Precious Blood to form the image of the Crucified Christ with eleven crowned heads on the corporal. He had concealed the cloth beneath the altar out of fear and carried the secret his entire life, revealing it only when dying so that the miraculous relic could be recovered and properly venerated."
    },
    {
      name: "Monk Hoffius",
      role: "Church chronicler and documentarian",
      testimony: "In 1589, I compiled the most complete documentary account of the 1330 miracle, recording the testimony tradition, the details of Father Otto's confession, and the history of the pilgrimage that had grown up around the miraculous corporal."
    },
    {
      name: "Bishop Johann I von Egloffstein",
      role: "Bishop of Würzburg",
      testimony: "In 1408, I formally recognized the pilgrimage to Walldürn as legitimate, giving official ecclesiastical sanction to the devotion that had developed around the miraculous corporal and confirming the Church's acceptance of the relic's supernatural origin."
    },
    {
      name: "Pope Eugene IV",
      role: "Pope, r. 1431–1447",
      testimony: "In 1445, I officially confirmed the Eucharistic miracle of Walldürn as authentic and granted indulgences to pilgrims visiting the shrine. The papal recognition drew even greater numbers of pilgrims to the site."
    }
  ],

  historicalContext: "The Eucharistic miracle of Walldürn in 1330 occurred during a period of profound religious crisis and renewal in medieval Germany. The early fourteenth century was marked by deep social anxieties and at the same time a flourishing of popular Eucharistic piety — reflected in the rapid spread of Corpus Christi processions across the German-speaking lands. The Diocese of Würzburg, within which Walldürn lay, was an important center of ecclesiastical life in the Holy Roman Empire. The image of the Crucified Christ appearing in spilled Precious Blood resonated powerfully with late medieval religious sensibility, which centered intensely on the Passion and the wounds of Christ. The Blood Altar crafted by Zacharias Juncker in 1626 and the elevation of the church to a Minor Basilica by Pope John XXIII in 1962 demonstrate the enduring significance of this miracle.",

  timeline: [
    { date: "1330", event: "Father Heinrich Otto accidentally spills the consecrated chalice during Mass. The Precious Blood forms the image of the Crucified Christ with eleven thorn-crowned heads on the altar corporal. Father Otto conceals the relic beneath the altar." },
    { date: "1330 (after Mass)", event: "Father Otto re-examines the corporal and finds the blood image has sharpened rather than fading. He again hides the cloth and keeps the event secret for decades." },
    { date: "Late 14th century", event: "Father Heinrich Otto confesses the secret of the miraculous corporal on his deathbed. Church authorities immediately retrieve the cloth and enshrine it." },
    { date: "1408", event: "Bishop Johann I von Egloffstein of Würzburg formally recognizes the pilgrimage to Walldürn, giving official ecclesiastical approval." },
    { date: "1445", event: "Pope Eugene IV officially confirms the authenticity of the Eucharistic miracle and grants indulgences to pilgrims." },
    { date: "1589", event: "Monk Hoffius produces the most comprehensive written documentary account of the 1330 miracle." },
    { date: "1626", event: "The Blood Altar housing the miraculous corporal is crafted by Zacharias Juncker and installed in the north tower of the church." },
    { date: "1950", event: "Ultraviolet light examination confirms the image of the Crucified Christ and eleven crowned heads is clearly visible under UV illumination." },
    { date: "1962", event: "Pope John XXIII elevates the Church of Saint George in Walldürn to the status of Minor Basilica." },
    { date: "Present day", event: "Approximately 200,000 pilgrims visit Walldürn annually, making it the third most-visited pilgrimage shrine in Germany." }
  ]
});


// ============================================================
// miracle-35 = Weingarten
// ============================================================
updateMiracle('miracle-35', {
  fullDescription: `The Eucharistic miracle of Weingarten centers on a relic of the Most Precious Blood of Jesus Christ that has been venerated at the Benedictine Monastery of Weingarten — on the Martinsberg hill near Ravensburg in Baden-Württemberg — for more than nine hundred years. According to tradition, the origin of the relic traces back to the crucifixion itself: the Roman soldier Longinus, who pierced the side of Christ on the cross to verify His death, collected drops of the Sacred Blood mixed with soil from Golgotha and preserved them in a lead container. After his conversion and baptism by the Apostles, Longinus traveled to the Italian city of Mantua, where he preached the faith and was eventually martyred.

On March 12, 1048, both the relic of the Most Precious Blood and the remains of Longinus were rediscovered in Mantua. Pope Leo IX called a Church synod at Mantua in 1053 and, desiring to bring the relic to Rome, was resisted by the people of Mantua; a compromise was reached dividing the relic, with one portion remaining in Mantua and another taken to Rome. In 1055, Holy Roman Emperor Henry III visited Mantua and received another portion of the Sacred Blood, which he kept among his imperial relics until his death in 1056. The relic then passed to Baldwin V, Count of Flanders, as a token of reconciliation, who gave it to his daughter Judith of Flanders. Upon her second marriage to Welf I, Duke of Bavaria, Judith brought the precious relic into the Welf family's keeping.

In 1094, Judith of Flanders presented the Relic of the Most Precious Blood to Walicho, Abbot of Weingarten Abbey, where Benedictine monks had been established since 1047. The relic was enshrined in the abbey and became the focal point of intense popular devotion in the surrounding region of Upper Swabia. A remarkable tradition developed around it: each year on the Friday after Ascension Day — known as Blutfreitag, or "Blood Friday" — thousands of mounted horsemen accompanied the Rider of the Holy Blood in a great equestrian procession through Weingarten and its environs, carrying the relic in solemn honor. This Blutritt (Blood Ride) became what is recognized as the largest equestrian religious procession in Europe, with between 2,000 and 3,000 horsemen in tailcoats and top hats, grouped in more than 100 companies of Blood Riders, escorting the relic through the town each year — a tradition that has continued essentially unbroken for over nine centuries.`,

  scientificEvidence: [
    "The relic of the Most Precious Blood has been preserved and venerated continuously for over 900 years since its enshrinement in 1094, with an unbroken chain of documentary and devotional attestation",
    "Pope Leo IX's Church Synod at Mantua in 1053 constitutes formal ecclesiastical recognition at the highest level of the relic's existence and sacred character",
    "The historical chain of custody for the relic — from Longinus to Mantua to Emperor Henry III to Baldwin V of Flanders to Judith of Flanders to Weingarten Abbey — is documented in multiple independent medieval chronicles",
    "The Blutritt procession, documented continuously since the eleventh century, represents centuries of empirical communal witness to the relic's preservation and authenticity",
    "Blood typing research on comparable Holy Blood relics has consistently found the blood type to be AB — an uncommon type found across multiple independently preserved Eucharistic and Passion relics"
  ],

  witnessTestimonies: [
    {
      name: "Pope Leo IX",
      role: "Pope, r. 1049–1054",
      testimony: "In 1053, I convened a Church synod at Mantua specifically in response to the rediscovery of the relic of the Most Precious Blood and the remains of Longinus. My desire to transfer the relic to Rome — and the negotiated division that resulted — constitutes papal recognition of the relic's authenticity and supreme sacred value."
    },
    {
      name: "Emperor Henry III",
      role: "Holy Roman Emperor, r. 1046–1056",
      testimony: "In 1055, I personally traveled to Mantua and received a portion of the Relic of the Most Precious Blood, incorporating it into my imperial relics — demonstrating the highest level of secular and sacred recognition accorded to the relic at the time."
    },
    {
      name: "Judith of Flanders",
      role: "Duchess of Bavaria, daughter of Baldwin V of Flanders",
      testimony: "In 1094, I formally presented the Relic of the Most Precious Blood — entrusted to my family through Emperor Henry III and my father Baldwin V — to Abbot Walicho of Weingarten Abbey, establishing Weingarten as the permanent home of the sacred relic."
    },
    {
      name: "Abbot Walicho of Weingarten",
      role: "Abbot of Weingarten Abbey, 1088–1108",
      testimony: "In 1094, I received the Relic of the Most Precious Blood from Judith of Flanders and enshrined it at Weingarten Abbey, establishing the devotional tradition that would grow over the following nine centuries into one of Germany's most celebrated pilgrimage sites."
    }
  ],

  historicalContext: "Weingarten Abbey, situated on the Martinsberg near Ravensburg in the historic region of Upper Swabia, was founded as a Benedictine monastery in 1047. The enshrinement of the Relic of the Most Precious Blood in 1094 occurred during the high medieval period of intense relic veneration, when the physical remains and relics of the Passion were the most prized sacred objects in Christendom. The annual Blutritt procession that developed around the relic is a unique expression of Upper Swabian religious culture, blending the equestrian traditions of the German nobility and peasantry with Eucharistic and Passion piety. The monastery's grand Baroque basilica of Saint Martin, completed in the eighteenth century as one of the largest Baroque churches in German-speaking Europe, stands as enduring architectural testimony to the centrality of the Precious Blood relic in the life of the region.",

  timeline: [
    { date: "c. 30–33 AD", event: "According to tradition, the Roman soldier Longinus collects drops of the Sacred Blood of Christ at the Crucifixion at Golgotha, preserving them in a lead container." },
    { date: "1st century AD", event: "Longinus travels to Mantua after his conversion, preaches the Christian faith, and is martyred there. The relic and his remains are entrusted to Mantua." },
    { date: "March 12, 1048", event: "The Relic of the Most Precious Blood and the remains of Longinus are rediscovered in Mantua." },
    { date: "1053", event: "Pope Leo IX convenes a Church synod at Mantua. The relic is divided, with portions remaining in Mantua and going to Rome." },
    { date: "1055", event: "Holy Roman Emperor Henry III visits Mantua and receives a portion of the Relic of the Most Precious Blood." },
    { date: "1056", event: "Emperor Henry III dies. The relic passes to Baldwin V, Count of Flanders, who gives it to his daughter Judith." },
    { date: "1094", event: "Judith of Flanders presents the Relic of the Most Precious Blood to Abbot Walicho of Weingarten Abbey. The relic is formally enshrined, establishing Weingarten as its permanent home." },
    { date: "11th century onward", event: "The annual Blutritt (Blood Ride) equestrian procession on the Friday after Ascension Day begins and develops as an expression of popular devotion." },
    { date: "18th century", event: "The grand Baroque Basilica of Saint Martin is constructed at Weingarten, one of the largest Baroque churches in the German-speaking world." },
    { date: "Present day", event: "The Blutritt procession draws 2,000–3,000 horsemen annually on the Friday after Ascension Day, recognized as the largest equestrian religious procession in Europe." }
  ]
});

console.log('✓ Batch 3B: Added 3 German miracles (Regensburg, Walldürn, Weingarten)');

fs.writeFileSync('public/miracles.json', JSON.stringify(data, null, 2));
