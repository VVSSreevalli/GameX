document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector("form");

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = registerForm.querySelector('input[placeholder="Username"]').value;
    const email = registerForm.querySelector('input[placeholder="Email"]').value;
    const password = registerForm.querySelector('input[placeholder="Password"]').value;

    const user = { username, email, password };

    // Save to localStorage
    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Registered successfully! Redirecting to login...");
    window.location.href = "login.html";
  });
});
