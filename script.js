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
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            // matching!
            firstCard.removeEventListener('click', flipCards);
            secondCard.removeEventListener('click', flipCards);
        } else {
            // not a match
            setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            }, 1500);
        }
    }
}

cards.forEach(card => card.addEventListener('click', flipCards));