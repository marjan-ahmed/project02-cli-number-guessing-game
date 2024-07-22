#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNum = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        name: "guessedNum",
        type: "number",
        message: "Enter a number that lies between 0-10: "
    }
]);
const { guessedNum } = answer;
if (guessedNum === randomNum) {
    console.log(chalk.green("You guessed right!!!"));
}
else {
    console.log(chalk.red("You guessed wrong"));
}
console.log(chalk.yellow("The number is", randomNum));
