let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSelectorPara = document.querySelector("#user-score");
const compSelectorPara = document.querySelector("#comp-score")
//draw function

const drawgame = () => {
  console.log("game was draw");
  msg.innerText = "game was draw play again !";
  msg.style.backgroundColor = "#081b31";
};

// show winner function
const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userSelectorPara.innerText = userScore;
    console.log("you win");
    msg.innerText = "You Win !"
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compSelectorPara.innerText =compScore;
    console.log("computer win");
    msg.innerText = "You Lose !";
    msg.style.backgroundColor = "red";
  }
};

// computer Choice

const genCompChoice = () => {
  // rock paper scissor's
  const option = ["rock", "paper", "seissor"];

  const randIndx = Math.floor(Math.random() * 3);
  return option[randIndx];
};

// random computer choice function

const playGame = (userChoices) => {
  console.log("user choice", userChoices);

  const compChoice = genCompChoice();

  console.log("comp choice", compChoice);

  if (userChoices === compChoice) {
    drawgame();
  } else {
    let userWin = true;
    if (userChoices === "rock") {
      userWin = compChoice === "paper" ? false : true;

      // seissor paper
    } else if (userChoices === "paper") {
      userWin = compChoice === "seissor" ? false : true;
    }
    //rock seissor
    else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin);
  }
};

// user choice function
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoices = choice.getAttribute("id");
    playGame(userChoices);
  });
});
