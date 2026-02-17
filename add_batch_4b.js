const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/miracles.json', 'utf8'));
function updateMiracle(id, updates) {
  const miracle = data.find(m => m.id === id);
  if (miracle) { Object.assign(miracle, updates); return true; }
  return false;
}

updateMiracle('miracle-55', {
  fullDescription: `In April 1604, on the Monday after Easter, Father Salvatore Spiga — pastor of the Church of Saint Bernard in Mogoro, Sardinia — was celebrating Mass and had just completed the consecration. As he moved along the altar rail distributing Holy Communion to the assembled faithful, he recognized two men well known in the community for their dissolute and irreverent lives. Choosing not to turn them away, Father Spiga placed the consecrated Hosts upon their tongues. Moments later, both men spat the Hosts out onto the stone floor below the altar rail, insisting loudly that the Hosts had become as hot as burning embers and were scorching their tongues.

Father Spiga immediately went to retrieve the Sacred Hosts from the floor. When he knelt to collect them, he discovered that the two Hosts had left their imprints permanently pressed into the stone, as though they had been sculpted there by a craftsman's chisel. The area was cleaned repeatedly, but no amount of scrubbing could remove the impressions. The stone bore two clearly defined circular outlines in the exact shape and size of the Eucharistic Hosts.

The Church of San Bernardino in Mogoro became a place of local veneration following the event. Eighty-two years later, on May 25, 1686, Notary Pedro Antonio Escano formalized a public legal act in which the Rector of Mogoro contracted for the construction of a wooden tabernacle over the main altar. Specifically written into the contract was a provision for an opening at the base of the tabernacle to house the "Stone of the Miracle," to be enclosed in a decorative case so the faithful could view it at all times.

In reparation for the public sacrilege committed by the two men, the town of Mogoro has maintained an annual tradition to this day: a solemn Eucharistic procession held every year on the Sunday after Easter. This act of communal reparation and reverence has been passed down through more than four centuries of Sardinian Catholic life.`,
  scientificEvidence: [
    "The Host imprints became permanently embedded in the stone floor of the Church of San Bernardino, defying all attempts at removal by scrubbing and cleaning over decades",
    "The two circular impressions match exactly the size and shape of Eucharistic Hosts of the period, confirmed by direct inspection by parish clergy and town officials documented in the notarial act of 1686",
    "No natural explanation accounts for how a thin unleavened wheat host, even under extreme heat, could permanently impress its outline into a stone floor — a material far harder than compressed bread"
  ],
  witnessTestimonies: [
    { name: "Father Salvatore Spiga", role: "Pastor, Church of Saint Bernard (San Bernardino), Mogoro", testimony: "Witnessed the two men spit the consecrated Hosts onto the stone floor and, upon going to retrieve them, personally observed that the imprints of the Hosts had been permanently pressed into the stone. He made no natural explanation and reported it as miraculous." },
    { name: "Assembled parishioners", role: "Faithful present at Mass on the Monday after Easter, 1604", testimony: "Multiple parishioners witnessed the men expelling the Hosts and observed Father Spiga's reaction upon discovering the imprints in the stone. Their collective witness was incorporated into later ecclesiastical documentation." },
    { name: "Pedro Antonio Escano", role: "Notary Public, Mogoro", testimony: "On May 25, 1686, formalized the public act confirming the ongoing preservation of the miraculous stone and contracting for its permanent display within a specially constructed tabernacle, legally affirming the community's recognition of the event as authentic." }
  ],
  historicalContext: "The miracle occurred during the Counter-Reformation era, a period in which the Catholic Church placed extraordinary emphasis on the Real Presence of Christ in the Eucharist in response to Protestant challenges to transubstantiation. Sardinia in 1604 was under Spanish Habsburg rule, and its Catholic parishes were deeply shaped by Tridentine reform. Public acts of Eucharistic sacrilege were treated with great gravity by both Church and civil authorities, and miracles confirming the Real Presence were seen as divine affirmations of Catholic doctrine.",
  timeline: [
    { date: "April 1604 (Monday after Easter)", event: "Father Salvatore Spiga distributes Communion at San Bernardino; two men spit Hosts onto the stone floor, claiming they burned like embers" },
    { date: "April 1604 (immediately after)", event: "Father Spiga discovers the imprints of the two Hosts permanently embedded in the stone floor; multiple attempts to clean or remove the marks fail" },
    { date: "Late 1604 onward", event: "Annual solemn Eucharistic procession on the Sunday after Easter is established in Mogoro as reparation for the sacrilege" },
    { date: "May 25, 1686", event: "Notary Pedro Antonio Escano formalizes a public act contracting construction of a tabernacle incorporating an opening for the Stone of the Miracle" },
    { date: "Present day", event: "The stone bearing the Host imprints remains preserved in the Church of San Bernardino, Mogoro; the annual Easter procession of reparation continues" }
  ]
});

