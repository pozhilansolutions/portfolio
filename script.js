// Typing Effect
const texts = ["a Web Developer.", "a Designer.", "a Freelancer."];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pause before repeating
    } else {
        setTimeout(type, 150); // Typing speed
    }
}

window.onload = type;


document.querySelectorAll('.filters button').forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      document.querySelectorAll('.portfolio-item').forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  

  