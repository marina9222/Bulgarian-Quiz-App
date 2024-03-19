// ...Variables....

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("save-score");
const finalScore = document.getElementById("final-score");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const scoreMsg = document.getElementById("score-msg");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;
finalScore.innerText = mostRecentScore;

// ....Functions....

scoreMessage = () => {
  if (mostRecentScore <= 20) {
    scoreMsg.textContent = "Go back to study!! 🙈";
  } else if (mostRecentScore > 20 && mostRecentScore <= 40) {
    scoreMsg.textContent = "Keep going 👍!!";
  } else {
    scoreMsg.textContent = "Are you sure you are not Bulgarian 😎?";
  }
};

scoreMessage();
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("highscores.html");
};
