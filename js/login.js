document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredUsername = loginForm.querySelector('input[placeholder="Username"]').value;
    const enteredPassword = loginForm.querySelector('input[placeholder="Password"]').value;

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (storedUser && enteredUsername === storedUser.username && enteredPassword === storedUser.password) {
      alert("Login successful! Redirecting to Home...");
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
});
