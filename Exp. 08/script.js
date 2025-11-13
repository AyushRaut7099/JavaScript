function validateName() {
  let name = document.getElementById("name").value.trim();
  let error = document.getElementById("nameError");
  if (name === "") {
    error.textContent = "Name cannot be empty!";
    return false;
  } else if (name.length < 3) {
    error.textContent = "Name must have at least 3 characters.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateEmail() {
  let email = document.getElementById("email").value.trim();
  let error = document.getElementById("emailError");
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if (email === "") {
    error.textContent = "Email is required!";
    return false;
  } else if (!regex.test(email)) {
    error.textContent = "Invalid email format!";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateAge() {
  let age = document.getElementById("age").value;
  let error = document.getElementById("ageError");
  if (age === "" || age < 16 || age > 60) {
    error.textContent = "Age must be between 16 and 60.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateGender() {
  let gender = document.getElementById("gender").value;
  let error = document.getElementById("genderError");
  if (gender === "") {
    error.textContent = "Please select a gender.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateContact() {
  let contact = document.getElementById("contact").value.trim();
  let error = document.getElementById("contactError");
  if (!/^[0-9]{10}$/.test(contact)) {
    error.textContent = "Enter a valid 10-digit number.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateAddress() {
  let address = document.getElementById("address").value.trim();
  let error = document.getElementById("addressError");
  if (address === "") {
    error.textContent = "Address cannot be empty.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateDate() {
  let date = document.getElementById("startDate").value;
  let error = document.getElementById("dateError");
  if (date === "") {
    error.textContent = "Please select a start date.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateTime() {
  let times = document.getElementsByName("time");
  let error = document.getElementById("timeError");
  for (let t of times) {
    if (t.checked) {
      error.textContent = "";
      return true;
    }
  }
  error.textContent = "Please select a workout time.";
  return false;
}

function validateTerms() {
  let terms = document.getElementById("terms");
  let error = document.getElementById("termsError");
  if (!terms.checked) {
    error.textContent = "You must agree to the terms.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateForm() {
  let valid =
    validateName() &&
    validateEmail() &&
    validateAge() &&
    validateGender() &&
    validateContact() &&
    validateAddress() &&
    validateDate() &&
    validateTime() &&
    validateTerms();

  if (valid) {
    document.getElementById("successMessage").textContent =
      "✅ Form Submitted Successfully!";
    document.getElementById("gymForm").reset();
  } else {
    document.getElementById("successMessage").textContent = "";
    alert("Please fill all fields correctly!");
  }

  return false; // prevent form reload
}
