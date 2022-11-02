const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const word = require("./store/wordsStore");
const hangman = require("./store/hangmanConstruction");
const fillHiddenWord = require("./utils/fillHiddenWord");
const winTimer = require("./utils/winTimer");
const loseTimer = require("./utils/loseTimer");
const runningMan = require("./store/runningMan")
const log = console.log;

(() => {
    let finalHiddenWord = '-'.repeat(word.length);
    let answers = [];
    let tries = 0;

    let recursiveQuestion = () => {
        if (tries === 10) {
            loseTimer(word);
            runningMan();
            return rl.close();
        }
        rl.question(tries || answers.length ? '\n     Versuche einen anderen Buchstaben! ' : '\n     Willkommen bei Galgenbaum! Errate das Wort, indem du mit einem Buchstaben deiner Wahl beginnst. ', (answer) => {
            log(`\n     ${finalHiddenWord}`)
            console.clear();
            // guessed whole word correctly

            if (answer.toLowerCase() === word.toLowerCase()) {
                console.clear();
                winTimer(word);
                return rl.close();
            }

            // partly correct

            else if (word.toLowerCase().includes(answer.toLowerCase()) && answer.length > 0 && answer.toLowerCase() !== answer.toUpperCase()) {
                answers.includes(answer) ? null : answers.push(answer);
                log(`\n     Sehr gut, '${answer}' steckt im Wort.\n`);
                if (tries > 0) { // builds hangman
                    log(...Object.values(hangman[tries - 1]));
                }
                finalHiddenWord = fillHiddenWord(finalHiddenWord, word, answer);
                if (finalHiddenWord.toLowerCase() === word.toLowerCase()) {
                    log(`\n     ${word}`);
                    winTimer(word);
                    return rl.close();
                }
                log(`\n     ${finalHiddenWord}`)
                log("\n     Du hast folgene Buchstaben probiert:", ...answers);
                recursiveQuestion();
            }

            else if (answer.length > 1 || answer.toLowerCase() === answer.toUpperCase()) {
                console.clear();
                log('     Bitte nur Buchstaben und zwar einzeln.');
                answer.length ? answers.push(answer) : null;
                recursiveQuestion();
            }

            // wrong guess

            else {
                answer.length > 0 ? answers.push(answer) : null;
                log(`\n     Tja, leider steckt '${answer}' nicht im Wort.\n`);
                log(...Object.values(hangman[tries])); // builds hangman
                log(`\n     ${finalHiddenWord}`)
                log("\n     Du hast folgene Buchstaben probiert:", ...answers);
                tries += 1;
                recursiveQuestion();
            }
        })
    };
    recursiveQuestion();
})();
