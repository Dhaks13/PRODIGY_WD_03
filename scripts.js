var xwin=0;
var ywin=0;

window.addEventListener('DOMContentLoaded', () => {
    initializeGame();
});


function initializeGame() {
    const cells = document.querySelectorAll('.game div');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (!cell.textContent) {
                const currentPlayer = getCurrentPlayer();

                cell.style.background = `url(${currentPlayer}.png)`;

                cell.textContent = currentPlayer;

                if (checkWinner(currentPlayer)) {
                    alert(`${currentPlayer} wins!`);
                    resetGame();
                } else if (checkDraw()) {
                    alert('It\'s a draw!');
                    resetGame();
                }
            }
        });
    });
}

function getCurrentPlayer() {
    const xCount = document.querySelectorAll('.game div').length;
    const oCount = document.querySelectorAll('.game div').length - document.querySelectorAll('.game div').textContent.length;

    return xCount <= oCount ? 'X' : 'O';
}

function checkWinner(player) {
    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    return winningCombinations.some(combination => {
        return combination.every(cell => {
            return document.getElementById(`cell-${cell}`).textContent === player;
        });
    });
}

function checkDraw() {
    const cells = document.querySelectorAll('.game div');
    return Array.from(cells).every(cell => cell.textContent !== '');
}

function resetGame() {
    const cells = document.querySelectorAll('.game div');
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.background = 'none';
    });
}

function reset(){
    resetGame();
    document.getElementById("X").innerHTML=0;
    document.getElementById("Y").innerHTML=0;
}


function popup_close(){
    document.getElementById("pop-up").style.display="none";
}