updateMiracle('miracle-56', {
  fullDescription: `During the Easter Octave of 1560 in the Marche region of central Italy, a devastating fire broke out and consumed the Franciscan church in Morrovalle with extraordinary ferocity, burning uncontrolled for approximately seven hours. The blaze destroyed virtually the entire structure, including the altars, liturgical furnishings, and all the sacred objects within. When the flames finally died down, nothing appeared to have survived. The Franciscan friars and townspeople who gathered in the ruins mourned not only their church but also the loss of the reserved Blessed Sacrament.

Some fifteen days after Holy Saturday — on April 27 — Father Battista da Ascoli, the same priest who had celebrated Mass on that altar on Holy Saturday and had consecrated the Eucharist and placed it in the tabernacle, was called by the father guardian of the convent to assist in clearing the rubble. While removing a slab of marble from the ruins of the main altar, Father Battista discovered a cavity in the wall containing a pyx. The vessel itself was completely burned except for its lid. Yet when he opened it, he found inside a large consecrated Host in perfect condition — whole, fresh, and untouched by fire or smoke.

Father Battista cried out at the sight and immediately people began rushing in from all directions. For three full days, the Blessed Sacrament was exposed for public adoration amid the ruins of the destroyed church, drawing crowds from Morrovalle and the surrounding region. Word was swiftly sent to Rome. Pope Pius IV dispatched Bishop Ludovico di Forli of Bertinoro to Morrovalle as his official legate to conduct a formal investigation. Following the Cardinals' unanimous judgment that the preservation of the Host was without natural explanation, Pope Pius IV issued the Papal Bull "Sanctam Romanam Ecclesiam" in 1560, formally declaring the event a true miracle and granting a plenary indulgence to all the faithful who visited the site in perpetuity.

The inscription "Civitas Eucaristica" — Eucharistic City — placed at Morrovalle's main gate, still visible today, commemorates the miracle and the papal recognition that defines the town's identity.`,
  scientificEvidence: [
    "A large consecrated Host survived intact within a pyx that had been fully consumed by fire during a seven-hour conflagration — the complete combustion of the metallic vessel while its organic contents remained whole presents no chemical or physical explanation",
    "The corporal cloth surrounding the Host was scorched and the entire church was destroyed, yet the Host showed no discoloration, damage, or alteration from heat, smoke, or the passage of fifteen days",
    "Pope Pius IV's commission of five Cardinals, having examined all documentation and sworn testimonies, unanimously concluded that the preservation surpassed natural causes — a judgment codified in the papal bull of 1560"
  ],
  witnessTestimonies: [
    { name: "Father Battista da Ascoli", role: "Franciscan priest, Morrovalle; celebrant of Holy Saturday Mass", testimony: "The priest who had consecrated and reserved the Host on Holy Saturday personally discovered the intact Host in the burned pyx fifteen days later. He shouted aloud at the sight, drew a crowd immediately, and provided primary sworn testimony to the investigating bishop." },
    { name: "Father Guardian of the Convento", role: "Superior, Franciscan Convent, Morrovalle", testimony: "Directed the clearing of rubble after the fire and summoned Father Battista to the site. Witnessed the discovery of the intact Host and coordinated the three days of public adoration, providing testimony to Bishop Ludovico's investigation." },
    { name: "Bishop Ludovico di Forli", role: "Bishop of Bertinoro; Papal Legate investigating on behalf of Pope Pius IV", testimony: "Conducted the formal ecclesiastical investigation on papal mandate, collected sworn testimonies from clerics and laypeople, examined the physical evidence, and delivered his report to Rome. His conclusion was that the preservation of the Host was miraculous and without natural explanation." }
  ],
  historicalContext: "The Morrovalle miracle occurred at the height of the Council of Trent (1545–1563), during which the Catholic Church was actively defending the doctrine of transubstantiation against Protestant reformers. A consecrated Host surviving the total destruction of a church by fire carried enormous theological significance in this climate. Pope Pius IV's swift official response — dispatching a bishop, convening a commission of five Cardinals, and issuing a plenary indulgence — reflects the Counter-Reformation Church's readiness to use authenticated miracles as powerful public affirmations of Catholic Eucharistic doctrine.",
  timeline: [
    { date: "Holy Saturday, 1560", event: "Father Battista da Ascoli celebrates Mass and reserves a consecrated Host in the tabernacle of the Franciscan church in Morrovalle" },
    { date: "Easter Octave, 1560", event: "A catastrophic fire destroys the entire Franciscan church; the blaze burns for approximately seven hours consuming the structure, altars, and all contents" },
    { date: "April 27, 1560", event: "Father Battista da Ascoli discovers an intact consecrated Host in a burned pyx within a wall cavity of the ruined altar; crowds immediately gather" },
    { date: "April 27–30, 1560", event: "The intact Host is exposed for three days of public adoration in the ruins; news is sent to Rome" },
    { date: "1560 (within weeks)", event: "Pope Pius IV dispatches Bishop Ludovico di Forli to Morrovalle to conduct a formal ecclesiastical investigation" },
    { date: "1560", event: "Pope Pius IV's commission of five Cardinals declares the event miraculous; the papal bull 'Sanctam Romanam Ecclesiam' is issued granting perpetual plenary indulgence" },
    { date: "1960", event: "The fourth centenary is celebrated; the City Council votes to place the inscription 'Civitas Eucaristica' at the town's main gate" },
    { date: "Present day", event: "The inscription 'Civitas Eucaristica' remains at Morrovalle's main gate as a permanent memorial to the miracle" }
  ]
});

