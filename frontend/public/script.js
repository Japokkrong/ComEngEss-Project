const yellow = new Set([
  "banana", "pineapple", "lemon", "apple", "golden kiwi",
  "mango", "pear", "starfruit", "cherry", "papaya",
  "mirabelle plum", "loquat", "watermelon", "fig",
  "plum", "passionfruit", "raspberry", "guava",
  "peach", "nectarine", "apricot", "golden melon",
  "cantaloupe", "cherry tomato", "lime", "persimmon",
  "currant", "golden orange", "pomelo", "tangelo",
  "lemon cucumber", "dragonfruit", "golden raisin",
  "jackfruit", "grapefruit", "gourd", "mulberry",
  "melon", "olive", "sapote", "gooseberry", "orange",
  "barberry", "tomato", "kumquat", "breadfruit",
  "cherry plum", "quince", "medlar", "plantain",
  "golden zucchini", "plumcot", "aprium", "feijoa",
  "grape", "longan", "tangerine", "sapodilla", "santol",
  "star apple", "nance", "calamondin"
]);

const green = new Set([
  "apple", "kiwi", "grape", "pear", "lime", 
  "avocado", "guava", "plum", "fig", "banana",
  "melon", "watermelon", "cucumber", "honeydew",
  "papaya", "starfruit", "tomato", "dragonfruit", 
  "persimmon", "mango", "currant", "olive", 
  "passionfruit", "jackfruit", "plumcot", "nectarine",
  "apricot", "zucchini", "gooseberry", "pepino", 
  "cherry", "gourd", "plantain", "sapote", "feijoa",
  "tangerine", "longan", "mulberry", "berry", 
  "star apple", "nance", "quince", "medlar", 
  "coconut", "grapefruit", "pomelo", "tangelo", 
  "raisin", "lemon", "cantaloupe", "breadfruit", 
  "papaya", "lychee", "santol", "barberry", "loquat",
  "salak", "ackee", "kumquat", "limequat", 
  "lemon cucumber", "arbutus", "calamondin", 
  "roselle", "bilberry", "elderberry", "viburnum",
  "mangosteen", "kiwano", "cherimoya", "amla",
  "kokum", "mamoncillo", "sapodilla", "golden berry",
  "bergamot", "cloudberry", "medlar", "ackee",
  "tamarillo", "pitaya", "cucumber", "zucchini",
  "pear guava", "banana", "jackfruit", "prune",
  "plantain", "cactus pear", "grape", "kiwi",
  "nectarine", "lime", "orange", "mango", 
  "fig", "berry"
]);

const red = new Set([
  "apple", "cherry", "strawberry", "raspberry", "grape", 
  "watermelon", "plum", "currant", "pomegranate", "tomato",
  "dragonfruit", "pear", "peach", "nectarine", "grapefruit", 
  "blood orange", "papaya", "cranberry", "lychee", "fig", 
  "mulberry", "guava", "blackberry", "loganberry", "persimmon", 
  "starfruit", "rosehip", "barberry", "hawthorn berry", 
  "acerola", "goji berry", "boysenberry", "chokecherry", 
  "quince", "tamarillo", "lingonberry", "arbutus", "salak", 
  "cloudberry", "ackee", "surinam cherry", "rowan berry", 
  "wild strawberry", "serviceberry", "prickly pear", "elderberry", 
  "cranberry hibiscus", "cactus pear", "plumcot", "santol",
  "japanese plum", "passionfruit", "pomelo", "tangelo", 
  "rose apple", "coconut husk", "medlar", "black currant", 
  "cape gooseberry", "papaya", "golden raspberry", "tangerine", 
  "longan", "huckleberry", "camu camu", "dragonfruit", 
  "kiwifruit", "orange", "rhubarb", "blood peach", "damson",
  "bayberry", "black raspberry", "sloe", "chempedak",
  "rambutan", "safou", "marionberry", "golden fig",
  "custard apple", "cucumber apple", "sugar apple", "granadilla",
  "grape", "passion fruit", "barberry", "lychee",
  "pomegranate seeds", "clementine", "nectarine", "rata apple",
  "kiwi", "coconut", "olive", "amla"
]);

