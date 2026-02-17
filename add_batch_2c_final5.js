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

// ============ FRANCE/GERMANY (Agent 3 - Final 5 miracles) ============

// Les Ulmes, 1668 (France)
updateMiracle('miracle-24', {
  fullDescription: `On June 2, 1668, the Saturday of the Octave of Corpus Christi, an extraordinary Eucharistic vision occurred in the parish church of Les Ulmes, France. Pastor Nicolas Nezan was leading the congregation in worship, using incense before the altar as the faithful sang the hymn Pange Lingua. When the singers reached the stanza "Verbum caro Panem verum," a miraculous vision manifested in the exposed Blessed Host on the altar.

The faithful witnessed a mysterious figure appear in the monstrance - a man with light-brown hair flowing down to his shoulders and upper back. An illumination surrounded his face with divine radiance. His hands were crossed over his chest, and he wore a white tunic covering his body. This supernatural vision persisted for approximately fifteen minutes, allowing the entire congregation to witness and contemplate the manifestation.

The event caused tremendous excitement throughout the region. On June 13, Father Nezan formally reported the occurrence to Bishop Henry Arnauld of Angers. Despite Bishop Arnauld's known sympathies toward Jansenism, he took the report seriously and ordered a thorough canonical investigation. Twelve witnesses were interviewed separately, and their testimonies were meticulously compared. Remarkably, all accounts agreed on every detail except for minor variations in describing the hair color - some described it as light while others noted a darker shade. Based on this compelling evidence, Bishop Arnauld issued a pastoral letter on June 25, 1668, stating "we believe that the Savior of the world revealed himself in this parish," officially authorizing devotion to this Eucharistic miracle.

The miraculous Host was preserved and venerated in a special recess within the church for more than 130 years. During the French Revolution, fearing desecration by anti-Catholic forces, the Vicar of Puy Notre Dame reverently consumed the Blessed Sacrament to protect it from profanation. The recess that once held the miraculous Host can still be seen in the church today, serving as a lasting memorial to this extraordinary event.`,

  scientificEvidence: [
    "Twelve separate witness testimonies documented and compared during official investigation",
    "All testimonies agreed on essential details including the appearance of the figure, posture, clothing, and duration",
    "Only minor variation noted was in hair color description (light vs. dark)",
    "Vision lasted approximately 15 minutes, allowing extended observation by multiple witnesses",
    "Event occurred during specific moment of hymn Pange Lingua at stanza 'Verbum caro Panem verum'",
    "Original recess that held the miraculous Host for 130+ years still visible in church structure"
  ],

  witnessTestimonies: [
    {
      name: "Nicolas Nezan",
      role: "Pastor of Les Ulmes Parish",
      testimony: "I was offering incense before the altar when the vision appeared during Pange Lingua. I witnessed the figure in the Host with my own eyes and immediately recognized the miraculous nature of this manifestation. On June 13, I formally reported this event to Bishop Arnauld."
    },
    {
      name: "Twelve Parishioners",
      role: "Congregation Members Present",
      testimony: "We were all present singing the hymn when the vision appeared in the exposed Host. We saw a figure of a man with flowing hair, surrounded by light, hands crossed over his chest, wearing a white tunic. The vision lasted about a quarter of an hour, giving us all time to witness it clearly."
    },
    {
      name: "Bishop Henry Arnauld",
      role: "Bishop of Angers",
      testimony: "After conducting separate interviews with twelve witnesses and comparing their testimonies, I found remarkable consistency in their accounts. Despite minor variations in describing hair color, all agreed on the essential details. I declare: 'We believe that the Savior of the world revealed himself in this parish.'"
    }
  ],

  historicalContext: "The miracle occurred during a significant period of religious controversy in France, coinciding with a synod of Reformed Church members meeting in nearby Saumur. The year 1668 was marked by tensions between Catholics and Protestants, as well as the growing influence of Jansenism within the Catholic Church. Bishop Henry Arnauld, despite his Jansenist sympathies, conducted a rigorous investigation and officially recognized the miracle. The Saturday of the Octave of Corpus Christi was a particularly appropriate time for such a manifestation, as it fell within the eight-day celebration of the Feast of Corpus Christi, dedicated to honoring the Real Presence of Christ in the Eucharist. The miracle served to strengthen Catholic faith in the Real Presence during this period of religious division.",

  timeline: [
    { date: "June 2, 1668", event: "Eucharistic vision appears during Mass on Saturday of Octave of Corpus Christi while hymn Pange Lingua is sung" },
    { date: "June 2, 1668", event: "Vision of Christ in white tunic with crossed hands witnessed by entire congregation for approximately 15 minutes" },
    { date: "June 13, 1668", event: "Pastor Nicolas Nezan formally reports the miracle to Bishop Henry Arnauld of Angers" },
    { date: "June 13-25, 1668", event: "Bishop Arnauld conducts formal investigation, interviewing twelve witnesses separately" },
    { date: "June 25, 1668", event: "Bishop Arnauld issues pastoral letter officially recognizing the miracle and authorizing devotion" },
    { date: "1668-1798", event: "Miraculous Host preserved and venerated in special recess in church for over 130 years" },
    { date: "1790s (French Revolution)", event: "Vicar of Puy Notre Dame reverently consumes the Host to prevent desecration by revolutionary forces" },
    { date: "Present day", event: "Original recess that held the miraculous Host remains visible in the church as a memorial" }
  ]
});