updateMiracle('miracle-58', {
  fullDescription: `On February 24, 1772, unknown thieves broke into the Church of Saint Peter in Patierno, a village on the outskirts of Naples, and stole a ciborium containing a number of consecrated Hosts. The desecration caused immediate alarm among the clergy and faithful of the region, and local church authorities began both a civil and ecclesiastical investigation. Despite efforts to locate the stolen Sacrament, the thieves and their crime remained unresolved for nearly a month.

The discovery came through a striking supernatural intervention. Witnesses in the fields belonging to Duke Delle Grottolelle began observing mysterious lights hovering over a particular spot in the grounds, accompanied by the appearance of a white dove that seemed to circle and linger over the same location. These signs drew the attention of those on the estate, and when the area was examined, the stolen consecrated Hosts were found buried beneath a heap of manure. Despite having been hidden in such degrading conditions for approximately one month, every Host was found perfectly intact — unblemished, uncorrupted, and in no way different from their condition at the time of consecration.

The sacred find was immediately reported to the Archbishop's Curia of Naples. The Vicar General, Monsignor Onorati, personally oversaw and formalized the diocesan canonical trial, conducted with great thoroughness from 1772 to 1774. Among the three renowned scientists called upon was Dr. Domenico Cotugno of the Royal University of Naples — one of the most distinguished physicians and anatomists of 18th-century Italy. All three scientists agreed that the preservation of the Hosts under such conditions could not be explained by physical principles and surpassed the power of natural agents.

On August 29, 1774, the Archbishop's Curia formally declared the preservation of the Hosts and the accompanying supernatural signs to constitute an authentic miracle — one "operated by God to illustrate more and more the truth of the Catholic dogma and increase the worship towards the Real Presence of Christ in the Holy Sacrament of the Eucharist." The event was later described in writing by Saint Alphonsus Liguori, the great Neapolitan moral theologian and Doctor of the Church, who used it to reawaken Eucharistic devotion among the faithful of his era.`,
  scientificEvidence: [
    "Dr. Domenico Cotugno of the Royal University of Naples — one of the leading medical and scientific figures of 18th-century Italy — testified that the preservation of the consecrated Hosts after approximately one month buried under manure could not be explained by physical principles and surpassed the power of natural agents",
    "Two additional renowned scientists provided co-testimony alongside Dr. Cotugno, all three concurring unanimously that the intact condition of the Hosts defied physical explanation; their findings were formally recorded in the diocesan trial minutes",
    "In 1972, Professor Pietro De Franciscis of the University of Naples reviewed the historical scientific testimony and confirmed that the conclusions of the 18th-century scientists remained scientifically valid — the preservation of organic material under such conditions for such a duration has no natural explanation"
  ],
  witnessTestimonies: [
    { name: "Workers on the estate of Duke Delle Grottolelle", role: "Laypeople who observed the supernatural signs", testimony: "Multiple witnesses reported observing mysterious lights hovering over a specific location in the fields and a white dove circling the same spot. These signs led them to investigate and discover the intact Hosts buried under manure. Their testimony was recorded in the diocesan trial proceedings." },
    { name: "Monsignor Onorati", role: "Vicar General of the Archdiocese of Naples; presiding officer of the diocesan canonical trial", testimony: "Personally oversaw the two-year diocesan investigation from 1772 to 1774, collected all witness statements, commissioned the scientific examination of the Hosts, and authored the official minutes of the trial. His report concluded that the preservation of the Hosts was miraculous." },
    { name: "Saint Alphonsus Liguori", role: "Bishop, Doctor of the Church, Founder of the Redemptorists; contemporary witness and writer", testimony: "Saint Alphonsus personally documented the miracle in his writings and used the account as a pastoral instrument to deepen Eucharistic faith. His written account remains among the primary historical sources for the event." }
  ],
  historicalContext: "Patierno's miracle occurred in the Kingdom of Naples during the late 18th century, a period marked by Enlightenment rationalism and the weakening of traditional religious institutions across Europe. The Archdiocese of Naples conducted an unusually rigorous two-year canonical trial reflecting both the gravity of the initial sacrilege and the exceptional nature of the recovery. Saint Alphonsus Liguori's involvement in publicizing the miracle underscores its importance for Neapolitan religious culture at a time when his moral theology and Eucharistic writings were transforming Catholic spirituality across the Western world.",
  timeline: [
    { date: "February 24, 1772", event: "Unknown thieves break into the Church of Saint Peter in Patierno and steal a ciborium containing consecrated Hosts" },
    { date: "March–April 1772", event: "Mysterious lights and a white dove are observed hovering over a spot in the fields of Duke Delle Grottolelle's estate; witnesses discover the stolen Hosts intact beneath manure" },
    { date: "1772", event: "The Vicar General Monsignor Onorati opens a formal diocesan canonical trial; Dr. Domenico Cotugno and two other scientists are called to examine the preserved Hosts" },
    { date: "1772–1774", event: "The two-year diocesan trial proceeds; scientific testimony, witness depositions, and ecclesiastical review are conducted and recorded" },
    { date: "August 29, 1774", event: "The Archbishop's Curia of Naples formally declares the preservation of the Hosts to be an authentic miracle" },
    { date: "Post-1774", event: "Saint Alphonsus Liguori writes about the miracle, disseminating the account to promote Eucharistic devotion" },
    { date: "1972", event: "Professor Pietro De Franciscis of the University of Naples reviews the original scientific testimony and confirms the preservation remains without natural scientific explanation" }
  ]
});

