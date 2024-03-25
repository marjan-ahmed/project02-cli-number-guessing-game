#! usr/bin/env node
import inquirer from "inquirer";

const randomNum = Math.floor(Math.random() * 10);

const answer = await inquirer.prompt([
    {
        name: "guessedNum",
        type: "number",
        message: "Enter a number that lies between 0-10: "
    }
]);

const {guessedNum} = answer;

if(guessedNum === randomNum)
{
    console.log("You guessed right number");
}
else{
    console.log("You guessed wrong number")
}

console.log("The number is",randomNum);
