function runTime() {
    setTimeout(() => {
        let runningMan = [
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
            console.log(`\n\n     Oh, der Strick ist gerissen! Somit wird niemand gehängt!!!`)
            console.log(runningMan[i]);
            i++;
            if (i === runningMan.length) clearInterval(moving);
        }, 200)
    }, 6000)
};


module.exports = runTime;