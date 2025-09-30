// UI elements select
const form = document.querySelector("#registrationForm");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const email = document.querySelector("#email");

const usernameError = document.querySelector("#usernameError");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordError = document.querySelector("#confirmPasswordError");
const emailError = document.querySelector("#emailError");

// Load username from localStorage
window.addEventListener("DOMContentLoaded", () => {
    const savedUserName = localStorage.getItem("username");
    if (savedUserName) username.value = savedUserName;
});

// Validation functions
function validateUsername() {
    if (username.validity.valueMissing) {
        usernameError.textContent = "Username is required.";
        return false;
    } else {
        usernameError.textContent = "";
        return true;
    }
}

function validateEmail() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Email is required.";
        return false;
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Please enter a valid email address";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validatePassword() {
    const value = password.value;
    if (password.validity.valueMissing) {
        passwordError.textContent = "Password is required.";
        return false;
    } else if (value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        return false;
    } else if (!/[A-Z]/.test(value)) {
        passwordError.textContent = "Password must include an uppercase letter.";
        return false;
    } else if (!/[a-z]/.test(value)) {
        passwordError.textContent = "Password must include a lowercase letter.";
        return false;
    } else if (!/[0-9]/.test(value)) {
        passwordError.textContent = "Password must include a number.";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

function validateConfirmPassword() {
    if (confirmPassword.validity.valueMissing) {
        confirmPasswordError.textContent = "Please confirm your password.";
        return false;
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    } else {
        confirmPasswordError.textContent = "";
        return true;
    }
}

// Real-time validation
username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", () => {
    validatePassword();
});
confirmPassword.addEventListener("input", validateConfirmPassword);

// Handle form submit
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        localStorage.setItem("username", username.value);
        alert("Form submitted successfully!");
        form.reset();
    } else {
        if (!isUsernameValid) username.focus();
        else if (!isEmailValid) email.focus();
        else if (!isPasswordValid) password.focus();
        else confirmPassword.focus();
    }
});