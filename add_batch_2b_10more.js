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

// ============ FRANCE (Agent 2 - 5 miracles) ============

// Blanot, 1331
updateMiracle('miracle-17', {
  fullDescription: `On Easter Sunday, March 31, 1331, during the first Mass of the day at the Church of St. Andoche in Blanot, a profound miracle occurred. The Mass was offered by Hugues de la Baume, the vicar of Blanot, in this small village in the Diocese of Autun in central France. Among the last to receive Holy Communion was Jacquette, the widow of Regnaut d'Effour. As the priest placed the Host on her tongue and turned toward the altar, he did not notice that a particle from the consecrated Host had fallen from her mouth.

The fragment landed upon a white cloth that covered the woman's hands. Thomas Caillot, who was assisting at the Mass, immediately called the priest's attention: "Father, you must return to the rail because the Body of Our Lord fell from the mouth of this lady onto the cloth." When Father Hugues de la Baume attempted to retrieve the Sacred Host, he discovered that it had been transformed into blood, leaving a crimson stain the exact size and shape of the Host on the cloth. The miraculous bloodstain could not be moved or removed from the fabric.

Fifteen days after the miracle, on April 15, 1331, Jean Jarossier, an official of the Archdiocese of Autun, traveled to Blanot to conduct a formal canonical investigation. He was accompanied by the Curé de Lucenay, a monsignor of Autun, an apostolic notary, and was received by Pierre Osnonout, the parish priest of Blanot. The investigation included detailed interrogation of witnesses who had been present at the miraculous event. The results of this thorough investigation were forwarded to Archbishop Pierre Bertrand, who then sent them to Pope John XXII at Avignon. The Pope pronounced a favorable verdict and granted special indulgences to those who would celebrate Mass in the parish church of Blanot in honor of the miracle.

The bloodstained cloth became a cherished relic, initially preserved by a parishioner named Dominique Cortet. In 1706, marking 375 years since the miracle, the Host was still preserved in remarkably good condition. A solemn five-hour procession was organized throughout the parish of Blanot in observance of the anniversary. The ceremony included numerous prelates and drew massive crowds from the parish and surrounding areas. At the conclusion, the silver ciborium holding the relic was returned to its golden reliquary and carefully placed in the main tabernacle. Even during the French Revolution, the relic survived: on December 27, 1793, revolutionaries entered the church and opened the tabernacle, but one of them handled the bloodstained cloth (now encased in a crystal tube) and rejected it as having little value. Today, according to ancient custom, the relic is solemnly exposed each year on Easter Monday in St. Martin's Church in Blanot.`,

  scientificEvidence: [
    "The bloodstain on the cloth remained the exact size and shape of a Host",
    "The Host transformed into blood that could not be moved or separated from the cloth",
    "The relic remained in remarkably good condition for 375 years by 1706",
    "The bloodstain has been preserved for nearly 700 years and remains visible today",
    "Multiple witnesses observed the transformation immediately after it occurred"
  ],

  witnessTestimonies: [
    {
      name: "Hugues de la Baume",
      role: "Vicar of Blanot, Celebrating Priest",
      testimony: "The priest who celebrated the first Mass on Easter Sunday and attempted to retrieve the fallen Host, only to discover it had transformed into blood that could not be moved from the cloth."
    },
    {
      name: "Jacquette (widow of Regnaut d'Effour)",
      role: "Communicant",
      testimony: "The widow who received Holy Communion when the particle of the Host fell onto the cloth covering her hands, becoming the center of this miraculous event."
    },
    {
      name: "Thomas Caillot",
      role: "Mass Server",
      testimony: "The altar server who first noticed the fallen Host and immediately alerted the priest, saying: 'Father, you must return to the rail because the Body of Our Lord fell from the mouth of this lady onto the cloth.'"
    },
    {
      name: "Jean Jarossier",
      role: "Archdiocese of Autun Official, Lead Investigator",
      testimony: "Conducted the official canonical investigation fifteen days after the miracle, interrogating witnesses and documenting the evidence that was sent to Pope John XXII."
    },
    {
      name: "Pierre Bertrand",
      role: "Archbishop of Autun",
      testimony: "Received the investigation results and forwarded them to Pope John XXII, playing a crucial role in the ecclesiastical approval of the miracle."
    }
  ],

  historicalContext: "The miracle occurred during the troubled early 14th century, when France was on the brink of the Hundred Years' War and the Catholic Church was experiencing the Avignon Papacy. Pope John XXII (1316-1334), the second Avignon pope who centralized church administration, received the investigation and granted his approval. The year 1331 was marked by theological controversies, as Pope John XXII himself preached sermons on the beatific vision that winter. France was experiencing dynastic turmoil under Philip V, an ally of Pope John XXII. This period saw intense devotion to the Eucharist, partly in response to various heresies questioning the Real Presence of Christ. The Diocese of Autun, where Blanot was located, maintained strong ecclesiastical structures that enabled the rapid and thorough investigation of this miracle.",

  timeline: [
    {
      date: "March 31, 1331",
      event: "Easter Sunday - The Host transforms into blood during the first Mass, celebrated by Father Hugues de la Baume"
    },
    {
      date: "April 15, 1331",
      event: "Jean Jarossier arrives in Blanot to conduct formal canonical investigation with ecclesiastical officials"
    },
    {
      date: "1331 (following investigation)",
      event: "Archbishop Pierre Bertrand forwards investigation results to Pope John XXII at Avignon"
    },
    {
      date: "1331 (following investigation)",
      event: "Pope John XXII issues favorable verdict and grants special indulgences for Masses celebrated in Blanot"
    },
    {
      date: "1706",
      event: "Solemn five-hour procession held for the 375th anniversary; Host still remarkably well preserved"
    },
    {
      date: "December 27, 1793",
      event: "French revolutionaries enter church and handle the relic but reject it as worthless, miraculously preserving it"
    },
    {
      date: "Present Day",
      event: "Relic continues to be solemnly exposed each year on Easter Monday in St. Martin's Church in Blanot"
    }
  ]
});

