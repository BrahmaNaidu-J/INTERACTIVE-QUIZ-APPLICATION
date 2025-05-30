// Array of question objects
const quizData = [
    {
      question: "Which language runs in a browser?",
      options: ["Python", "Java", "C", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "What does HTML stand for?",
      options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "High Text Machine Language", "None"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "none of these"],
      answer: "1995"
    }
  ];
  
  let current = 0;
  let score = 0;
  
  const questionText = document.getElementById("questionText");
  const answerButtons = document.getElementById("answerButtons");
  const feedbackText = document.getElementById("feedbackText");
  const nextBtn = document.getElementById("nextBtn");
  const scoreBoard = document.getElementById("scoreBoard");
  
  // Loads a question and options
  function loadQuestion() {
    clearFeedback();
    let currentData = quizData[current];
    questionText.innerText = currentData.question;
    answerButtons.innerHTML = "";
  
    // Create buttons for each option
    currentData.options.forEach(option => {
      const btn = document.createElement("button");
      btn.innerText = option;
      btn.addEventListener("click", () => checkAnswer(option));
      answerButtons.appendChild(btn);
    });
  }
  
  // Checks if selected option is correct
  function checkAnswer(selected) {
    let correct = quizData[current].answer;
  
    if (selected === correct) {
      feedbackText.innerText = "✅ Correct!";
      score++;
    } else {
      feedbackText.innerText = "❌ Wrong! Answer: " + correct;
    }
  
    // Disable all buttons after answer is selected
    const allBtns = answerButtons.querySelectorAll("button");
    allBtns.forEach(btn => btn.disabled = true);
  
    scoreBoard.innerText = "Score: " + score;
  }
  
  // Clears previous feedback
  function clearFeedback() {
    feedbackText.innerText = "";
  }
  
  // Load next question or show final result
  nextBtn.addEventListener("click", () => {
    current++;
    if (current < quizData.length) {
      loadQuestion();
    } else {
      questionText.innerText = "Quiz Finished!";
      answerButtons.innerHTML = "";
      feedbackText.innerText = "🎉 Final Score: " + score + "/" + quizData.length;
      nextBtn.style.display = "none";
    }
  });
  
  // Start the quiz
  loadQuestion();
  