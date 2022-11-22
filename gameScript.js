// selectors for DOM

const turn = document.querySelector('.turn');
const restartBttn = document.querySelector('.restartButton');
const blockNodeList = document.querySelectorAll('.block');
const xText = document.querySelector('.xText');
const xScoreText = document.querySelector('.xScore');
const tieText = document.querySelector('.tieText');
const tieScoreText = document.querySelector('.tieScore');
const oText = document.querySelector('.oText');
const oScoreText = document.querySelector('.oScore');
const dialog = document.querySelector('dialog');
const roundTake = document.querySelector('.winner');
const won = document.querySelector('.won');
const quitGame = document.querySelector('.quit');
const nextRound = document.querySelector('.next');

let blockText = Array.from(blockNodeList);

// Event Listeners

restartBttn.addEventListener('click', () => {
    xTurns = 0;
    oTurns = 0;
    winner = '';
    blockText.forEach(button => {
        button.value = '';
        button.innerHTML = '';
    })
    currentPlayer = 'X';
    turn.innerHTML = '<svg class="xTurn"><use href="#icon-x"></use></svg> TURN';
    dialog.open = false;
});

blockText.forEach(button => {
    button.addEventListener('mouseenter', () => {
        if (button.innerHTML == '') {
            if (winner == '') {
                if (currentPlayer == 'X') {
                    button.innerHTML = '<svg class="xMarkOutline"><use href="#icon-x-outline"></use></svg>';
                    button.value = 'xHover';
                }
                else {
                    button.innerHTML = '<svg class="oMarkOutline"><use href="#icon-o-outline"></use></svg>';
                    button.value = 'oHover';
                }
            }
        };
    });
    button.addEventListener('mouseleave', () => {
        if (button.value == 'xHover' || button.value == 'oHover') {
            button.innerHTML = '';
            button.value = '';
        };
    });
    button.addEventListener('click', () => {
        if (winner == '') {
            gameRound(button);
        }
    })
});

quitGame.addEventListener('click', () => {
    location.href = 'index.html';
});

nextRound.addEventListener('click', () => {
    xTurns = 0;
    oTurns = 0;
    winner = '';
    blockText.forEach(button => {
        button.value = '';
        button.innerHTML = '';
    })
    currentPlayer = 'X';
    turn.innerHTML = '<svg class="xTurn"><use href="#icon-x"></use></svg> TURN';
    dialog.open = false;
});

// default settings

let currentPlayer = 'X';
let player = sessionStorage.getItem('playerOne');
let playerOne = JSON.parse(player);

let xTurns = 0;
let oTurns = 0;
let winner = '';

let xScore = 0;
let tieScore = 0;
let oScore = 0;
xScoreText.textContent = xScore;
tieScoreText.textContent = tieScore;
oScoreText.textContent = oScore;
turn.innerHTML = '<svg class="xTurn"><use href="#icon-x"></use></svg> TURN';


// functions

function setX() {
    if (playerOne == 'X') {
        xText.textContent = 'X (P1)'
        oText.textContent = 'O (P2)'
    }
    else {
        xText.textContent = 'X (P2)'
        oText.textContent = 'O (P1)'
    }
}

function gameRound(button) {
    if (currentPlayer == 'X') {
        if (button.value == 'xHover') {
            button.value = 'X';
            button.innerHTML = '<svg class="xGame"><use href="#icon-x"></use></svg>';
            xTurns++
        }
    }
    else {
        if (button.value == 'oHover') {
            button.innerHTML = '<svg class="oGame"><use href="#icon-o"></use></svg>';
            button.value = 'O';
            oTurns++
        }
    }
    checkGameOver();
}

