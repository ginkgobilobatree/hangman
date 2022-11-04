const text = {
  winText: (word, isEnglish) => (isEnglish ? [`\n     You WON!!! YOU SOLVED ${word.toUpperCase()}!!!`, '\n\n     ... ... ...', '\n\n     Anyways, someone will have to hang later.', '\n\n     ... ...', '\n\n     So, in the end you lost. HAHAHAHA!!!', '\n\n     ...\n', ''] : [`\n     Du hast GEWONNEN!!! DU HAST ${word.toUpperCase()} HERAUSBEKOMMEN!!!`, '\n\n     ... ... ...', '\n\n     Dann wird später trotzdem jemand gehängt.', '\n\n     ... ...', '\n\n     Also hast du trotzdem verloren. HAHAHAHA!!!', '\n\n     ...\n', '']),

  loseText: (word, isEnglish) => (isEnglish ? ['\n     Bummer!', `\n\n     You were looking for "${word}" and lost.`, '', ''] : ['\n     Schade!', `\n\n     Du hast nach "${word}" gesucht und leider verloren.`, '', '']),
  tryAnotherLetter: (isEnglish) => (isEnglish ? '\n     Try another letter! ' : '\n     Versuche einen anderen Buchstaben! '),
  welcome: (isEnglish) => (isEnglish ? '\n     Welcome to hangman! Find the hidden word. Start with guessing a letter of your choice. ' : '\n     Willkommen bei Galgenbaum! Errate das Wort, indem du mit einem Buchstaben deiner Wahl beginnst. '),
  onlySingleLetters: (isEnglish) => (isEnglish ? '     ...only single letters as input...' : '     Bitte nur Buchstaben und zwar einzeln.'),
  youTried: (isEnglish) => (isEnglish ? '\n     You tried the following input:' : '\n     Du hast schon folgendes ausprobiert:'),
  tornRope: (isEnglish) => (isEnglish ? '\n\n     Oh, the rope is torn! Thus no one will be hanged!!!' : '\n\n     Oh, der Strick ist gerissen! Somit wird niemand gehängt!!!'),
  veryGood: (answer, isEnglish) => (isEnglish ? `\n     Very good, '${answer}' is included.\n` : `\n     Sehr gut, '${answer}' steckt im Wort.\n`),
  wrongGuess: (answer, isEnglish) => (isEnglish ? `\n     Well, too bad that '${answer}' is not included.\n` : `\n     Tja, leider steckt '${answer}' nicht im Wort.\n`),
};

module.exports = text;
