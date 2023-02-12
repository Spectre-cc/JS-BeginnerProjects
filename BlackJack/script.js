let header = document.getElementById("header")
let cards = document.getElementById("cards")
let sumTXT = document.getElementById("sumTXT")
let sum = 0
let startBTN = document.getElementById("startBTN")
let randomCard = 0
let alive = false
let cardSession=[]

function getCard(){
    randomCard = Math.floor(Math.random()*13)+1
    if(randomCard>10){
        return 10
    }else if(randomCard===1){
        return 11
    }else{
        return randomCard
    }
}

function startGame(){
    alive = true
    cardSession.push(getCard())
    cardSession.push(getCard())
    renderGame();
}

function renderGame(){
    sum = 0
    cards.textContent = "Cards: "
    for (let index = 0; index < cardSession.length; index++) {
        sum += cardSession[index]
        cards.textContent += " " + cardSession[index]
        sumTXT.textContent = "Sum: " + sum
    }

    if(sum == 21){
        header.textContent = "You Win!!"
        startBTN.textContent = "Try Again!"
        document.getElementById('startBTN').style.display = 'inline-block';
        document.getElementById('newCardBTN').style.display = 'none';
    }else if(sum > 21){
        header.textContent = "You Lose!!"
        alive = false
        sum = 0
        cardSession = []
        startBTN.textContent = "Try Again!"
        document.getElementById('startBTN').style.display = 'inline-block';
        document.getElementById('newCardBTN').style.display = 'none';
    }else{
        header.textContent = "BlackJack"
        document.getElementById('newCardBTN').style.display = 'inline-block';
        document.getElementById('startBTN').style.display = 'none';
    }
}

function newCard(){
    cardSession.push(getCard())
    renderGame()
}

function quit(){
    alive = false
    sum = 0
    cardSession = []
    cards.innerText = ""
    sumTXT.innerText = ""
    header.textContent = "BlackJack"
    startBTN.innerHTML = '<i class="bi bi-play-fill"></i> Start Game'
    document.getElementById('startBTN').style.display = 'inline-block';
    document.getElementById('newCardBTN').style.display = 'none';
}