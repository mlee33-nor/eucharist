const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/miracles.json', 'utf8'));
function updateMiracle(id, updates) {
  const miracle = data.find(m => m.id === id);
  if (miracle) { Object.assign(miracle, updates); return true; }
  return false;
}

updateMiracle('miracle-62', {
  fullDescription: `In 1948, at the Benedictine Monastery of Santa Maria in Rosano, near Pelago in the province of Florence, Tuscany, an extraordinary series of events occurred that would come to be recognized as a Eucharistic miracle. A life-size statue of the Sacred Heart of Jesus, which had been donated to the monastery that very year by a devout benefactor fulfilling a vow made during the Second World War, began to bleed and weep on multiple separate occasions. The phenomena drew immediate attention from both the monastic community and local Church authorities.

Medical investigations were promptly conducted on the blood and fluid that appeared on the statue. Laboratory analyses confirmed that the substance was authentic human blood, a finding that could not be accounted for by any natural cause. The monastery's Benedictine nuns, who had been present during multiple episodes, testified consistently to the spontaneous and inexplicable nature of the phenomena. The events did not arise from any mechanical device or external tampering.

The monastery of Rosano has roots going back to the 11th century and has been continuously inhabited by Benedictine nuns, making it one of the oldest active female monastic communities in Tuscany. The post-war setting of 1948 — a period of widespread poverty, social upheaval, and spiritual seeking across Italy following the devastation of the conflict — gave the events a particularly resonant significance for the local faithful. The miracle was understood as a sign of divine consolation and the real, suffering presence of Christ in the Eucharist and in Catholic devotion.

The relic and the statue remain venerated at the Rosano monastery to this day. The miracle is included in the Vatican International Exhibition of Eucharistic Miracles of the World, compiled under the spiritual patronage of Blessed Carlo Acutis.`,
  scientificEvidence: [
    "Medical laboratory analysis confirmed that the substance emanating from the statue was authentic human blood, with no mechanical or artificial explanation found for its origin",
    "Multiple independent examinations of the blood produced consistent results, ruling out fraud, contamination, or natural secretion from the statue's materials",
    "The phenomena occurred on several distinct occasions, each witnessed by members of the Benedictine community, lending corroborating testimony to the repeated and spontaneous nature of the events"
  ],
  witnessTestimonies: [
    { name: "Benedictine Community of Rosano", role: "Cloistered nuns of the Monastery of Santa Maria", testimony: "The nuns were present during multiple episodes in which the statue of the Sacred Heart bled and wept. Their collective and independent accounts were consistent in describing the spontaneous appearance of blood and tears, with no human intervention responsible for the phenomena." },
    { name: "Devout Benefactor (unnamed)", role: "Donor who offered the statue fulfilling a wartime vow", testimony: "The statue had been donated in fulfillment of a vow made to God during the Second World War for protection received. The donor's act of piety preceded the miraculous events and was cited as part of the devotional context in which the phenomena occurred." }
  ],
  historicalContext: "The year 1948 was a period of profound reconstruction and spiritual renewal in Italy. The country had emerged from the devastation of World War II and was rebuilding its social and moral fabric. The Benedictine Monastery of Rosano, founded in the 11th century near Florence, had long served as a center of contemplative life in Tuscany. The appearance of a miraculous sign through an object donated as a thank-offering for wartime protection resonated deeply with a population seeking consolation and hope.",
  timeline: [
    { date: "1948", event: "A devout benefactor donates a life-size statue of the Sacred Heart of Jesus to the Monastery of Santa Maria in Rosano, fulfilling a promise made during World War II" },
    { date: "1948", event: "The statue begins to bleed and weep on multiple occasions, witnessed by the Benedictine nuns of the monastery" },
    { date: "1948", event: "Medical analyses confirm the substance is authentic human blood with no natural explanation" },
    { date: "2000s", event: "The miracle is catalogued by Blessed Carlo Acutis in the Vatican International Exhibition of Eucharistic Miracles of the World" }
  ]
});

