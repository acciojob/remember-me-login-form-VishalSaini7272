//your JS code here. If required.
// Select DOM elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Check if credentials exist in localStorage
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

// Show "Login as existing user" button if credentials exist
if (savedUsername && savedPassword) {
  existingBtn.style.display = "block";
}

// Handle form submission
document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert("Please enter username and password.");
    return;
  }

  alert(`Logged in as ${username}`);

  if (rememberCheckbox.checked) {
    // Save credentials in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove credentials if checkbox not checked
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Update existing user button visibility
  if (localStorage.getItem("username")) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }

  // Optionally clear inputs
  usernameInput.value = "";
  passwordInput.value = "";
  rememberCheckbox.checked = false;
});

// Handle "Login as existing user" click
existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});
