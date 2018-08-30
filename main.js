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
let bigCells = document.querySelectorAll('.big-cell')

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
            let cell = new Cell('normal', 4, 'Player1');
            gameboard.push(cell);
        } else {
            let cell = new Cell('normal', 4, 'Player2');
            gameboard.push(cell);
        }
    }
}

// function populateGameBoard(row, startPosition) {
//     for (let i = 0; i < row.length; i++) {
//         let currentPosition = i + startPosition;
//         row[i].innerText = gameboard[currentPosition].stones;
//     }
// }

function populateGameBoard() {
    
    for (let i = 0; i < 6; i++) {
        let currentPosition = i + 0;
        row2.children[i].innerText = gameboard[currentPosition].stones;
    }

    for (let i = 0; i < 6; i++) {
        let currentPosition = i + 7;
        row1.children[i].innerText = gameboard[currentPosition].stones;
    }

    bigCells[0].innerText = gameboard[6].stones;
    bigCells[1].innerText = gameboard[13].stones;
}

function toggleTurn() {
    let nextTurn = (currentTurn === "Player1" ? "Player2" : "Player1");
    currentTurn = nextTurn;
}

function moveStones(e) {
    let indexPosition = e.target.getAttribute('key');
    // console.log(indexPosition);

    let currentCell = gameboard[indexPosition];

    if (currentCell.owner === currentTurn) {
        let remainder = 0;
        console.log(currentCell.stones)
        for (let i = 1; i < currentCell.stones+1 ; i++) {
            let nextIndex = parseInt(indexPosition) + i;
            let nextCell = gameboard[nextIndex];
            nextCell.stones++;
        }
        
        currentCell.stones = 0;
    
    
        //if the number of stones equals ''
    
        populateGameBoard();
        toggleTurn();
        var popup = window.open;
    } else if (currentCell.stones === 0) {
        alert('This cell has no stones - go again');
    } else {
        alert("Can't Click on this cell.")
    }
}

function createCellEvents() {
    row2.addEventListener('click', moveStones)
    row1.addEventListener('click', moveStones);
}

// INITIAL EVENT LISTENER
startButton.addEventListener('click', function() {
    createGameBoard();
    populateGameBoard();
    createCellEvents();
    startButton.disabled = true;
});
