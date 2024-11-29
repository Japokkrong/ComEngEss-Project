// Function to handle speech synthesis
export function speak(message) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  } else {
    console.error("Speech Synthesis is not supported in this browser.");
  }
}