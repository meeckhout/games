let deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]

//Press start to begin game and get random card
document.getElementById('start').addEventListener('click', event => {
    const randomIndex = Math.floor(Math.random() * deck.length)
    document.getElementById('player-hand').innerHTML = deck[randomIndex]
    document.getElementById('dealer-hand').innerHTML = deck[randomIndex]
})

//Press 'hit' button and get new card
const handValue = () => {
    
}

// const getHandValue = (hand) => {
//     let sum = 0
//     for (let i = 0; i <hand.length; i++){
//         sum = sum + hand[i]
//     }
//     return sum
// }