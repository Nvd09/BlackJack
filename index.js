let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let nameEl = document.getElementById("name-el")

let player={
    name:"Sean",
    chips: 145
}


function randomCard(){
    let randomNumber = Math.floor(Math.random()*13) +1 
    if(randomNumber>10){
        randomNumber = 10;
    }
    else if(randomNumber===1){
        randomNumber = 11
    }
    else{
        return randomNumber
    }
    return randomNumber
}

function startGame() {
    for(let i=0; i<cards.length; i++){
        cards.pop()
    }

    let firstCard = randomCard()
    let secondCard = randomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    isAlive = true
    nameEl.textContent = player.name + ": $" + player.chips
    
        renderGame()
    
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack! \n Start a new game"
        hasBlackJack = true
    } else {
        message = "You're out of the game! \n Start a new game"
        isAlive = false
    }

    messageEl.textContent = message
}


function newCard() {
    if(!hasBlackJack && isAlive){
        let card = randomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
    
}