updateMiracle('miracle-63', {
  fullDescription: `In the eleventh century, during the lifetime and ministry of Saint Peter Damian (c. 1007–1072), a remarkable Eucharistic miracle took place in Italy that he personally documented and recounted. A woman, having given in to a grave temptation, agreed to obtain a consecrated Host for a sorceress who intended to use the Sacred Species in acts of sorcery. The woman attended Mass and, at the moment of Communion, received the Host but instead of consuming it, concealed it in a handkerchief, intending to carry it away.

A priest who was present at the Mass observed what the woman had done and immediately pursued her, successfully retrieving the handkerchief containing the hidden Host. When he unfolded the white linen cloth to examine its contents, he was confronted with an astonishing sight: the consecrated Host had been visibly transformed. Half of the Host had taken on the unmistakable visible form of the Body of Christ, while the other half retained the ordinary appearance of bread, preserving the white, round form of the wafer as it had been at Consecration.

Saint Peter Damian, who recorded this account, interpreted the miracle as a divine response to the growing threat of unbelief and heresy concerning the Eucharist. God, he wrote, had allowed this sign so that doubters and adversaries of the Church's teaching on the Real Presence could not escape the visible evidence of what the Eucharistic transformation truly effected: in one half, Christ's body was made manifest; in the other, the physical form remained, illustrating the mystery of transubstantiation in an unmistakably concrete way.

Saint Peter Damian himself was one of the most formidable figures of 11th-century Church reform, a Benedictine monk, cardinal, Doctor of the Church, and personal friend and advisor to multiple popes. His written account of this miracle has ensured its preservation across nearly a millennium, and it stands as one of the earliest documented Eucharistic miracles of the medieval period in Italy.`,
  scientificEvidence: [
    "The Host underwent a physical, visible transformation: one half took on the appearance of human flesh (the Body of Christ), while the other half retained the normal form of a consecrated wafer, witnessed directly by the priest who recovered it",
    "The transformation was instantaneous and occurred within the confines of a handkerchief, with no possibility of human manipulation between the moment of concealment and recovery",
    "Saint Peter Damian's written documentation, produced within the same century, constitutes the primary historical record and has never been credibly disputed as a fabrication by subsequent ecclesiastical or scholarly review"
  ],
  witnessTestimonies: [
    { name: "The Priest (unnamed)", role: "Celebrant or assistant at the Mass where the Host was taken", testimony: "The priest observed the woman concealing the Host during Communion and pursued her immediately. Upon recovering the handkerchief and unfolding it, he witnessed directly that half the Host had become the visible Body of Christ while the other half remained in the form of bread." },
    { name: "Saint Peter Damian", role: "Benedictine monk, Cardinal, Doctor of the Church (c. 1007–1072)", testimony: "Peter Damian recorded this miracle in his writings as evidence of the Real Presence of Christ in the Eucharist, stating that God had permitted this visible sign so that unbelievers and heretics might be confronted with the truth of transubstantiation." }
  ],
  historicalContext: "The 11th century was a period of intense ecclesiastical reform and theological controversy in Western Christianity. Saint Peter Damian was at the center of efforts to purify the Church from simony, clerical immorality, and doctrinal laxity, working alongside Pope Leo IX and the broader Gregorian Reform movement. Eucharistic theology was under particular scrutiny, as the heresy of Berengar of Tours, who denied the Real Presence of Christ in the Eucharist, was gaining attention across Europe. Peter Damian's documentation of Eucharistic miracles was part of a deliberate effort to strengthen the faith of ordinary believers and to confront heretics with tangible evidence of the Church's central Eucharistic doctrine.",
  timeline: [
    { date: "c. 1007", event: "Saint Peter Damian is born in Ravenna, Italy" },
    { date: "c. 1050", event: "The miracle occurs during Peter Damian's active ministry; a woman attempts to steal a consecrated Host for use in sorcery. A priest recovers the Host and witnesses the transformation — half appears as the Body of Christ, half retains the form of bread" },
    { date: "c. 1050", event: "Saint Peter Damian documents and publicizes the miracle in his writings as evidence of the Real Presence" },
    { date: "1072", event: "Saint Peter Damian dies; his writings, including the account of this miracle, are preserved by the Church" },
    { date: "1828", event: "Saint Peter Damian is declared a Doctor of the Church by Pope Leo XII" }
  ]
});

