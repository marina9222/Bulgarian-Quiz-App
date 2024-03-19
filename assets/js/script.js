// ...Variables....

const question = document.getElementById("question");
let choices = document.querySelectorAll(".choice-text");
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionNumber = 0;
let availableQuestions = [];
let timer;
let timeRemaining = 10;

// ....Functions....

function getCategory() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
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

startGame = () => {
  questionNumber = 0;
  score = 0;
  getCategory();
  getNewQuestion();
};

startTimer = () => {
  const timerEl = document.getElementById("timer");
  timeRemaining = 10;
  timerEl.textContent = `Time remaining: ${timeRemaining}s`;

  timer = setInterval(() => {
    timeRemaining--;
    timerEl.textContent = `Time remaining: ${timeRemaining}s`;
    if (timeRemaining <= 0) {
      clearInterval(timer);
      getNewQuestion();
    }
  }, 1000);
};

stopTimer = () => {
  clearInterval(timer);
};
getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionNumber >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("end.html"); // go to end page
  }

  questionNumber++;
  questionCounterText.innerText = `${questionNumber}/${MAX_QUESTIONS}`;
  startTimer();
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  let questionChoices = [
    currentQuestion.choice1,
    currentQuestion.choice2,
    currentQuestion.choice3,
    currentQuestion.choice4,
  ];

  questionChoices = questionChoices.sort(() => Math.random() - 0.5);

  choices.forEach(function (choice, i) {
    choice.innerText = questionChoices[i];
  });
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    stopTimer();

    acceptingAnswers = false;
    const selectedChoice = e.target;
    let selectedAnswer = selectedChoice.innerText;
    selectedAnswer = selectedAnswer.toLowerCase();
    let correctAnswer = currentQuestion.answer.toLowerCase();
    const classToApply =
      selectedAnswer == correctAnswer ? "correct" : "incorrect";
    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }
    selectedChoice.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
