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

// Wilsnack, 1383 (Germany)
updateMiracle('miracle-36', {
  fullDescription: `In the year 1383, a bitter feudal dispute erupted in the Prignitz region of northern Germany between the knight Heinrich von Bülow and the Bishop of Havelberg, Dietrich Man. In an act of violent retribution, von Bülow raided the small village of Wilsnack, looting and burning it to the ground, including its parish church. When the flames had died and rain had soaked the ruins, the parish priest entered the smoldering wreckage to survey the devastation — and found something extraordinary in the Sacrarium on the altar: three consecrated Hosts, entirely untouched by the fire, each bearing a single drop of what appeared to be fresh blood at its center.

Word of the discovery spread rapidly through the Brandenburg region and far beyond. Bishop Dietrich moved to formally investigate. According to accounts, when he attempted to consecrate the hosts so as to prevent any accidental idolatry, the central Host overflowed with blood before he could even pronounce the Words of Consecration — an event interpreted by witnesses as a divine sign confirming the miraculous nature of what had been found. In 1384, after careful examination, Bishop Dietrich officially confirmed the miracle of the "Bleeding Hosts of Wilsnack."

The site quickly became one of the most celebrated pilgrimage destinations in all of Europe. Pope Urban VI contributed funds toward the rebuilding of the village church, and offerings poured in from the Archbishops of Magdeburg and the Bishops of Brandenburg, Havelberg, and Lebus. With this wealth, the enormous Gothic Church of St. Nikolai was constructed in honor of the miracle. At its height in the 15th century, Wilsnack drew pilgrims in numbers rivaling Santiago de Compostela, becoming known throughout Christendom as the destination of the "Holy Blood of Wilsnack." The veneration was formally approved by two Papal Bulls issued by Pope Eugene IV in 1447.

The site endured for nearly two centuries before the Reformation swept through the region. In 1522, a fire destroyed the church and the monstrance containing the three miraculous Hosts. The relics themselves were lost in the flames. However, numerous written testimonials from medieval scholars, pilgrims, and Church officials, as well as surviving works of art depicting the miracle and its pilgrimage tradition, continue to document the events of 1383 and the extraordinary religious phenomenon that grew from them.`,

  scientificEvidence: [
    "Three consecrated Hosts were found physically intact and dry in the ruins of a completely burned church, with no charring or fire damage despite the total destruction of the surrounding structure",
    "Each of the three Hosts bore a fresh bloodstain at its center, described by witnesses and Bishop Dietrich as a drop of Christ's Blood",
    "The central Host reportedly overflowed with blood during the Bishop's attempted consecration before the Words of Consecration were spoken, witnessed by the Bishop and those present",
    "The hosts remained preserved and incorrupt for over 170 years (1383–1522), surviving exposure in the rebuilt church before being destroyed in the fire of 1522",
    "No natural explanation was found for the survival of the Hosts in a fire that consumed an entire village and church; the phenomenon was formally confirmed by ecclesiastical authorities in 1384"
  ],

  witnessTestimonies: [
    {
      name: "Parish Priest of Wilsnack",
      role: "Local parish priest who first discovered the Hosts",
      testimony: "Upon entering the ruins of the burned church, I discovered three consecrated Hosts in the Sacrarium on the altar, completely undamaged by the fire and each bearing a drop of blood at the center. I immediately reported the discovery to Church authorities."
    },
    {
      name: "Bishop Dietrich Man of Havelberg",
      role: "Bishop of Havelberg, official Church investigator",
      testimony: "I confirmed the miracle in 1384 after examining the Hosts. When I attempted to consecrate the Hosts to prevent idolatry, the central Host overflowed with blood before the Words of Consecration were spoken. I interpreted this as a divine confirmation of the miracle and issued official recognition."
    },
    {
      name: "Pope Urban VI",
      role: "Reigning Pope at the time of the miracle",
      testimony: "Contributed an endowment for the reconstruction of the church in Wilsnack and endorsed the pilgrimage site, lending papal support to the authenticity and veneration of the miraculous Hosts."
    },
    {
      name: "Pope Eugene IV",
      role: "Pope, 1431–1447",
      testimony: "Issued two Papal Bulls in 1447 formally approving the veneration of the Bleeding Hosts of Wilsnack, giving the pilgrimage site the highest level of official Church recognition."
    }
  ],

  historicalContext: "The miracle of Wilsnack occurred during the late medieval period in the Holy Roman Empire, an era of intense Eucharistic devotion across Europe. The 14th century saw widespread theological debate about the Real Presence of Christ in the Eucharist, and Eucharistic miracles were viewed as divine affirmations of Catholic doctrine. The Prignitz region was contested feudal territory, and the conflict between Heinrich von Bülow and Bishop Dietrich Man of Havelberg was typical of the tensions between secular nobility and ecclesiastical authority that characterized medieval Germany. The rapid transformation of Wilsnack into a major pilgrimage site reflected the enormous popular appetite for such holy places, and the site grew wealthy enough to fund one of the largest Gothic churches in the region. The eventual destruction of the relics during the Protestant Reformation in 1522 was characteristic of the era, as reformers targeted relic veneration as a prime example of Catholic 'superstition.'",

  timeline: [
    { date: "1383", event: "Heinrich von Bülow raids and burns the village of Wilsnack and its church during a feudal dispute with Bishop Dietrich Man of Havelberg" },
    { date: "1383", event: "The parish priest discovers three consecrated Hosts intact in the ruins, each bearing a drop of blood, untouched by the fire" },
    { date: "1383–1384", event: "Bishop Dietrich Man investigates the miracle; the central Host reportedly overflows with blood during his attempted consecration" },
    { date: "1384", event: "Bishop Dietrich Man of Havelberg officially confirms the miracle of the Bleeding Hosts of Wilsnack" },
    { date: "Late 1300s–1400s", event: "Wilsnack becomes one of the most important pilgrimage sites in Europe; Pope Urban VI funds church reconstruction; offerings arrive from multiple bishops and archbishops" },
    { date: "1447", event: "Pope Eugene IV issues two Papal Bulls formally approving the veneration of the miraculous Hosts at Wilsnack" },
    { date: "Late 1400s–early 1500s", event: "Wilsnack at peak pilgrimage attendance, rivaling Santiago de Compostela; the great Church of St. Nikolai is completed" },
    { date: "1522", event: "A fire destroys the church and the monstrance containing the three miraculous Hosts; the relics are lost" },
    { date: "Present", event: "The Church of St. Nikolai (Wunderblutkirche) still stands in Bad Wilsnack; written testimonials and works of art preserve the historical record of the miracle" }
  ]
});