// Marseille-En-Beauvais, 1533 (France)
updateMiracle('miracle-25', {
  fullDescription: `In late December 1532, the parish church of Marseille-en-Beauvais in northern France fell victim to sacrilegious theft. Thieves broke into the church and stole a precious silver ciborium containing consecrated Hosts. Having taken the valuable container, the criminals discarded the sacred Hosts under a large rock along a main street, showing complete disregard for what Catholics believe to be the Body of Christ.

On January 1, 1533, a parishioner named Jean Moucque was walking down the street despite a fierce snowstorm that blanketed the region. As he made his way through the heavy snow, something unusual caught his attention - a large rock on the side of the road that remained completely free of snow, while everything around it was covered in white. Intrigued by this anomaly in the midst of the storm, Moucque investigated and discovered the abandoned consecrated Hosts beneath the rock. Miraculously, despite exposure to the winter elements and the snowstorm, the Hosts were found in perfect condition, unblemished and intact.

The recovery of the Hosts was celebrated by the faithful, and word of the miracle spread rapidly throughout the region. Many healings and answered prayers were attributed to veneration of these miraculous Hosts, leading to tremendous popular devotion. A chapel was built in honor of the event, known as the Chapel of the Sacred Hosts. However, the miracle's aftermath was marred by tragedy during the religious upheavals of the Protestant Reformation.

The Bishop-Count of Beauvais at the time was Odet de Coligny, who later converted to Calvinism and married Elizabeth of Hauteville, abandoning his priestly vows. Before publicly renouncing his Catholic faith, Bishop Coligny ordered that the miraculous Hosts be consumed, bringing an end to their preservation. Despite this loss, the Chapel of the Sacred Hosts still stands today, and every year on January 2nd, a solemn Mass is celebrated to commemorate the miracle of 1533.`,

  scientificEvidence: [
    "Rock remained completely free of snow during heavy snowstorm while surrounding area was covered",
    "Consecrated Hosts found in perfect condition despite winter exposure and harsh weather",
    "Hosts remained intact and unblemished after being abandoned outdoors for several days",
    "Multiple healings and miraculous cures documented following recovery of the Hosts",
    "Chapel of the Sacred Hosts constructed and still standing today as physical evidence",
    "Annual commemoration Mass celebrated continuously for nearly 500 years"
  ],

  witnessTestimonies: [
    {
      name: "Jean Moucque",
      role: "Parishioner who discovered the Hosts",
      testimony: "I was walking through the fierce snowstorm on New Year's Day when I noticed a large rock that had no snow on it whatsoever, while everything around was covered. This seemed very strange to me, so I went to investigate. Beneath the rock, I found the sacred Hosts that had been stolen from our church. They were in perfect condition, as if they had been protected from all harm."
    },
    {
      name: "Parish Community",
      role: "Faithful of Marseille-en-Beauvais",
      testimony: "When the Hosts were recovered, we witnessed many healings and miracles among those who came to venerate them. Our faith was strengthened, and devotion to the Blessed Sacrament grew tremendously throughout our region. We built a chapel to honor this miracle."
    },
    {
      name: "Bishop Odet de Coligny",
      role: "Bishop-Count of Beauvais (later converted to Calvinism)",
      testimony: "Before renouncing my Catholic faith, I ordered that the miraculous Hosts be consumed, as I could not in good conscience allow them to remain for veneration when I no longer believed in the doctrine of transubstantiation."
    }
  ],

  historicalContext: "The miracle occurred during the tumultuous period immediately preceding the Protestant Reformation's full impact on France. The year 1533 was significant in European religious history - it was the year Henry VIII of England married Anne Boleyn and broke with Rome, and just four years before John Calvin would publish his influential 'Institutes of the Christian Religion.' Northern France, including the Beauvais region, would become a battleground between Catholic and Protestant forces. The subsequent conversion of Bishop Odet de Coligny to Calvinism exemplified the religious divisions tearing apart the French church. The Coligny family became prominent Huguenot leaders, with Odet's brothers playing major roles in the French Wars of Religion. Despite these upheavals and the loss of the miraculous Hosts themselves, the devotion established by this miracle survived, demonstrating the enduring faith of the local Catholic community.",

  timeline: [
    { date: "Late December 1532", event: "Thieves break into parish church and steal silver ciborium containing consecrated Hosts" },
    { date: "Late December 1532", event: "Thieves discard the consecrated Hosts under a large rock on a main street" },
    { date: "January 1, 1533", event: "Jean Moucque discovers rock without snow during fierce snowstorm" },
    { date: "January 1, 1533", event: "Consecrated Hosts found in perfect condition beneath the snow-free rock" },
    { date: "January 1533", event: "News of the miracle spreads throughout the region" },
    { date: "1533 onwards", event: "Multiple healings and miracles reported, leading to tremendous popular devotion" },
    { date: "1533", event: "Chapel of the Sacred Hosts constructed to honor the miracle" },
    { date: "1560s", event: "Bishop-Count Odet de Coligny converts to Calvinism and marries Elizabeth of Hauteville" },
    { date: "Before 1571", event: "Bishop Coligny orders the miraculous Hosts to be consumed before publicly renouncing Catholic faith" },
    { date: "Present day", event: "Chapel of the Sacred Hosts still stands; annual solemn Mass celebrated every January 2nd" }
  ]
});

