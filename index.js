// set the computerSelection to random; random number <33% <66%? If it works and its stupid, its not stupid //

let computerChoice = Math.random();

if (computerChoice <= 0.33) {computerSelection= 'rock'} else if (computerChoice <= 0.66) {computerSelection= 'paper'} else {computerSelection= 'scissors'};
console.log(computerChoice);
console.log(computerSelection);


let playerSelection = prompt("Enter you choice: Rock; Paper; Scissors");

if (playerSelection.toLowerCase() === computerSelection) {
    alert("Draw!");

 } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        alert("Winner winner chicken dinner; Paper beats Rock")
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        alert("Winner winner chicken dinner; Rock beats Scissors")
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        alert("Winner winner chicken dinner; Scissors beats Paper")
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        alert("haha you fool you fell victim to one of the classic blunders; Paper beats Rock")
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        alert("haha you fool you fell victim to one of the classic blunders; Rock beats Scissors")
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        alert("haha you fool you fell victim to one of the classic blunders; Scissors beats Paper")
    } else {
        alert("The Fingers You Have Used to Dial Are Too Fat. Please retype. To obtain a special dialing wand, please mash the keypad with your palm now.")
    }