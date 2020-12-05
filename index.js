var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("Hello! welcome to shashikant's quiz what is your name ? \n")

let userAnswer = readlineSync.question("\nDo you know shashikant? \n");


if (userAnswer.toLowerCase() === "yes") {
    console.log("\nOk, lemme ask some questions then.")
} else if (userAnswer.toLowerCase() === "no") {
    console.log("\nknow about him first to play this game")
} else {
    console.log("Please answer in yes or no.")
}

var questions = [{
    question: "How old shashikant is? \n",
    answer: "20",
},
{
    question: "in which month his birthday is? \n",
    answer: "april",
},
{
    question: "in which city he lives? \n",
    answer: "mumbai",
},
{
    question: "how many siblings he have? \n",
    answer: "1",
},
{
    question: "where is his native place ? \n",
    answer: "karnataka",
}];

var questionLength = questions.length;

function checkQuestion(question, answer) {
    let enteredAnswer = readlineSync.question(question);
    if (enteredAnswer.toLowerCase() === answer) {
        console.log("Right! ✓");
        score++;
    } else {
        console.log("Wrong! ✗");
    }
}


for (let i = 0; i < questionLength; i++) {
    let currentQuestion = questions[i];
    checkQuestion(currentQuestion.question, currentQuestion.answer);
    console.log("\n----------------------------------\n")
}

console.log("Your total score is: " + score);
console.log("\n----------------------------------\n")
console.log(`Thank You ${userName} for using my game.`)