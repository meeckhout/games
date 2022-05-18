let number = document.getElementById('guess');
const button = document.querySelector('button');

button.addEventListener('click', event => {
    const secretNumber = Math.floor(Math.random() * 17) + 1;
    let userGuess= number.value;
    if (userGuess != secretNumber) {
        alert(`Bummer... You guessed ${userGuess} and the secret number was ${secretNumber}.`);
    } else {
        alert(`Awesome! Your number ${userGuess} was correct. You can be named many things, hungry not being one of them.`);
    }
});