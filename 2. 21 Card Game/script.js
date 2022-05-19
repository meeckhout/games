const user = document.querySelector('.user')
const userCard = document.getElementById('user-left')
const dealer = document.querySelector('.dealer')
const pickCard = document.querySelector('.pick')

// TODO: Ask user if they want a card
pickCard.addEventListener('click', (event) => {
    console.log(generateCard());
})

function generateCard() {
    const randomNumber = Math.floor(Math.random() * 56) +1

    if (randomNumber <= 1) {
        userCard = 'rock'
    }
}