// # Homework: Variables and Primitive Data Types

// ## The Age Calculator

// Forgot how old someone is? Calculate it!

// - Store the current year in a variable.
// - Store their birth year in a variable.
// - Calculate their 2 possible ages based on the stored values.
// - Output them to the screen like so: "They are either NN or NN", substituting the values.

// **Bonus**: Get the current year with JavaScript

function q1() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let birthYear = 1989;
    let age = year - birthYear;
    console.log("They are " + age);

    //Not possible to have 2 ages unless only the back 2 digit of the year is taken.
    let year2 = year % 100;
    let birthYear2 = birthYear % 100;
    if (birthYear2 < year2) {
        console.log("They are either " + (year2 - birthYear2) + " or " + (birthYear2 - year2 + 100));
    } else {
        console.log("They are either " + (year2 - birthYear2 + 100) + " or " + (birthYear2 - year2));
    }
    
}
console.log("q1");
q1()

// ## The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// - Store your current age into a variable.
// - Store a maximum age into a variable.
// - Store an estimated amount per day (as a number).
// - Calculate how many you would eat in total for the rest of your life.
// - Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

// **Bonus**: Get the details with `prompt`

function q2 () {
    let age = prompt("Enter age:", 25);
    let maxAge = prompt("Enter max age:", 80);
    let food = prompt("Enter amount per day:", 20);
    total = (maxAge - age) * food;
    console.log("You will need " + total + " to last you until the ripe old age of " + maxAge);
}
console.log("q2");
q2()

// ## The Geometrizer

// Calculate the properties of a circle, using the definitions here.

// - Store a radius into a variable.
// - Calculate the circumference based on the radius, and output "The circumference is NN".
// - Calculate the area based on the radius, and output "The area is NN".

function q3() {
    let radius = 7;
    console.log("The circumference is " + (Math.round((2*Math.PI*radius)*100)/100));
    console.log("The area is " + (Math.round((Math.PI*radius*radius)*100)/100));
}
console.log("q3");
q3()

// ## The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// - Store the temperature (in celsius) into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."

function q4 () {
    let temperatureC = 35;
    console.log(temperatureC + "°C is " + (temperatureC * 1.8 + 32) + "°F")
    let temperatureF = 95;
    console.log(temperatureF + "°F is " + ((temperatureF - 32) / 1.8) + "°C")
}
console.log("q4");
q4()

// # Homework: Conditionals

// ## The World Translator

// Write an if statement that writes Hello World in different languages. Store a language in a variable.

// - If the language is `"English"`, log `"Hello World"`
// - If the language is `"French"`, log `"Bonjour le monde"`
// - If the language is `"Malay"`, log `"Hai dunia"` (I think?)
// - Add as many others as you wish!

function q5() {
    let language = 'English';

    if (language == 'English') {
        console.log("Hello World");
    } else if (language == 'French') {
        console.log("Bonjour le monde");
    } else if (language == 'Malay') {
        console.log("Hai dunia");
    }
}
console.log("q5");
q5()

// ## The Grade Assigner

// Store a `testScore` in a variable. Give the user a score (either `"A"`, `"B"`, `"C"`, `"D"`, or `"F"`) based on those test results.

function q6 () {
    let testScore = 100;
    if (testScore >= 90) {
        console.log("Score is A");
    } else if (testScore >= 80) {
        console.log("Score is B");
    } else if (testScore >= 70) {
        console.log("Score is C");
    } else if (testScore >= 60) {
        console.log("Score is D");
    } else {
        console.log("Score is F");
    }
}
console.log("q6");
q6()

// ## Air Conditioning

// Store the current temperature, whether the A/C is functional, and what the desired temperature is.

// - If the airconditioner is functional and the current temperature is above the the desired temperature:
//   - Log `"Turn on the A/C Please"`
// - If the airconditioner is non-functional and the current temperature is above the the desired temperature
//   - Log `"Fix the A/C now!  It's hot!"`
// - If the airconditioner is non-functional and the current temperature is below the the desired temperature
//   - Log `"Fix the A/C whenever you have the chance...  It's cool..."`

