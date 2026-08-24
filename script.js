const body = document.body;
const loginBox = document.querySelector(".login-box");
const h1 = document.querySelector(".login-box h1");
const inputs = document.querySelectorAll(".login-box input");
const loginButton = document.getElementById("login-button");

function switchTheme() {
    body.classList.toggle("dark-mode");
    loginBox.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
    inputs.forEach(input => {
        input.classList.toggle("dark-mode");
    });
    loginButton.classList.toggle("dark-mode");

}

