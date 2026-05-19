// State Variables
let currentWater = 0;
let dailyGoal = 0;

// Select Elements
const goalInput = document.getElementById("goalInput");
const setGoalBtn = document.getElementById("setGoalBtn");

const add250 = document.getElementById("add250");
const add500 = document.getElementById("add500");

const progressText = document.getElementById("progressText");
const statusText = document.getElementById("status");
const message = document.getElementById("message");

const progressCircle = document.querySelector(".progress-circle");

const resetBtn = document.getElementById("resetBtn");

// Load Saved Data
window.onload = function () {
    const savedGoal = localStorage.getItem("dailyGoal");
    const savedWater = localStorage.getItem("currentWater");

    if (savedGoal) {
        dailyGoal = parseInt(savedGoal);
    }

    if (savedWater) {
        currentWater = parseInt(savedWater);
    }

    updateUI();
};

// Set Goal
setGoalBtn.addEventListener("click", function () {

    if (goalInput.value === "" || goalInput.value <= 0) {
        alert("Please enter a valid goal.");
        return;
    }

    dailyGoal = parseInt(goalInput.value);

    // Save Goal
    localStorage.setItem("dailyGoal", dailyGoal);

    updateUI();
});

// Add Water Function
function addWater(amount) {

    if (dailyGoal === 0) {
        alert("Set your daily goal first.");
        return;
    }

    currentWater += amount;

    // Save Current Water
    localStorage.setItem("currentWater", currentWater);

    updateUI();
}

// Quick Add Buttons
add250.addEventListener("click", function () {
    addWater(250);
});

add500.addEventListener("click", function () {
    addWater(500);
});

// Update UI
function updateUI() {

    // Avoid division by zero
    let percent = 0;

    if (dailyGoal > 0) {
        percent = Math.min((currentWater / dailyGoal) * 100, 100);
    }

    // Update Progress Text
    progressText.textContent = `${Math.floor(percent)}%`;

    // Update Status
    statusText.textContent = `${currentWater}ml / ${dailyGoal}ml`;

    // Update Progress Circle
    let degrees = (percent / 100) * 360;

    progressCircle.style.background =
        `conic-gradient(#00b4d8 ${degrees}deg, #caf0f8 ${degrees}deg)`;

    // Remaining Water
    let remaining = dailyGoal - currentWater;

    if (remaining > 0) {
        message.textContent =
            `You need ${remaining}ml more to reach your goal💦`;
    } else {
        message.textContent =
            "Congratulations🎉You reached your daily goal!";
    }
}

// Reset Button
resetBtn.addEventListener("click", function () {

    currentWater = 0;

    localStorage.setItem("currentWater", currentWater);

    updateUI();
});






