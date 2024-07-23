let randomNumber;
let attempts;

function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
}

function checkGuess() {
  attempts--;
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const guess = inputElement.value;
  if (guess == randomNumber) {
    feedbackElement.innerHTML = "Congratulations!";
    feedbackElement.style.color = "green";
    attempts = 0;
  } else if (guess < randomNumber) {
    feedbackElement.innerHTML = `Too low! Try again. ${attempts} attempts remaining.`;
    feedbackElement.style.color = "red";
  } else {
    feedbackElement.innerHTML = `Too high! Try again. ${attempts} attempts remaining.`;
    feedbackElement.style.color = "red";
  }
  if (attempts === 0 && guess != randomNumber) {
    feedbackElement.innerHTML =
      `Sorry, you're out of attempts! The correct number was ${randomNumber}.`;
    feedbackElement.style.color = "red";
  }
}

function restartGame() {
  const minRange = parseInt(document.getElementById("minRange").value) || 1;
  const maxRange = parseInt(document.getElementById("maxRange").value) || 100;
  randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  attempts = 10;
  document.getElementById("feedback").innerHTML = "";
  document.getElementById("guess").value = "";
  document.getElementById("range").textContent = `${minRange} and ${maxRange}`;
}