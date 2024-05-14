
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 5;

while (attempts > 0) {
    
    const guess = parseInt(prompt("Guess the number (between 1 and 100):"));

    
    if (guess === secretNumber) {
        alert("Congratulations! You've guessed the number!");
        break;
    } else if (guess < secretNumber) {
        alert("The number is low.");
    } else {
        alert("The number is high.");
    }

    
    attempts--;
}


if (attempts === 0) {
    alert(`Game over! The correct number was ${secretNumber}.`);
}