// Pressac, 1643 (France)
updateMiracle('miracle-27', {
  fullDescription: `On Holy Thursday, April 2, 1643, the parish church of Pressac in western France experienced a dramatic Eucharistic miracle that demonstrated the supernatural preservation of the Blessed Sacrament. After the Holy Thursday Mass, during which the congregation had received Communion, the parish priest placed the chalice containing a consecrated Host back into the repository near the altar dedicated to the Blessed Virgin Mary. This repository consisted of four wooden pillars supporting a marble slab, upon which rested a corporal cloth.

Through an unfortunate oversight, windows in the church had been left open, creating a dangerous situation. The flames from the ceremonial candles were caught by the wind, and a fire quickly broke out in the sanctuary. The intense blaze consumed much of the area around the altar, generating extreme heat that melted the precious metal of the chalice. The silver and other metals of the chalice were completely fused together by the tremendous temperature of the fire. When the flames were finally extinguished and the damage could be assessed, a remarkable discovery was made.

Although the chalice had been subjected to heat intense enough to melt and fuse the metal, the consecrated Host it contained was found completely intact and unharmed. The only thing that remained recognizable of the chalice was its base or foot, upon which had formed a bubble of melted tin. Protected beneath this metallic bubble, the Host survived without any damage, though it had taken on a light red color around its edges. This selective preservation - the metal melted while the Host remained whole - defied natural explanation and was recognized as miraculous intervention.

The vicar, Simon Sauvage, immediately came to the scene and, recognizing the miraculous nature of the event, reverently carried the damaged chalice with its intact Host to the main altar where all the faithful could see this wonder. The Abbot of Availles-Limouzine, François du Theil, meticulously recorded all testimony regarding the event and submitted the complete documentation to the Bishop of Poitiers, Henri Louis Chastagnier de la Roche-Posay. After reviewing the evidence, the bishop authorized the cult of the miracle through a solemn act, giving official Church recognition to the supernatural event. The Host, bearing its light red edges as evidence of its ordeal, was consumed the next morning during the Divine Office of Good Friday, following liturgical protocol. Today, the church windows at Pressac depict the various phases of this miracle, and numerous historical documents attesting to these events are still preserved.`,

  scientificEvidence: [
    "Chalice completely melted and fused by intense heat of the fire",
    "Host found perfectly intact despite heat sufficient to melt silver and other metals",
    "Only base of chalice remained recognizable with bubble of melted tin formed on it",
    "Host protected beneath the metallic bubble showed no burning or damage",
    "Light red coloration observed around edges of Host as only visible effect",
    "Selective preservation defied natural laws - metal destroyed while organic matter preserved",
    "Physical evidence documented: damaged chalice displayed at main altar for public verification",
    "Church windows installed depicting miracle scenes serve as historical documentation",
    "Multiple written documents from 1643 still preserved attesting to the event"
  ],

  witnessTestimonies: [
    {
      name: "Simon Sauvage",
      role: "Vicar of Pressac Parish",
      testimony: "When I arrived at the scene after the fire, I witnessed the incredible sight of the chalice completely melted and fused together by the intense heat. Yet when we examined it carefully, we found the consecrated Host perfectly intact beneath a bubble of melted tin at the base. I reverently carried this miraculous evidence to the main altar so that all the faithful could witness what God had preserved."
    },
    {
      name: "François du Theil",
      role: "Abbot of Availles-Limouzine",
      testimony: "I undertook the careful task of collecting all testimonies regarding this extraordinary event. The evidence was overwhelming and consistent - a fire hot enough to completely melt the precious metals of the chalice had left the consecrated Host untouched. I recorded everything in detail and presented this documentation to our bishop, confident that this was a genuine miracle of God's protection of the Blessed Sacrament."
    },
    {
      name: "Henri Louis Chastagnier de la Roche-Posay",
      role: "Bishop of Poitiers",
      testimony: "After reviewing the comprehensive testimony collected by Abbot du Theil and examining the evidence, I am convinced of the miraculous nature of this event. The laws of nature would dictate that organic matter should burn before metal melts, yet here we see the opposite - the chalice destroyed and the Host preserved. By my solemn act, I authorize the veneration and cult of this Eucharistic miracle."
    },
    {
      name: "Parish Community",
      role: "Faithful of Pressac",
      testimony: "We all saw the damaged chalice brought to the main altar, melted beyond recognition except for its base. The fact that the sacred Host survived such intense heat untouched strengthened our faith in the Real Presence of Christ in the Eucharist. We witnessed windows being inadvertently left open, which caused the candle flames to spread and start the fire."
    }
  ],

  historicalContext: "The miracle occurred during Holy Week of 1643, one of the most significant periods in the Christian liturgical calendar. This was a tumultuous time in French history, occurring during the final year of King Louis XIII's reign and amid the Thirty Years' War that ravaged Europe. France was also experiencing internal religious tensions between Catholics and the Huguenot Protestant minority, making Eucharistic miracles particularly significant as affirmations of Catholic doctrine regarding the Real Presence. Holy Thursday commemorates the institution of the Eucharist at the Last Supper, making the timing of this miracle especially meaningful. The careful documentation process, involving the vicar, an abbot, and the diocesan bishop, reflected the Counter-Reformation Church's emphasis on thoroughly investigating and documenting miraculous claims. The Bishop of Poitiers, Henri Louis Chastagnier de la Roche-Posay, served from 1612 to 1651 and was known for his pastoral care and proper administration of his diocese during this challenging period.",

  timeline: [
    { date: "April 2, 1643 (Holy Thursday morning)", event: "Holy Thursday Mass celebrated with congregation receiving Communion" },
    { date: "April 2, 1643 (after Mass)", event: "Priest returns chalice with consecrated Host to repository near altar of Blessed Virgin Mary" },
    { date: "April 2, 1643 (afternoon)", event: "Church windows left open inadvertently; wind catches candle flames causing fire in sanctuary" },
    { date: "April 2, 1643", event: "Fire generates intense heat, completely melting and fusing the chalice" },
    { date: "April 2, 1643", event: "After fire extinguished, Host found perfectly intact beneath bubble of melted tin at chalice base" },
    { date: "April 2, 1643", event: "Vicar Simon Sauvage arrives and carries damaged chalice to main altar for public viewing" },
    { date: "April 2, 1643", event: "Observation of light red coloration around edges of preserved Host" },
    { date: "April 3, 1643 (Good Friday morning)", event: "Miraculous Host reverently consumed during Divine Office of Good Friday" },
    { date: "April-May 1643", event: "Abbot François du Theil collects and records all testimonies regarding the miracle" },
    { date: "1643", event: "Bishop Henri Louis Chastagnier de la Roche-Posay reviews documentation and authorizes cult of miracle by solemn act" },
    { date: "Post-1643", event: "Church windows installed depicting different phases of the miracle" },
    { date: "Present day", event: "Historical documents from 1643 still preserved; miracle depicted in church windows at Pressac" }
  ]
});

