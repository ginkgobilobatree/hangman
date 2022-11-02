function loseTimer(word) {
    let i = 0;
    const loseText = [`\n     Schade!`, `\n\n     Du hast nach "${word}" gesucht und leider verloren.`, '', ''];
    const setTiming = setInterval(() => {
        console.log(loseText[i])
        i++;
        if (i === loseText.length) clearInterval(setTiming);
    }, 1500);
};

module.exports = loseTimer;