updateMiracle('miracle-64', {
  fullDescription: `In 1517, in the village of Salzano in the Veneto region of northeastern Italy, an event took place during the carrying of the Viaticum to a dying person that was preserved in local memory and ecclesiastical records as a Eucharistic miracle. A priest received an urgent summons to bring Holy Communion — the Viaticum — to a gravely ill parishioner who was near death. Given the inconvenient hour and the season, conditions were not appropriate for a formal public procession with the Blessed Sacrament; the priest therefore set out accompanied only by a single altar boy.

As the small procession made its way across the meadows bordering the Muson River, a group of donkeys that were grazing in the fields suddenly turned to face the approaching priest. Remarkably, the animals moved toward him and one by one knelt on their forelegs before the Blessed Sacrament he was carrying. After this act of apparent adoration, the donkeys rose and fell into line behind the priest, accompanying him the entire distance to the home of the dying person. Upon arrival, the donkeys renewed their genuflection before the door of the house, again bowing to the Eucharist. When the priest had administered the Viaticum and prepared to return to the church, the donkeys once more fell in procession behind him and accompanied him back before quietly returning to their pasture.

The event was interpreted by the faithful of Salzano and by Church authorities as a striking sign of Christ's Real Presence in the Eucharist — an echo of the famous miracle associated with Saint Anthony of Padua, where a mule knelt before the Blessed Sacrament. The miracle was duly recorded and has been included in the Vatican International Exhibition of Eucharistic Miracles of the World.

The miracle of Salzano belongs to a recognized category of Eucharistic signs in which animals — incapable of reason or religious conditioning — demonstrate what human witnesses described as instinctive reverence for the Eucharistic presence of Christ. The event occurred in 1517, the same year Martin Luther published his 95 Theses, at a moment when the doctrine of the Real Presence was entering a period of heated Protestant challenge across Europe.`,
  scientificEvidence: [
    "The behavior of the donkeys — spontaneously kneeling, following the priest carrying the Eucharist, and refusing to disperse until the return journey was complete — was witnessed by the priest and altar boy and recorded in Church documents; no natural behavioral explanation accounts for coordinated, repeated kneeling by multiple animals",
    "The event was documented in local ecclesiastical records of the Diocese of Venice with no credible counter-explanation produced in the subsequent five centuries",
    "The miracle parallels a recognized pattern in Eucharistic tradition (cf. the miracle of Saint Anthony of Padua, where a mule knelt before the Eucharist), lending it typological consistency with other documented cases of animal response to the Blessed Sacrament"
  ],
  witnessTestimonies: [
    { name: "Parish Priest of Salzano (unnamed)", role: "Celebrant carrying the Viaticum to the dying parishioner", testimony: "The priest witnessed the donkeys turn toward him as he carried the Blessed Sacrament, approach him, and kneel. They then followed him to the home of the sick person, knelt again at the threshold, and accompanied him on the return journey. His account formed the basis of the Church's documentation of the event." },
    { name: "Altar Boy (unnamed)", role: "The sole server accompanying the priest on the Viaticum call", testimony: "The young server accompanied the priest and witnessed the same sequence of events: the donkeys kneeling, following the procession, kneeling again at the house of the dying person, and then returning with the priest. His testimony corroborated the priest's account." }
  ],
  historicalContext: "The year 1517 was one of the most consequential in the history of Christianity. Martin Luther's publication of the 95 Theses in October of that year launched the Protestant Reformation, which would within decades challenge the Catholic doctrine of the Real Presence at its foundations. In the Veneto region of Italy, Catholic faith was deeply rooted and Eucharistic devotion was a cornerstone of popular piety. The miracle of Salzano, occurring in this same pivotal year, was experienced by the local faithful as a providential confirmation of the truth that the Church was about to defend in the great controversies of the Reformation.",
  timeline: [
    { date: "1517", event: "A priest is called urgently to bring the Viaticum to a dying parishioner in Salzano, Veneto; he sets out with only one altar boy" },
    { date: "1517", event: "While crossing the meadows near the Muson River, grazing donkeys turn toward the priest, kneel before the Blessed Sacrament, and follow the procession to the home of the sick person" },
    { date: "1517", event: "The donkeys kneel again outside the home of the dying person and accompany the priest on his return before going back to the pasture" },
    { date: "1517", event: "Martin Luther publishes the 95 Theses, beginning the Protestant Reformation and its challenge to Catholic Eucharistic teaching — the miracle at Salzano occurs in the same year" },
    { date: "Post-1517", event: "The event is recorded in local ecclesiastical records of the Diocese of Venice and preserved in the tradition of the Veneto region" }
  ]
});

