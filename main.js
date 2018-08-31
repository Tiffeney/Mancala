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

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

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

function checkCellCount(row) {
    let remainStones = 0;
    let children = row.children
    for (let i = 0; i < children.length; i++) {
        stonesInCell = parseInt(children[i].innerText);
        remainStones = remainStones + stonesInCell;
        // debugger
    }
    return remainStones
}

function checkWinner() {
    let player1Stones = gameboard[6].stones;    
    let player2Stones = gameboard[13].stones;

    if ((player1Stones + player2Stones) === 48) {
        player1Stones >= 25 ? setMessage("Player1 Won!") : setMessage("Player 2 Won!")
    } else if (checkCellCount(row2) === 0 || checkCellCount(row1) === 0) {    
        player1Stones > player2Stones ? setMessage("Player1 Won!") : setMessage("Player 2 Won!")
    } else {
        return
    }
}; 

function toggleTurn() {
    let nextTurn = (currentTurn === "Player1" ? "Player2" : "Player1");
    currentTurn = nextTurn;
}

<<<<<<< HEAD
let nextCell;
=======
function messageTwo(message) {
    document.getElementById('message2').innerHTML = message;
}
let currentCell;
>>>>>>> master

function moveStones(e) {
    let indexPosition = e.target.getAttribute('key');
    // console.log(indexPosition);

     currentCell = gameboard[indexPosition];

    if (currentCell.stones === 0) {
        messageTwo('This cell has no stones - go again');
    } else if (currentCell.owner != currentTurn) {
        messageTwo("Can't Click on this cell.") 
    } else {
        let remainder = 0;
        console.log(currentCell.stones)
        for (let i = 1; i < currentCell.stones+1 ; i++) {
            let nextIndex = parseInt(indexPosition) + i;
            nextCell = gameboard[nextIndex];
            if (nextCell === undefined) {
                remainder++;
            } else {
                nextCell.stones++;
            }
        }
        
        if (remainder > 0) {
            for (let i = 0; i < remainder; i++) {
                gameboard[i].stones++
            }
        }
        currentCell.stones = 0;
        console.log(currentCell)

        //if the number of stones equals ''
    
        populateGameBoard();
        
        if(nextCell.type !== 'big') {
            toggleTurn();
        }
        checkWinner();
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
