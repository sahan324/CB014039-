document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("Username").value;
  var password = document.getElementById("Password").value;
  // Hardcoded admin credentials
  if (username === "admin" && password === "admin123*") {
    // Authentication successful
    window.location.href = "index.html"; // Redirect to index.html
  } else {
    // Authentication failed
    document.getElementById("error").innerHTML = "Invalid username or password";
  }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("Username").value;
  var password = document.getElementById("Password").value;
  // Hardcoded admin credentials
  if (username === "user" && password === "user123*") {
    // Authentication successful
    window.location.href = "index.html"; // Redirect to index.html
  } else {
    // Authentication failed
    document.getElementById("error").innerHTML = "Invalid username or password";
  }
});

