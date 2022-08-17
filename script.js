//set scores nil nil 

let playerScore = 0
let computerScore = 0
// define buttons as input
const buttons = document.querySelectorAll('input')
//create computerPlay random function
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
//create game logic
function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""
//for win
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
 //add score       
        playerScore += 1
 //text for result inc round counter        
        result = (`You win round ${playerScore + computerScore} <br><br>` + playerSelection + ' beats ' + computerSelection
            + "<br><br>" + playerScore + " - " + computerScore)
//win condition and result
        if (playerScore == 5) {
            result += '<br><br>Winner! Reload the page to play again'
            endGame()
        }
//for draw
    }
    else if (playerSelection == computerSelection) {
        result = ('Draw <br><br>' + 'You both chose ' + playerSelection
            + "<br><br>" + playerScore + " - " + computerScore)
    }
//for loss 
    else {
        computerScore += 1
        result = (`You lost round ${playerScore + computerScore} <br><br>` + computerSelection + ' beats ' + playerSelection
            + "<br><br>" + playerScore + " - " + computerScore)
 //text for result inc round counter        
        if (computerScore == 5) {
            result += '<br><br>Unlucky! Reload the page to play again'
            endGame()
        }
    } 
//push result (per round) text
    document.getElementById('result').innerHTML = result
    return
}
//initite round on button press
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
//disable buttons on endgame
function endGame() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}