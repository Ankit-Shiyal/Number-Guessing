

let targetNumber;

let userGuesses = [];

let attempts = 0;

let gameOver = false;

function generateNumber() {

    targetNumber =
        Math.floor(Math.random() * 100) + 1;

}

function checkNumber() {

    if (gameOver) {
        return;
    }


    const input =
        document.getElementById("inputNum");

    const feedback =
        document.getElementById("feedback");


    const guessNum =
        Number(input.value);

    if (input.value.trim() === "") {

        feedback.textContent =
            "please enter a number.";

        feedback.className = "error";

        return;
    }

    if (!Number.isFinite(guessNum)) {

        feedback.textContent =
            "please enter a valid number.";

        feedback.className = "error";

        return;
    }

    if (guessNum < 1 || guessNum > 100) {

        feedback.textContent =
            "please enter a number between 1 and 100.";

        feedback.className = "error";

        return;
    }

    if (userGuesses.includes(guessNum)) {

        feedback.textContent =
            "you already guessed this number.";

        feedback.className = "warning";

        return;
    }

    userGuesses.push(guessNum);

    attempts++;

    document.getElementById(
        "attempt"
    ).textContent = attempts;

    document.getElementById(
        "previous"
    ).textContent =
        userGuesses.join(", ");


    if (guessNum === targetNumber) {

        feedback.textContent =
            " correct number";

        feedback.className = "success";

        gameOver = true;

        document.getElementById(
            "submitButton"
        ).disabled = true;


        saveGame();


    } else if (guessNum < targetNumber) {

        feedback.textContent =
            "try a higher number.";

        feedback.className = "warning";


    } else {

        feedback.textContent =
            "try a lower number.";

        feedback.className = "warning";

    }


    input.value = "";

}

function newGame() {

    generateNumber();

    userGuesses = [];

    attempts = 0;

    gameOver = false;


    document.getElementById(
        "attempt"
    ).textContent = "0";


    document.getElementById(
        "previous"
    ).textContent = "No guesses yet.";


    document.getElementById(
        "feedback"
    ).textContent = "";


    document.getElementById(
        "inputNum"
    ).value = "";


    document.getElementById(
        "btnSubmit"
    ).disabled = false;


    localStorage.removeItem(
        "guessGame"
    );

}
function saveGame() {

    const gameData = {

        attempts: attempts,

        guesses: userGuesses,

        gameOver: gameOver

    };


    localStorage.setItem(
        "guessGame",
        JSON.stringify(gameData)
    );

}

document
    .getElementById("inputNum")
    .addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                checkGuess();

            }

        }
    );

generateNumber();

