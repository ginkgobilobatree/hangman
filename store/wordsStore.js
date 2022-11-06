const library = ['tree', 'leave', 'stump', 'branch', 'crown', 'root', 'bud', 'green', 'forest', 'wood', 'bark', 'resin', 'twig', 'sprout', 'grove', 'log'];
// const bibliothek = ['Baum', 'Blatt', 'Stumpf', 'Ast', 'Krone', 'Wurzel', 'Knospe', 'grün', 'Wald', 'Holz', 'Borke', 'Harz', 'Zweig', 'Spross', 'Rinde', 'Gehölz'];
const randomIndex = Math.floor(Math.random() * library.length);

const word = library[randomIndex];

module.exports = word;
