
// const user = document.querySelector('.user')
const userCard = document.querySelector('.user')
const dealer = document.querySelector('.dealer')
const pickCard = document.getElementById('pick')

let card

// TODO: Ask user if they want a card
pickCard.addEventListener('click', (event) => {
    console.log(generateCard());
})

function generateCard() {
    card = Math.floor(Math.random() * 52 + 1) +1

    console.log(card);
}