function q7 () {
    let temperature = 50;
    let functional = true;
    let desiredTemp = 40;
    if (functional && temperature > desiredTemp) {
        console.log("Turn on the A/C Please");
    } else if (!functional && temperature > desiredTemp) {
        console.log("Fix the A/C now!  It's hot!");
    } else if (!functional && temperature <= desiredTemp) {
        console.log("Fix the A/C whenever you have the chance...  It's cool...");
    } 
}
console.log("q7");
q7()

// ## You and Your Government

// Write a program that stores a user age and logs a message based on that age.

// | Age   | Message                                          |
// |-------|--------------------------------------------------|
// | >= 35 | 'You can vote AND hold any place in government!' |
// | >= 25 | 'You can vote AND run for the Senate!'           |
// | >= 18 | 'You can vote!'                                  |
// | ELSE  | 'You can't vote yet'                             |

function q8 () {
    let age = 36;
    if (age >= 35) {
        console.log("You can vote AND hold any place in government!");
    } else if (age >= 25) {
        console.log("You can vote AND run for the Senate!");
    } else if (age >= 18) {
        console.log("You can vote!");
    } else {
        console.log("You can't vote yet");
    }
}
console.log("q8");
q8()

// ## Golf

// Write an if statement that gives a user the nickname of their score, based on par and logs the score's nickname.

// | Score      | Nickname       |
// |------------|----------------|
// | 1          | "Hole in one"  |
// | <= par - 2 | "Eagle"        |
// | par - 1    | "Birdie        |
// | par        | "Par"          |
// | par + 1    | "Bogey"        |
// | par + 2    | "Double Bogey" |
// | >= par + 3 | "Not sure"     |

function q9 () {
    let par = 5;
    let score = 10;
    if (score == 1) {
        console.log("Hole in one");
    } else if (score <= (par - 2)) {
        console.log("Eagle");
    } else if (score <= (par - 1)) {
        console.log("Birdie");
    } else if (score == par) {
        console.log("Par");
    } else if (score == (par + 1)) {
        console.log("Bogey");
    } else if (score == (par + 2)) {
        console.log("Double Bogey");
    } else {
        console.log("Not sure");
    }
}
console.log("q9");
q9()

// ## Serge Says

// Store a user's message.

// - If the user asks a question (e.g. the message ends in `?`)
//   - Log `"Sure."`
// - If the user yells (e.g. the message is in all capitals)
//   - Log `"Woah, chill out!"`
// - If the user doesn't say anything (e.g. the message is empty OR only spaces)
//   - Log `"Fine. Be that way!"`
// - Otherwise:
//   - Log `"Whatever."`

function q10 () {
    let message = "asss"
    if (message[message.length - 1] == '?') {
        console.log("Sure.");
    } else if (message && (message == message.toUpperCase())) {
        console.log("Woah, chill out!");
    } else if (!message) {
        console.log("Fine. Be that way!");
    } else {
        console.log("Whatever.");
    }

}
console.log("q10");
q10()

// ## The Pluralizer

// Write an if statement that works with a noun and a number. Make the noun plural if necessary!! Make this as accurate as possible (using the rules described [here](http://blog.writeathome.com/index.php/2011/12/how-to-make-nouns-plural/))

function q11() {
    let word = 'echo';
    if (['ch','sh'].includes(word.slice(-2)) || ['s','x','z'].includes(word.slice(-1))) {
        console.log(word + "es");
    } else if (['y'].includes(word.slice(-1)) && !['a','e','i','o','u'].includes(word.slice(-2,1))) {
        console.log(word.slice(0,word.length-1) + "ies");
    } else if (['y'].includes(word.slice(-1)) && ['a','e','i','o','u'].includes(word.slice(-2,1))) {
        console.log(word + "s");
    } else if (['o'].includes(word.slice(-1))) {
        console.log(word + "es");
    } else {
        console.log(word + "s");
    }
}
console.log("q11");
q11()

// ## The Rest

// - Implement a Rock, Paper, Scissors single game
// - Implement a Rock, Paper, Scissors best of three game
// - Anything else you can think of!

