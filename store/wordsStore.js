const library = ['Tannenzapfen', 'Baum', 'Blatt', 'Stumpf', 'Ast', 'Krone', 'Wurzel', 'Knospe', 'grün', 'Wald', 'Holz', 'Borke', 'Harz', 'Zweig', 'Spross', 'Rinde', 'Gehölz'];
const randomIndex = Math.floor(Math.random() * library.length);
const word = library[randomIndex];

module.exports = word;
