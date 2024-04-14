/* jshint esversion: 11 */

// Get DOM elements

const question = document.getElementById("question");
let choices = document.querySelectorAll(".choice-text");
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById("score");
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

// Variables for game state

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionNumber = 0;
let availableQuestions = [];
let timer;
let timeRemaining = 10;

// Functions

// Function to fetch questions based on category
function getCategory() {
  // Depending on the category chosen by the user, set available questions
  if (category === "animals") {
    availableQuestions = [...animals];
  } else if (category === "drinks") {
    availableQuestions = [...drinks];
  } else if (category === "colors") {
    availableQuestions = [...colors];
  } else if (category === "food") {
    availableQuestions = [...food];
  } else {
    availableQuestions = [...phrases];
  }
}

// Function to start the game
startGame = () => {
  questionNumber = 0; // Reset question number
  score = 0; // Reset score
  getCategory(); // Fetch questions based on category
  getNewQuestion(); // Get the first question
};

// Function to start the timer for each question
startTimer = () => {
  const timerEl = document.getElementById("timer");
  timeRemaining = 10;
  timerEl.textContent = `Time remaining: ${timeRemaining}s`; // Display initial time

  // Update timer every second
  timer = setInterval(() => {
    timeRemaining--; // Decrement time remaining
    timerEl.textContent = `Time remaining: ${timeRemaining}s`; // Update displayed time

    // If time is up, clear the timer and move to the next question
    if (timeRemaining <= 0) {
      clearInterval(timer);
      getNewQuestion();
    }
  }, 1000);
};

// Function to stop the timer
stopTimer = () => {
  clearInterval(timer);
};

// Function to get a new question

getNewQuestion = () => {
  // Check if there are no more available questions or the maximum number of questions has been reached
  if (availableQuestions.length === 0 || questionNumber >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign(`end.html?category=${category}`); // Redirect to end page
  }

  questionNumber++; // Increment question number
  questionCounterText.innerText = `${questionNumber}/${MAX_QUESTIONS}`;
  startTimer(); // Start timer for new question

  // Get a random question from available questions
  const questionIndex = Math.floor(Math.random() * availableQuestions.length); //getting random questions out of the available questions
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question; // Display question text

  // Shuffle answer choices
  let questionChoices = [
    currentQuestion.choice1,
    currentQuestion.choice2,
    currentQuestion.choice3,
    currentQuestion.choice4,
  ];

  questionChoices = questionChoices.sort(() => Math.random() - 0.5); // shuffling the answers

  // Display shuffled answer choices
  choices.forEach(function (choice, i) {
    choice.innerText = questionChoices[i];
  });
  availableQuestions.splice(questionIndex, 1); // Remove used question from available questions
  acceptingAnswers = true; // Allow accepting answers
};

// Event listeners for answer choices
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return; // If not accepting answers, do nothing
    stopTimer(); // Stop the timer

    acceptingAnswers = false; // Stop accepting answers
    const selectedChoice = e.target; // Get selected answer choice
    let selectedAnswer = selectedChoice.innerText;
    selectedAnswer = selectedAnswer.toLowerCase(); // Convert selected answer to lowercase
    let correctAnswer = currentQuestion.answer.toLowerCase(); // Convert correct answer to lowercase

    // Determine class to apply based on whether the answer is correct or incorrect
    const classToApply =
      selectedAnswer == correctAnswer ? "correct" : "incorrect";

    // If the answer is correct, increment the score
    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }
    // Add class to selected choice for styling
    selectedChoice.classList.add(classToApply);

    // Move to the next question after a delay
    setTimeout(() => {
      selectedChoice.classList.remove(classToApply); // Remove styling class
      getNewQuestion(); // Get a new question
    }, 1000);
  });
});

// Function to increment the score
incrementScore = (num) => {
  score += num; // Increment the score by the specified amount
  scoreText.innerText = score; // Update the displayed score
};
// Start the game when the script is loaded
startGame();
