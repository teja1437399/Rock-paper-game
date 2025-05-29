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
