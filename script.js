const cards = document.querySelectorAll('.memory-card');

let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchCounter=0;
let timerCtrl = null; // store the return value of setInterval


function flipCards() {
if (lockBoard) return;
if (this === firstCard) return;

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

     if(match){
        matchCounter+=1;
       disableCards();
         if(matchCounter==(cards.length/2)){
          Swal.fire({
            title: 'Congratulations!',
            text: 'You won the game!',
          });
          clearInterval(timerCtrl); // it will stop the timer
          }
    }  else { 
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCards);
    secondCard.removeEventListener('click', flipCards);

    resertBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resertBoard();
        }, 1500);
}

function resertBoard() {
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffleCards() {
    cards.forEach(card => {
        let randomNum = Math.floor(Math.random() * 12);
        card.style.order = randomNum;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCards));


// Restart button

function restartButton() {
    location.reload();
}
var i = 0;
function timer() {
    i++;
    if(i === 1) {
      time();
    }
}

var numr = 0;
function countClick() {
  numr ++;
  console.log(numr);
}

// Timer

function time() {
 
    // var target = document.getElementsById("back");
    // target.removeAttribute("onclick");
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    timerCtrl = setInterval(setTime, 1000);
    
    function setTime() {
      ++totalSeconds;
      secondsLabel.innerHTML = pad(totalSeconds % 60);
      minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }
    
    function pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }
  }
  
  var counterVal = 0;
  
function incrementClick() {
    updateDisplay(++counterVal);
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}
  
function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}
