let number = document.getElementById('guess');
let span = document.getElementById('output');
let button = document.getElementsByTagName('button');

//TODO: Generate a number between 0 and 17
document.addEventListener('keyup', event => {
    const secretNumber = 8;
    let number = document.getElementById('guess').value;
    if (number != secretNumber) {
        alert('Bummer... You guessed `{$(number)}` and the secret number was `{$(secret-number)}`');
    } else {
        alert('Awesome! Your number (actual number) was correct. You can be named many things, hungry not being one of them.')
    }
});

//TODO: User can enter a guess


//TODO: Number will be compared to the secret number


//TODO: Alert box with "Awesome!" and "Bummer..."