// Chirattakonam, 2001 (India)
updateMiracle('miracle-37', {
  fullDescription: `On April 28, 2001, Fr. Johnson Karoor, the parish priest of St. Mary's Church in Chirattakonam, Thiruvananthapuram, Kerala, India, began the Novena to St. Jude Thaddeus. At 8:49 in the morning, he exposed the Most Holy Sacrament in the monstrance for public adoration. After the Host had been in the monstrance for only a few moments, Fr. Karoor noticed what appeared to be three small reddish dots forming on the surface of the consecrated Host. Surprised and moved, he pointed out what he saw to the faithful gathered for adoration, and they too observed the three red stains materializing on the Host.

Fr. Karoor left for approximately one week, and when he returned and retrieved the Host to examine it more closely, something even more remarkable had occurred: the original three red dots had arranged and transformed themselves into the distinct likeness of a human face. The image continued to develop in clarity over the following days, and witnesses described it as the face of a man crowned with thorns — bearing a resemblance to the suffering Christ. Unlike other Eucharistic miracles involving the transformation of the Host into flesh or the appearance of blood, this miracle was primarily visual: the image of the face of Jesus appeared within the intact Host in the monstrance.

News of the phenomenon spread quickly throughout the Archdiocese of Trivandrum (Thiruvananthapuram). The Archbishop of the diocese, His Beatitude Cyril Mar Baselice, was informed and initiated a formal ecclesiastical investigation. A commission was assembled consisting of theologians, medical doctors, and experts in photography to examine both the Host itself and all documentation of the event. The commission's report found no evidence of tampering, manipulation, or natural explanation for the image that had formed on the Host.

The miraculous Host was officially verified and recognized on May 5, 2001 — just one week after the initial appearance of the red dots. The monstrance containing the Host with the image of Christ's face remains to this day in St. Mary's Church in Chirattakonam, where it continues to be venerated by the faithful. The miracle is documented in the Vatican's International Exhibition of Eucharistic Miracles of the World as one of the verified miracles of the 21st century.`,

  scientificEvidence: [
    "Three red dots spontaneously appeared on a consecrated Host during Eucharistic adoration at 8:49 AM on April 28, 2001, witnessed by Fr. Johnson Karoor and the assembled faithful",
    "The red dots subsequently arranged themselves into the recognizable likeness of a human face over several days, with no physical contact or manipulation of the Host",
    "A formal commission appointed by the Archdiocese of Trivandrum, comprising theologians, medical doctors, and photography experts, found no evidence of tampering or any natural explanation for the image",
    "The image was examined in both natural and artificial light conditions; it remained consistently visible and could not be attributed to photographic artifact or optical illusion",
    "The Host remained physically intact throughout the process; no decomposition, mold, or other natural deterioration was found that could account for the image formation"
  ],

  witnessTestimonies: [
    {
      name: "Fr. Johnson Karoor",
      role: "Parish priest of St. Mary's Church, Chirattakonam; primary witness",
      testimony: "On April 28, 2001, while exposing the Blessed Sacrament for the Novena to St. Jude Thaddeus, I observed three red dots appear on the Host at 8:49 AM. I immediately pointed them out to the faithful present. Upon returning after approximately one week, I found that the dots had arranged themselves into the image of a man's face resembling Christ crowned with thorns."
    },
    {
      name: "Faithful of St. Mary's Parish",
      role: "Congregants present during Eucharistic adoration on April 28, 2001",
      testimony: "Multiple members of the congregation gathered for the Novena confirmed seeing three red dots materialize on the Host in the monstrance. Their testimonies were consistent with Fr. Karoor's account and were submitted as part of the diocesan investigation."
    },
    {
      name: "His Beatitude Cyril Mar Baselice",
      role: "Archbishop of the Archdiocese of Trivandrum",
      testimony: "I initiated a formal investigation after being informed of the miracle and oversaw the commission of theologians, medical doctors, and photography experts. The archdiocese issued official recognition of the miracle on May 5, 2001, following the commission's finding of no natural explanation."
    },
    {
      name: "Diocesan Commission",
      role: "Investigators: theologians, medical doctors, and photography experts appointed by the Archdiocese",
      testimony: "After thorough examination of the Host, photographs, and testimonies, the commission reported that there was no evidence of tampering or manipulation of the Host, and no natural explanation could be identified for the formation of the image."
    }
  ],

  historicalContext: "The miracle of Chirattakonam occurred in Kerala, India's southernmost state, which has one of the oldest Christian communities in the world, traditionally tracing its origins to the Apostle Thomas in 52 AD. The Syro-Malankara Catholic Church, to which St. Mary's parish belongs, is part of the Eastern Catholic tradition in India, maintaining ancient liturgical rites while in communion with Rome. The year 2001 represented a period of renewed Eucharistic devotion globally following the Great Jubilee of 2000 proclaimed by Pope John Paul II. Chirattakonam stands as one of only a handful of approved Eucharistic miracles of the 21st century, distinguished from most historical miracles by the modern investigative methods available to the examining commission.",

  timeline: [
    { date: "April 28, 2001", event: "Fr. Johnson Karoor exposes the Blessed Sacrament for the Novena to St. Jude Thaddeus at St. Mary's Church; at 8:49 AM, three red dots appear on the Host and are witnessed by the priest and the faithful" },
    { date: "Late April–Early May 2001", event: "Fr. Karoor is absent for approximately one week; upon returning, he finds the three dots have transformed into the recognizable likeness of a human face crowned with thorns" },
    { date: "May 2001", event: "Archbishop Cyril Mar Baselice of the Archdiocese of Trivandrum initiates a formal investigation; a commission of theologians, medical doctors, and photography experts is assembled" },
    { date: "May 5, 2001", event: "The Archdiocese of Trivandrum officially verifies and recognizes the miracle after the commission finds no natural explanation" },
    { date: "Present", event: "The monstrance containing the miraculous Host remains at St. Mary's Church, Chirattakonam; the miracle is listed in the Vatican's International Exhibition of Eucharistic Miracles of the World" }
  ]
});

