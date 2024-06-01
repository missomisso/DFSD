const textArea = document.querySelector(".text"); // Select the textarea element
const wordsDisplay = document.querySelector(".words"); // Select the element for word count display
const charactersDisplay = document.querySelector(".characters"); // Select the element for character count display

textArea.addEventListener("input", () => { // Add event listener to textarea
  const userInput = textArea.value; // Get the user's input value

  // Calculate word count (assuming basic word separation by spaces)
  const wordCount = userInput.trim().split(/\s+/).length; // Split by whitespace after trimming

  // Calculate character count (excluding whitespaces)
  const characterCount = userInput.length - userInput.replace(/\S/g, "").length; 

  // Update the word and character count displays
  wordsDisplay.textContent = wordCount;
  charactersDisplay.textContent = characterCount;
});
