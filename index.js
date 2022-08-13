// set the computerSelection to random; random number <33% <66%? If it works and its stupid, its not stupid //


let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++)  {
     

let computerChoice = Math.random();
if (computerChoice <= 0.33) {computerSelection= 'rock'} 
else if (computerChoice <= 0.66) {computerSelection= 'paper'} 
else {computerSelection= 'scissors'};
console.log(computerChoice);
console.log(computerSelection);


let playerSelection = prompt(`Round ${i + 1} of 5: Enter you choice: Rock; Paper; Scissors`);

if (playerSelection.toLowerCase() === computerSelection) {
    alert("Draw!");
    i = i - 1;

 } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        alert("Winner winner chicken dinner; Paper beats Rock"); 
        playerScore++
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        alert("Winner winner chicken dinner; Rock beats Scissors"); 
        playerScore++
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        alert("Winner winner chicken dinner; Scissors beats Paper"); 
        playerScore++
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        alert("haha you fool you fell victim to one of the classic blunders; Paper beats Rock"); 
        computerScore++
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        alert("haha you fool you fell victim to one of the classic blunders; Rock beats Scissors"); 
        computerScore++
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        alert("haha you fool you fell victim to one of the classic blunders; Scissors beats Paper"); 
        computerScore++
    } else {
        alert("The Fingers You Have Used to Dial Are Too Fat. Please retype. To obtain a special dialing wand, please mash the keypad with your palm now.");
        i = i - 1;
    }
     console.log(playerScore,computerScore);
    document.write('<br>',playerScore,"-",computerScore);
    
    }
    if (playerScore > computerScore) {alert("You won the best of five")}
    else if (computerScore > playerScore) {alert("the machines won...")}
    else {alert("drawn together")};




