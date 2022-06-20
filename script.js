const cards = document.querySelectorAll('.memory-card');

let flippedCard = false;
let firstCard, secondCard;


function flipCards() {
    this.classList.add('flip');

    if (!flippedCard) {
        // first click on the cards
        flippedCard = true;
        firstCard = this;

        return;
    } 
    // second click
    flippedCard = false;
    secondCard = this;

    checkMatch();
}

function checkMatch() {
     // do the cards match?
     let match = firstCard.dataset.framework === secondCard.dataset.framework;

    // ternary operator notation
     match ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCards);
    secondCard.removeEventListener('click', flipCards);
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        }, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCards));