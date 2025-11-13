// --- THEME SWITCHER USING LOCALSTORAGE ---
const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

// Check saved theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "Switch to Light Mode 🌞";
  } else {
    body.classList.remove("dark-mode");
    toggleBtn.textContent = "Switch to Dark Mode 🌙";
  }

  // --- SESSION STORAGE COUNTER ---
  if (sessionStorage.getItem("reloadCount")) {
    let count = parseInt(sessionStorage.getItem("reloadCount")) + 1;
    sessionStorage.setItem("reloadCount", count);
    document.getElementById("reloadCount").textContent = count;
  } else {
    sessionStorage.setItem("reloadCount", 1);
    document.getElementById("reloadCount").textContent = 1;
  }
};

// Toggle theme and save in localStorage
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "Switch to Light Mode 🌞";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "Switch to Dark Mode 🌙";
  }
});
