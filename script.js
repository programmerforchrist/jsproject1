let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let choice = Math.random() * 15
    if(choice <= 5) {
        return "Paper";
    } else if(choice <= 10) {
        return "Scissors";
    } else {
        return "Rock";
    }    
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your Choice:");
    return humanChoice;
}

 function playRound(humanChoice, computerChoice) {
        if(humanChoice.toLowerCase() === 'paper' && computerChoice === "Rock" ) {
            console.log("You win!! Paper beats Rock")
            humanScore++;
        } else if(humanChoice.toLowerCase() === 'scissors' && computerChoice === "Rock") {
            console.log("You Lose!!! Rock beats Scissors")
            computerScore++;
        } else if(humanChoice.toLowerCase() === 'rock' && computerChoice === "Scissors"){
            console.log("You win!! Rock beats Scissors")
            humanScore++;
        } else if(humanChoice.toLowerCase() === 'scissors' && computerChoice === "Paper" ) {
            console.log("You win!! Scissors beats Paper")
            humanScore++;
        } else if(humanChoice.toLowerCase() === 'paper' && computerChoice === "Scissors") {
            console.log("You Lose!!! Scissors beats Paper")
            computerScore++;
        } else if(humanChoice.toLowerCase() === 'rock' && computerChoice === "Paper") {
            console.log("You Lose!!! Paper beats Rock")
            computerScore++;
        } else {
            console.log("Tie!! No Winner")
        }   
 } 


function playGame() {
    
    count = 0;
    while(count < 5) {
        playRound(getHumanChoice(),getComputerChoice());
        count++;
    }
    if(humanScore > computerScore) {
        console.log("YOU ARE THE WINNER!!!");
    } else {
        console.log("YOU LOSE!!! TRY AGAIN LATER");
    }
}

playGame();

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     function playRound(humanChoice, computerChoice) {
//         if(humanChoice.toLowerCase() === 'paper' && computerChoice === "Rock" ) {
//             console.log("You win!! Paper beats Rock")
//             humanScore++;
//         } else if(humanChoice.toLowerCase() === 'scissors' && computerChoice === "Rock") {
//             console.log("You Lose!!! Rock beats Scissors")
//             computerScore++;
//         } else if(humanChoice.toLowerCase() === 'rock' && computerChoice === "Scissors"){
//             console.log("You win!! Rock beats Scissors")
//             humanScore++;
//         } else if(humanChoice.toLowerCase() === 'scissors' && computerChoice === "Paper" ) {
//             console.log("You win!! Scissors beats Paper")
//             humanScore++;
//         } else if(humanChoice.toLowerCase() === 'paper' && computerChoice === "Scissors") {
//             console.log("You Lose!!! Scissors beats Paper")
//             computerScore++;
//         } else if(humanChoice.toLowerCase() === 'rock' && computerChoice === "Paper") {
//             console.log("You Lose!!! Paper beats Rock")
//             computerScore++;
//         }     
//  }
    
//   playRound(getHumanChoice(),getComputerChoice());
 
 
//     if(humanScore > computerScore) {
//         return "You are the Winner";
//     } else {
//         return "The Computer is the winner";
//     }

// }

