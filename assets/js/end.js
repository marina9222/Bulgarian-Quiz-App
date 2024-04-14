/* jshint esversion: 11 */
// Get DOM elements

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("save-score");
const finalScore = document.getElementById("final-score");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const scoreMsg = document.getElementById("score-msg");

// Get high scores from local storage or initialize empty array
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;

// Display most recent score
finalScore.innerText = mostRecentScore;

// Function to display message based on score
scoreMessage = () => {
  if (mostRecentScore <= 20) {
    scoreMsg.textContent = "Go back to study!! 🙈";
  } else if (mostRecentScore > 20 && mostRecentScore <= 40) {
    scoreMsg.textContent = "Keep going 👍!!";
  } else {
    scoreMsg.textContent = "Are you sure you are not Bulgarian 😎?";
  }
};

scoreMessage(); // Call function to display message

// Enable save button when username is entered
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

// Function to save high score
saveHighScore = (e) => {
  e.preventDefault(); // Prevent form submission

  // Create score object with username and score
  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  // Add score to high scores array, sort, and keep only top 5 scores
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  // Save high scores to local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));
  // Redirect to highscores.html
  window.location.assign("highscores.html");
};