// Dijon, 1430
updateMiracle('miracle-19', {
  fullDescription: `In 1430, in Monaco, a woman purchased a monstrance from a second-hand dealer. The sacred vessel still contained a consecrated Host meant for Eucharistic adoration, and it was most likely stolen property. The woman, being profoundly ignorant regarding the Real Presence of Christ in the Eucharist and unaware of the sacred nature of what she possessed, decided to remove the Host from the ornate monstrance using a knife, presumably to use or sell the valuable vessel.

As her knife touched the Host, an extraordinary miracle occurred: the Host began to drip living blood. The blood dried almost immediately, leaving a miraculous image imprinted on the Host—the figure of the Lord Jesus Christ seated on a semicircular throne, surrounded by instruments of His Passion including the cross, nails, and crown of thorns. The woman, deeply unsettled and frightened by what she had witnessed, realized she had committed a grave sacrilege against something holy.

Seeking help, the woman brought the miraculous Host to Canon Anelon, a respected church official, who took custody of the sacred relic. The remarkable nature of the miracle quickly became known throughout the region and beyond. News reached Pope Eugene IV in Rome, who was deeply moved by the account of the miraculous Host. The Pope desired to honor the miracle and decided to donate it to Duke Philip the Good of Burgundy (Philippe de Bourgogne), one of the most powerful nobles in Europe at the time. Duke Philip, in turn, demonstrated his devotion by donating the miraculous Host to the city of Dijon, the capital of his duchy, where it would be accessible for public veneration.

For more than 350 years, the miraculous Host remained intact and was venerated in the Basilica of St. Michael the Archangel in Dijon. One of the stained glass windows in the Cathedral of Dijon was created to portray the main scene of the miracle, ensuring its memory would be preserved. Tragically, during the French Revolution, on February 9, 1794, the municipality of Dijon requisitioned the church to convert it into a temple for the new secular cult of "la Raison" (Reason). In this act of revolutionary iconoclasm, the miraculous Host that had survived for over three and a half centuries was deliberately destroyed by fire.`,

  scientificEvidence: [
    "The Host spontaneously dripped living blood when touched by a knife",
    "Blood dried immediately, leaving a permanent miraculous image on the Host",
    "The image showed Christ seated on a semicircular throne with instruments of the Passion",
    "The Host remained perfectly intact for over 350 years (1430-1794)",
    "The miraculous image was detailed enough to be replicated in stained glass art",
    "The preservation of organic material (bread) for over three centuries defies natural decomposition"
  ],

  witnessTestimonies: [
    {
      name: "The Woman from Monaco",
      role: "Unwitting Instigator of the Miracle",
      testimony: "Purchased a monstrance containing the Host from a second-hand dealer and attempted to remove the Host with a knife. She witnessed the Host begin to drip blood and saw the miraculous image form, prompting her to seek Canon Anelon in fear and repentance."
    },
    {
      name: "Canon Anelon",
      role: "Church Official, First Ecclesiastical Custodian",
      testimony: "Received the miraculous Host from the frightened woman and took custody of it. His recognition of the miracle's authenticity initiated the ecclesiastical investigation and preservation of the relic."
    },
    {
      name: "Pope Eugene IV",
      role: "Supreme Pontiff (1431-1447)",
      testimony: "Learned of the miracle and was so moved by it that he desired to honor it by donating the miraculous Host to Duke Philip of Burgundy, demonstrating papal recognition of the miracle's authenticity."
    },
    {
      name: "Duke Philip the Good of Burgundy",
      role: "Duke of Burgundy, Benefactor",
      testimony: "Received the miraculous Host from Pope Eugene IV and donated it to the city of Dijon, ensuring it would be preserved in the Basilica of St. Michael for public veneration and demonstrating the nobility's devotion to the Eucharist."
    }
  ],

  historicalContext: "The miracle occurred in 1430, a pivotal year during the Hundred Years' War between France and England. Just weeks before this miracle, Joan of Arc had been captured by Burgundian forces on May 23, 1430, at Compiègne and would soon be sold to the English. Duke Philip the Good of Burgundy, recipient of the miraculous Host, was a key player in this conflict, having allied with England against the French crown. The Burgundian state was at its zenith of power and wealth, controlling vast territories including present-day Belgium, the Netherlands, and eastern France. Pope Eugene IV (1431-1447) faced numerous challenges including the Council of Basel and conflicts with the conciliar movement. France remained divided between the Armagnac faction supporting King Charles VII and the Burgundian-English alliance. This period saw intense religious devotion amid political chaos, with the Eucharist serving as a unifying symbol of Catholic faith during a time when Christendom faced both external threats and internal divisions.",

  timeline: [
    {
      date: "1430",
      event: "A woman in Monaco purchases a monstrance containing a consecrated Host from a second-hand dealer"
    },
    {
      date: "1430",
      event: "The woman attempts to remove the Host with a knife; it begins to drip blood and forms an image of Christ"
    },
    {
      date: "1430",
      event: "The frightened woman brings the miraculous Host to Canon Anelon, who takes custody of it"
    },
    {
      date: "1430-1431",
      event: "News of the miracle spreads and reaches Pope Eugene IV in Rome"
    },
    {
      date: "c. 1431",
      event: "Pope Eugene IV donates the miraculous Host to Duke Philip the Good of Burgundy"
    },
    {
      date: "c. 1431",
      event: "Duke Philip the Good donates the Host to the city of Dijon for public veneration"
    },
    {
      date: "1431-1794",
      event: "The miraculous Host is preserved and venerated in the Basilica of St. Michael the Archangel in Dijon for 363 years"
    },
    {
      date: "Medieval Period",
      event: "Cathedral of Dijon creates stained glass window depicting the miracle"
    },
    {
      date: "February 9, 1794",
      event: "Municipality of Dijon requisitions the church for the Cult of Reason; the miraculous Host is destroyed by fire"
    }
  ]
});

