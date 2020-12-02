const { countReset } = require('console');
const { groupPatternsByBaseDirectory } = require('fast-glob/out/managers/tasks');
const fs = require('fs');

const lines = fs.readFileSync('index.txt', {encoding: 'utf-8'}).split('\n').filter(x => x);

let validPasswords = 0;

lines.forEach(line => {
    console.log(lines)
    const {groups} = /^(?<firstNum>\d+)-(?<secondNum>\d+) (?<char>.): (?<password>.*)$/.exec(line);

    const counter = {};

    console.log(groups);
    [...groups.password].forEach(char => {
        if(!counter[char]){
            counter[char] = 0;
        }
        counter[char]++;
    })
    if(counter[groups.char] >= groups.firstNum && counter[groups.char] <= groups.secondNum){
        validPasswords++;
    }
    console.log(validPasswords)
})