updateMiracle('miracle-65', {
  fullDescription: `On September 11, 1732, at the newly founded Monastery of the Most Holy Redeemer in Scala, in the Campania region of southern Italy, a series of extraordinary Eucharistic phenomena began that would continue for three consecutive months. The monastery had been established that same year by Venerable Sister Maria Celeste Crostarosa and Saint Alphonsus Maria de Liguori, who was then a young priest deeply devoted to the Eucharist. Every Thursday the Blessed Sacrament was solemnly exposed in the monastery chapel for public adoration.

Beginning on September 11, 1732, and recurring each Thursday for twelve weeks, the Host contained in the monstrance underwent visible transformations during Eucharistic exposition. Witnesses described seeing the Sacred Host appear blood-red, while images representing the instruments of the Passion of Christ became visible within or upon it. A nun present on September 18, 1732, recorded in writing that the Host showed "a hill surmounted with a cross, with the figure of the Crucified exceedingly bright," and that "the instruments of the Passion, especially the ladder and scourges, were clearly outlined." The Host, she wrote, appeared blood-red throughout the vision.

Among the witnesses to these recurring phenomena was Saint Alphonsus Maria de Liguori, later declared a Doctor of the Church, whose presence lends the events exceptional credibility and theological weight. Bishop Santoro, several nuns of the community, and other individuals also witnessed the appearances on different Thursdays over the course of the three months. The phenomena ceased as spontaneously as they had begun, leaving the assembled witnesses with a profound impression of the suffering humanity of Christ made present in the Eucharist.

The theological significance of the Scala miracle is considerable: the appearance of the instruments of the Passion within the Host during adoration was interpreted as a direct visual catechesis on the Eucharist as the perpetual re-presentation of Christ's sacrifice on Calvary. Saint Alphonsus would go on to found the Congregation of the Most Holy Redeemer (Redemptorists) on November 9, 1732 — just weeks after the miracle concluded — and his deep Eucharistic spirituality, shaped in part by what he had witnessed at Scala, became a hallmark of his congregation's charism.`,
  scientificEvidence: [
    "The visible transformation of the Host — becoming blood-red and displaying images of the Crucified Christ and instruments of the Passion — was observed by multiple independent witnesses on numerous separate occasions over three consecutive months, with descriptions recorded in writing by a nun on September 18, 1732",
    "The phenomena occurred consistently every Thursday during Eucharistic exposition over a twelve-week period, exhibiting a regularity that excluded random optical illusion; multiple witnesses including a bishop, nuns, and laypersons independently corroborated the appearances",
    "No natural mechanism — including refraction of light through the glass of the monstrance, contamination of the Host, or collective hallucination — has been proposed that adequately explains the consistent, detailed, multi-witnessed visual phenomena across a three-month period"
  ],
  witnessTestimonies: [
    { name: "Saint Alphonsus Maria de Liguori", role: "Priest, founder of the Redemptorists, Doctor of the Church (1696–1787)", testimony: "Saint Alphonsus was present during multiple Thursday expositions at which the miraculous appearances in the Host were observed. His witness to these events deepened his already intense Eucharistic devotion and contributed to the spiritual framework of his future congregation, which he founded at Scala on November 9, 1732." },
    { name: "Anonymous Nun of the Monastery", role: "Redemptoristine sister of the Monastery of the Most Holy Redeemer, Scala", testimony: "In a written record dated September 18, 1732, the nun described seeing the Host in the monstrance appear as a hill surmounted by a cross, with the figure of the Crucified Christ shining brightly. The instruments of the Passion — including the ladder and scourges — were clearly outlined in the Host, which appeared entirely blood-red." },
    { name: "Bishop Santoro", role: "Local bishop present during the expositions", testimony: "Bishop Santoro witnessed the appearances of the signs of the Passion in the Host during the Thursday expositions. His presence and testimony gave the events ecclesiastical authority and ensured their formal documentation." },
    { name: "Venerable Maria Celeste Crostarosa", role: "Co-foundress of the Monastery of the Most Holy Redeemer, Scala (1696–1755)", testimony: "Co-founder of the monastery with Saint Alphonsus, she was among those present during the miraculous expositions. Her founding vision for the community centered on contemplating the mysteries of Christ's Passion, and the miracle was understood as a divine confirmation of that charism." }
  ],
  historicalContext: "The year 1732 was a founding moment for two significant post-Tridentine institutions: the Redemptoristine nuns and the Congregation of the Most Holy Redeemer (Redemptorists). Both grew out of the collaboration between Maria Celeste Crostarosa and Alphonsus Liguori at Scala, a small mountain town in Campania near Amalfi. The 18th century was an era of Enlightenment rationalism and growing religious skepticism, making miraculous signs and Eucharistic devotion focal points of Catholic apologetics. Saint Alphonsus, who witnessed the Scala miracle, would become one of the most prolific defenders of the Catholic faith of his century.",
  timeline: [
    { date: "1732 (early)", event: "Venerable Maria Celeste Crostarosa and Saint Alphonsus Maria de Liguori co-found the Monastery of the Most Holy Redeemer at Scala, Campania" },
    { date: "September 11, 1732", event: "The first Eucharistic apparition occurs during Thursday adoration: the Host appears blood-red and displays the image of Christ Crucified and instruments of the Passion" },
    { date: "September 18, 1732", event: "A nun records in writing the detailed vision of the crucifix, hill, and instruments of the Passion. Saint Alphonsus and Bishop Santoro are among witnesses." },
    { date: "September–November 1732", event: "The phenomena recur every Thursday for three consecutive months, witnessed by multiple members of the community and visiting clergy" },
    { date: "November 9, 1732", event: "Saint Alphonsus Maria de Liguori founds the Congregation of the Most Holy Redeemer (Redemptorists) at Scala, just weeks after the conclusion of the miraculous apparitions" },
    { date: "1871", event: "Saint Alphonsus is declared a Doctor of the Church; his witness to the Scala miracle receives enduring ecclesiastical recognition" }
  ]
});

