function runTime(text, isEnglish) {
  setTimeout(() => {
    const runningMan = [
      '  \\O/\n   |\n  / \\',
      ' __O__\n   |\n  / \\',
      '   O\n  /|\\\n  / \\',
      '   O/\n  /|\n  / \\',
      '   O>\n  /|\n  / \\',
      '   O/\n  /|\n  / \\',
      '   O>\n  /|\n  / \\',
      '   O/\n  /|\n  / \\',
      '   O>\n  /|\n  / \\',
      '   O\n  <|L\n  / L',
      '   `0\n   ^/~\n   >7',
      '     `0\n     </L\n     />',
      '       `0\n       ^/~\n       >7',
      '         `0\n         </L\n         />',
      '           `0\n           ^/~\n           >7',
      '            O\n           /|\\\n           / \\',
      '            O/\n           /|\n           / \\',
      '            O>\n           /|\n           / \\',
      '            O/\n           /|\n           / \\',
      '            O>\n           /|\n           / \\',
      '            O/\n           /|\n           / \\',
      '            O>\n           /|\n           / \\',
      '           \\O/\n            |\n           / \\',
    ];
    let i = 0;
    const moving = setInterval(() => {
      console.clear();
      console.log(text.tornRope(isEnglish));
      console.log(runningMan[i]);
      i += 1;
      if (i === runningMan.length) clearInterval(moving);
    }, 200);
  }, 6000);
}

module.exports = runTime;
