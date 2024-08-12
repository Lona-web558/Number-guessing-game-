let targetNum = Math.floor(Math.random() * 100) + 1;
let chances = 10;
let guessCount = 0;

document.getElementById("guessButton").addEventListener("click", function() {
  let userGuess = document.getElementById("guessInput").value;
  guessCount++;
  chances--;

  if (userGuess == targetNum) {
    document.getElementById("result").textContent = "Congratulations! You guessed the number in " + guessCount + " tries.";
    document.getElementById("chances").textContent = "";
  } else if (userGuess > targetNum) {
    document.getElementById("result").textContent = "Your guess is too high.";
    document.getElementById("chances").textContent = "You have " + chances + " chances left.";
  } else {
    document.getElementById("result").textContent = "Your guess is too low.";
    document.getElementById("chances").textContent = "You have " + chances + " chances left.";
  }

  if (chances == 0) {
    document.getElementById("result").textContent = "Game over! The number was " + targetNum + ".";
    document.getElementById("chances").textContent = "";
  }
});