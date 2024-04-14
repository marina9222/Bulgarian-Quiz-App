/* jshint esversion: 11 */
// Get DOM elements
const highScoresList = document.getElementById("highscores-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Display high scores
highScoresList.innerHTML = highScores
  .map((score) => {
    // Map each high score to an HTML list item
    return `<li class="high-scores">${score.name} - ${score.score}</li>`;
  })
  .join(""); // Join the list items into a single string and set it as inner HTML of the high scores list element
