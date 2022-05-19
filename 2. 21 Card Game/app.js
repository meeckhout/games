// const user = document.querySelector('.user')
const userCard = document.querySelector('.user')
const dealer = document.querySelector('.dealer')
const pickCard = document.querySelector('.pick')
const numCardsPulled = 0

let card

// TODO: Ask user if they want a card
pickCard.addEventListener('click', (event) => {
    console.log(generateCard());
})

function generateCard() {
    card = Math.floor(Math.random() * 52 + 1) +1

    console.log(card);
}

function dealerHand(x, y) {
    cardDealer = Math.floor(Math.random()*(21 - 17 + 1)+17);
    return cardDealer;
}