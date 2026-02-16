export interface CenturyInfo {
  century: number;
  range: string;
  title: string;
  events: string[];
  description: string;
}

export const centuryContext: Record<number, CenturyInfo> = {
  8: {
    century: 8,
    range: "700-799",
    title: "8th Century - Age of Iconoclasm",
    description: "The 8th century saw the Byzantine Iconoclastic Controversy, making visible signs of the sacred particularly significant.",
    events: [
      "726: Byzantine Iconoclasm begins under Leo III",
      "750: Lanciano Miracle - One of the first documented Eucharistic miracles",
      "787: Second Council of Nicaea defends veneration of icons"
    ]
  },
  9: {
    century: 9,
    range: "800-899",
    title: "9th Century - Carolingian Renaissance",
    description: "Charlemagne's revival of learning and emphasis on liturgical unity spread throughout Europe.",
    events: [
      "800: Charlemagne crowned Holy Roman Emperor",
      "842: Iconoclasm definitively ended",
      "863: Saints Cyril and Methodius begin Slavic missions"
    ]
  },
  10: {
    century: 10,
    range: "900-999",
    title: "10th Century - Period of Reform",
    description: "Monastic reforms and renewed emphasis on sacramental theology.",
    events: [
      "910: Cluny Abbey founded, starting monastic reform",
      "962: Otto I revives Holy Roman Empire",
      "988: Christianization of Kievan Rus'"
    ]
  },
  11: {
    century: 11,
    range: "1000-1099",
    title: "11th Century - East-West Schism",
    description: "The Great Schism divided Christianity, with both sides claiming authentic apostolic tradition.",
    events: [
      "1054: Great Schism between Eastern and Western Churches",
      "1059: Berengar of Tours debates Real Presence",
      "1095: First Crusade proclaimed by Urban II"
    ]
  },
  12: {
    century: 12,
    range: "1100-1199",
    title: "12th Century - Scholastic Development",
    description: "Rise of universities and systematic theology, including deeper Eucharistic theology.",
    events: [
      "1140: Peter Lombard's Sentences systematizes sacramental theology",
      "1179: Third Lateran Council",
      "1198: Innocent III becomes Pope"
    ]
  },
  13: {
    century: 13,
    range: "1200-1299",
    title: "13th Century - Age of Scholasticism",
    description: "Thomas Aquinas and the high point of medieval theology regarding transubstantiation.",
    events: [
      "1215: Fourth Lateran Council defines transubstantiation",
      "1263: Miracle of Bolsena",
      "1264: Pope Urban IV institutes Feast of Corpus Christi",
      "1274: Thomas Aquinas dies; his Summa Theologica includes extensive Eucharistic theology"
    ]
  },
  14: {
    century: 14,
    range: "1300-1399",
    title: "14th Century - Late Medieval Piety",
    description: "Increased Eucharistic devotion despite church challenges.",
    events: [
      "1309-1377: Avignon Papacy",
      "1347-1351: Black Death devastates Europe",
      "1378: Great Western Schism begins"
    ]
  },
  15: {
    century: 15,
    range: "1400-1499",
    title: "15th Century - Renaissance & Reform Calls",
    description: "Growing calls for church reform and increased lay piety.",
    events: [
      "1414-1418: Council of Constance ends Western Schism",
      "1453: Fall of Constantinople",
      "1478: Spanish Inquisition established"
    ]
  },
  16: {
    century: 16,
    range: "1500-1599",
    title: "16th Century - Reformation & Counter-Reformation",
    description: "Protestant Reformation challenges Real Presence; Catholic Church responds at Trent.",
    events: [
      "1517: Luther's 95 Theses",
      "1545-1563: Council of Trent reaffirms transubstantiation",
      "1570: Pope Pius V issues Roman Missal"
    ]
  },
  17: {
    century: 17,
    range: "1600-1699",
    title: "17th Century - Baroque Catholicism",
    description: "Elaborate Eucharistic devotions and church art emphasizing Real Presence.",
    events: [
      "1611: King James Bible published",
      "1622: Canonization of Ignatius Loyola, Francis Xavier",
      "1648: Peace of Westphalia ends religious wars"
    ]
  },
  18: {
    century: 18,
    range: "1700-1799",
    title: "18th Century - Age of Enlightenment",
    description: "Rationalism challenges faith; miracles become particularly significant as signs.",
    events: [
      "1773: Suppression of Jesuits",
      "1789: French Revolution begins",
      "1799: Napoleon becomes First Consul of France"
    ]
  },
  19: {
    century: 19,
    range: "1800-1899",
    title: "19th Century - Ultramontanism & Marian Age",
    description: "Renewed emphasis on papal authority and Eucharistic devotion; numerous Marian apparitions.",
    events: [
      "1854: Dogma of Immaculate Conception",
      "1858: Our Lady of Lourdes apparitions",
      "1870: First Vatican Council; Papal Infallibility defined",
      "1891: Rerum Novarum encyclical"
    ]
  },
  20: {
    century: 20,
    range: "1900-1999",
    title: "20th Century - Modern Science Meets Faith",
    description: "Scientific investigation of Eucharistic miracles begins; Vatican II reforms liturgy.",
    events: [
      "1910: Pius X encourages frequent Communion",
      "1962-1965: Second Vatican Council",
      "1968: Humanae Vitae encyclical",
      "1978: John Paul II elected Pope",
      "1971: First scientific tests on Lanciano miracle"
    ]
  },
  21: {
    century: 21,
    range: "2000-present",
    title: "21st Century - New Evangelization",
    description: "Modern science continues to document Eucharistic miracles with DNA and tissue analysis.",
    events: [
      "2005: Benedict XVI elected Pope",
      "2013: Francis becomes Pope",
      "2016: Buenos Aires miracle scientifically tested",
      "2024: Ongoing scientific investigations"
    ]
  }
};

export function getCenturyInfo(year: number): CenturyInfo | null {
  const century = Math.ceil(year / 100);
  return centuryContext[century] || null;
}

export function getAllCenturies(): CenturyInfo[] {
  return Object.values(centuryContext).sort((a, b) => a.century - b.century);
}
