const playBtn = document.getElementById("play-btn");
const landing = document.getElementById("landing");
const game = document.getElementById("game");
const resultText = document.getElementById("result-text");
const choices = document.querySelectorAll(".choice");
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");
const resetBtn = document.getElementById("reset-btn");

let userScore = 0;
let compScore = 0;

playBtn.addEventListener("click", () => {
  landing.style.display = "none";
  game.style.display = "block";
});

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.dataset.choice;
    const compChoice = getComputerChoice();
    const result = getResult(userChoice, compChoice);

    if (result === "You win!") userScore++;
    else if (result === "You lose!") compScore++;

    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;

    resultText.textContent = `You chose ${userChoice}, computer chose ${compChoice}. ${result}`;
  });
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScoreEl.textContent = 0;
  compScoreEl.textContent = 0;
  resultText.textContent = "Score reset. Make your move!";
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function getResult(user, comp) {
  if (user === comp) return "It's a draw!";
  if (
    (user === "rock" && comp === "scissors") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissors" && comp === "paper")
  ) {
    return "You win!";
  }
  return "You lose!";
}