// Douai, 1254
updateMiracle('miracle-20', {
  fullDescription: `On Easter Sunday in 1254, in the Church of St. Peter in Douai, located in northern France on the River Scarpe, a remarkable Eucharistic miracle unfolded before a congregation of faithful and religious. During the distribution of Holy Communion, a priest accidentally dropped a consecrated Host to the ground—a moment that would have caused immediate distress to all present, given the profound reverence for the Blessed Sacrament in medieval Catholicism.

The priest immediately bent down to retrieve the Holy Eucharist, but what happened next astonished everyone in attendance. Instead of remaining on the ground, the Host miraculously lifted up in flight of its own accord and alighted gently upon the purificator, the sacred cloth used to cleanse the chalice. The faithful watched in wonder as this divine intervention prevented any desecration of the Blessed Sacrament. But the miracle did not end there. Shortly afterward, a vision of a beautiful, radiant Child appeared on the cloth where the Host had landed. All the faithful and religious present in the church were able to see and contemplate this wonderful Child, who was understood to be a manifestation of the Christ Child, revealing the reality of Christ's presence in the Eucharist.

Among those present was Thomas de Cantimpré, a Dominican priest, doctor of theology, and suffragan Bishop of Cambrai, who served as an eyewitness to this miraculous event. He later documented his observations in his influential work "Bonum universale de Apibus" (The Universal Good of Bees), an allegorical text that was widely read throughout Europe for centuries. In this work, Thomas described examining the miraculous Host and recounted that he saw the face of Christ crowned with thorns, with two drops of blood descending from His forehead—a vivid representation of Christ's Passion. His detailed eyewitness testimony provided crucial documentation that authenticated the miracle for future generations.

The miraculous Host was carefully preserved and became the object of great veneration. By 1356, exactly one century after the apparition, an annual feast was established to commemorate the miracle, celebrated every year on Wednesday of Holy Week. The precious relic of the miracle was conserved and honored for centuries. However, during the upheaval of the French Revolution, all signs of the marvel were lost for many years. The relic's rediscovery came unexpectedly in October 1854, when the Pastor of the Church of St. Peter discovered beneath the Christ figure in the Altar of the Dead a small wooden box containing a small Host, still white but with damaged edges. Since then, every Thursday of the month in the Church of Saint Peter of Douai, many faithful gather in prayer before the miraculous Host, continuing a tradition of Eucharistic devotion that spans more than 770 years.`,

  scientificEvidence: [
    "The Host defied gravity, lifting up and flying to land on the purificator without human intervention",
    "A visible manifestation of a Child appeared on the Host, seen by all present in the church",
    "The Host showed the face of Christ crowned with thorns with two drops of blood on His forehead",
    "The Host was preserved for over 600 years despite being organic material (bread)",
    "After being lost during the Revolution, the Host was rediscovered in 1854 still white, though with damaged edges",
    "The Host has been venerated continuously since 1254, surviving wars, revolution, and nearly 800 years of history"
  ],

  witnessTestimonies: [
    {
      name: "The Celebrating Priest (name unknown)",
      role: "Parish Priest of Church of St. Peter",
      testimony: "Accidentally dropped the consecrated Host during Communion distribution, then witnessed it miraculously lift up and fly to the purificator, followed by the appearance of the Christ Child."
    },
    {
      name: "Thomas de Cantimpré",
      role: "Dominican Priest, Doctor of Theology, Suffragan Bishop of Cambrai, Eyewitness",
      testimony: "Documented in 'Bonum universale de Apibus' that he personally examined the miraculous Host and saw the face of Christ crowned with thorns with two drops of blood descending on His forehead, providing crucial eyewitness authentication."
    },
    {
      name: "The Congregation of Faithful and Religious",
      role: "Witnesses Present at Easter Mass",
      testimony: "All those present in the Church of St. Peter on Easter Sunday 1254 were able to see and contemplate the wonderful Child that appeared on the Host, making this a public miracle with multiple witnesses."
    },
    {
      name: "Pastor of Church of St. Peter (1854)",
      role: "Parish Priest, Rediscoverer of the Relic",
      testimony: "In October 1854, discovered by chance beneath the Christ in the Altar of the Dead a small wooden box containing the miraculous Host, still preserved after 600 years."
    }
  ],

  historicalContext: "The miracle occurred in 1254, the very year King Louis IX (Saint Louis) of France returned from the Seventh Crusade (1248-1254). Louis IX had departed for the Holy Land in 1248, suffered defeat and capture in Egypt, was ransomed, and spent four years in the Holy Land before returning to France in July 1254. This was the golden age of medieval France under Saint Louis, when the kingdom was at its height politically and economically, commanding the largest army and ruling the wealthiest kingdom in Europe. Paris was the center of European arts and intellectual thought, with the foundations of the Sorbonne laid around 1257. The 13th century saw intense Eucharistic devotion, reflected in the recent establishment of the feast of Corpus Christi (1246) and the construction of magnificent Gothic cathedrals with elaborate tabernacles. Douai itself was an important city in the County of Flanders, a prosperous region known for its textile trade and strong Catholic faith. The miracle occurred during Easter, the most important celebration in the liturgical calendar, emphasizing the connection between Christ's Resurrection and His Real Presence in the Eucharist.",

  timeline: [
    {
      date: "Easter Sunday, 1254",
      event: "During Mass at Church of St. Peter in Douai, a priest drops a consecrated Host during Communion distribution"
    },
    {
      date: "Easter Sunday, 1254",
      event: "The Host miraculously lifts up and flies to land on the purificator; a vision of a beautiful Child appears"
    },
    {
      date: "Easter Sunday, 1254",
      event: "Thomas de Cantimpré, along with all faithful present, witnesses and contemplates the miraculous Child"
    },
    {
      date: "Shortly after 1254",
      event: "Thomas de Cantimpré examines the Host closely and observes the face of Christ crowned with thorns with two drops of blood"
    },
    {
      date: "1256-1270s",
      event: "Thomas de Cantimpré documents the miracle in his work 'Bonum universale de Apibus'"
    },
    {
      date: "1356",
      event: "One century after the miracle, an annual feast is established on Wednesday of Holy Week to commemorate the event"
    },
    {
      date: "1356-1790s",
      event: "The miraculous Host is conserved and honored as a precious relic in the Church of St. Peter"
    },
    {
      date: "1790s (French Revolution)",
      event: "During revolutionary upheaval, all signs of the miracle are lost for many years"
    },
    {
      date: "October 1854",
      event: "Pastor of Church of St. Peter discovers the Host by chance in a small wooden box beneath the Altar of the Dead"
    },
    {
      date: "1854-Present",
      event: "Every Thursday of the month, faithful gather in prayer before the miraculous Host in the Church of St. Peter"
    }
  ]
});

