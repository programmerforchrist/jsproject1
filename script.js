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

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Enter your Choice:");
    return humanChoice;
}

console.log(getHumanChoice());