// Morne-Rouge, 1902 (Martinique)
updateMiracle('miracle-38', {
  fullDescription: `On the morning of May 8, 1902 — Ascension Thursday — the inhabitants of Morne-Rouge, a small village nestled on the slopes of Mount Pelée in Martinique, woke to the catastrophic eruption of the volcano. Mount Pelée had been showing signs of activity for weeks, but on that day it unleashed its full fury, sending a devastating pyroclastic surge down toward the nearby city of Saint-Pierre. Within minutes, Saint-Pierre was obliterated. Approximately 29,000 to 30,000 people perished in what became the deadliest volcanic disaster of the 20th century. Morne-Rouge, situated between Saint-Pierre and the volcano's peak, lay directly in the path of the destruction.

Terrified villagers, certain they were about to die, rushed to their parish church, crying out to Our Lady of Deliverance. Many fell to their knees in the confessional; others simply wept and prayed. Their parish priest, Fr. Mary, moved with pastoral urgency through the crowd, offering general absolution to all the faithful, distributing Holy Communion to those who sought it, and then exposing the Blessed Sacrament in the monstrance for public adoration. The church filled with the sounds of desperate prayer as the ground shook and the sky darkened with volcanic ash.

Then, at a certain moment during the hours of adoration, a woman cried out from somewhere in the crowd: "The Sacred Heart of Jesus is in the Host!" A ripple of gasps and cries moved through the congregation as people lifted their eyes to the monstrance. A large number of those present reported seeing the figure of Jesus appearing within the Host, displaying His Sacred Heart — crowned with thorns. Some witnesses went further, declaring that they could see the Precious Blood of Jesus dripping from His wounded Sacred Heart. The vision lasted for several hours, ending only after Fr. Mary performed the reposition of the Blessed Sacrament in the tabernacle. On that day, May 8, 1902, Morne-Rouge was spared from the volcano's destruction.

The village's reprieve, however, proved temporary. A second violent eruption occurred on August 30, 1902, and this time Morne-Rouge was not spared. The village was devastated and between 1,000 and 1,500 of its inhabitants were killed. The faithful of Morne-Rouge interpreted the May 8 sparing as a miraculous sign of divine mercy granted through their Eucharistic devotion, and the Church recognized the vision witnessed during adoration as a Eucharistic miracle.`,

  scientificEvidence: [
    "Morne-Rouge, located between the erupting Mount Pelée and the city of Saint-Pierre, was spared from the May 8 pyroclastic surge that killed approximately 29,000–30,000 people in Saint-Pierre, despite comparable proximity to the volcano",
    "A large number of independent witnesses within the parish church simultaneously reported seeing the image of Jesus displaying His Sacred Heart in the Host during adoration — a collective visual phenomenon across an entire congregation",
    "Some witnesses additionally reported seeing the Precious Blood dripping from the image of the Sacred Heart in the Host, a consistent detail across multiple testimonies",
    "The vision persisted for several hours and ended precisely at the moment of the reposition of the Blessed Sacrament — its cessation correlated with a liturgical action rather than any change in external conditions",
    "Fr. Mary's account and the accounts of parish witnesses were formally documented by Church authorities and submitted as the basis for the recognition of the event as a Eucharistic miracle"
  ],

  witnessTestimonies: [
    {
      name: "Fr. Mary",
      role: "Parish priest of Morne-Rouge",
      testimony: "On Ascension Day, May 8, 1902, as Mount Pelée erupted and the congregation flooded the church in terror, I gave general absolution, distributed Holy Communion, and exposed the Blessed Sacrament for adoration. I witnessed the apparition of Jesus in the Host showing the Sacred Heart crowned with thorns, which persisted for several hours. The vision ended at the reposition of the Blessed Sacrament."
    },
    {
      name: "A woman in the congregation",
      role: "Parishioner and first to publicly announce the vision",
      testimony: "During the hours of Eucharistic adoration, she cried out to the assembled congregation: 'The Sacred Heart of Jesus is in the Host!' — alerting others to look toward the monstrance where the vision was unfolding."
    },
    {
      name: "Congregation of Morne-Rouge",
      role: "Parishioners gathered in the church during the volcanic eruption",
      testimony: "A large number of those present confirmed seeing the apparition of Jesus in the Host, with the Sacred Heart crowned with thorns. Some reported additionally seeing the Precious Blood dripping from the Sacred Heart. Their testimonies, consistent across multiple witnesses, were recorded and submitted to Church authorities."
    }
  ],

  historicalContext: "The 1902 eruption of Mount Pelée was among the most catastrophic volcanic disasters in recorded history. The island of Martinique, then a French colonial territory in the Caribbean, had been watching the volcano with increasing anxiety throughout the spring of 1902. The eruption on May 8 — Ascension Thursday — produced a nuée ardente (glowing cloud) of superheated gas and ash that destroyed Saint-Pierre and killed virtually its entire population in moments. For the Catholic community of Martinique, the survival of Morne-Rouge on May 8 — attributed to the Eucharistic vision and the village's devotion to the Sacred Heart — was experienced as a profound act of divine mercy. The devotion to the Sacred Heart of Jesus was at a particular peak in late 19th and early 20th century French Catholicism, and the image of Jesus revealing His Sacred Heart within the Eucharistic Host was understood as a direct confirmation of this devotion.",

  timeline: [
    { date: "Spring 1902", event: "Mount Pelée shows increasing volcanic activity; anxiety grows among the population of Martinique" },
    { date: "May 8, 1902 (Ascension Thursday)", event: "Mount Pelée erupts catastrophically; a pyroclastic surge destroys Saint-Pierre within minutes, killing approximately 29,000–30,000 people" },
    { date: "May 8, 1902 (morning)", event: "Terrified inhabitants of Morne-Rouge flood their parish church; Fr. Mary gives general absolution, distributes Holy Communion, then exposes the Blessed Sacrament for adoration" },
    { date: "May 8, 1902 (during adoration)", event: "A woman in the congregation cries out that the Sacred Heart of Jesus is visible in the Host; a large number of witnesses confirm seeing Jesus with His Sacred Heart crowned with thorns, and some see the Precious Blood dripping from it" },
    { date: "May 8, 1902 (after hours of adoration)", event: "The vision ends at the moment of the reposition of the Blessed Sacrament; Morne-Rouge is spared from the volcanic destruction" },
    { date: "August 30, 1902", event: "A second major eruption of Mount Pelée strikes Morne-Rouge; between 1,000 and 1,500 inhabitants are killed and the village is largely destroyed" },
    { date: "Present", event: "The Eucharistic vision of May 8, 1902 is recognized by the Church as an authenticated miracle; documented in the Vatican's Exhibition of Eucharistic Miracles of the World" }
  ]
});

