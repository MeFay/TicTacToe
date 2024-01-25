var playerX = "X";
var playerO = "O";
var gameBoard = ['', '', '', '', '', '', '', '', ''];
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
  if (isGameOver() || isBoardFull() ){
    console.log("GameOver!");
  }
  playMove(index);
  if (checkWinner()) {
    console.log(`Player ${currentPlayer} wins!`);
  }
  if (isBoardFull()) {
    console.log("It's a draw!");
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

function isGameOver() {
  return checkWinner() || isBoardFull();
}

function isBoardFull() {
    return gameBoard.every(index => gameBoard[index] !== '');
  }

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = selectRandomPlayer();
}
