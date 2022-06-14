const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
                2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
                2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
                2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]

let playerHand
let dealerHand

const drawRandomCard = (deck) => {
    const randomIndex = Math.floor(Math.random() * deck.length)
    return deck[randomIndex]
}
// console.log(drawRandomCard(deck))

const startGame = () => {
    playerHand = [drawRandomCard(deck), drawRandomCard(deck)]
    dealerHand = [drawRandomCard(deck), drawRandomCard(deck)]
}

const getHandValue = (hand) => {
    let sum = 0
    for (let i = 0; i <hand.length; i++){
        sum = sum + hand[i]
    }
    return sum
}

const hit = () => {
    playerHand.push(drawRandomCard(deck))
    console.log("hit!")
    console.log('new player hand: ' + playerHand)
}

startGame()
console.log('player hand ' + playerHand)
console.log('player hand value ' + getHandValue(playerHand))
console.log('dealer hand ' + dealerHand)
console.log('dealer hand value ' + getHandValue(dealerHand))
