function fillHiddenWord(finalHiddenWord, word, answer) {
    let indeces = []; // store for indeces that matches the word's characters
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === answer.toLowerCase()) indeces.push(i);
    }
    for (let j = 0; j < word.length; j++) { // builds the new version of finalHiddenWord
        if (indeces.includes(j)) result += answer;
        else if (finalHiddenWord[j] !== '-') result += finalHiddenWord[j];
        else result += '-';
    }
    return result;
}

module.exports = fillHiddenWord;
