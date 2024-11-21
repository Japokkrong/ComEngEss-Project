function speak() {
    const textInput = document.getElementById("text-input").value;
    if (!textInput) {
      alert("Please enter some text to speak!");
      return;
    }
    let textOutput = "";
    
    const speech = new SpeechSynthesisUtterance(textInput);
    speech.lang = "en-US"; // Set the language (change to match your preference)
    speech.pitch = 1; // Adjust pitch (0 to 2, default is 1)
    speech.rate = 1; // Adjust rate of speech (0.1 to 10, default is 1)
    speech.volume = 1; // Set volume (0 to 1, default is 1)
    speechSynthesis.speak(speech);
  }
  