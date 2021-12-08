console.log("Hello")
const chalk = require("chalk");
// var color=require("chalk")
var readlineSync = require("readline-sync");
var userName = readlineSync.question("give me your name: ");
console.log("....................");
var welcomeMessage = "welcome " + userName + "! " +"DO YOU KNOW ABOUT Priyanka? ";
console.log(chalk.yellow("*****" + welcomeMessage + "*****"))
console.log("....................");

var score = 0;
var lessScore = 0;

// KBC function
function KBC(question,answer){
    console.log("                   ");
    console.log(chalk.green( question));
    console.log("-------------");
    var userAnswer=readlineSync.question(chalk.grey("Enter your answer: "));
    console.log("You entered " + userAnswer);
    if (userAnswer === answer){
        console.log("you are right");
        score+=1
        console.log("......");
        console.log(chalk.gray("Score is ") + score);
        console.log("....................");
    }
    else{
        console.log("you are wrong");
        console.log("......");
        console.log(chalk.yellow("The corrct answer is: ") + answer)
        console.log("                       ");
        lessScore+=1
        console.log(chalk.gray("Less Score is ") + lessScore);
        console.log("....................");
    }
}

var highScore = [
    {
        name : "Priyanka",
        score : 8
    },
    {
        name : "Pinky",
        score : 5
    }
]

// Array of Objects
var questions = [{
    question : "Is she older than 25? ",
    answer : "no"
},
{
    question : "Where do she live? ",
    answer : "dhanbad"
},
{
    question : "Which is her favorite song? ",
    answer : "tujhse naraz nhi zindagi"
},
{
    question : "What she likes to eat? ",
    answer : "pani puri"
},
{
    question : "Is she studing in NavGurukul? ",
    answer : "yes"
},
{
    question : "What she likes to drink? ",
    answer : "chai"
},
{
    question : "What she likes to buy? ",
    answer : "clothes"
},
{
    question : "Which flower she will buy? ",
    answer : "rose"
}]


for (var i=0;i<questions.length;i++){
    var currentQuestion = questions[i]
    KBC(currentQuestion.question,currentQuestion.answer)
}

if (score>=1){
    console.log("....................");
    console.log(chalk.magenta("Congratulations!!**** " + userName + "!" + " Your total score is: ") + score);
    console.log("....................");
    console.log(chalk.red("Ooopppssss!!**** " + userName + "!" + " Your less score is: ") + lessScore);
    console.log("....................");
}
else{
    console.log(chalk.red("Ooopppssss!!**** " + userName + " Your less score is: ") + lessScore);
    console.log("                           ");
    console.log(chalk.magenta("You did't get any score!!**"));
    console.log("....................");
    console.log(chalk.green("Thank you "+userName+" well played"));
}
console.log("                       ");
for(j in highScore){
    if (score<highScore[j].score) {
        console.log(chalk.yellow("Thank you " + userName + " well played" + "\n" + "The hight score is: "));
        break
    }
}
console.log("                ");
    for (j of highScore){
        console.log(j.name+" : "+j.score);
    }