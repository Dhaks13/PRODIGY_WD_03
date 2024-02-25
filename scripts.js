let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let xWins = 0;
let oWins = 0;

function handleWin(winner) {
    if (winner === 'X') {
        xWins++;
        document.getElementById('Xwin').textContent = xWins; 
    } else if (winner === 'O') {
        oWins++;
        document.getElementById('Owin').textContent = oWins; 
    }
}

function placeSymbol(row, col) {
    
    if (!board[row][col]) {
        board[row][col] = currentPlayer;
        let cell = document.getElementById('app').children[row * 3 + col];

        if (currentPlayer === 'X') {
            cell.innerHTML='<img src="img/X.png" alt="X">';
        } else {
            cell.innerHTML='<img src="img/O.png" alt="O">';
        }
        setTimeout(function() {
            if (checkWinner()) {
                alert(currentPlayer + ' wins!');
                handleWin(currentPlayer);
                currentPlayer = 'X';
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }, 300);
    }
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) return true; 
        if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return true; 
    }
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return true; 
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return true;

    if (board.flat().every(cell => cell)) {
        alert('It\'s a tie!');
        currentPlayer = 'X';
        resetGame();
    }

    return false;
}

function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML='');
}

function reset() {
    currentPlayer = 'X';
    resetGame();
    xWins = 0;
    oWins = 0;
    document.getElementById('Xwin').textContent = xWins; 
    document.getElementById('Owin').textContent = oWins; 
}

function popup_close() {
    document.getElementById("pop-up").style.display="none";
}