// La Rochelle, 1461
updateMiracle('miracle-22', {
  fullDescription: `In 1461, in the coastal city of La Rochelle in western France, a remarkable miracle of healing occurred on Easter Sunday at the church of St. Bartholomew. At the center of this miracle was a 12-year-old boy named Bertrand, the son of Jehan Leclerc. Since the age of seven, Bertrand had suffered from complete paralysis and muteness, the result of a terrible fall. For five years, the boy had been unable to walk, move freely, or speak a single word—a devastating affliction for both him and his family.

On that Easter Sunday morning, Bertrand attended Holy Mass at the church of St. Bartholomew with his mother. As the moment for Holy Communion approached, the boy, despite his inability to speak, somehow indicated to his mother and those around him that he wished to receive Jesus in the Eucharist. This desire presented a serious problem: the priest objected to giving Communion to the boy because, being mute, Bertrand was unable to go to Confession. According to Church practice, the faithful were required to confess their sins before receiving the Eucharist, especially during the Easter season. How could someone who could not speak make a proper confession?

Despite the priest's reasonable objections, Bertrand continued to plead in whatever way he could—through gestures, expressions, and the intensity of his desire visible in his eyes. His persistent pleading eventually convinced the priest that the boy's desire for the Eucharist was genuine and came from a deep faith. Moved by compassion and perhaps sensing divine prompting, the priest ultimately decided to give Bertrand Holy Communion, trusting in God's mercy and the boy's evident devotion.

The moment the consecrated Host touched Bertrand's tongue, an extraordinary transformation occurred. The boy was shaken by an unexplainable supernatural force that coursed through his body. Immediately, he was able to move his paralyzed limbs and, most miraculously, he could speak. The first words that came from Bertrand's mouth after five years of silence were Latin words from the Psalms: "Adjutorium nostrum in nomine Domini!"—"Our help is in the name of the Lord!" The congregation witnessed this instantaneous cure with amazement and joy, recognizing it as a powerful sign of Christ's Real Presence in the Eucharist and His healing power. The boy who moments before could neither walk nor speak was now fully healed, praising God and moving freely. The most authoritative document describing this miracle is a beautifully painted manuscript that has been preserved to this day in the Cathedral of La Rochelle, ensuring that this testimony to the power of the Eucharist would inspire future generations.`,

  scientificEvidence: [
    "Bertrand suffered from complete paralysis for 5 years (ages 7-12) with no improvement",
    "The boy was completely mute, unable to speak for 5 years",
    "Instantaneous healing occurred the moment he received Holy Communion",
    "He immediately regained full mobility and the ability to walk",
    "He immediately regained speech, with his first words being in Latin",
    "The transformation was witnessed by the entire congregation present at Mass",
    "Medical conditions causing paralysis and muteness for 5 years do not spontaneously resolve in seconds"
  ],

  witnessTestimonies: [
    {
      name: "Bertrand Leclerc",
      role: "12-year-old Recipient of the Miracle",
      testimony: "After five years of paralysis and muteness since age seven, demonstrated intense desire to receive Communion. Upon receiving the Host, was immediately healed and spoke his first words: 'Adjutorium nostrum in nomine Domini!' ('Our help is in the name of the Lord!')."
    },
    {
      name: "Jehan Leclerc",
      role: "Bertrand's Mother",
      testimony: "Accompanied her paralyzed and mute son to Mass on Easter Sunday. Understood his non-verbal communication that he wished to receive Holy Communion and supported his petition to the priest despite the irregularity of the situation."
    },
    {
      name: "The Priest of St. Bartholomew",
      role: "Celebrating Priest",
      testimony: "Initially objected to giving Communion to Bertrand because the boy, being mute, could not make a proper Confession. After Bertrand's persistent pleading, was moved by compassion and faith to give him Communion, thus facilitating the miraculous healing."
    },
    {
      name: "The Congregation at St. Bartholomew",
      role: "Witnesses Present at Easter Mass",
      testimony: "The faithful present at Mass witnessed both Bertrand's persistent request for Communion despite his disabilities, and his instantaneous cure when he received the Host, including his ability to move and speak Latin words of praise."
    }
  ],

  historicalContext: "The miracle occurred in 1461, a pivotal year marking the transition from the reign of Charles VII to Louis XI of France. Charles VII died on July 22, 1461, and Louis XI was crowned at Reims Cathedral on August 19, 1461. This year effectively marked the end of the Hundred Years' War era, as Charles VII had recovered Gascony in 1453 and ended English claims to the French throne. La Rochelle was an important port city on the Atlantic coast, known for its maritime trade and strong Catholic traditions. The church of St. Bartholomew had special significance, as it housed a remarkable relic: two drops of blood collected at Calvary during Christ's Passion, which had been given to the church in 1257. This connection between the relic of Christ's blood and the miracle of healing through Christ's Body in the Eucharist was seen as profoundly significant. The mid-15th century saw a renewed emphasis on Eucharistic devotion and the importance of Easter Communion, making this healing miracle during Easter Mass particularly meaningful. France was emerging from decades of war into a period of recovery and consolidation, and miracles like this were seen as signs of God's favor and the restoration of divine blessing to the kingdom.",

  timeline: [
    {
      date: "1257",
      event: "Church of St. Bartholomew in La Rochelle receives two drops of blood collected at Calvary as a sacred relic"
    },
    {
      date: "c. 1454",
      event: "Seven-year-old Bertrand suffers a terrible fall, resulting in complete paralysis and muteness"
    },
    {
      date: "1454-1461",
      event: "Bertrand remains paralyzed and mute for five years with no improvement in his condition"
    },
    {
      date: "Easter Sunday, 1461",
      event: "Bertrand attends Mass at the church of St. Bartholomew with his mother Jehan Leclerc"
    },
    {
      date: "Easter Sunday, 1461",
      event: "Bertrand indicates his desire to receive Holy Communion despite being unable to speak"
    },
    {
      date: "Easter Sunday, 1461",
      event: "The priest objects because Bertrand cannot make Confession due to his muteness"
    },
    {
      date: "Easter Sunday, 1461",
      event: "After Bertrand's persistent pleading, the priest is moved to give him Communion"
    },
    {
      date: "Easter Sunday, 1461",
      event: "Upon receiving the Host, Bertrand is shaken by supernatural force and instantly healed of paralysis and muteness"
    },
    {
      date: "Easter Sunday, 1461",
      event: "Bertrand's first words after five years: 'Adjutorium nostrum in nomine Domini!' (Our help is in the name of the Lord!)"
    },
    {
      date: "Medieval Period-Present",
      event: "Painted manuscript documenting the miracle is preserved in the Cathedral of La Rochelle"
    }
  ]
});

