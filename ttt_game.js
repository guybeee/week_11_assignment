/* functions
game
players
player turns
check for winners
play again*/

// create a variable name cell >> document.querySelectorAll() to select EVERYTHING >> .cell in order to select the class
const cells = document.querySelectorAll(".cell")
// create a variable name playGameBtn >> document.querySelector() to select the specific item >> #playGameBtn in order to select the id
const playGameBtn = document.querySelector("#playGameBtn")
// create a variable name restartGameBtn >> document.querySelector() to select the specific item >> #restartGameBtn in order to select the id
const restartGameBtn = document.querySelector("#restartGameBtn")
// keeps track of current player
let currentPlayer = "X"
// placeholder of stirngs for the amount of plays possible
let plays = ["","","","","","","","",""]
// keeps track if game is still in progress
let isRunning = true
// all possible win combinations
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

playGame()

function playGame() {
    let gameOver = false
    while (!gameOver) {
        // prompt user with questions if they want to initiate game
        const playResponse = prompt("Do you want to play a game of Tic-Tac-Toe?")

        // if statement to check user response
        if (playResponse.toLocaleLowerCase() === "yes" || playResponse.toLocaleLowerCase() === "yeah" || playResponse.toLocaleLowerCase() === "y") {
            // prompts user to enter player name
            players()
            console.log("Let the better player win!")
        }
        else {
            console.log("No problem, maybe next time!")
        }
        gameOver = true
    }  
    // .addEventListener to each cell and buttons
    cells.forEach(cell => cell.addEventListener("click", click))
    restartGameBtn.addEventListener("click", playAgain)
    isRunning = true
}

function click() {
    const cellId = this.getAttribute("id")

    if(plays[cellId] != "" || !isRunning) {
        return
    }

    updateGame(this, cellId)
    checkForWinner()
}

function updateGame(cell, index) {
    plays[index] = currentPlayer
    cell.textContent = currentPlayer

}

function gameOver() {
    
    // handling game events
}

function players() {
    let player1Name = prompt("Please enter player 1 name: ")
    let player2Name = prompt("Please enter player 2 name: ")
}

function changePlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
}

function checkForWinner() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = plays[condition[0]];
        const cellB = plays[condition[1]];
        const cellC = plays[condition[2]];

        if (cellA === "" || cellB === "" || cellC === "") {
            continue;
        }
        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        isRunning = false;
    } else if (!plays.includes("")) {
        isRunning = false;
    } else {
        changePlayer();
    }
}

function playAgain() {
    currentPlayer = "X";
    plays = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent = "");
    isRunning = true;
}



