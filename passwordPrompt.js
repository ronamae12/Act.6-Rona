const correctPassword = "correctPassword";

let userPassword;
do {

    userPassword = prompt("Enter your password:");t
    if (userPassword !== correctPassword) {
        console.log("Incorrect, try again.");
    }
} while (userPassword !== correctPassword);

console.log("Access granted.");