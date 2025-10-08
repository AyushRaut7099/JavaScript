let lights = ["red", "yellow", "green"];
let current = 0;
let timerValue = 5;
let interval;

const statusText = document.getElementById("status");
const timerText = document.getElementById("timer");

// Function to update lights
function updateLights() {
  lights.forEach(id => document.getElementById(id).style.background = "gray");

  if (lights[current] === "red") {
    document.getElementById("red").style.background = "red";
    statusText.textContent = "STOP!";
    statusText.style.color = "red";
    timerValue = 5; // Red for 5 seconds
  } else if (lights[current] === "yellow") {
    document.getElementById("yellow").style.background = "yellow";
    statusText.textContent = "READY!";
    statusText.style.color = "orange";
    timerValue = 2; // Yellow for 2 seconds
  } else {
    document.getElementById("green").style.background = "green";
    statusText.textContent = "GO!";
    statusText.style.color = "green";
    timerValue = 5; // Green for 5 seconds
  }

  timerText.textContent = "Timer: " + timerValue;
}

// Start button
document.getElementById("startBtn").addEventListener("click", function() {
  clearInterval(interval);
  updateLights();

  interval = setInterval(() => {
    timerText.textContent = "Timer: " + timerValue;
    if (timerValue === 0) {
      current = (current + 1) % lights.length;
      updateLights();
    }
    timerValue--;
  }, 1000);
});

// Stop button
document.getElementById("stopBtn").addEventListener("click", function() {
  clearInterval(interval);
});

// Reset button
document.getElementById("resetBtn").addEventListener("click", function() {
  clearInterval(interval);
  current = 0;
  updateLights();
});

// Initialize first light
updateLights();