function checkGameOver() {
    // check player X for win
    
    if (blockText[0].value == 'X' && blockText[1].value == 'X' && blockText[2].value == 'X') {
        xScore++
        xScoreText.textContent = xScore;
        winner = 'X';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="xGame"><use href="#icon-x"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--lightBlue)';
        dialog.open = true;
    }
    else if (blockText[3].value == 'X' && blockText[4].value == 'X' && blockText[5].value == 'X') {
        xScore++
        xScoreText.textContent = xScore;
        winner = 'X';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="xGame"><use href="#icon-x"></use></svg> TAKES THE ROUND';        roundTake.style.color = 'var(--lightBlue)';
        dialog.open = true;
    }
    else if (blockText[6].value == 'X' && blockText[7].value == 'X' && blockText[8].value == 'X') {
        xScore++
        xScoreText.textContent = xScore;
        winner = 'X';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="xGame"><use href="#icon-x"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--lightBlue)';
        dialog.open = true;
    }
    else if (blockText[0].value == 'X' && blockText[3].value == 'X' && blockText[6].value == 'X') {
        xScore++
        xScoreText.textContent = xScore;
        winner = 'X';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="xGame"><use href="#icon-x"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--lightBlue)';
        dialog.open = true;
    }
    else if (blockText[1].value == 'X' && blockText[4].value == 'X' && blockText[7].value == 'X') {
        xScore++
        xScoreText.textContent = xScore;
        winner = 'X';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="xGame"><use href="#icon-x"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--lightBlue)';
        dialog.open = true;
    }
    else if (blockText[2].value == 'X' && blockText[5].value == 'X' && blockText[8].value == 'X') {
        xScore++
        xScoreText.textContent = xScore;
        winner = 'X';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="xGame"><use href="#icon-x"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--lightBlue)';
        dialog.open = true;
    }
    else if (blockText[0].value == 'X' && blockText[4].value == 'X' && blockText[8].value == 'X') {
        xScore++
        xScoreText.textContent = xScore;
        winner = 'X';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="xGame"><use href="#icon-x"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--lightBlue)';
        dialog.open = true;
    }
    else if (blockText[2].value == 'X' && blockText[4].value == 'X' && blockText[6].value == 'X') {
        xScore++
        xScoreText.textContent = xScore;
        winner = 'X';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="xGame"><use href="#icon-x"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--lightBlue)';
        dialog.open = true;
    }
    
    // check player O for win
    
    else if (blockText[0].value == 'O' && blockText[1].value == 'O' && blockText[2].value == 'O') {
        oScore++
        oScoreText.textContent = oScore;
        winner = 'O';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="oGame"><use href="#icon-o"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--yellow)';
        dialog.open = true;
    }
    else if (blockText[3].value == 'O' && blockText[4].value == 'O' && blockText[5].value == 'O') {
        oScore++
        oScoreText.textContent = oScore;
        winner = 'O';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="oGame"><use href="#icon-o"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--yellow)';
        dialog.open = true;
    }
    else if (blockText[6].value == 'O' && blockText[7].value == 'O' && blockText[8].value == 'O') {
        oScore++
        oScoreText.textContent = oScore;
        winner = 'O';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="oGame"><use href="#icon-o"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--yellow)';
        dialog.open = true;
    }
    else if (blockText[0].value == 'O' && blockText[3].value == 'O' && blockText[6].value == 'O') {
        oScore++
        oScoreText.textContent = oScore;
        winner = 'O';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="oGame"><use href="#icon-o"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--yellow)';
        dialog.open = true;
    }
    else if (blockText[1].value == 'O' && blockText[4].value == 'O' && blockText[7].value == 'O') {
        oScore++
        oScoreText.textContent = oScore;
        winner = 'O';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="oGame"><use href="#icon-o"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--yellow)';
        dialog.open = true;
    }
    else if (blockText[2].value == 'O' && blockText[5].value == 'O' && blockText[8].value == 'O') {
        oScore++
        oScoreText.textContent = oScore;
        winner = 'O';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="oGame"><use href="#icon-o"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--yellow)';
        dialog.open = true;
    }
    else if (blockText[0].value == 'O' && blockText[4].value == 'O' && blockText[8].value == 'O') {
        oScore++
        oScoreText.textContent = oScore;
        winner = 'O';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="oGame"><use href="#icon-o"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--yellow)';
        dialog.open = true;
    }
    else if (blockText[2].value == 'O' && blockText[4].value == 'O' && blockText[6].value == 'O') {
        oScore++
        oScoreText.textContent = oScore;
        winner = 'O';
        won.textContent = `${currentPlayer} WON!`;
        roundTake.innerHTML = '<svg class="oGame"><use href="#icon-o"></use></svg> TAKES THE ROUND';
        roundTake.style.color = 'var(--yellow)';
        dialog.open = true;
    }

    // check for a tie

    else if ((blockText[0].value == 'X' || blockText[0].value == 'O') && (blockText[1].value == 'X' || blockText[1].value == 'O') && (blockText[2].value == 'X' || blockText[2].value == 'O') && (blockText[3].value == 'X' || blockText[3].value == 'O') && (blockText[4].value == 'X' || blockText[4].value == 'O') && (blockText[5].value == 'X' || blockText[5].value == 'O') && (blockText[6].value == 'X' || blockText[6].value == 'O') && (blockText[7].value == 'X' || blockText[7].value == 'O') && (blockText[8].value == 'X' || blockText[8].value == 'O')) {
        tieScore++
        tieScoreText.textContent = tieScore;
        winner = 'tie';
        roundTake.textContent = 'ROUND TIED';
        roundTake.style.color = 'var(--lightWhite)';
        dialog.open = true;
    }
    
    else {
        setTurn();
    }
}

function setTurn() {
    if (xTurns > oTurns) {
        currentPlayer = 'O';
        turn.innerHTML = '<svg class="oTurn"><use href="#icon-o"></use></svg> TURN';
    }
    else {
        currentPlayer = 'X';
        turn.innerHTML = '<svg class="xTurn"><use href="#icon-x"></use></svg> TURN';
    }
}

// default functions being called on page load

setX();