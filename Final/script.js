// Game variables
let targetNumber;
let attempts = 0;
let maxAttempts = 7;
let isGameActive = false;
//DOM
const questionScreen = document.getElementById('question-screen');
const gameScreen = document.getElementById('game-screen');
const endingScreen = document.getElementById('ending-screen');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const guessInput = document.getElementById('guess-input');
const submitGuess = document.getElementById('submit-guess');
const gameFeedback = document.getElementById('game-feedback');
const attemptsCount = document.getElementById('attempts-count');
const endingTitle = document.getElementById('ending-title');
const endingMessage = document.getElementById('ending-message');
const endingImage = document.getElementById('ending-image');
const restartBtn = document.getElementById('restart-btn');
// Event Listener
    yesBtn.addEventListener('click', yesClick);
    noBtn.addEventListener('click', noClick);
    submitGuess.addEventListener('click', Guess);
    guessInput.addEventListener('keypress', enterPress);
    restartBtn.addEventListener('click', restart);

// Event function
function yesClick() {
    showEnding(
        "A wise choice!",
        "The black cat is pleased with you and allows you to pass. You have received the cat's blessing!",
        "end.png",
        "var(--green)"
    );
}

function noClick() {
    switchScreen(questionScreen, gameScreen);
    startGame();
}

function restart() {
    switchScreen(endingScreen, questionScreen);
    resetGame();
}

function enterPress(e) {
    if (e.key === 'Enter') {
        Guess();
    }
}

// Game functions

function startGame() {
    targetNumber = Math.floor(Math.random() * 50) + 1;
    attempts = 0;
    isGameActive = true;
    Feedback("I'm starting to think of a number between 1 and 50...", "var(--primary)");
    AttemptsDisplay();
    clearInput();
    console.log("Target number:", targetNumber);
}

function Guess() {
    if (!isGameActive) return;
    const userGuess = Number(guessInput.value);
    if (!userGuess || userGuess < 1 || userGuess > 50) {
        Feedback("Please enter a valid number between 1 and 50!", "var(--red)");
        return;
    }

    attempts++;
    AttemptsDisplay();

    // Game Logic
    if (userGuess === targetNumber) {
        gameWin();
    } else if (userGuess < targetNumber) {
        Feedback("Wait, the number I'm thinking of is bigger than this! Let me guess again!", "var(--red)");
    } else {
        Feedback("Wait, the number I'm thinking of is smaller than this! Let me guess again!", "var(--red)");
    }

    if (attempts >= maxAttempts && userGuess !== targetNumber) {
        gameLose();
    }
    clearInput();
    }

// Game result function
function gameWin() {
    Feedback(`Great! You guessed right after using ${attempts} only once! Black Cat forgives you.`, "var(--green)");
    gameFeedback.classList.add('pulse');
    isGameActive = false;
    setTimeout(() => {
        showEnding(
            "Forgive me!",
            `Although your judgment was poor at first, you're still quite clever. Black Cat has decided to forgive you. (Attempted ${attempts} times)`,
            "end.png",
            "var(--highlight)"
        );
    }, 2000);
}

function gameLose() {
    Feedback(`Game over! My target number is ${targetNumber}. Black Cat is disappointed in you!`, "var(--red)");
    isGameActive = false;
    setTimeout(() => {
        showEnding(
            "Game over",
            `The black cat has lost patience with you! The number you're thinking of is ${targetNumber}. Maybe next time you should trust the cat's cuteness!`,
            "Angry Black Cat.png",
            "var(--highlight)"
        );
    }, 2000);
}

function showEnding(title, message, imageSrc, color) {
    endingTitle.textContent = title;
    endingMessage.textContent = message;
    endingImage.src = imageSrc;
    endingScreen.style.borderTop = `5px solid ${color}`;
    gameFeedback.classList.remove('pulse');

    if (gameScreen.classList.contains('active')) {
        switchScreen(gameScreen, endingScreen);
    } else {
        switchScreen(questionScreen, endingScreen);
    }
}

// Utility functions
function switchScreen(fromScreen, toScreen) {
    fromScreen.classList.remove('active');
    toScreen.classList.add('active');
}

function Feedback(text, color) {
    gameFeedback.textContent = text;
    gameFeedback.style.color = color;
}

function AttemptsDisplay() {
    attemptsCount.textContent = `Number of attempts: ${attempts}`;
}

function clearInput() {
    guessInput.value = '';
    guessInput.focus();
}

function resetGame() {
    attempts = 0;
    isGameActive = false;
    gameFeedback.textContent = '';
    gameFeedback.classList.remove('pulse');
    clearInput();
}