// Neuvy Saint Sepulcre, 1257
updateMiracle('miracle-23', {
  fullDescription: `In the year 1257, a precious relic of immeasurable spiritual significance arrived at the collegiate church of Neuvy-Saint-Sépulchre in central France: two drops of the actual blood of Jesus Christ, shed during His Passion and death on Calvary. This extraordinary relic was brought from the Holy Land by Cardinal Eudes de Châteauroux (also known as Odo of Châteauroux), a papal legate and one of the most influential churchmen of his era. The cardinal had accompanied King Louis IX of France (later Saint Louis) on the Seventh Crusade to the Holy Land.

Cardinal Eudes de Châteauroux was no ordinary church official. He served as a close associate and advisor to King Louis IX, one of the most devout monarchs in Christian history. The cardinal had departed with Louis IX for the Seventh Crusade in 1248, witnessed the crusade's difficulties including the king's capture in Egypt and subsequent ransom, and remained in the Holy Land working to strengthen the crusader presence. When he prepared to return to France, he obtained this most precious relic—two drops of Christ's blood, said to have been collected at Golgotha during or shortly after the Crucifixion and preserved through the centuries by Christians in the Holy Land.

On July 15, 1257, Cardinal Eudes de Châteauroux formally presented the relic of the Precious Blood to the church of Neuvy-Saint-Sépulchre, along with a fragment of Christ's tomb from the Church of the Holy Sepulchre in Jerusalem. The choice of Neuvy-Saint-Sépulchre was particularly appropriate: the town takes its name from its remarkable basilica, which had been built as a replica of the Church of the Holy Sepulchre in Jerusalem, creating a spiritual link between central France and the Holy Land. The basilica, dedicated to Saint Stephen (Saint-Étienne), featured the distinctive circular design reminiscent of the Jerusalem original, making it an ideal repository for relics from the site of Christ's Passion and Resurrection.

The two drops of coagulated blood were described in medieval documents as pure, "not mixed with water or earth," emphasizing their authenticity and sacred nature. Upon his return from the Crusades, Cardinal Eudes also instigated the building of a new church structure to properly house these precious relics, further enhancing the basilica's connection to the Holy Sepulchre. The relic became one of the most important in Christendom, drawing pilgrims from across Europe who came to venerate the actual blood shed by Christ for the salvation of humanity. The Basilica of Neuvy-Saint-Sépulchre has preserved these two drops of the Precious Blood for nearly 770 years, maintaining an unbroken tradition of veneration and serving as a tangible connection to the sacrifice of Christ on Calvary. This relic stands as a powerful testimony to the historical reality of Christ's Passion and the devotion of medieval Christians who risked their lives to bring such treasures back from the Holy Land.`,

  scientificEvidence: [
    "Two drops of coagulated blood have been preserved for nearly 770 years without decomposition",
    "Medieval documentation describes the blood as pure, 'not mixed with water or earth'",
    "The blood was authenticated by Cardinal Eudes de Châteauroux, a papal legate of high authority",
    "The relic was acquired directly from the Holy Land during the time of the Crusades",
    "The drops remain in coagulated form, consistent with preserved ancient blood samples",
    "Organic material (blood) that remains preserved for centuries defies normal decomposition processes",
    "The relic has been continuously preserved and documented since 1257"
  ],

  witnessTestimonies: [
    {
      name: "Cardinal Eudes de Châteauroux (Odo of Châteauroux)",
      role: "Papal Legate, Cardinal, Crusader, Bringer of the Relic",
      testimony: "Accompanied King Louis IX on the Seventh Crusade (1248-1254), obtained the two drops of Christ's blood from the Holy Land, and on July 15, 1257, formally presented them to the church of Neuvy-Saint-Sépulchre along with a fragment of Christ's tomb, authenticating their provenance from Calvary."
    },
    {
      name: "King Louis IX of France (Saint Louis)",
      role: "King of France, Crusader Leader",
      testimony: "Led the Seventh Crusade to the Holy Land, where his close associate Cardinal Eudes obtained the relic of the Precious Blood. His crusading mission and known devotion to sacred relics provided the context for bringing this treasure to France."
    },
    {
      name: "Jean de Joinville",
      role: "Chronicler, Crusader, Companion of Louis IX",
      testimony: "Chronicler who accompanied Louis IX on crusade and mentioned Cardinal Eudes de Châteauroux's return journey in 1254 via Cyprus, providing historical documentation of the cardinal's movements during this crucial period."
    },
    {
      name: "The Clergy of Neuvy-Saint-Sépulchre",
      role: "Recipients and Custodians of the Relic",
      testimony: "Received the relic on July 15, 1257, and have maintained continuous custody and veneration of the Precious Blood for nearly 770 years in the basilica modeled after the Holy Sepulchre in Jerusalem."
    }
  ],

  historicalContext: "The arrival of the relic in 1257 occurred during the golden age of medieval France under King Louis IX (Saint Louis), when the kingdom was at its political and cultural zenith. Louis IX had returned from the disastrous Seventh Crusade in 1254, three years before this relic's arrival. Despite military defeat and his own capture and ransom, Louis had spent four years strengthening crusader defenses in the Holy Land before returning to France in July 1254. Cardinal Eudes de Châteauroux, who brought the relic, was one of the most influential church figures of his time and a trusted advisor to the king. The year 1257 also saw the foundations of the Sorbonne laid in Paris, demonstrating France's intellectual prominence. This period witnessed intense devotion to relics, especially those connected to Christ's Passion, as physical links to salvation history. The crusading movement, despite its military failures, succeeded in bringing numerous relics to Western Europe, enriching churches and strengthening faith. Neuvy-Saint-Sépulchre's basilica, built as a replica of Jerusalem's Holy Sepulchre, exemplified medieval attempts to recreate the Holy Land in Europe, allowing pilgrims unable to travel to Jerusalem to experience a taste of the sacred sites. The relic of the Precious Blood represented the ultimate connection to Christ's sacrifice, making Neuvy-Saint-Sépulchre a major pilgrimage destination.",

  timeline: [
    {
      date: "1248",
      event: "King Louis IX and Cardinal Eudes de Châteauroux depart France for the Seventh Crusade to the Holy Land"
    },
    {
      date: "1248-1254",
      event: "Cardinal Eudes accompanies Louis IX through the crusade, including the king's capture in Egypt and years in the Holy Land"
    },
    {
      date: "c. 1253-1254",
      event: "While in the Holy Land, Cardinal Eudes obtains the relic of two drops of Christ's blood from Calvary and a fragment of Christ's tomb"
    },
    {
      date: "1254",
      event: "Cardinal Eudes returns from the Holy Land via Cyprus, bringing the precious relics back to France"
    },
    {
      date: "July 15, 1257",
      event: "Cardinal Eudes de Châteauroux formally presents the relic of the Precious Blood and fragment of Christ's tomb to the church of Neuvy-Saint-Sépulchre"
    },
    {
      date: "Post-1257",
      event: "Cardinal Eudes instigates the building of a new church structure modeled on the Holy Sepulchre to properly house the relics"
    },
    {
      date: "1257-Medieval Period",
      event: "Neuvy-Saint-Sépulchre becomes a major pilgrimage destination; the relic draws faithful from across Europe"
    },
    {
      date: "1257-Present",
      event: "The Basilica Saint-Étienne of Neuvy-Saint-Sépulchre preserves and venerates the two drops of the Precious Blood for nearly 770 years"
    },
    {
      date: "Present Day",
      event: "The relic continues to be venerated as one of the most important Christological relics in France"
    }
  ]
});

console.log('✓ Batch 2B: Added 5 French miracles (Blanot, Dijon, Douai, La Rochelle, Neuvy)');
console.log('Updated miracles.json');

fs.writeFileSync('public/miracles.json', JSON.stringify(data, null, 2));
