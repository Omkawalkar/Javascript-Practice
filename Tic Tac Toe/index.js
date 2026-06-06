let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");
let newGameButton = document.querySelector("#new-game-button");
let winnerMessage = document.querySelector("#winner-message");

let turnO = true;
let gameActive = true;
let moveCount = 0;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Adding event listener to boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!gameActive) return;
        if (box.innerText !== "") return;
        
        console.log("box was clicked");
        
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        
        box.disabled = true;
        moveCount++;
        
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of winningCombinations) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log("winner is " + pos1val);
            gameActive = false;
            winnerMessage.innerText = `🏆 Winner is ${pos1val}! 🏆`;
            winnerMessage.style.backgroundColor = "#90EE90";
            return;
        }
    }
    
    // Check for tie
    if (moveCount === 9 && gameActive === true) {
        console.log("It's a tie!");
        winnerMessage.innerText = "🤝 It's a Tie! 🤝";
        winnerMessage.style.backgroundColor = "#FFD700";
        gameActive = false;
        return;
    }
    
    // Update turn indicator
    if (gameActive) {
        winnerMessage.innerText = `Current Turn: ${turnO ? "O" : "X"}`;
        winnerMessage.style.backgroundColor = "#ffeaa7";
    }
};

// Reset game function
const resetGame = () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    gameActive = true;
    moveCount = 0;
    winnerMessage.innerText = "Current Turn: O";
    winnerMessage.style.backgroundColor = "#ffeaa7";
    console.log("Game reset");
};

// New game function (same as reset but with different log)
const newGame = () => {
    resetGame();
    console.log("New game started");
};

// Event listeners
resetButton.addEventListener("click", resetGame);
newGameButton.addEventListener("click", newGame);

// Initialize game
winnerMessage.innerText = "Current Turn: O";