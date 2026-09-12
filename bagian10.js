const logSensorKulkas = [
  "susu", "telur", "susu", "bayam", "telur", "susu", "apel"
];

function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    
    return counts;
  }, {});
}

const laporanFrekuensi = countFrequency(logSensorKulkas);
console.log(laporanFrekuensi);
