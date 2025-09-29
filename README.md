# Interactive User Registration Form

## Objectives

### By the end of this lab, you will be able to:

[✅] Structure an HTML form with appropriate input fields for registration.<br>
[✅] Implement real-time input validation using JavaScript event listeners (input event).<br>
[✅] Use HTML5 validation attributes (e.g., required, type, minlength, pattern).<br>
[✅] Apply the JavaScript Constraint Validation API to check validity and display custom error messages.<br>
[✅] Dynamically create and display error messages next to input fields.<br>
[✅] Handle the form submit event, prevent default submission, and perform final validation.<br>
[✅] Use localStorage to save and retrieve simple form data (e.g., username).<br>

## Reflection Questions

### Include your answers to the following questions in your submission, within the README.md file:

### How did event.preventDefault() help in handling form submission?

It prevents built in default form submission so I can handle it on my own

### What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML5 validation attributes are built in but don't allow for much flexibility. using both gives the dev more control.

### Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

I added an eventListener to the username input with a function that saves the string to localStorage so the browser remembers it when it refreshes. The limitation of localStorage is that its not secure and shouldn't be used for sensitive data.

### Describe a challenge you faced in implementing the real-time validation and how you solved it.

The problems I faced were mainly from mismatched id attributes from my HTML form, but once I updated those the real time validation conditionals where it checked the validity of each input worked perfectly

### How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

I used setCustomValidity with my own error message instead of the default error message that doesn't tell the user much information.
