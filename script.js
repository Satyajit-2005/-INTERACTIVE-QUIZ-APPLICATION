// Step 1: List of questions
const questions = [
  {
    question: "Which language is used for web development?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Which is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi"
  }
];

// Step 2: Track current question and score
let currentIndex = 0;
let score = 0;

// Step 3: Show the current question
function loadQuestion() {
  const current = questions[currentIndex];
  document.getElementById("question").innerText = current.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = ""; // clear previous options

  // Create buttons for each option
  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("feedback").innerText = "";
}

// Step 4: Check the selected answer
function checkAnswer(selectedOption) {
  const correct = questions[currentIndex].answer;
  const feedback = document.getElementById("feedback");

  if (selectedOption === correct) {
    feedback.innerText = "✅ Correct!";
    score++;
  } else {
    feedback.innerText = `❌ Wrong! Correct answer: ${correct}`;
  }

  // Disable buttons after answer
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);
}

// Step 5: Move to the next question
function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

// Step 6: Show final score
function showScore() {
  document.getElementById("question").innerText = "Quiz Completed!";
  document.getElementById("options").innerHTML = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("score").innerText = `🎉 Your score: ${score}/${questions.length}`;
}

// Step 7: Load first question on page load
window.onload = loadQuestion;
