import randomInteger from "rand-int";
import PromptSync from "prompt-sync";
const choices = ["rock","paper","scissors"];


const userPrompt = "Enter 0 for rock, 1 for paper and 2 for scissors.";
let outcome = "Ready To Play";

const computerChoice = randomInteger(0,2);
const computerChoiceName = choices[computerChoice];
console.log(computerChoiceName);


const prompt = PromptSync();
const userInput = prompt(userPrompt);
let userChoice = choices[userInput];


if (computerChoiceName === userChoice){
    outcome = "Draw"
}else if(computerChoiceName === "rock" && userChoice === "paper"){
    outcome = "Player Wins"
}else if(computerChoiceName === "rock" && userChoice === "scissors"){
    outcome = "Computer Wins"
}else if(computerChoiceName === "paper" && userChoice === "rock"){
    outcome = "Computer Wins"
}else if(computerChoiceName === "paper" && userChoice === "scissors"){
    outcome = "Player Wins"
}else if(computerChoiceName === "scissors" && userChoice === "rock"){
    outcome = "Player Wins"
}else if(computerChoiceName === "scissors" && userChoice === "paper"){
    outcome = "Computer Wins"
}else{
    outcome = "Invalid Entry,Please Try Again."
}

console.log("Computer chooses " + computerChoiceName);
console.log("Player chooses " + userChoice);
console.log(outcome);