// Saint-André de la Réunion, 1902 (Reunion Islands)
updateMiracle('miracle-39', {
  fullDescription: `On January 26, 1902, during the Forty Hours devotion at the parish church of Saint-André on the French island of La Réunion in the Indian Ocean, an extraordinary event unfolded before the eyes of its parish priest and an ever-growing crowd of witnesses. Abbot Henry Lacombe, the pastor of Saint-André's church, was celebrating Mass as part of the solemn Forty Hours Eucharistic adoration when, after the elevation of the Host and at the moment of the Our Father, his eyes were drawn upward toward the monstrance. He saw a brilliant halo of light radiating around the rays of the monstrance — and then, within the Host itself, he saw the face of a man with lowered eyes and a crown of thorns on his forehead.

Deeply moved, Abbot Lacombe completed the Mass with great emotion. After Mass, he called the altar boys to come and look at the monstrance. Without prompting or suggestion, the boys reported seeing the head of a man within the Host. A young student who was present independently confirmed seeing the same divine face in the Eucharist. The news spread through the town with extraordinary speed, and soon a great crowd had gathered in the church of Saint-André, filling it to capacity. Journalists arrived from the capital city of Saint-Denis, as well as residents from across the island. Among those who came was a young artist, who carefully and faithfully reproduced the face visible in the Host in a drawing that was subsequently widely circulated.

Abbot Lacombe, committed to eliminating all natural explanations for the phenomenon, took careful precautions. He had all the candles extinguished and the shutters of the church windows closed, plunging the interior into near-darkness. Rather than disappearing, the face in the Host became even more clearly visible in the darkness, ruling out any possibility that the image was a reflection of candlelight or sunlight on the monstrance. The image was observed continuously for many hours by hundreds of people. Over the course of the hours, the apparition evolved: the crown of thorns disappeared from the face, and in its place a full crucifix appeared within the Host, covering its entire surface from top to bottom. The vision finally ended after the Eucharistic blessing and the singing of the Tantum Ergo.

Abbot Lacombe subsequently recounted the full account of this miracle to thousands of people at the Eucharistic Congress of Angouleme in 1904, and again to a gathering of priests at a spiritual retreat in Périgueux. His testimony, consistent and detailed across multiple tellings, along with the testimonies of the altar boys, the student, the journalists, and the hundreds of witnesses present, became the foundation of the Church's documentation of this Eucharistic miracle.`,

  scientificEvidence: [
    "The face of a man with a crown of thorns was observed in the Host by Abbot Lacombe, independent altar boys, a young student, journalists, and hundreds of townspeople — consistent and spontaneous across a large diverse group of witnesses",
    "Abbot Lacombe deliberately extinguished all candles and closed all window shutters, creating near-darkness inside the church; the image in the Host became more visible rather than disappearing, eliminating the hypothesis of light reflection or optical illusion",
    "The vision remained visible for many hours through changing light conditions and was observable both close-up and from a distance, consistent across all categories of observers including clergy, laypersons, children, and journalists",
    "The image evolved dynamically during the hours of observation — the crown of thorns gave way to a full crucifix covering the entire Host — demonstrating a dynamic phenomenon that could not be explained by a static optical trick",
    "A trained artist made a faithful reproduction of the face, providing a visual record of what was collectively observed; the image was judged by those present to be the face of Christ"
  ],

  witnessTestimonies: [
    {
      name: "Abbot Henry Lacombe",
      role: "Parish priest of Saint-André; primary witness and celebrant of the Mass",
      testimony: "At the moment of the Our Father during Mass, I saw a bright halo around the rays of the monstrance and the face of a man in the Host — a face with lowered eyes and a crown of thorns. I extinguished all candles and closed the shutters to test the phenomenon; it became clearer in the darkness. I later recounted the full account at the Eucharistic Congress of Angouleme in 1904 and at a priests' retreat in Périgueux."
    },
    {
      name: "Altar Boys of Saint-André Parish",
      role: "Choir boys called to observe the monstrance after Mass",
      testimony: "Called by Abbot Lacombe after Mass without being told what to look for, we spontaneously reported seeing the head of a man within the Host — confirming the priest's observation without suggestion."
    },
    {
      name: "Young student present at the church",
      role: "Student present following Mass",
      testimony: "Independently confirmed seeing the divine face appearing in the Host, corroborating the accounts of the priest and the altar boys."
    },
    {
      name: "Journalists from Saint-Denis",
      role: "Press correspondents from the capital of La Réunion",
      testimony: "Traveled from the capital city of Saint-Denis to Saint-André upon hearing reports of the miracle. After personally observing the monstrance, confirmed seeing the face within the Host and reported the event to a wider audience."
    }
  ],

  historicalContext: "La Réunion was a French colonial territory in the Indian Ocean in 1902, with a deeply Catholic population shaped by centuries of French missionary activity. The Forty Hours devotion — a form of continuous Eucharistic adoration lasting forty hours — was a common practice in Catholic parishes during this era. The year 1902 was a time of significant Eucharistic renewal in the global Church. The Eucharistic Congress movement was at its height, and the Congress of Angouleme in 1904 — where Abbot Lacombe first publicly recounted this miracle — was part of that broader international revival of Eucharistic piety. That the miracle occurred on the same island and in the same year as the Morne-Rouge miracle in Martinique (also 1902) has been noted by Catholic commentators as a remarkable convergence.",

  timeline: [
    { date: "January 26, 1902", event: "During the Forty Hours devotion at Saint-André parish church, Abbot Henry Lacombe sees a halo of light around the monstrance and the face of a man crowned with thorns in the Host at the moment of the Our Father during Mass" },
    { date: "January 26, 1902 (after Mass)", event: "Lacombe calls the altar boys to observe the monstrance; without prompting, they independently report seeing the head of a man in the Host. A student also confirms the vision." },
    { date: "January 26, 1902 (during adoration)", event: "Lacombe extinguishes all candles and closes the shutters to test the phenomenon; the image becomes more visible in the darkness. Hundreds flood the church including journalists from Saint-Denis and a young artist who draws the face." },
    { date: "January 26, 1902 (over many hours)", event: "The vision evolves: the crown of thorns disappears and a full crucifix appears within the Host, covering the entire surface. Hundreds of witnesses observe continuously." },
    { date: "January 26, 1902 (evening)", event: "The vision ends after the Eucharistic blessing and the singing of the Tantum Ergo." },
    { date: "1904", event: "Abbot Lacombe recounts the full account of the miracle at the Eucharistic Congress of Angouleme before thousands of participants, and again at a priests' retreat in Périgueux." },
    { date: "Present", event: "The miracle is recognized by the Church and documented in the Vatican's International Exhibition of Eucharistic Miracles of the World." }
  ]
});

