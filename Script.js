let score = localStorage.getItem("score") || 0;
updateProgress();

function solveMath() {
  let input = document.getElementById("mathInput").value;
  try {
    let result = eval(input);
    document.getElementById("mathResult").innerText =
      "Answer: " + result;
    increaseScore();
  } catch {
    document.getElementById("mathResult").innerText =
      "Invalid expression ❌";
  }
}

function schoolHelp() {
  let q = document.getElementById("schoolInput").value.toLowerCase();
  let answer = "Think step-by-step and identify key terms.";

  if (q.includes("photosynthesis"))
    answer = "Photosynthesis is how plants make food using sunlight, water, and carbon dioxide.";

  if (q.includes("gravity"))
    answer = "Gravity is the force that pulls objects toward each other.";

  if (q.includes("noun"))
    answer = "A noun is a naming word for a person, place, animal, or thing.";

  if (q.includes("evaporation"))
    answer = "Evaporation is when liquid turns into gas due to heat.";

  document.getElementById("schoolResult").innerText = answer;
  increaseScore();
}

function lesson(subject) {
  let text = {
    math: "Math helps us calculate, measure, and solve problems.",
    physics: "Physics studies matter, energy, motion, and forces.",
    chemistry: "Chemistry studies substances and how they react.",
    biology: "Biology is the study of living things.",
    english: "English improves reading, writing, and communication."
  };
  document.getElementById("lessonResult").innerText = text[subject];
  increaseScore();
}

function quiz(answer) {
  if (answer === 5) {
    document.getElementById("quizResult").innerText = "Correct 🎉";
    increaseScore();
  } else {
    document.getElementById("quizResult").innerText = "Wrong ❌ Try again";
  }
}

function increaseScore() {
  score++;
  localStorage.setItem("score", score);
  updateProgress();
}

function updateProgress() {
  document.getElementById("progress").innerText =
    `You have completed ${score} learning actions ⭐`;
}

function toggleDark() {
  document.body.classList.toggle("dark");
}