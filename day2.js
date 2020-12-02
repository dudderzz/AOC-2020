const fs = require('fs');

const lines = fs.readFileSync('index.txt', {encoding: 'utf-8'}).split('\n').filter(x => x);

let validPasswords = 0;


//sort index into objects and label
lines.forEach(line => {
    const {groups} = /^(?<firstNum>\d+)-(?<secondNum>\d+) (?<char>.): (?<password>.*)$/.exec(line);
   // console.log(groups);
    const counter = {};

   //Step One
   // console.log(groups);
    [...groups.password].forEach(char => {
        if(!counter[char]){
            counter[char] = 0;
        };
        counter[char]++;
    })
    if(counter[groups.char] >= groups.firstNum && counter[groups.char] <= groups.secondNum){
        validPasswords++;
    }
}
)
console.log("List of Valid Passwords = " +  validPasswords)
