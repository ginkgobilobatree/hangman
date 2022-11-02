function winTimer(word) {
    let i = 0;
    const winText = [`\n     Du hast GEWONNEN!!! DU HAST ${word.toUpperCase()} HERAUSBEKOMMEN!!!`, '\n\n     ... ... ...', '\n\n     Dann wird später trotzdem jemand gehängt.', '\n\n     ... ...', '\n\n     Also hast du trotzdem verloren. HAHAHAHA!!!', '\n\n     ...\n', ''];
    const setTiming = setInterval(() => {
        console.log(winText[i])
        i++;
        if (i === winText.length) clearInterval(setTiming);
    }, 1000);
};

module.exports = winTimer;