let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById('spinner');

let randomText = "";
let startSeconds = 0;
let intervalId;

// Clear timer
function clearTimer() {
    startSeconds = 0;
    clearInterval(intervalId);
    timer.textContent = "0 Seconds";
}

// Start the timer
function startTimer() {
    intervalId = setInterval(() => {
        startSeconds += 1;
        timer.textContent = `${startSeconds} Seconds`;
    }, 1000);
}

// Fetch random text
function generateRandomText() {
    let url = "https://apis.ccbp.in/random-quote";

    spinner.classList.remove("d-none");
    quoteDisplay.classList.add("d-none");

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            randomText = data.content;
            spinner.classList.add("d-none");
            quoteDisplay.classList.remove("d-none");
            quoteDisplay.textContent = randomText;
            clearTimer();
            startTimer();
        })
        .catch((error) => {
            console.error("Error fetching quote:", error);
            spinner.classList.add("d-none");
            quoteDisplay.classList.remove("d-none");
            quoteDisplay.textContent = "Error loading quote. Try again!";
        });
}

// Check content
function checkContent() {
    if (quoteInput.value.trim() === randomText) {
        clearTimer();
        result.textContent = `You typed correctly in ${startSeconds} seconds!`;
    } else {
        result.textContent = "Incorrect typing. Try again.";
    }
}

// Reset test
function resetRandomText() {
    quoteInput.value = "";
    result.textContent = "";
    generateRandomText();
}

// Event listeners
submitBtn.addEventListener("click", checkContent);
resetBtn.addEventListener("click", resetRandomText);

// Initialize
generateRandomText();