updateMiracle('miracle-67', {
  fullDescription: `Around the year 1000, in the coastal city of Trani in the Puglia region of southern Italy, an act of sacrilege against the Eucharist produced a miracle that would be preserved, examined, and venerated for over a thousand years. A woman — described in historical accounts as pretending to be Christian — received Holy Communion at Mass but, rather than consuming the Host, removed it from her mouth and wrapped it in a handkerchief to take home. Once there, intending to test whether the Eucharist was merely bread or truly the body of Christ, she placed the consecrated Host into a heated frying pan filled with boiling oil.

The effect was immediate and terrifying: upon contact with the oil, the consecrated Host transformed into Bloody Flesh, and blood began to flow from it in such quantity that it spilled out of the pan and across the woman and her house, continuing unstoppably. The woman, struck with terror, began screaming. News of the event spread rapidly through Trani. The local archbishop was immediately informed and ordered the miraculous Flesh to be returned to the church. The house where the sacrilege and the miracle had occurred was later converted into a chapel, which stood for centuries as a memorial to the event.

The relic of the miracle — the bloodied Flesh that had been the consecrated Host — was enshrined and has been preserved in Trani to the present day. In 1616, the relic was transferred to an ornate antique silver shrine. The Cistercian Abbot Ferdinando Ughelli (d. 1670), in his monumental encyclopedic work "Italia Sacra," recorded: "In Trani a sacred Host was fried to the dismay of our Faith…, the true Flesh and Blood of Christ was unveiled in the unleavened Bread." Pope Urban VI visited Trani in 1384 and issued a papal Bull declaring the Host miraculously preserved.

Throughout the centuries, numerous scientific examinations of the relic were conducted. In 1841, Archbishop Gaetano da Franci ordered a formal examination and formally concluded that the Host had been preserved solely by divine intervention. The most recent examination took place in 1924 at the Inter-diocesan Eucharistic Congress, presided over by Monsignor Giuseppe Maria Leo, which confirmed the prior findings. Today the relic is housed in the Cathedral of Holy Mary of the Assumption in Trani, Puglia.`,
  scientificEvidence: [
    "Scientific and ecclesiastical examinations of the relic were performed across multiple centuries; the most recent formal investigation took place in 1924 at the Inter-diocesan Eucharistic Congress, confirming the miraculous preservation of the Host as Bloody Flesh with no natural explanation",
    "In 1841, Archbishop Gaetano da Franci formally examined the relic and concluded: 'The Host had not been conserved except by the Will and intervention of God,' placing his episcopal seal on the miracle",
    "Pope Urban VI issued a papal Bull in 1384 following a personal visit to Trani, declaring the Host miraculously preserved — one of the earliest formal pontifical recognitions of a Eucharistic miracle"
  ],
  witnessTestimonies: [
    { name: "The Woman (unnamed)", role: "Perpetrator of the sacrilege who witnessed the transformation", testimony: "Having placed the consecrated Host into boiling oil to test whether it was truly the body of Christ, the Host immediately became Bloody Flesh and blood poured out unstoppably across her and her house, causing her to cry out in terror. Her screams alerted the community to what had occurred." },
    { name: "Archbishop of Trani (unnamed)", role: "Local bishop who received the report and ordered the relic returned to the church", testimony: "The archbishop was immediately informed of the events and ordered the miraculous Flesh to be recovered and brought to the church. His prompt action preserved the relic and initiated its formal ecclesiastical custody." },
    { name: "Abbot Ferdinando Ughelli", role: "Cistercian abbot and ecclesiastical historian (d. 1670), author of Italia Sacra", testimony: "Documented the miracle in his 10-volume work Italia Sacra: 'In Trani a sacred Host was fried to the dismay of our Faith…, the true Flesh and Blood of Christ was unveiled in the unleavened Bread which fell to the ground.'" },
    { name: "Archbishop Gaetano da Franci", role: "Archbishop of Trani, conducted formal examination in 1841", testimony: "Following a thorough examination of the relic, formally concluded: 'The Host had not been conserved except by the Will and intervention of God.' He placed his episcopal seal on the miracle." }
  ],
  historicalContext: "Around the year 1000, Trani was a flourishing port city on the Adriatic coast of Puglia, an important commercial and religious center where communities of Jews, Christians, and newly converted believers lived in close proximity. The church of Sant'Anna in Trani had originally been a synagogue and served converted Jewish Christians, providing the social context in which the miracle occurred. The event took place during a period in which the medieval Church was consolidating Eucharistic doctrine. The miracle's preservation across a millennium, multiple papal and episcopal examinations, and continued veneration in the cathedral of Trani makes it one of the most extensively documented Eucharistic miracles in the history of the Church.",
  timeline: [
    { date: "c. 1000", event: "A woman places a consecrated Host in boiling oil in Trani; it transforms into Bloody Flesh and blood flows unstoppably. The local archbishop orders the relic returned to the church." },
    { date: "1384", event: "Pope Urban VI visits Trani and issues a papal Bull declaring the Host miraculously preserved" },
    { date: "1616", event: "The relic is transferred to an antique silver shrine for its formal, permanent enshrinement" },
    { date: "1706", event: "The house where the miracle occurred is formally converted into a chapel in memory of the event" },
    { date: "1841", event: "Archbishop Gaetano da Franci conducts a pastoral examination and formally concludes the Host was preserved solely by divine intervention" },
    { date: "1924", event: "The most recent formal examination takes place at the Inter-diocesan Eucharistic Congress, confirming the miraculous preservation" },
    { date: "Present", event: "The relic is housed in the Cathedral of Holy Mary of the Assumption in Trani, included in the Vatican International Exhibition of Eucharistic Miracles of the World" }
  ]
});

console.log('✓ Batch 4C: Added 5 miracles (Rosano, S.Peter Damian, Salzano, Scala, Trani)');
fs.writeFileSync('public/miracles.json', JSON.stringify(data, null, 2));