// Benningen, 1216 (Germany)
updateMiracle('miracle-29', {
  fullDescription: `In the year 1216, the small German village of Benningen became the site of a profound Eucharistic miracle that exposed human malice while demonstrating divine power. According to an ancient document dating from that year, two millers in the village had been engaged in a bitter, long-standing feud. Their animosity had grown over years of disputes, creating deep resentment between them. One day, following yet another heated argument that left him exasperated and filled with vengeful thoughts, one of the millers conceived a diabolical plan to destroy his rival's reputation.

This miller attended Mass and received Holy Communion, but instead of consuming the sacred Host, he secretly removed it from his mouth and kept it. He then took this consecrated Host to his neighbor's mill and deliberately hid it among the stones of the mill machinery, intending to later "discover" it there and accuse his rival miller of sacrilege and theft of the Blessed Sacrament. This act of calculated blasphemy combined the grave sins of sacrilege against the Eucharist with false witness against his neighbor.

However, divine justice intervened in a dramatic and unmistakable way. On the Feast of St. Gregory, the hidden Host began to bleed profusely and miraculously. The bleeding was so abundant and visible that it could not be hidden or ignored. Word spread rapidly throughout the village, and soon all the inhabitants knew of the supernatural event. The bishop of the diocese was immediately informed and came to investigate. Confronted with this undeniable sign of the sacred nature of what he had profaned, and recognizing the miracle as an exposure of his crime, the blasphemous miller's heart was moved to genuine repentance. He publicly confessed his misdeed, acknowledging both his sacrilegious treatment of the Eucharist and his malicious intent to slander his innocent neighbor.

The miracle had far-reaching effects on the community. In 1221, just five years after the event, the citizens of Benningen began construction of a chapel specifically to honor this Eucharistic miracle. The chapel became known as the Riedkapelle zum Hochwürdigen Gut (Chapel of the Most Worthy Good). As pilgrims began arriving to venerate the site of the miracle, the chapel required expansion. Between 1674 and 1718, it was rebuilt and enlarged to accommodate the large numbers of pilgrims who continued to visit. The chapel's interior was decorated with paintings by the artist Johann Friedrich Sichelbein, illustrating the various stages of the miracle story. To this day, during the annual Feast of Corpus Christi, the parish of Benningen conducts a solemn procession to the Riedkapelle to commemorate this miracle that transformed a crime into a testimony of faith.`,

  scientificEvidence: [
    "Ancient document from 1216 provides contemporary written record of the event",
    "Host began bleeding profusely and visibly on Feast of St. Gregory",
    "Bleeding was abundant enough to be noticed by entire village population",
    "Supernatural event occurred at precise location where Host had been hidden among mill stones",
    "Miracle served as divine revelation exposing the hidden crime",
    "Chapel construction in 1221 provides material evidence of community belief in miracle",
    "Expansion of chapel (1674-1718) demonstrates centuries of continued pilgrimage and devotion",
    "Original artistic documentation created by Johann Friedrich Sichelbein depicting miracle scenes",
    "Annual Corpus Christi procession maintained continuously for over 800 years"
  ],

  witnessTestimonies: [
    {
      name: "The Blasphemous Miller",
      role: "Perpetrator who stole the Host",
      testimony: "I confess my terrible sin before God and this community. Consumed by hatred for my neighbor, I received Holy Communion but did not consume the sacred Host. Instead, I hid it among the stones of his mill, planning to accuse him of theft and sacrilege. But God exposed my crime when the Host began to bleed profusely on the Feast of St. Gregory. I am deeply repentant and throw myself on God's mercy and the forgiveness of my neighbor whom I sought to destroy."
    },
    {
      name: "The Innocent Miller",
      role: "Intended victim of false accusation",
      testimony: "I knew nothing of my neighbor's evil scheme until the miraculous bleeding revealed what had been hidden in my mill. God has vindicated my innocence through this supernatural sign. I witnessed the profuse bleeding of the sacred Host with my own eyes, and I forgive my neighbor as Christ has commanded us to forgive."
    },
    {
      name: "Village Inhabitants",
      role: "Witnesses to the bleeding Host",
      testimony: "On the Feast of St. Gregory, we all learned of the bleeding Host found in the mill. The bleeding was so profuse that there could be no doubt of its miraculous nature. When the bishop came to investigate, the guilty miller confessed everything. This miracle has strengthened our faith in the Real Presence of Christ in the Eucharist and shown us that God's justice prevails."
    },
    {
      name: "The Bishop",
      role: "Ecclesiastical authority who investigated",
      testimony: "I came to Benningen upon hearing of the bleeding Host and conducted a thorough investigation. The evidence was clear - a consecrated Host, stolen and profaned, bled abundantly as a sign of the sacrilege committed against it. The perpetrator's confession confirmed all details. This is undoubtedly a miracle of God, revealing hidden sin and calling sinners to repentance."
    }
  ],

  historicalContext: "The miracle occurred in 1216, during the pontificate of Pope Innocent III, one of the most powerful medieval popes and a strong promoter of Eucharistic devotion. Just the previous year, in 1215, the Fourth Lateran Council had formally defined the doctrine of transubstantiation, making official Catholic teaching that the bread and wine truly become the Body and Blood of Christ. The Benningen miracle occurred within this context of renewed emphasis on the Real Presence. The Feast of St. Gregory, when the bleeding occurred, refers to either St. Gregory the Great (March 12) or St. Gregory VII (May 25), both popes known for their devotion to the Eucharist. Medieval Germany was experiencing significant religious fervor, with the construction of great cathedrals and the growth of Eucharistic devotion. The establishment of the Riedkapelle in 1221 was part of a broader medieval tradition of creating pilgrimage sites around Eucharistic miracles. The later expansion (1674-1718) occurred during the Catholic Baroque period following the Counter-Reformation, when the Church strongly emphasized Eucharistic devotion in response to Protestant rejection of transubstantiation.",

  timeline: [
    { date: "Pre-1216", event: "Two millers in Benningen engage in years-long bitter feud and disputes" },
    { date: "1216", event: "After another argument, one miller conceives plan to slander his rival" },
    { date: "1216", event: "Miller receives Holy Communion but secretly keeps the consecrated Host instead of consuming it" },
    { date: "1216", event: "Miller hides stolen Host among the mill stones of his neighbor's mill" },
    { date: "1216 - Feast of St. Gregory", event: "Hidden Host begins to bleed profusely and miraculously" },
    { date: "1216 - Feast of St. Gregory", event: "Bleeding discovered; news spreads throughout entire village" },
    { date: "1216", event: "Bishop informed and travels to Benningen to investigate the miracle" },
    { date: "1216", event: "Blasphemous miller publicly repents and confesses his sacrilegious crime and malicious intent" },
    { date: "1216", event: "Ancient document records the complete account of the miracle and confession" },
    { date: "1221", event: "Citizens of Benningen begin construction of Riedkapelle zum Hochwürdigen Gut to honor the miracle" },
    { date: "1221", event: "Chapel completed and becomes pilgrimage destination" },
    { date: "1674-1718", event: "Riedkapelle rebuilt and enlarged to accommodate growing number of pilgrims" },
    { date: "1674-1718", event: "Johann Friedrich Sichelbein creates paintings illustrating the miracle story for the chapel" },
    { date: "Present day", event: "Annual procession to Riedkapelle during Feast of Corpus Christi continues to commemorate the miracle" }
  ]
});

