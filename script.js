var x = document.getElementById("login-form");
var y = document.getElementById("register-form");
var z = document.getElementById("btn");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}

function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Logika untuk memeriksa login (dummy)
  if (email === "user@example.com" && password === "password") {
    alert("Login successful");
  } else {
    alert("Invalid credentials");
  }
}

function registerUser(event) {
  event.preventDefault();
  const username = document.getElementById("register-username").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  // Logika untuk mendaftarkan user (dummy)
  alert("Registration successful for " + username);
}
