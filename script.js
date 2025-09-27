// Select DOM elements
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const submitButton = document.getElementsByTagName("button");

// Load saved username: On page load, check if a username is saved in localStorage. If so, pre-fill the username field.

//Real-time validation: Add input event listeners to each field
