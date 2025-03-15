let readline = require('readline-sync');

let numChar = 0, numLowerCase = 0, numUpperCase = 0, numNumber = 0;
do {
    numChar = 0, numLowerCase = 0, numUpperCase = 0, numNumber = 0;                                         // Reset the values of i, j, k, l to 0 after a failed attempt.
    let password = readline.question('Please create a password: ');     // Ask the user to enter a password.
    for (char of password) {
        numChar = numChar + 1;                                          // Check if the password contains at least 8 characters.
        if (char === char.toLowerCase() && char != Number(char)) {
            numLowerCase = numLowerCase + 1;                            // Check if the password contains at least 1 lowercase letter.
        }
        if (char === char.toUpperCase() && char != Number(char)) {
            numUpperCase = numUpperCase + 1;                            // Check if the password contains at least 1 uppercase letter.
        }
        if (char == Number(char)) {
            numNumber = numNumber + 1;                                  // Check if the password contains at least 1 number.
        }
    }
    if (numChar < 8 || numLowerCase === 0 || numUpperCase === 0 || numNumber === 0) {         // If any of the conditions are not met, display an error message.
        if (numChar < 8) {
            console.log(`Your password only has ${numChar} characters.\nPassword must contain at least 8 characters.\nPlease try again.`);
        } else if (numLowerCase === 0) {
            console.log(`Password must contain at least 1 lowercase letter. \nPlease try again.`);
        } else if (numUpperCase === 0) {
            console.log(`Password must contain at least 1 uppercase letter. \nPlease try again.`);
        } else if (numNumber === 0) {
            console.log(`Password must contain at least 1 number. \nPlease try again.`);
        }
    }
} while (numChar < 8 || numLowerCase === 0 || numUpperCase === 0 || numNumber === 0);         // Repeat the process until all conditions are met.
console.log(`Password is valid.`);