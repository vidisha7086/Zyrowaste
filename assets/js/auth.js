// Signup
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(localStorage.getItem(email)) {
    alert("User already exists. Please login.");
  } else {
    localStorage.setItem(email, JSON.stringify({ name, email, password }));
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
  }
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem(email));

  if(user && user.password === password) {
    // Use localStorage for persistent login
    localStorage.setItem("loggedInUser", email);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password.");
  }
});

// Dashboard - Show User
if(window.location.pathname.includes("dashboard.html")) {
  const loggedInUser = localStorage.getItem("loggedInUser"); // changed from sessionStorage
  if(!loggedInUser) {
    window.location.href = "login.html";
  } else {
    const user = JSON.parse(localStorage.getItem(loggedInUser));
    document.getElementById("userWelcome").innerText = `Hello, ${user.name} (${user.email})`;
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedInUser"); // changed from sessionStorage
  window.location.href = "login.html";
}
