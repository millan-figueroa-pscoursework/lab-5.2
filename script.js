// Select DOM elements
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const submitButton = document.querySelector("button");
const form = document.getElementById("registrationForm");

// Load saved username: On page load, check if a username is saved in localStorage. If so, pre-fill the username field.

const savedUserName = localStorage.getItem("username");

if (savedUserName) {
  usernameInput.value = savedUserName;
}

// Adds event listener to username input to save it to localstorage
usernameInput.addEventListener("input", function () {
  localStorage.setItem("username", usernameInput.value);
});
console.log(savedUserName);

// Real-time validation: Add input event listeners to each field
// USERNAME input
usernameInput.addEventListener("input", function (event) {
  //yells at user if they dont enter input in text format
  if (usernameInput.validity.typeMismatch) {
    usernameInput.setCustomValidity("Please enter text!!");
    //yells at user if they don't enter anything
  } else if (usernameInput.validity.valueMissing) {
    usernameInput.setCustomValidity("We need some input from you!!");
  } else {
    usernameInput.setCustomValidity(""); // Clear custom error if valid
  }
  // Display the custom message or clear it
  usernameError.textContent = usernameInput.validationMessage;
});

// EMAIL input
emailInput.addEventListener("input", function (event) {
  //yells at user if they dont enter input in email format
  //   console.log("This works!");
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("Please enter an actual email address!!");
    //yells at user if they don't enter anything
  } else if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity("We need some input from you!!");
  } else {
    emailInput.setCustomValidity(""); // Clear custom error if valid
  }
  // Display the custom message or clear it
  emailError.textContent = emailInput.validationMessage;
});
// PASSWORD input
passwordInput.addEventListener("input", function (event) {
  if (passwordInput.validity.tooShort) {
    passwordInput.setCustomValidity(
      "Password must be at least 8 characters long"
    );
  } else {
    passwordInput.setCustomValidity(""); // Clear custom error if valid
  }
  // Display the custom message or clear it
  passwordError.textContent = passwordInput.validationMessage;
});

// CONFIRM PASSWORD input
confirmPasswordInput.addEventListener("input", function (event) {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.setCustomValidity("Passwords must match");
  } else {
    confirmPasswordInput.setCustomValidity(""); // Clear custom error if valid
  }
  // Display the custom message or clear it
  confirmPasswordError.textContent = confirmPasswordInput.validationMessage;
});

// Prevents default form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Add manual validation
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Display a success message
  alert("Form submitted!");
});
