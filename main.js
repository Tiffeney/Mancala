console.log("JS LOADED");

// Class
class Cell {
    constructor(type, stones, owner) {
        this.type = type;
        this.stones = stones;
        this.owner = owner;
    }
}

let gameboard = [];
let currentTurn = 'Player1';

// GLOBAL VARIABLES
let startButton = document.querySelector('button');
let cells = document.querySelectorAll('.cell');
let row2 = document.querySelector('#row-2');
let row1 = document.querySelector('#row-1');

// UTILITY FUNCTIONS
function createGameBoard() {
    for (let i = 0; i < 14; i++) {
        if (i === 6) {
            let cell = new Cell('big', 0, 'player1');
            gameboard.push(cell);
        } else if (i === 13) {
            let cell = new Cell('big', 0, 'player2');
            gameboard.push(cell);
        } else if (i < 6) {
            let cell = new Cell('normal', 4, 'player1');
            gameboard.push(cell);
        } else {
            let cell = new Cell('normal', 4, 'player2');
            gameboard.push(cell);
        }
    }
}

function populateGameBoard(row, startPosition) {
    for (let i = 0; i < row.length; i++) {
        let currentPosition = i + startPosition;
        row[i].innerText = gameboard[currentPosition].stones;
    }
}

function moveStones(e) {
    let indexPosition = e.target.getAttribute('key');
    // console.log(indexPosition);
    // Based on current indexposition, move stones in gameboard array to adjacent cells
    // if (currentTurn === "Player1") {
    //     for (let i = 0; i <)
    // } else {

    // }

    let currentCell = gameboard[indexPosition]
    console.log(currentCell.stones)
    for (let i = 1; i < currentCell.stones+1 ; i++) {
        let nextIndex = parseInt(indexPosition) + i;
        let nextCell = gameboard[nextIndex];
        nextCell.stones++;
    }

    currentCell.stones = 0;

    populateGameBoard(row2.children, 0);
    let nextTurn = (currentTurn === "Player1" ? "Player2" : "Player1");
    currentTurn = nextTurn;
}

function createCellEvents() {
    row2.addEventListener('click', moveStones)
    row1.addEventListener('click', moveStones);
}

// INITIAL EVENT LISTENER
startButton.addEventListener('click', function() {
    createGameBoard();
    populateGameBoard(row2.children, 0);
    populateGameBoard(row1.children, 7);
    createCellEvents();
    startButton.disabled = true;
});
