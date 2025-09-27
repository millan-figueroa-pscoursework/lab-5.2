// Select DOM elements
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const submitButton = document.querySelector("button");
const form = document.getElementById("registrationForm");

// Prevents default form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

// Load saved username: On page load, check if a username is saved in localStorage. If so, pre-fill the username field.

const savedUserName = localStorage.getItem("username");

if (savedUserName) {
  usernameInput.value = savedUserName;
}

console.log(usernameInput);

//Real-time validation: Add input event listeners to each field
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
  customEmailError.textContent = passwordInput.validationMessage;
});
