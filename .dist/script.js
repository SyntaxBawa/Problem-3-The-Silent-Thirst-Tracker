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