updateMiracle('miracle-60', {
  fullDescription: `In the city of Rome around the year 595 AD, during one of his regular Sunday Masses celebrated in an ancient church dedicated to Saint Peter, Pope Saint Gregory the Great was distributing Holy Communion to the faithful assembled before him. Among those who came forward to receive was a Roman noblewoman who had herself baked and prepared the bread used for the Eucharistic celebration — a common pious practice of that era, in which devout laywomen contributed to the liturgy by providing the hosts.

As Gregory placed the consecrated Host toward her, the woman suddenly broke into audible laughter. Gregory immediately paused the distribution, withdrew the Host, and demanded an explanation. The woman answered with candor: she confessed that she could not bring herself to believe that the bread which she had kneaded and shaped with her own hands could truly become the Body and Blood of Christ through the words of consecration. Gregory, shaken by her response, denied her Communion. He then knelt in public prayer, imploring God to illuminate the woman and confirm His real and miraculous Presence in the Sacrament.

When Gregory rose from prayer and turned back to the altar, he and the congregation witnessed an extraordinary transformation: the portion of the Eucharistic bread that the woman had prepared had visibly become flesh and blood. The physical change was evident to those present in the church. Confronted with this visible sign, the woman was overcome with remorse, fell to her knees, and wept. Gregory then prayed again, the miraculous appearance ceased, and the bread returned to its normal appearance. He granted her Communion.

The event was documented in the eighth century by Paul the Deacon in his Vita Beati Gregorii Papae (787 AD) — less than two hundred years after the event, drawing on earlier accounts and Roman ecclesiastical memory. The miracle became one of the most celebrated Eucharistic events of the early medieval Church and a beloved subject in Christian art from the 13th century onward, especially in the famous iconographic tradition known as the "Mass of Saint Gregory." A relic associated with this miracle is preserved to this day in the Benedictine Monastery of Andechs, Bavaria, Germany.`,
  scientificEvidence: [
    "The transformation of the Eucharistic Host into the appearance of flesh and blood was witnessed publicly by the congregation assembled for Mass, constituting multiple simultaneous eyewitness accounts of a physical change with no natural explanation",
    "The preservation of a relic associated with the miracle at the Benedictine Monastery of Andechs, Germany, over more than fourteen centuries reflects the early Church's recognition of a tangible physical residue maintained through monastic custody",
    "Paul the Deacon's account, written in 787 AD within the living institutional memory of the Roman Church, draws on earlier written sources, establishing a documented tradition that traces the event to a specific historical liturgical celebration"
  ],
  witnessTestimonies: [
    { name: "Pope Saint Gregory the Great", role: "Pope of Rome (590–604 AD); celebrant of the Mass", testimony: "Gregory himself witnessed the transformation of the Host into flesh and blood following his prayer for divine illumination. As the primary celebrant, his direct experience is the central testimony of the event, transmitted through the ecclesiastical tradition he founded and the written accounts that followed." },
    { name: "The Roman noblewoman", role: "Laywoman; baker of the Eucharistic bread; recipient of the miracle", testimony: "Confessed openly to Pope Gregory that she doubted the Real Presence because she had made the bread herself. Personally witnessed the miraculous transformation, fell to her knees weeping in repentance, and received Communion from Gregory after the Host returned to its normal appearance." },
    { name: "Paul the Deacon (Paulus Diaconus)", role: "Lombard historian and deacon; author of Vita Beati Gregorii Papae (787 AD)", testimony: "Writing approximately 190 years after the event, recorded the miracle in detail in his biography of Gregory the Great, drawing on earlier Roman ecclesiastical sources. His account provides the primary written historical documentation of the miracle." }
  ],
  historicalContext: "Pope Saint Gregory the Great (c. 540–604) governed the Church during one of the most turbulent periods in Western history — the collapse of Roman imperial authority in Italy, the Lombard invasions, repeated plague outbreaks, and the urgent need to spiritually renew a population devastated by decades of war and famine. His papacy (590–604) was marked by a profound emphasis on the Eucharist, pastoral care, and missionary expansion of the Church. His personal celebration of Mass and miraculous confirmation of the Real Presence reflect both his theological priorities and his role as shepherd of the Roman faithful.",
  timeline: [
    { date: "c. 595 AD", event: "Pope Saint Gregory the Great celebrates Sunday Mass in Rome; a Roman noblewoman who baked the bread laughs during Communion distribution" },
    { date: "c. 595 AD (same liturgical celebration)", event: "Gregory questions the woman, who confesses her disbelief in transubstantiation; Gregory denies her Communion and prays publicly for divine illumination" },
    { date: "c. 595 AD (immediately after Gregory's prayer)", event: "The Eucharistic bread visibly transforms into flesh and blood before the congregation; the woman repents and weeps; Gregory prays again and the Host returns to normal appearance" },
    { date: "787 AD", event: "Paul the Deacon writes Vita Beati Gregorii Papae, providing the earliest full written account of the miracle" },
    { date: "13th–16th centuries", event: "The 'Mass of Saint Gregory' becomes a major iconographic subject in Western Christian art, depicted by artists across Europe" },
    { date: "Present day", event: "A relic of the miracle is preserved at the Benedictine Monastery of Andechs, Bavaria, Germany" }
  ]
});

