/* const words = ['Baum', 'Blatt', 'Stumpf', 'Ast', 'Krone', 'Wurzel', 'Knospe', 'grün', 'Wald', 'Holz', 'Borke', 'Harz', 'Zweig', 'Spross', 'Rinde', 'Gehölz']; */
const words = ['Kackwurst','Autowaschanlage','Papa ist toll','deineKackwurst'] 
const randomNumber = Math.floor(Math.random() * words.length);
const word = words[randomNumber];

module.exports = word;