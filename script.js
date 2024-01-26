let playerX = "X";
let playerO = "O";
let isGameOver = false;
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = selectRandomPlayer();
let allButtons = document.querySelectorAll(".button");
let restartButton = document.getElementById("restartBtn");
let winningComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

allButtons.forEach((button) => {
  button.addEventListener("click", function () {
    handleButtonClick(button);
  });
});

restartButton.addEventListener("click", function () {
  resetGame();
});

function handleButtonClick(button) {
  let index = Array.from(allButtons).indexOf(button);

  if (gameBoard[index] !== "" || isGameOver) {
    return;
  }
  gameRunning(index);
}

function gameRunning(index) {
  playMove(index);
  if (checkWinner()) {
    console.log(`Player ${currentPlayer} wins!`);
    isGameOver = true;
  } else if (isBoardFull()) {
    console.log("GameOver!");
    isGameOver = true;
  } else {
    getOtherPlayer();
  }
}

function selectRandomPlayer() {
  return Math.floor(Math.random() * 2) === 0 ? playerX : playerO;
}

function getOtherPlayer() {
  currentPlayer = currentPlayer === playerX ? playerO : playerX;
}

function playMove(index) {
  gameBoard[index] = currentPlayer;
  allButtons[index].innerText = currentPlayer;
}

function isBoardFull() {
  if (gameBoard.every((value) => value !== "")) {
    return true;
  }
  return false;
}

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  allButtons.forEach((button) => {
    button.innerText = "";
  });

  currentPlayer = selectRandomPlayer();
  isGameOver = false;
}

function checkWinner() {
  for (let i = 0; i < winningComb.length; i++) {
    const [a, b, c] = winningComb[i];
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return true;
    }
  }
  return false;
}