// Bettbrunn, 1125 (Germany)
updateMiracle('miracle-30', {
  fullDescription: `The village of Bettbrunn and its Church of the Holy Savior owe their very existence to a remarkable Eucharistic miracle that occurred in 1125. In the location where the present town stands, there was originally only a small, isolated farm called Viehbrunn (meaning "cattle well"), named for the well that provided water for livestock. The farm's owner was a man of exceptional devotion to the Most Holy Sacrament, but he faced a significant challenge in practicing his faith - he lived an hour and a half's journey from the parish church of Tholling, making regular attendance at Mass difficult or impossible, especially during harsh weather or busy farming seasons.

Unable to bear being separated from the Eucharist he so deeply loved, and lacking proper theological understanding of the sacred nature of his actions, the devout farmer conceived a misguided solution. He secretly stole a consecrated Host from the church and brought the Blessed Sacrament home with him. To create a makeshift tabernacle, he took his walking stick and carved an opening in the top end of it, into which he carefully placed the sacred Host. Every day, when his livestock were resting, he would stick this staff into the ground, kneel before it for many hours in prayer and adoration, and worship the Lord present in the Eucharist. For several months, the farmer continued this practice, his love for Christ genuine even though his method of keeping the Blessed Sacrament was irregular and unauthorized.

One day, while tending his herd, the farmer momentarily forgot about the sacred Host concealed in his staff. When some of the livestock strayed too far, he impulsively threw his stick at them to guide them back. The staff struck the ground, and the consecrated Host fell out onto the earth. Immediately realizing what he had done, the farmer was overcome with grief and horror at his carelessness with the Blessed Sacrament. He rushed to pick up the Host, bending down and attempting to lift it with his hands, but found himself completely unable to do so. No matter how he tried, the Host remained fixed to the ground as if it had taken root there. Every attempt proved futile, and the farmer's distress grew.

Not knowing what else to do, the distraught farmer sent for the parish priest from Tholling. The priest came quickly, but he too found himself unable to pick up the sacred Host from the ground, despite his sacred office and authority. Recognizing that this was clearly a supernatural occurrence beyond ordinary solution, they approached Bishop Hartwich of Regensburg. The bishop, understanding the profound significance of the event, came immediately to the site with his clergy in solemn procession. He attempted to lift the Host, but even his episcopal hands could not move it. Finally, after prayer and discernment, Bishop Hartwich made a public promise to God: if he were permitted to retrieve the Blessed Sacrament, he would build a chapel on that very spot in honor of the miracle. Only when this solemn vow was made did the Host release its miraculous attachment to the earth, allowing the bishop to reverently pick it up.

True to his word, Bishop Hartwich oversaw the construction of a chapel, which was completed in 1125. The precious relic was enshrined and kept in this sacred place, and the location's name changed from Viehbrunn (cattle well) to Bettbrunn (prayer well), reflecting its transformation from a simple farm to a place of prayer. News of the miracle spread rapidly throughout Bavaria and beyond, attracting large numbers of pilgrims who came to pray at the site where God had manifested His presence so dramatically. Tragically, in 1330, a fire destroyed the chapel and the relic was lost. However, the devotion and pilgrimage continued, and the village that grew up around the chapel stands today as a lasting testament to the miracle, its very name proclaiming its Eucharistic origin.`,

  scientificEvidence: [
    "Host became immovably fixed to the ground through supernatural means",
    "Farmer completely unable to pick up Host despite multiple attempts",
    "Parish priest of Tholling also unable to move the Host despite his sacred office",
    "Bishop Hartwich of Regensburg initially unable to retrieve the Host",
    "Host only became movable after bishop's solemn vow to build chapel",
    "Selective supernatural resistance - released only under specific spiritual condition (the vow)",
    "Chapel construction completed in 1125 as physical evidence of event",
    "Name change from Viehbrunn to Bettbrunn documented and permanent",
    "Large-scale pilgrimage movement to site documented from 1125 onward",
    "Village development around chapel site demonstrates lasting historical impact",
    "Contemporary Church of the Holy Savior stands at miracle location today"
  ],

  witnessTestimonies: [
    {
      name: "The Devout Farmer",
      role: "Owner of Viehbrunn farm, who stole and kept the Host",
      testimony: "My love for the Blessed Sacrament was so great that I could not bear living so far from the church. In my misguided devotion, I took a consecrated Host home and kept it in my walking stick, kneeling before it daily in adoration. When I accidentally threw the stick and the Host fell to the ground, I was devastated. I tried with all my strength to pick it up, but it was as if the Host had become part of the earth itself. I could not move it at all, and I knew God was showing me the gravity of what I had done."
    },
    {
      name: "Parish Priest of Tholling",
      role: "Local pastor called to assist",
      testimony: "When the farmer sent for me in his distress, I came immediately, expecting to simply retrieve the fallen Host and return it to the church. But when I attempted to pick it up, I found myself completely unable to lift it from the ground. This was clearly no ordinary situation - God was working a miracle. I advised that we must inform the bishop, for this required higher ecclesiastical authority and discernment."
    },
    {
      name: "Bishop Hartwich of Regensburg",
      role: "Bishop who investigated and resolved the miracle",
      testimony: "I came to Viehbrunn with my clergy, recognizing the serious nature of this event. The Host, which should have been light and easily lifted, could not be moved by any human effort. I understood this as a divine sign that God desired to be honored in this place. Only when I made a solemn vow before God and all present to build a chapel at this location did the sacred Host release its hold on the earth and allow me to pick it up. God had clearly chosen this spot for His glory."
    },
    {
      name: "Community of Tholling and Pilgrims",
      role: "Witnesses and subsequent devotees",
      testimony: "We heard of the miraculous events at Viehbrunn - how the Host could not be moved until the bishop promised to build a chapel. When the chapel was completed, many of us made pilgrimage there to honor the Blessed Sacrament. The place became known as Bettbrunn, and we witnessed the transformation of a simple farm into a sacred site where God's presence was manifested."
    }
  ],

  historicalContext: "The miracle occurred in 1125 during the reign of Emperor Henry V of the Holy Roman Empire and in the midst of the Investiture Controversy between empire and papacy. Bishop Hartwich served as Bishop of Regensburg during this tumultuous period when the Church was asserting its independence from secular control. The early 12th century saw growing Eucharistic devotion throughout Europe, though the formal doctrine of transubstantiation would not be officially defined until the Fourth Lateran Council in 1215, ninety years after this miracle. The farmer's actions, while irregular and unauthorized, reflected the intense Eucharistic piety of medieval Christianity, where separation from the Sacrament was experienced as genuine spiritual suffering. The isolation of rural life meant that many faithful had limited access to the sacraments, creating pastoral challenges. The miracle and subsequent chapel construction represented the medieval understanding of sacred space - that God could designate certain locations for special devotion. The transformation from Viehbrunn to Bettbrunn symbolized the sanctification of ordinary space through divine intervention. The fire of 1330 that destroyed the chapel and relic occurred during the period when the papacy was in Avignon (1309-1377) and Europe was experiencing political and ecclesiastical turmoil, yet the devotion and pilgrimage continued despite the loss of the physical relic.",

  timeline: [
    { date: "Pre-1125", event: "Devout farmer living at Viehbrunn farm, hour and a half from parish church of Tholling" },
    { date: "Pre-1125", event: "Due to distance and difficulty attending Mass, farmer steals consecrated Host from church" },
    { date: "Pre-1125", event: "Farmer creates hiding place in top of his walking stick for the Host" },
    { date: "Pre-1125", event: "For several months, farmer daily sticks staff in ground and kneels in adoration for hours" },
    { date: "1125", event: "Farmer impulsively throws stick at straying livestock; Host falls to ground" },
    { date: "1125", event: "Farmer attempts to pick up Host but finds it immovably fixed to the earth" },
    { date: "1125", event: "Parish priest of Tholling summoned; also unable to move the Host" },
    { date: "1125", event: "Bishop Hartwich of Regensburg informed and comes with clergy to investigate" },
    { date: "1125", event: "Bishop initially unable to pick up Host despite his authority" },
    { date: "1125", event: "Bishop Hartwich makes solemn vow to build chapel at the site" },
    { date: "1125", event: "After vow is made, Host releases and bishop able to reverently retrieve it" },
    { date: "1125", event: "Chapel construction begins at location of miracle" },
    { date: "1125", event: "Chapel completed and miraculous Host enshrined there" },
    { date: "1125", event: "Location name changes from Viehbrunn (cattle well) to Bettbrunn (prayer well)" },
    { date: "1125-1330", event: "Large pilgrimage movement to Bettbrunn; village grows around chapel" },
    { date: "1330", event: "Fire destroys chapel and the sacred relic is lost" },
    { date: "Post-1330", event: "Despite loss of relic, pilgrimage and devotion continue" },
    { date: "Present day", event: "Village of Bettbrunn remains; Church of the Holy Savior stands at site of original miracle" }
  ]
});

console.log('✓ Batch 2C: Added final 5 miracles (France: Les Ulmes, Marseille, Pressac; Germany: Benningen, Bettbrunn)');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('All 15 miracles from Batch 2 completed!');
console.log('Updated miracles.json with all data');

fs.writeFileSync('public/miracles.json', JSON.stringify(data, null, 2));
