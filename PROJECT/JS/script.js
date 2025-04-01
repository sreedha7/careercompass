
const signupLink = document.getElementById('signup-link');
const signupForm = document.getElementById('signup-form');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

const loginLink = document.getElementById('login-link');
const loginForm = document.getElementById('login-form');
const loginCloseBtn = document.getElementById('login-close-btn');
const switchToSignup = document.getElementById('switch-to-signup');

// Show Signup Form
function showSignupForm() {
    signupForm.style.display = 'block'; // Show the signup form
    loginForm.style.display = 'none'; // Hide the login form
    overlay.style.display = 'block'; // Show the overlay
}

// Hide Signup Form
function hideSignupForm() {
    signupForm.style.display = 'none'; // Hide the signup form
    overlay.style.display = 'none'; // Hide the overlay
}

// Show Login Form
function showLoginForm() {
    signupForm.style.display = 'none'; // Hide the signup form
    loginForm.style.display = 'block'; // Show the login form
    overlay.style.display = 'block'; // Show the overlay
}

// Hide Login Form
function hideLoginForm() {
    loginForm.style.display = 'none'; // Hide the login form
    overlay.style.display = 'none'; // Hide the overlay
}

// Switch to Signup Form from Login Page
function switchToSignupForm() {
    loginForm.style.display = 'none'; // Hide the login form
    signupForm.style.display = 'block'; // Show the signup form
}

// Event Listeners
signupLink.addEventListener('click', showSignupForm); // Open Signup Form
closeBtn.addEventListener('click', hideSignupForm); // Close Signup Form
overlay.addEventListener('click', hideSignupForm); // Close Signup Form by clicking overlay

loginLink.addEventListener('click', showLoginForm); // Open Login Form
loginCloseBtn.addEventListener('click', hideLoginForm); // Close Login Form
overlay.addEventListener('click', hideLoginForm); // Close Login Form by clicking overlay

switchToSignup.addEventListener('click', switchToSignupForm); // Switch back to Signup Form


setTimeout(showSignupForm, 2000);

