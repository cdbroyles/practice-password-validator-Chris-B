let readline = require('readline-sync');

let i = 0, j = 0, k = 0, l = 0;
do {
    i = 0, j = 0, k = 0, l = 0;                                         // Reset the values of i, j, k, l to 0 after a failed attempt.
    let password = readline.question('Please create a password: ');     // Ask the user to enter a password.
    for (char of password) {
        i = i + 1;                                                      // Check if the password contains at least 8 characters.
        if (char === char.toLowerCase() && char != Number(char)) {
            j = j + 1;                                                  // Check if the password contains at least 1 lowercase letter.
        }
        if (char === char.toUpperCase() && char != Number(char)) {
            k = k + 1;                                                  // Check if the password contains at least 1 uppercase letter.
        }
        if (char == Number(char)) {
            l = l + 1;                                                  // Check if the password contains at least 1 number.
        }
    }
    if (i < 8 || j === 0 || k === 0 || l === 0) {                       // If any of the conditions are not met, display an error message.
        if (i < 8) {
            console.log(`Your password only has ${i} characters.\nPassword must contain at least 8 characters.\nPlease try again.`);
        } else if (j === 0) {
            console.log(`Password must contain at least 1 lowercase letter. \nPlease try again.`);
        } else if (k === 0) {
            console.log(`Password must contain at least 1 uppercase letter. \nPlease try again.`);
        } else if (l === 0) {
            console.log(`Password must contain at least 1 number. \nPlease try again.`);
        }
    }
} while (i < 8 || j === 0 || k === 0 || l === 0);                      // Repeat the process until all conditions are met.
console.log(`Password is valid.`);