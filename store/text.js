const text = {
    winText: (word) => [`\n     Du hast GEWONNEN!!! DU HAST ${word.toUpperCase()} HERAUSBEKOMMEN!!!`, '\n\n     ... ... ...', '\n\n     Dann wird später trotzdem jemand gehängt.', '\n\n     ... ...', '\n\n     Also hast du trotzdem verloren. HAHAHAHA!!!', '\n\n     ...\n', ''],
    loseText: (word) => [`\n     Schade!`, `\n\n     Du hast nach "${word}" gesucht und leider verloren.`, '', ''],
    tryAnotherLetter: '\n     Versuche einen anderen Buchstaben! ',
    welcome: '\n     Willkommen bei Galgenbaum! Errate das Wort, indem du mit einem Buchstaben deiner Wahl beginnst. ',
    onlySingleLetters: '     Bitte nur Buchstaben und zwar einzeln.',
    youTried: "\n     Du hast folgene Buchstaben probiert:",
    tornRope: `\n\n     Oh, der Strick ist gerissen! Somit wird niemand gehängt!!!`,
    veryGood: (answer) => `\n     Sehr gut, '${answer}' steckt im Wort.\n`,
    wrongGuess: (answer) => `\n     Tja, leider steckt '${answer}' nicht im Wort.\n`,
}

module.exports = text;