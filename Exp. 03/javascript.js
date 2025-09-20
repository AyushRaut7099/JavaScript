function checkGrade() {
  const marks = parseInt(document.getElementById("marks").value);
  const result = document.getElementById("result");
  let grade = "";

  // Reset all previous classes
  result.className = "grade-output";

  if (marks >= 90 && marks <= 100) {
    grade = "A+";
    result.classList.add("grade-a-plus");
  } else if (marks >= 81 && marks <= 89) {
    grade = "A";
    result.classList.add("grade-a-plus");
  } else if (marks >= 66 && marks <= 80) {
    grade = "B";
    result.classList.add("grade-b");
  } else if (marks >= 50 && marks <= 65) {
    grade = "C";
    result.classList.add("grade-c");
  } else if (marks < 50 && marks >= 0) {
    grade = "Fail";
    result.classList.add("grade-fail");
  } else {
    grade = "Enter a valid number (0–100)";
  }

  result.innerText = "Your Grade is: " + grade;
}
