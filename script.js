document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");

  // Check if saved credentials exist
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  // If credentials exist, show "Login as existing user" button
  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
  }

  // Handle form submission
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("Please enter valid details");
      return;
    }

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      // Save credentials
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      // Remove any previously saved credentials
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    // Reload UI state
    if (localStorage.getItem("username")) {
      existingBtn.style.display = "inline-block";
    } else {
      existingBtn.style.display = "none";
    }

    // Clear form fields after submit
    usernameInput.value = "";
    passwordInput.value = "";
    checkbox.checked = false;
  });

  // Handle "Login as existing user"
  existingBtn.addEventListener("click", function () {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      alert(`Logged in as ${storedUsername}`);
    }
  });
});
