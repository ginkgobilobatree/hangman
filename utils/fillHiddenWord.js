function fillHiddenWord(finalHiddenWord, word, answer) {
    let indeces = [];
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === answer.toLowerCase()) indeces.push(i);
    }
    for (let j = 0; j < word.length; j++) {
        if (indeces.includes(j)) result += answer;
        else if (finalHiddenWord[j] !== '-') result += finalHiddenWord[j];
        else result += '-';
    }
    return result;
}

module.exports = fillHiddenWord;