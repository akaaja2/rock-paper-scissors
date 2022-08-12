// set the computerChoice to random; random number <33% <66%? //

let computerChoice = 'rock';
//testing with hard coded rock//

let playerSelection = prompt("Enter you choice: Rock; Paper; Scissors");

if (playerSelection.toLowerCase() === computerChoice) {
    alert("Draw!");

 } else if (playerSelection.toLowerCase() === 'paper' && computerChoice === 'rock') {
        alert("Winner winner chicken dinner; Paper beats Rock")
    } else if (playerSelection.toLowerCase() === 'rock' && computerChoice === 'scissors') {
        alert("Winner winner chicken dinner; Rock beats Scissors")
    } else if (playerSelection.toLowerCase() === 'scissors' && computerChoice === 'paper') {
        alert("Winner winner chicken dinner; Scissors beats Paper")
    } else if (playerSelection.toLowerCase() === 'rock' && computerChoice === 'paper') {
        alert("haha you fool you fell victim to one of the classic blunders; Paper beats Rock")
    } else if (playerSelection.toLowerCase() === 'scissors' && computerChoice === 'rock') {
        alert("haha you fool you fell victim to one of the classic blunders; Rock beats Scissors")
    } else if (playerSelection.toLowerCase() === 'paper' && computerChoice === 'scissors') {
        alert("haha you fool you fell victim to one of the classic blunders; Scissors beats Paper")
    } else {
        alert("The Fingers You Have Used to Dial Are Too Fat. Please retype. To obtain a special dialing wand, please mash the keypad with your palm now.")
    }