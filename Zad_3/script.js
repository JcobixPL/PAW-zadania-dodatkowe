const randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
const attempts = document.getElementById("attempts");

checkButton.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);
    attemptsLeft--;

    if (userGuess === randomNumber) {
        result.textContent = "Gratulacje! Odgadłeś liczbę!";
        result.style.color = "green";
        checkButton.disabled = true;
    } else if (attemptsLeft === 0) {
        result.textContent = `Przegrałeś! Liczba to: ${randomNumber}`;
        result.style.color = "red";
        checkButton.disabled = true;
    } else {
        result.textContent = userGuess > randomNumber ? "Za dużo!" : "Za mało!";
    }

    attempts.textContent = `Pozostało prób: ${attemptsLeft}`;
});
