// 1. Convert a string into a number (e.g. `"4"` into `4`)?
// 2. Convert a number into a string (e.g. `15` into `"15"`)?
// 3. Make a string uppercased (e.g. `"hello"` into `"HELLO"`)?
// 4. Get the second character out of a string (e.g.`"hello"` returns `"e"`)?
// 5. Use concatenation to combine two strings (e.g. join `"Hello "` and `"World"`)?
// 6. Get a number and square it (e.g. `4` squared is `16`)?
// 7. Get the square root of a number (e.g. square root of `25` is `5`)?

console.log(+ "4");

console.log("" + 15);

console.log("hello".toUpperCase());

console.log("hello"[1]);

console.log("Hello " + "World");

console.log(Math.pow(4,2));

console.log(Math.sqrt(25));

// ## What number's bigger?

// Write an `if` statement that compares two numbers (call them `numOne` and `numTwo`).

// If numOne is bigger, it should log to the console `"numOne (THE VALUE) is bigger than numTwo (THE VALUE)"`.

// If numTwo is bigger, it should log to the console `"numOne (THE VALUE) is smaller than numTwo (THE VALUE)"`.

// If they are even, it should log to the console `"numOne (THE VALUE) is equal to numTwo (THE VALUE)"`.

// ## Driving Age

// Store the user's name and age.

// - If the age is less than 16, log `"Sorry, you can't drive yet!"`
// - If the age is greater than or equal to 16, log `"Drive into the sunset!"`

// **Bonus**: Get the name and age using `prompt`!

// **Bonus**: If the user can't drive yet, tell them how many years they have before they can drive (e.g. `"Sorry, you still have 4 years before you can drive"`)

numOne = 1
numTwo = 2

if (numOne > numTwo) {
    console.log("numOne (",numOne,") is bigger than numTwo (",numTwo,")");
}
else if (numTwo > numOne){
    console.log("numOne (",numOne,") is smaller than numTwo (",numTwo,")");
} else {
    console.log("numOne (",numOne,") is equal to numTwo (",numTwo,")");
}


usernametest = prompt("Please enter your name, age", "Harry Potter, 10")
usernamesplit = usernametest.split(",");
minage = 16
if (usernamesplit[1] < minage) {
    console.log("Sorry", usernamesplit[0],", you can't drive yet!");
    console.log("Sorry", usernamesplit[0],", you still have", Math.abs(usernamesplit[1] - minage), "years before you can drive");

} else {
    console.log(usernamesplit[0], "! Drive into the sunset!");
}

// ## Log every number from 0 to 10

// ## Log every number from 4 to -16

// ## Log every fourth number from 8 to 41

// ## The Classic `Fizzbuzz` Program

// Loop from 0 to 100.

// - If the number is evenly divisible by 3, log `"Fizz"`
// - If the number is evenly divisible by 5, log `"buzz"`
// - If the number is evenly divisible by both 3 and 5, log `"Fizzbuzz"`

for (let n = 0; n <= 10; n++) {
    console.log(n);
}

for (let n = 4; n >= -16; n--) {
    console.log(n);
}

count = 0;
for (let n = 8; n <= 41; n++) {
    count++;
    if (count == 4) {
        console.log(n);
        count = 0;
    }
}

for (let n = 1; n <= 100; n++) {
    if (n % 3 == 0) {
        console.log(n + " - Fizz")
    }
    if (n % 5 == 0) {
        console.log(n + " - buzz")
    }
    if (n % 3 == 0 & n % 5 == 0) {
        console.log(n + " - Fizzbuzz")
    }
}