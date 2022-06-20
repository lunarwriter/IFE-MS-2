const cards = document.querySelectorAll('.memory-card');

let flippedCard = false;
let firstCard, secondCard;


function flipCards() {
    this.classList.add('flip');

    if (!flippedCard) {
        // first click on the cards
        flippedCard = true;
        firstCard = this;
    } else {
        // second click
        flippedCard = false;
        secondCard = this;

        // do the cards match?
        console.log(firstCard.dataset.framework);
        console.log(secondCard.dataset.framework);
    }
}

cards.forEach(card => card.addEventListener('click', flipCards));