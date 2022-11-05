const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let word = require('./store/wordsStore');
const hangman = require('./store/hangmanConstruction');
const fillHiddenWord = require('./utils/fillHiddenWord');
const winLoseTimer = require('./utils/winLoseTimer');
const runningMan = require('./store/runningManConstruction');
const text = require('./store/text');
const intervals = require('./store/intervals');

const { log } = console;
let isEnglish;

(() => {
  word = word.toLowerCase();
  let finalHiddenWord = '-'.repeat(word.length);
  const answers = [];
  let tries = 0;

  const recursiveQuestion = () => {
    // you lost

    if (tries === 10) {
      winLoseTimer(text.loseText(word, isEnglish), intervals.loseTextInterval);
      runningMan(text, isEnglish);
      return rl.close();
    }
    rl.question(tries || answers.length ? text.tryAnotherLetter(isEnglish) : text.welcome(isEnglish), (input) => {
      const answer = input.toLowerCase();
      log(`\n     ${finalHiddenWord}`);
      console.clear();
      // guessed whole word correctly

      if (answer.toLowerCase() === word) {
        console.clear();
        winLoseTimer(text.winText(word, isEnglish), intervals.winTextInterval);
        return rl.close();
      }

      // partly correct

      if (word.includes(answer) && answer.length > 0 && answer !== answer.toUpperCase()) {
        if (!answers.includes(answer)) answers.push(answer);
        log(text.veryGood(answer, isEnglish));
        if (tries > 0) { // builds hangman
          log(hangman[tries - 1]);
        }
        finalHiddenWord = fillHiddenWord(finalHiddenWord, word, answer);
        if (finalHiddenWord.toLowerCase() === word.toLowerCase()) {
          log(`\n     ${word}`);
          winLoseTimer(text.winText(word, isEnglish), intervals.winTextInterval);
          return rl.close();
        }
        log(`\n     ${finalHiddenWord}`);
        log(text.youTried(isEnglish), ...answers);
        recursiveQuestion();
      } else if (answer.length > 1 || answer.toLowerCase() === answer.toUpperCase()) {
        console.clear();
        log(text.onlySingleLetters(isEnglish));
        if (answer.length) answers.push(answer);
        recursiveQuestion();
      }

      // wrong guess

      else {
        if (answer.length > 0) answers.push(answer);
        log(text.wrongGuess(answer, isEnglish));
        log(hangman[tries]); // builds hangman
        log(`\n     ${finalHiddenWord}`);
        log(text.youTried(isEnglish), ...answers);
        tries += 1;
        recursiveQuestion();
      }
    });
  };

  const whatLanguage = () => {
    rl.question(text.pickLanguage, (input) => {
      if (input === 'd') {
        isEnglish = false;
        return recursiveQuestion();
      }
      if (input === 'e') {
        isEnglish = true;
        return recursiveQuestion();
      }
      whatLanguage();
    });
  };

  whatLanguage();
})();