function q12 () {
    choice = prompt("Rock or Paper or Scissors", "Rock");
    pcChoiceRand = Math.random();
    // console.log(pcChoiceRand);
    if (pcChoiceRand <= 0.33) {
        pcChoice = 'Rock';
    } else if (0.33 < pcChoiceRand && pcChoiceRand <= 0.67) {
        pcChoice = 'Paper';
    } else pcChoice = 'Scissors'
    if (choice.toUpperCase() == 'ROCK') {
        if (pcChoice == 'Rock') {
            console.log('PC chose Rock. Tie');
        } else if (pcChoice == 'Scissors') {
            console.log('PC chose Scissors. Win');
        } else console.log('PC chose Paper. Lose');
    } else if (choice.toUpperCase() == 'PAPER') {
        if (pcChoice == 'Rock') {
            console.log('PC chose Rock. Win');
        } else if (pcChoice == 'Scissors') {
            console.log('PC chose Scissors. Lose');
        } else console.log('PC chose Paper. Tie');
    } else if (choice.toUpperCase() == 'SCISSORS') {
        if (pcChoice == 'Rock') {
            console.log('PC chose Rock. Lose');
        } else if (pcChoice == 'Scissors') {
            console.log('PC chose Scissors. Tie');
        } else console.log('PC chose Paper. Win');
    }
}
console.log("q12");
q12();  

// # Homework: JavaScript loops

// ## The even/odd reporter

// Write a `for` loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

function q13() {
    for (let i = 0; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i + " is even")
        } else {
            console.log(i + " is odd")
        }
    }
}
console.log("q13");
q13()

// ## Multiplication Tables

// Write a `for` loop that will iterate from 1 to 12. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// **Bonus**: Use a nested `for` loop to show the tables for every multiplier from 1 to 12.

function q14() {
    for (let i = 1; i <= 12; i++) {
        for (let j = 1; j <= 12 ; j++) {
            console.log(i + " * " + j + " = " + (i*j));
        }
    }
}
console.log("q14");
q14()

// ## The Grade Assigner

// Use the grade assigner code you wrote from the conditionals exercises for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

function q15 () {
    for (let testScore = 60; testScore <= 100; testScore ++) {
        if (testScore >= 90) {
            console.log("For " + testScore + ". Score is A");
        } else if (testScore >= 80) {
            console.log("For " + testScore + ". Score is B");
        } else if (testScore >= 70) {
            console.log("For " + testScore + ". Score is C");
        } else if (testScore >= 60) {
            console.log("For " + testScore + ". Score is D");
        } else {
            console.log("For " + testScore + ". Score is F");
        }
    }
}
console.log("q15");
q15()

// ## Golf

// Using the Golf condition you made before in the conditionals exercise, log out the nickname of every score from 1 to 8 on a par 5 hole

// **Bonus**: Use a nested for loop to run the same piece of code, but with par changing from 3 to 5

// **Bonus**: Generate a random par for each iteration

function q16 () {
    for (score = 1; score <= 8; score ++) {
        let par = Math.round((Math.random() * 2)) + 3;
        console.log("Score is " + score);
        console.log("Par is " + par);
        if (score == 1) {
            console.log("Hole in one");
        } else if (score <= (par - 2)) {
            console.log("Eagle");
        } else if (score <= (par - 1)) {
            console.log("Birdie");
        } else if (score == par) {
            console.log("Par");
        } else if (score == (par + 1)) {
            console.log("Bogey");
        } else if (score == (par + 2)) {
            console.log("Double Bogey");
        } else {
            console.log("Not sure");
        }
    }
}
console.log("q16");
q16()

// ## 99 Bottles of Beer

// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics [here](http://www.99-bottles-of-beer.net/lyrics.html).

// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

function q17 () {
    for (let i = 99; i >= 0; i--) {
        if (i == 1) {
            console.log("1 bottle of beer on the wall, 1 bottle of beer.");
            console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        } else if (i == 0) {
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        } else if (i == 2) {
            console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
            console.log("Take one down and pass it around, " + (i-1) + " bottle of beer on the wall.");
        } else {
            console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
            console.log("Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
        }
    }
}
console.log("q17");
q17()