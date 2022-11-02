const words = ['Baum', 'Blatt', 'Stumpf', 'Ast', 'Krone', 'Wurzel', 'Knospe', 'grün', 'Wald', 'Holz', 'Borke', 'Harz', 'Zweig', 'Spross', 'Rinde', 'Gehölz'];
const randomNumber = Math.floor(Math.random() * words.length);
const word = words[randomNumber];

module.exports = word;