function winLoseTimer(text, interval) {
  let i = 0;
  const setTiming = setInterval(() => {
    console.log(text[i]);
    i += 1;
    if (i === text.length) clearInterval(setTiming);
  }, interval);
}

module.exports = winLoseTimer;
