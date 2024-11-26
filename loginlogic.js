// Form validation logic
function validateForm(event) {
    // Prevent form submission if any validation is required
    event.preventDefault();
  
    // Get the username and password fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check if username and password are provided
    if (username === "" || password === "") {
      alert("Please fill out this field.");
      return false; // Do not proceed if validation fails
    }
  
    // Redirect to input.html if fields are not blank
    window.location.href = 'input.html';  // This navigates to input.html
    return true; // Allow form submission to continue
  }
  
  // Register button redirect function
  function registerRedirect() {
    // Reuse the validateForm logic for the register button
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check if username and password are provided
    if (username === "" || password === "") {
      alert("Please fill out this field.");
      return false; // Prevent navigation if fields are empty
    }
  
    // Redirect to input.html if both fields are filled (simulating registration)
    window.location.href = 'input.html';  // This navigates to input.html
  }
  