function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (playerChoice === computerChoice) {
    result = "It's a Tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You Win! 🎉";
  } else {
    result = "You Lose! 😢";
  }

  document.getElementById('result').textContent =
    `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (playerChoice === computerChoice) {
    result = "It's a Tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You Win! 🎉";
    playerScore++;
  } else {
    result = "You Lose! 😢";
    computerScore++;
  }

  document.getElementById('result').textContent =
    `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;

  document.getElementById('score').textContent =
    `You: ${playerScore} | Computer: ${computerScore}`;
}
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('score').textContent = `You: 0 | Computer: 0`;
  document.getElementById('result').textContent = "Make your move!";
}
