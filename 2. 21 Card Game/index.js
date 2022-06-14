let deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
let randomIndex

//Press start to begin game and get random card
const randomCard = () => {
    randomIndex = Math.floor(Math.random() * deck.length)
    document.getElementById('player-hand').innerHTML = randomIndex
}

document.getElementById('start').addEventListener('click', randomCard)

//Press 'hit' button and get new card


//Press button to refresh page/play again
document.getElementById('refresh').addEventListener('click', event => {
        window.location.reload()
    }
)