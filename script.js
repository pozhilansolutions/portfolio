document.addEventListener("DOMContentLoaded", function () {
  // Array of texts to type
  const texts = [" Freelancer", "Web Developer", "Web Designer"];
  let textIndex = 0; // To track which text we are typing
  let i = 0; // Index for each text

  const typingElement = document.querySelector(".typing-text");

  function type() {
      // If we're not at the end of the current text
      if (i < texts[textIndex].length) {
          typingElement.textContent += texts[textIndex].charAt(i);
          i++;
          setTimeout(type, 100); // Typing speed (100ms)
      } else {
          // After typing the text, wait 3 seconds before starting next
          setTimeout(function () {
              // Reset for next text
              textIndex = (textIndex + 1) % texts.length; // Loop back to the first text after the last one
              i = 0;
              typingElement.textContent = ''; // Clear the text
              type(); // Start typing the next text
          }, 3000); // 3-second delay before starting the next text
      }
  }

  type(); // Start the typing effect
});

