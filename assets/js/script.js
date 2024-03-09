// ...Variables....

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionNumber = 0;
let availableQuestions = [];

let questions = [
  {
    question: "How do you say a dog in Bulgarian?",
    choice1: "Mechka",
    choice2: "Mravka",
    choice3: "Kuche",
    choice4: "Kotka",
    answer: 3,
  },
  {
    question: "How do you say a guinea pig in Bulgarian?",
    choice1: "Morsko svinche",
    choice2: "Morj",
    choice3: "Morsko konche",
    choice4: "Kotka",
    answer: 1,
  },
  {
    question: "How do you say a rabbit in Bulgarian?",
    choice1: "Mechka",
    choice2: "Zaek",
    choice3: "Kuche",
    choice4: "Jaba",
    answer: 2,
  },
  {
    question: "How do you say a frog in Bulgarian?",
    choice1: "Jaba",
    choice2: "Mravka",
    choice3: "Kuche",
    choice4: "Kotka",
    answer: 1,
  },
  {
    question: "How do you say a donkey in Bulgarian?",
    choice1: "Morsko svinche",
    choice2: "Mravka",
    choice3: "Kuche",
    choice4: "Magare",
    answer: 4,
  },
];

// ....Functions....

startGame = () => {
  questionNumber = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionNumber >= MAX_QUESTIONS) {
    return window.location.assign("end.html"); // got to end page
  }
  questionNumber++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    selectedChoice.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

startGame();
