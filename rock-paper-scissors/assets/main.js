// global var
let humanScore = 0;
let computerScore = 0;
let gameRound = 1;

// create a function called getComputerChoice
function getComputerChoice() {
  // create strings for the game
  const strings = ['rock', 'paper', 'scissors'];

  // randomly pick a string
  const i = Math.floor(Math.random() * strings.length);
  return strings[i];
}

// create a function called getHumanChoice
function getHumanChoice() {
  // return user's input
  let string = prompt(`[Round ${gameRound}] What do you think? Rock, Paper, or Scissors?`);
  if ((string === 'rock') || (string === 'paper') || (string === 'scissors')) {
    return string.toLowerCase();
  } else {
    console.log('Invalid weapon.');
    return 0;
  }
}

// create a function called playRound
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) return 0;
  else if (
    (humanChoice == 'rock' && computerChoice == 'scissors') ||
    (humanChoice == 'paper' && computerChoice == 'rock') ||
    (humanChoice == 'scissors' && computerChoice == 'paper')) {
      humanScore++;
      return 1;
  } else {
    computerScore++;
    return 2;
  }
}

// create a function called playGame
function playGame() {
  const human = getHumanChoice();
  const computer = getComputerChoice();

  if (human === 0) return;
  gameRound++;

  const game = playRound(human, computer);
  const score_str = `[You: ${humanScore}][Computer: ${computerScore}]`;
  const win_str = `${score_str} - You win!`;
  const lose_str = `${score_str} - You lose!`;
  const draw_str = `${score_str} - Draw.`;

  if (game === 1) {
    return win_str;
  } else if (game === 2) {
    return lose_str;
  } else {
    return draw_str;
  }
}

// create reset to clear scores in command
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  gameRound = 1;
  return 'Game reset.';
}

// Test cases
//playGame();
//console.log(playRound(getHumanChoice(), getComputerChoice()));
//console.log(getHumanChoice());
//console.log(getComputerChoice());
//getComputerChoice();