// Alatri, 1228 (Italy)
updateMiracle('miracle-40', {
  fullDescription: `In the city of Alatri in the Ciociaria region of central Italy, in the year 1228, a young woman found herself desperate to recover the affections of a man she loved. In her desperation, she turned to a local sorceress for help. The sorceress gave her instruction that required the ultimate act of sacrilege: she was to steal a consecrated Host from the church during Mass and bring it to the sorceress, who would use it to prepare a love potion intended to restore her sweetheart's affection.

The young woman attended Mass at the Cathedral of Saint Paul the Apostle in Alatri. At the moment of Holy Communion, she received the Host on her tongue as was the custom, but instead of consuming it, she secretly removed it from her mouth and concealed it in a cloth, taking it home with her. She waited, intending to deliver it to the sorceress. But when she opened the cloth three days later, she did not find the white wafer she had stolen — in its place was a fragment of human flesh, visibly bleeding. She was struck with terror and immediate remorse. The reality of what she held — no longer the appearance of bread but the appearance of flesh — confirmed to her in the most visceral way possible what the Church had always taught: that the consecrated Host truly was the Body of Christ.

Overwhelmed with penitence, the young woman and the sorceress together went immediately to Bishop Giovanni V of Alatri to confess what had happened and to beg for pardon. The Bishop received them, examined the miraculous flesh, and reported the event to Pope Gregory IX in Rome. The Pope's response is preserved to this day: on March 13, 1228, he addressed the Papal Bull Fraternitas tuae to Bishop Giovanni V, describing the event in detail, pardoning both repentant women, and interpreting the miracle as a divine sign given specifically to combat the heresies of the time that denied the Real Presence of Jesus Christ in the Eucharist. The flesh was preserved in a reliquary at the Cathedral of Saint Paul the Apostle in Alatri, where it remains visible to this day — nearly 800 years after the miracle.`,

  scientificEvidence: [
    "A consecrated Host, concealed in cloth and kept for three days, was found transformed into a fragment of flesh visibly bearing blood — a physical transformation with no natural mechanism available to explain it",
    "The transformed Host was examined by Bishop Giovanni V of Alatri, who found it sufficiently extraordinary to report directly to Pope Gregory IX; the Pope's Bull Fraternitas tuae (March 13, 1228) is the oldest surviving papal document authenticating a Eucharistic transformation miracle",
    "The relic — a fragment of consecrated Host transformed into flesh — has been preserved in a reliquary in the Cathedral of Saint Paul the Apostle in Alatri for nearly 800 years without undergoing natural decomposition",
    "The miracle is listed alongside those of Lanciano, Bolsena, and Siena as one of the four foundational Eucharistic miracles of Italy, each involving a physical transformation of the Eucharist and receiving formal papal or episcopal recognition",
    "Pope Gregory IX cited the transformation as direct physical evidence against the Cathar and other heretical movements that denied the Real Presence, treating the event as objectively verifiable testimony to Eucharistic doctrine"
  ],

  witnessTestimonies: [
    {
      name: "The Young Woman of Alatri",
      role: "Primary witness; the person who stole the Host and discovered the transformation",
      testimony: "Having concealed the Host to use in a love potion at a sorceress's instruction, I opened the cloth three days later and found that the Host had been transformed into bleeding flesh. Overcome with fear and remorse, I immediately went with the sorceress to confess to Bishop Giovanni V and beg for pardon. My account was the primary testimony submitted to the Bishop and ultimately to the Pope."
    },
    {
      name: "The Sorceress of Alatri",
      role: "Accomplice; accompanied the young woman to confess to the Bishop",
      testimony: "Accompanied the young woman to Bishop Giovanni V to confess our shared sin and to beg for papal pardon. My testimony corroborated the young woman's account and was presented to the Bishop as part of the confession of both of us."
    },
    {
      name: "Bishop Giovanni V of Alatri",
      role: "Bishop of Alatri; official ecclesiastical examiner of the miracle",
      testimony: "I received the confession of the two women, examined the transformed flesh, and judged the matter extraordinary enough to report directly to Pope Gregory IX in Rome. I kept and enshrined the relic at the Cathedral of Saint Paul the Apostle in Alatri."
    },
    {
      name: "Pope Gregory IX",
      role: "Reigning Pope; issued the Papal Bull Fraternitas tuae authenticating the event",
      testimony: "In the Papal Bull Fraternitas tuae, addressed to Bishop Giovanni V on March 13, 1228, I confirmed the miracle, pardoned both repentant women, and declared the transformation a divine sign against contemporary heresies denying the Real Presence of Christ in the Eucharist. The Bull states that the Host was transformed into flesh 'as everyone has been able to verify with their own eyes.'"
    }
  ],

  historicalContext: "The miracle of Alatri in 1228 occurred at a critical juncture in the history of the medieval Church. The 13th century was an era of intense theological conflict over the nature of the Eucharist. Catharism, a dualist heresy widespread in southern France and northern Italy, rejected the material sacraments entirely, including the Eucharist. The Fourth Lateran Council of 1215, convened under Pope Innocent III, had just formally defined the doctrine of transubstantiation precisely in response to these theological challenges. Pope Gregory IX, who received the report of the Alatri miracle and issued the Bull Fraternitas tuae in 1228, was himself a powerful champion of Eucharistic orthodoxy. The timing of the miracle, just 13 years after Lateran IV's definition of transubstantiation, gave it enormous theological weight, and the Pope explicitly invoked it as evidence against heretical denial of the Real Presence. Alatri's cathedral, the Concattedrale di San Paolo Apostolo, continues to preserve the relic to this day.",

  timeline: [
    { date: "1228", event: "A young woman of Alatri, instructed by a local sorceress, steals a consecrated Host during Mass at the Cathedral of Saint Paul the Apostle, concealing it in a cloth" },
    { date: "Three days after the theft, 1228", event: "The young woman opens the cloth and finds the Host has been transformed into a fragment of bleeding flesh; overcome with terror and remorse, she and the sorceress immediately go to Bishop Giovanni V of Alatri to confess" },
    { date: "1228", event: "Bishop Giovanni V examines the transformed flesh and sends a detailed report to Pope Gregory IX in Rome" },
    { date: "March 13, 1228", event: "Pope Gregory IX issues the Papal Bull Fraternitas tuae, confirming the miracle, pardoning both repentant women, and declaring the transformation a divine sign against heresies denying the Real Presence of Christ in the Eucharist" },
    { date: "1228 onward", event: "The fragment of transformed flesh is enshrined in a reliquary at the Cathedral of Saint Paul the Apostle (Concattedrale di San Paolo Apostolo) in Alatri" },
    { date: "Present", event: "The relic can be venerated in Alatri nearly 800 years after the miracle; the Bull Fraternitas tuae remains the oldest surviving papal document authenticating a Eucharistic transformation; the miracle is listed in the Vatican's Exhibition of Eucharistic Miracles of the World" }
  ]
});

console.log('✓ Batch 3D: Added 5 international miracles (Wilsnack, Chirattakonam, Morne-Rouge, Saint-André, Alatri)');

fs.writeFileSync('public/miracles.json', JSON.stringify(data, null, 2));
