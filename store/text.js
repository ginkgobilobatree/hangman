

function winText(word) {
    const text = [`\n     Du hast GEWONNEN!!! DU HAST ${word.toUpperCase()} HERAUSBEKOMMEN!!!`, '\n\n     ... ... ...', '\n\n     Dann wird später trotzdem jemand gehängt.', '\n\n     ... ...', '\n\n     Also hast du trotzdem verloren. HAHAHAHA!!!', '\n\n     ...\n', ''];
    return text;
};

const winTextTime = 1000;

function loseText(word) {
    const text = [`\n     Schade!`, `\n\n     Du hast nach "${word}" gesucht und leider verloren.`, '', ''];
    return text;
};

const loseTextTime = 1500;

module.exports = {
    winText,
    winTextTime,
    loseText,
    loseTextTime
}