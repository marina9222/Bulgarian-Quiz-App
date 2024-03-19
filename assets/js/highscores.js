const highScoresList = document.getElementById("highscores-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//Getting the high scores
highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-scores">${score.name} - ${score.score}</li>`;
  })
  .join("");
