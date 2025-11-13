// --- Update current time every second ---
setInterval(() => {
  const now = new Date();
  document.getElementById("currentTime").textContent =
    "Current Time: " + now.toLocaleTimeString();
  checkActiveClass();
}, 1000);

// --- Function to check and highlight active class ---
function checkActiveClass() {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const rows = document.querySelectorAll("#scheduleTable tbody tr");
  let nextClassStart = null;
  let activeFound = false;

  rows.forEach(row => {
    const start = convertToMinutes(row.cells[1].textContent);
    const end = convertToMinutes(row.cells[2].textContent);

    if (currentTime >= start && currentTime <= end) {
      row.classList.add("active");
      activeFound = true;
    } else {
      row.classList.remove("active");
      if (start > currentTime && nextClassStart === null) {
        nextClassStart = start;
      }
    }
  });

  // --- Countdown for next class ---
  if (nextClassStart) {
    const diff = nextClassStart - currentTime;
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    const seconds = 60 - new Date().getSeconds();

    document.getElementById("timer").textContent =
      `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  } else {
    document.getElementById("timer").textContent = "No more classes today!";
  }

  // --- Alert when a class starts ---
  rows.forEach(row => {
    const start = convertToMinutes(row.cells[1].textContent);
    const end = convertToMinutes(row.cells[2].textContent);
    const current = now.getHours() * 60 + now.getMinutes();

    if (current === start && now.getSeconds() === 0) {
      alert(`Class Started: ${row.cells[0].textContent}`);
    }
  });
}

// --- Utility functions ---
function convertToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function pad(num) {
  return num.toString().padStart(2, "0");
}
