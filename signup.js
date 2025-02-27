// Theme Toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Form Submission
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get form data
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Validate password match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Create user object
    let user = {
        username: username,
        password: password,
    };

    // Save user data to localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // Alert user about successful signup
    alert("Your account has been created. Please Login to your account.");

    // Redirect to login page
    window.location.href = "./login.html";

    // Clear the form
    form.reset();
    // Theme Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;

    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Save the current theme to localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark-mode");
        } else {
            localStorage.removeItem("theme");
        }
    });
});
});