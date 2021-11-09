const results = {}

function computerPlay() {
  return Math.floor(Math.random() * 3) // 0, 1 or 2
}

function getUserInput(input) {
  selectionToN = {
    'rock': 0,
    'paper': 1,
    'scissors': 2
  }
  return selectionToN[input.toLowerCase()]
}

function playRound(playerSelection) {
  computerSelection = computerPlay()
  playerSelection = getUserInput(playerSelection)

  if ((playerSelection + 1) % 3 === computerSelection) {
    return 'player'
  } else if (playerSelection === computerSelection) {
    return 'tie'
  } else {
    return 'computer'
  }
}

function updateDOMScore() {
  const scores = document.querySelectorAll('.score')
  scores.forEach((score) => {
    score.textContent = results[score.id] ?? 0;
  });
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    roundResult = playRound(button.id);
    results[roundResult] = (results[roundResult] ?? 0) + 1;
    updateDOMScore();
  });
});