const options = document.querySelectorAll('.options');
let playerScore = 0;
let computerScore = 0;
let result = '';

options.forEach((option) => {
  option.addEventListener('click', function () {
    const playerSelection = this.value;

    const computerOptions = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = computerOptions[Math.floor(Math.random() * 3)];

    updateMoves(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    updateScore();
    if (checkWinner()) {
      playerScore = computerScore = 0;
      updateScore();
    }
  });
});

function playRound(playerSelection, computerSelection) {
  const currentMatch = `${playerSelection} vs ${computerSelection}`;
  if (playerSelection === computerSelection) {
    result = `${currentMatch} Tie game!`;
  }
  if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    computerScore++;
    result = 'You lose! Paper beats Rock.';
  }
  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerScore++;
    result = 'You win! Rock beats Scissors.';
  }
  if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerScore++;
    result = 'You win! Paper beats Rock.';
  }
  if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    computerScore++;
    result = 'You lose! Scissors beat Paper.';
  }
  if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    computerScore++;
    result = 'You lose! Rock beats Scissors.';
  }
  if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerScore++;
    result = 'You win! Scissors beat Paper.';
  }
  document.getElementById('result').textContent = result;
  return;
}

function updateScore() {
  document.getElementById('p-score').textContent = playerScore;
  document.getElementById('c-score').textContent = computerScore;
}

function updateMoves(playerSelection, computerSelection) {
  document.getElementById('p-move').src = `./images/${playerSelection}.svg`;
  document.getElementById('c-move').src = `./images/${computerSelection}.svg`;
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    const winner =
      playerScore === 5
        ? 'You win the game! Congratulations!'
        : 'Computer wins the game! Try again next time!';
    document.getElementById('result').textContent = winner;
    return true;
  }
  return false;
}
