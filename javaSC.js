let Cards = []
let sum = 0
let hasBjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("hd3")
let sumEL = document.getElementById("hd5")
let cardEL = document.querySelector("#hd4")
let fCard
let sCard
function getRandom(){
    let random = Math.floor(Math.random()*13) + 1
    if (random === 1){
        random = 11
        return random
    }
    else if(random > 10){
        random = 10
        return random
    }
    else{
        return random
    }
}
function startGame(){
    isAlive = true
    fCard = getRandom()
    sCard = getRandom()
    flag = 1
    sum = fCard + sCard
    Cards.push(fCard, sCard)
    renderGame()
}
function renderGame(){
    if(sum<=20){
        message = "Do you want to draw a new card?"
    } else if(sum === 21){
        message = "You've got Balackjack!"
        hasBjack = true
    }else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    cardEL.textContent = "Perivious Cards: " + Cards
    sumEL.textContent = "Sum: " + sum
}

function newCard(){
    if(isAlive === true){
        message = "Drawing A new Card!"
        messageEl.textContent = message
        let card = getRandom()
        Cards.push(card)
        sum += card
        renderGame()
    }
    else{
        cardEL.textContent = "Perivious Cards: "
    }
}