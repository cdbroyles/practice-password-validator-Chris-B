let readline = require('readline-sync');

let password = readline.question('Please create a password: ');

let i = 0;
let j = 0;
let k = 0;
let l = 0;
for (char of password) {
    i = i + 1;
    if (char === char.toLowerCase() && char != Number(char)) {
        j = j + 1;
    }
    if (char === char.toUpperCase() && char != Number(char)) {
        k = k + 1;
    }
    if (char == Number(char)) {
        l = l + 1;
    }
}

console.log(`i = ${i}, j = ${j}, k = ${k}, l = ${l}`);