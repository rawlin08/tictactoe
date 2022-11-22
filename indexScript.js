// selectors for DOM

const xButton = document.querySelector('.xButton');
const oButton = document.querySelector('.oButton');
const cpuButton = document.querySelector('.CPU');
const playerButton = document.querySelector('.player');
const xMarkSvg = document.querySelector('.xMarkButton');
const oMarkSvg = document.querySelector('.oMarkButton');
const error = document.querySelector('.error');

// Event Listeners

xButton.addEventListener('click', () => {
    let playerOne = 'X'
    sessionStorage.setItem('playerOne', JSON.stringify(playerOne));
    xButton.style.backgroundColor = 'var(--darkWhite)';
    oButton.style.backgroundColor = 'var(--darkNavy)';
    xMarkSvg.style.color = 'var(--darkNavy)';
    oMarkSvg.style.color = 'var(--darkWhite)';
});

oButton.addEventListener('click', () => {
    let playerOne = 'O'
    sessionStorage.setItem('playerOne', JSON.stringify(playerOne));
    oButton.style.backgroundColor = 'var(--darkWhite)';
    xButton.style.backgroundColor = 'var(--darkNavy)';
    oMarkSvg.style.color = 'var(--darkNavy)';
    xMarkSvg.style.color = 'var(--darkWhite)';
});

cpuButton.addEventListener('click', () => {
    console.log('CPU Button Click');
    let currentGamemode = 'cpu';
    sessionStorage.setItem('currentGamemode', JSON.stringify(currentGamemode));
    
});

playerButton.addEventListener('click', () => {
    let currentGamemode = 'player';
    sessionStorage.setItem('currentGamemode', JSON.stringify(currentGamemode));
    
    let player = sessionStorage.getItem('playerOne');
    let playerOne = JSON.parse(player);
    if (!playerOne) {
        console.log('Pick a Mark!');
    }
    else {
        location.href = 'game.html';
    }
});

// setting gamemode to nothing

let playerOne = '';
let currentGamemode = '';
sessionStorage.setItem('playerOne', JSON.stringify(playerOne));
sessionStorage.setItem('currentGamemode', JSON.stringify(currentGamemode));