updateMiracle('miracle-61', {
  fullDescription: `In 1610, at the Basilica of Santa Pudenziana in Rome — one of the oldest Christian churches in the city, built over what tradition holds to be the house of the Roman senator Pudens, host to the Apostle Peter — a priest was celebrating Mass in the Caetani Chapel, a side chapel constructed and endowed by the noble Caetani family. As the priest proceeded through the liturgy, he was inwardly tormented by serious doubts about the Real Presence of Christ in the consecrated Host — doubts about whether the bread truly became the Body of Jesus at the moment of consecration.

Immediately after completing the words of consecration, the priest accidentally allowed the consecrated Host to slip from his hands. The Host fell and struck the marble steps of the altar in the Caetani Chapel. At that moment, the Host left a visible imprint in the marble of the altar steps, and blood began to flow from the point of contact, staining the marble with a reddish-orange discoloration that could not be removed.

The miracle was witnessed, and word spread rapidly through the basilica and then the wider Roman Catholic community. The stains on the altar steps were examined and found to be indelible despite all cleaning efforts. Two small circular areas of the marble steps, corresponding to the points of contact made by the Host, were eventually marked and protected with small white marble discs, each enclosed within a miniature decorative bronze railing in the form of a hexagon. These physical memorials remain visible on the altar steps of the Caetani Chapel to the present day, allowing pilgrims and visitors to see the precise locations of the miracle's material trace.

Santa Pudenziana, already among the most ancient and venerated churches in Rome, became an even more significant site of Eucharistic pilgrimage following the miracle. The miracle was later highlighted in the Eucharistic Miracles exhibition compiled by Blessed Carlo Acutis, who regarded Santa Pudenziana as one of his favorite Roman station churches and catalogued this miracle in his internationally traveling exhibition on Eucharistic wonders.`,
  scientificEvidence: [
    "The imprint left by the falling Host in the marble steps of the Caetani Chapel proved permanent and indelible despite repeated attempts to clean or remove the marks — marble retaining an impression from a Host's contact has no physical explanation",
    "The reddish-orange bloodstains on the two marked locations were found to be resistant to removal across subsequent centuries; they have been preserved under white marble discs and bronze hexagonal railings, attesting to ecclesiastical recognition of their anomalous nature",
    "The combination of a physical imprint and a blood stain appearing simultaneously at the moment the consecrated Host touched the marble — with no blood present in an unleavened wheat host and no mechanical force capable of creating a lasting impression in stone — constitutes physical evidence with no natural explanation"
  ],
  witnessTestimonies: [
    { name: "The celebrating priest", role: "Priest celebrating Mass in the Caetani Chapel, 1610", testimony: "Personally experienced the Host falling from his hands during a moment of doubt following consecration. Witnessed the imprint being formed in the marble and the blood appearing at the point of contact. His inner state of doubt at the precise moment of the event is recorded as the spiritual context for the miracle's occurrence." },
    { name: "Members of the Caetani family and basilica clergy", role: "Patrons of the Caetani Chapel and clergy of Santa Pudenziana", testimony: "Were among those who witnessed or were immediately informed of the event. Their subsequent authorization and funding of the formal marking of the two miracle sites — white marble discs enclosed in bronze hexagonal railings — constitutes formal institutional acknowledgment of the miracle." },
    { name: "Blessed Carlo Acutis", role: "Italian layman, cataloguer of Eucharistic miracles; beatified 2020", testimony: "Personally researched and documented the 1610 Rome miracle as part of his comprehensive exhibition on Eucharistic miracles, and designated Santa Pudenziana as one of his favorite Roman station churches. His documentation brought renewed international attention to the preserved physical evidence in the Caetani Chapel." }
  ],
  historicalContext: "The 1610 miracle at Santa Pudenziana occurred during the pontificate of Paul V and at the height of the Baroque period in Rome — an era of vigorous Catholic artistic, theological, and devotional renewal following the Council of Trent. The Caetani were one of the great aristocratic families of the Roman Church, and their patronage of the chapel at Santa Pudenziana placed this miracle within the sphere of Rome's most powerful Catholic nobility. The physical preservation of the Host's imprint and blood in a chapel of this prominence gave the miracle immediate and lasting cultural authority in Counter-Reformation Rome.",
  timeline: [
    { date: "1610", event: "A priest celebrating Mass in the Caetani Chapel of Santa Pudenziana in Rome experiences doubt about the Real Presence; the Host falls from his hands and strikes the marble altar steps" },
    { date: "1610 (immediately)", event: "A visible imprint of the Host is found pressed into the marble steps, accompanied by a reddish-orange bloodstain; the marks are found to be indelible" },
    { date: "Post-1610", event: "Two white marble discs are set into the altar steps at the two miracle sites, each enclosed within a miniature bronze railing in the form of a hexagon" },
    { date: "Early 21st century", event: "Blessed Carlo Acutis researches and documents the miracle, citing Santa Pudenziana as one of his favorite Roman station churches" },
    { date: "Present day", event: "The marble discs and bronze hexagonal railings remain in place on the altar steps of the Caetani Chapel; visitors can view the preserved physical evidence of the miracle" }
  ]
});

console.log('✓ Batch 4B: Added 5 miracles (Mogoro, Morrovalle, Patierno, Rome VI-VII, Rome 1610)');
fs.writeFileSync('public/miracles.json', JSON.stringify(data, null, 2));