const purple = new Set([
  "grape", "plum", "fig", "blackberry", "elderberry",
  "blueberry", "damson", "blackcurrant", "raisin", "prune",
  "mulberry", "acai berry", "jabuticaba", "passionfruit",
  "chokeberry", "serviceberry", "sloe", "loganberry", 
  "aronia berry", "huckleberry", "marionberry", 
  "concord grape", "gooseberry", "muscadine", 
  "sand cherry", "wild cherry", "saskatoon berry", 
  "desert raisin", "maqui berry", "java plum", 
  "purple mangosteen"
]);

const orange = new Set([
  "orange", "mandarin", "tangerine", "clementine", "persimmon",
  "apricot", "peach", "nectarine", "papaya", "mango",
  "golden kiwi", "kumquat", "blood orange", "cantaloupe",
  "honeydew melon", "loquat", "seabuckthorn", "cloudberry",
  "cape gooseberry", "yubari melon", "amber apple",
  "bitter orange", "golden berries", "casaba melon",
  "red papaya", "sweet orange", "asian pear",
  "tangelo", "satsuma", "valencia orange",
  "cara cara orange", "peach bellini", "sunset melon",
  "orange cherry", "golden raspberry", "dragon fruit",
  "golden fig", "sunshine melon", "lemon plum",
  "gold plum", "winter melon", "tahitian pummelo",
  "maradol papaya", "pineapple mango", "alphonso mango",
  "autumn gold plum", "prickly pear", "gold tamarillo",
  "pepino melon", "amber melon", "aurora orange",
  "sunburst melon", "gold apple", "pineapple pear",
  "jewel cherry", "zestar peach", "golden guava",
  "sweet melon", "blazing mango", "burnt persimmon",
  "harvest apricot", "amber clementine", "cedar mango",
  "bright nectarine", "fire peach", "blazing gold plum",
  "sundown melon", "orchard tangerine", "solar persimmon",
  "solar orange", "golden papaya", "citrus nectarine",
  "golden tangelo", "tropical cantaloupe", "hazy apricot",
  "mystic peach", "sunlit mango", "coral nectarine",
  "aurora apricot", "glowing plum", "autumn clementine",
  "twilight melon", "amber pear", "pumpkin", "orange bell pepper",
  "habanero pepper"
]);
function speak() {
    const textInput = document.getElementById("text-input").value.toLowerCase();
    let textOutput = "";
    let already_found = false;
    // check if red color
    if (red.has(textInput)) {
      if (already_found) {
          textOutput += ", some are red";
      } else {
          textOutput += "The " + textInput + " is red";
          already_found = true;
      }
  }
    // check if yellow color
    if (yellow.has(textInput)) {
        if (already_found) {
            textOutput += ", some are yellow";
        } else {
            textOutput += "The " + textInput + " is yellow";
            already_found = true;
        }
    }
    // check if green color
    if (green.has(textInput)) {
        if (already_found) {
            textOutput += ", some are green";
        } else {
            textOutput += "The " + textInput + " is green";
            already_found = true;
        }
    }
    // check if orange color
    if (orange.has(textInput)) {
        if (already_found) {
            textOutput += ", some are orange";
        } else {
            textOutput += "The " + textInput + " is orange";
            already_found = true;
        }
    }
    // check if purple color
    if (purple.has(textInput)) {
        if (already_found) {
            textOutput += ", some are purple";
        } else {
            textOutput += "The " + textInput + " is purple";
            already_found = true;
        }
    }
    
    // correct grammar if more than one color is found
    if (already_found) {
        textOutput = textOutput.replace("is", "are");
    }

    // if the fruit isn't found, output a message
    if (textOutput === "") {
        textOutput = "We don't know this kind of fruit yet.";
    }

    console.log("Input:", textInput);
    // Create the speech synthesis
    const speech = new SpeechSynthesisUtterance(textOutput);
    speech.lang = "en-US"; // Set the language
    speech.pitch = 1; // Adjust pitch (0 to 2, default is 1)
    speech.rate = 0.9; // Adjust rate of speech (0.1 to 10, default is 1)
    speech.volume = 1; // Set volume (0 to 1, default is 1)
    speechSynthesis.speak(speech);
}
//make the textbox focus when the page load
window.onload = function() {
  document.getElementById('text-input').focus();
};
// Listen for the "Enter" key press to trigger the speech
document.getElementById("text-input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {  // Check if the pressed key is Enter
      event.preventDefault();  // Prevent form submission or other default behavior
      speak();  // Call the speak function
  }
});