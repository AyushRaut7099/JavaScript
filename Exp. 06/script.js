function analyzeString() {
  let str = document.getElementById("inputString").value;

  if (str.trim() === "") {
    alert("Please enter a string!");
    return;
  }

  // Count vowels using regex
  let vowels = str.match(/[aeiouAEIOU]/g);
  let count = vowels ? vowels.length : 0;

  // Reverse string
  let reversed = str.split("").reverse().join("");

  document.getElementById("vowelCount").textContent = "Total vowels: " + count;
  document.getElementById("reversedString").textContent = "Reversed string: " + reversed;
}

function validateEmail() {
  let email = document.getElementById("email").value;
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

  if (regex.test(email)) {
    document.getElementById("emailValidation").textContent = "Valid Email ✔️";
    document.getElementById("emailValidation").style.color = "green";

    let username = email.split("@")[0];
    let domain = email.split("@")[1];
    document.getElementById("infoExtraction").textContent =
      "Username: " + username + " | Domain: " + domain;
  } else {
    document.getElementById("emailValidation").textContent = "Invalid Email ❌";
    document.getElementById("emailValidation").style.color = "red";
    document.getElementById("infoExtraction").textContent = "";
  }
}
