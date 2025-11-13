document.getElementById("loadBtn").addEventListener("click", loadStudents);

function loadStudents() {
  const loader = document.getElementById("loader");
  const table = document.getElementById("studentTable");
  const tbody = document.getElementById("tableBody");

  // Clear previous data
  tbody.innerHTML = "";
  table.classList.add("hidden");

  // Show loader
  loader.classList.remove("hidden");

  // Simulate API delay using setTimeout
  setTimeout(() => {
    fetch("data.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        return response.json();
      })
      .then(data => {
        loader.classList.add("hidden");
        table.classList.remove("hidden");

        data.students.forEach(student => {
          const row = document.createElement("tr");

          row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.year}</td>
            <td>${student.grade}</td>
          `;
          tbody.appendChild(row);
        });
      })
      .catch(error => {
        loader.classList.add("hidden");
        alert("Error loading data: " + error.message);
      });
  }, 1500); // 1.5-second delay for effect
}
