// Form validation logic
function validateForm(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get the username and password values
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Check if the form fields are blank
  if (username === "" || password === "") {
    // Call the speak function to notify the user
    speak("Please fill out all fields before proceeding.");
    return false; // Stop further processing
  }

  // Redirect to input.html if fields are filled
  window.location.href = 'input.html';
  return true;
}

// Register button redirect function
function registerRedirect() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === "" || password === "") {
    speak("Please fill out all fields before proceeding.");
    return false;
  }

  window.location.href = 'input.html';
}

// Function to handle speech synthesis
function speak(message) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  } else {
    console.error("Speech Synthesis is not supported in this browser.");
  }
}