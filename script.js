var playerX = "X";
var playerO = "O";
var isGameOver = false;
var gameBoard = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = selectRandomPlayer();
var allButtons = document.querySelectorAll(".button");
var winningComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    handleButtonClick(button);
  });
});

function handleButtonClick(button) {
  var index = Array.from(allButtons).indexOf(button);
  gameRunning(index);
}

function gameRunning(index) {
  while (!isGameOver) {
    playMove(index);
    if (checkWinner()) {
      console.log(`Player ${currentPlayer} wins!`);
    } else {
      getOtherPlayer();
    }
  }
  console.log("GameOver!");
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
  if (gameBoard.every((index) => gameBoard[index] !== "")) {
    isGameOver = true;
  }
}

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = selectRandomPlayer();
}
