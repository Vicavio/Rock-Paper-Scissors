const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors"){
        return userInput;
    } else { console.log(`"Error" You need to choose: rock, paper or scissors.`);
    } 
}


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 1 : return "rock";
        case 2 : return "paper";
        case 3 : return "scissors";
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        console.log("The game was a tie.");
    } else { 
        if (userChoice == "rock") {
           if (computerChoice == "paper") {
            console.log("The computer won");  
           } else { console.log("The user won.")}
        }
        if (userChoice == "paper") {
          if (computerChoice == "scissors") {
            console.log("The computer won.");  
          } else { console.log("The user won")}
        }
    if (userChoice == "scissors") {
      if (computerChoice == "rock") {
        console.log("The computer won");
    } else { console.log("The user won.")}
   }
  }
}

function playGame() {
    userChoice = getUserChoice("paper");
    computerChoice = getComputerChoice();
    console.log(`Let's start the game: "${userChoice}" against "${computerChoice}". Let's see who is going to win:`);
    determineWinner(userChoice, computerChoice);
}
playGame();