// global var
let humanScore = 0;
let computerScore = 0;
let gameRound = 1;

// dom manipulation
const dRound = document.getElementById('round');
const sHuman = document.getElementById('human-score');
const sComp = document.getElementById('computer-score');
const dAnnounce = document.getElementById('announcement');
const bHuman = document.querySelector('.human-base');
const bComp = document.querySelector('.computer-base');
const button = document.querySelectorAll('button');

// functions
function getComputerChoice() {
  const strings = ['rock', 'paper', 'scissors'];

  const i = Math.floor(Math.random() * strings.length);
  return strings[i];
}

/* We dont need this anymore
function getHumanChoice() {
  let string = prompt(`[Round ${gameRound}] What do you think? Rock, Paper, or Scissors?`);
  if ((string === 'rock') || (string === 'paper') || (string === 'scissors')) {
    return string.toLowerCase();
  } else {
    console.log('Invalid weapon.');
    return 0;
  }
}
*/

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

function playGame(h) {
  // reset conditions
  bHuman.classList.remove('win-bg', 'lose-bg', 'draw-bg');
  bComp.classList.remove('win-bg', 'lose-bg', 'draw-bg');

  // bad way to check if player already won
  if (humanScore === 5 || computerScore === 5) {
    resetGame();
  }
  
  const human = h;
  const computer = getComputerChoice();

  if (human === 0) return;
  gameRound++;

  const game = playRound(human, computer);

  /*
  const score_str = `[You: ${humanScore}][Computer: ${computerScore}]`;
  const win_str = `${score_str} - You win!`;
  const lose_str = `${score_str} - You lose!`;
  const draw_str = `${score_str} - Draw.`;
  */

  if (game === 1) {
    bHuman.classList.add('win-bg');
    bComp.classList.add('lose-bg');
  } else if (game === 2) {
    bComp.classList.add('win-bg');
    bHuman.classList.add('lose-bg');
  } else {
    bHuman.classList.add('draw-bg');
    bComp.classList.add('draw-bg');
  }
}

// create reset to clear scores in command
function resetGame() {
  // announce and disable everything for two seconds
  button.forEach((btn) => { btn.disabled = true });
  if (humanScore === 5) {
    dAnnounce.classList.add('announce-win');
    dAnnounce.innerHTML = 'You won the game.';
  } else if (computerScore === 5) {
    dAnnounce.classList.add('announce-lose');
    dAnnounce.innerHTML = 'Computer won the game.';
  } else {
    dAnnounce.innerHTML = 'Wait a minute!';
  }

  setTimeout(() => {
    humanScore = 0;
    computerScore = 0;
    gameRound = 1;

    dAnnounce.classList.remove('announce-win', 'announce-lose');
    dAnnounce.innerHTML = 'Who will win the game?';
    dRound.innerHTML = gameRound;
    sHuman.innerHTML = humanScore;
    sComp.innerHTML = computerScore;
    button.forEach((btn) => { btn.disabled = false });
  }, 2000);
}

/** Make all buttons interactive **/
function playerSelection(event) {
  const weapon = event.target.id;
  switch (weapon) {
    case 'r':
      return 'rock';
    case 'p':
      return 'paper';
    case 's':
      return 'scissors';
    default:
      return 0;
  }
}

// execution, kinda flimsy, need improvement
document.addEventListener('DOMContentLoaded', () => {
  // proceed initial values
  resetGame();

  const w = document.getElementById('select');
  w.addEventListener('click', (e) => {
    const human = playerSelection(e);
    playGame(human);

    // update score
    dRound.innerHTML = gameRound;
    sHuman.innerHTML = humanScore;
    sComp.innerHTML = computerScore;
  });
})
