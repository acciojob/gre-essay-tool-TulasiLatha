//your code here
// Get references to the text box and the word count display element
const evaluatedText = document.getElementById('evaluatedText');
const wordCount = document.getElementById('wordCount');

// Add an input event listener to the text box
evaluatedText.addEventListener('input', () => {
    // Get the text from the text box
    const text = evaluatedText.value;

    // Split the text into words using whitespace as the delimiter
    const words = text.trim().split(/\s+/);

    // Filter out empty strings from the array
    const nonEmptyWords = words.filter((word) => word !== '');

    // Update the word count display with the count of non-empty words
    wordCount.textContent = nonEmptyWords.length;
});


