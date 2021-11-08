function computerPlay() {
  return Math.floor(Math.random() * 3) // 0, 1 or 2
}

function getUserInput() {
  selectionToN = {
    'rock': 0,
    'paper': 1,
    'scissors': 2
  }
  return selectionToN[prompt("Enter selection").toLowerCase()]
}

function playRound() {
  computerSelection = computerPlay()
  playerSelection = getUserInput()

  if ((playerSelection + 1) % 3 === computerSelection) {
    return 'Player won'
  } else if (playerSelection === computerSelection) {
    return 'Tie'
  } else {
    return 'Computer won'
  }
}

function game() {
  const results = {}
  for (let index = 0; index < 5; index++) {
    result = playRound()
    results[result] = (results[result] ?? 0) + 1

    console.log(`Round result: ${result}`)
  }
  return (
  "Game result: " +
  _.chain(Object.entries(results))
  .sortBy(([key, value]) => value)
  .reverse()
  .value()
  .filter(winner => winner != 'Tie')[0][0]
  )
}