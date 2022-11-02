const hangman = [
    {vertical: `\n     V\n     |\n     |\n     |\n     |\n     |\n     |\n     A`},
    {horizontal: `     _________________\n     V\n     |\n     |\n     |\n     |\n     |\n     |\n     A`},
    {diagonal: `     _________________\n     V  /\n     | /\n     |/\n     |\n     |\n     |\n     |\n     A`},
    {rope: `     _________________\n     V  /            |\n     | /             |\n     |/              |\n     |\n     |\n     |\n     |\n     A`},
    {head: `     _________________\n     V  /            |\n     | /             |\n     |/              |\n     |               O\n     |\n     |\n     |\n     A`},
    {body: `     _________________\n     V  /            |\n     | /             |\n     |/              |\n     |               O\n     |               |\n     |\n     |\n     A`},
    {oneArm: `     _________________\n     V  /            |\n     | /             |\n     |/              |\n     |               O\n     |              /|\n     |\n     |\n     A`},
    {bothArms: `     _________________\n     V  /            |\n     | /             |\n     |/              |\n     |               O\n     |              /|\\\n     |\n     |\n     A`},
    {oneLeg: `     _________________\n     V  /            |\n     | /             |\n     |/              |\n     |               O\n     |              /|\\\n     |              /\n     |\n     A`},
    {completed: `     _________________\n     V  /            |\n     | /             |\n     |/              |\n     |               O\n     |              /|\\\n     |              / \\\n     |\n     A`},
];

module.exports = hangman;