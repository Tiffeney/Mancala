console.log("JS LOADED");
   

let startButton = document.querySelector('button');
let cells = document.querySelectorAll('.cell');
let row1 = document.querySelector('#row-1');
let row2 = document.querySelector('#row-2');

startButton.addEventListener('click', function() {
    cells.forEach(cell => cell.innerText = 4);
});

// let board = [
//       {
//         type: 'big',
//         numStones: 0,
//         owner: player2
//       },
//       {
//         type: 'hollow',
//         numStones: 4,
//         owner: player1
//       },
//       {
//         type: 'hollow',
//         numStones: 4,
//         owner: player1
//       },
//       {
//         type: 'hollow',
//         numStones: 4,
//         owner: player1
//       },
//       {
//         type: 'hollow',
//         numStones: 4,
//         owner: player1
//       }
//       ,
//       {
//         type: 'hollow',
//         numStones: 4,
//         owner: player1
//       },
//       {
//         type: 'hollow',
//         numStones: 4,
//         owner: player1
//       },
//       {
//         type: 'big',
//         numStones: 0,
//         owner: player1
//       },
//       {
//         type: 'hollow',
//         numStones: 4,
//         owner: player2
//       },
//       {
//         type: 'hollow',
//         numStones: 4,
//         owner: player2
//       },
//       {
//         type: 'hollow',
//         numStones: 4,
//         owner: player2
//       },
//       {
//         type: 'hollow',
//         numStones: 4,
//         owner: player2
//       },
//       {
//         type: 'hollow',
//         numStones: 4,
//         owner: player2
//       },
//       {
//         type: 'hollow',
//         numStones: 4,
//         owner: player2
//       }
//     ]

// const disperse = (player, source) {  
//     let position = source;
// }   