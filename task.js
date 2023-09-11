let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function makeMove(cellIndex) {
    if (!gameOver && gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        if (checkWin()) {
            document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
            gameOver = true;
        } else if (gameBoard.indexOf('') === -1) {
            document.getElementById('status').innerText = "It's a draw!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
            return true;
        }
    }

    return false;
}

function resetBoard() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    document.getElementById('status').innerText = "Player X's turn";
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.innerText = '';
    }
}

resetBoard();