function getComputerChoice() {
  let computerChoice = '';
  let random = Math.floor(Math.random() * 100);
  if (random <= 33) {
    computerChoice = 'rock';
    return computerChoice;
  } else if (random > 66) {
    computerChoice = 'scissors';
    return computerChoice;
  } else {
    computerChoice = 'paper';
    return computerChoice;
  }
}

function getPlayerChoice() {
  let playerChoice = '';
  let random = Math.floor(Math.random() * 100);
  if (random <= 33) {
    playerChoice = 'rock';
    return playerChoice;
  } else if (random > 66) {
    playerChoice = 'scissors';
    return playerChoice;
  } else {
    playerChoice = 'paper';
    return playerChoice;
  }
}

let playerCounter = 0;
let computerCounter = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Tie game! ${playerCounter} : ${computerCounter}`;
  }
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerCounter++;
    return `You lose! Paper beats rock. ${playerCounter} : ${computerCounter}`;
  }
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerCounter++;
    return `You win! Rock beats scissors. ${playerCounter} : ${computerCounter}`;
  }
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerCounter++;
    return `You win! Paper beats rock. ${playerCounter} : ${computerCounter}`;
  }
  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerCounter++;
    return `You lose! Scissors beat paper. ${playerCounter} : ${computerCounter}`;
  }
  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerCounter++;
    return `You lose! Rock beats scissors. ${playerCounter} : ${computerCounter}`;
  }
  if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerCounter++;
    return `You win! Scissors beat paper. ${playerCounter} : ${computerCounter}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playerCounter);
    console.log(computerCounter);
  }
  return `${playerCounter} : ${computerCounter}`;
}

console.log(game());
