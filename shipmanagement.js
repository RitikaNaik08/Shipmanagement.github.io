document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // You can add your authentication logic here.
        // For simplicity, let's assume the login is successful if the username and password are both "admin".
        if (username === "Ritika" && password === "riti123") {
            // Redirect to the main page or perform other actions.
            alert("Login successful!");
        } else {
            alert("Login failed. Please check your username and password.");
        }
    });
});
