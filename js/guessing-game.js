const input = document.getElementsByTagName
('input')[0];

console.log(input)

const submitButton = document.getElementById
('submit-button');

const playAgainButton = document.getElementById
('play-again');

const hintButton = document.getElementById
('hint-button');

const listItems = document.getElementsByTagName
('li');

const guessHint = document.getElementById
('guess-hint');

const winningNumberDisplay = document.getElementById
('winning-number-display');

let listItemIdx = 0;

let winningNumber = Math.floor((Math.random() * 100) + 1);

submitButton.addEventListener('click', function
(event) {

    event.preventDefault();
    
    listItems[listItemIdx].innerText = input.value;
    
    listItemIdx++;
    
    const guess = parseInt(input.value)
  
    if(winningNumber === guess){
        guessHint.innerText = 'You win!'
    }

    if(listItemIdx === 5 && guess !== winningNumber){
        guessHint.innerHTML = 'GAME OVER. PLAY AGAIN';
        winningNumberDisplay.innerHTML = "The number was " + winningNumber
    }
    
    if(Math.abs(winningNumber - guess) > 10 && guess > winningNumber && guess != winningNumber && listItemIdx !== 5){
        guessHint.innerText = "You're chilly. Guess lower"
    }
    
    if(Math.abs(winningNumber - guess) > 10 && guess < winningNumber && guess != winningNumber && listItemIdx !== 5){
        guessHint.innerText = "You're chilly. Guess higher"
    }
    if(Math.abs(winningNumber - guess) >= 30 && guess > winningNumber && guess != winningNumber && listItemIdx !== 5){
        guessHint.innerText = "You're ice cold!"
    }

    if(Math.abs(winningNumber - guess) >= 30 && guess < winningNumber && guess != winningNumber && listItemIdx !== 5){
        guessHint.innerText = "You're ice cold! Guess higher"
    }

    if(Math.abs(winningNumber - guess) <= 10 && guess > winningNumber && guess != winningNumber && listItemIdx !== 5){
        guessHint.innerText = "You're warm. Guess lower"
    }

    if(Math.abs(winningNumber - guess) <= 10 && guess < winningNumber && guess != winningNumber && listItemIdx !== 5){
        guessHint.innerText = "You're warm. Guess higher"
    }

    if(Math.abs(winningNumber - guess) <= 5 && guess > winningNumber && guess != winningNumber && listItemIdx !== 5){
        guessHint.innerText = "You're scorching! Guess lower"
    }

    if(Math.abs(winningNumber - guess) <= 5 && guess < winningNumber && guess != winningNumber && listItemIdx !== 5){
        guessHint.innerText = "You're scorching! Guess higher"
    }

    if(input.value.length === 0){
        alert("Enter a number");
        listItemIdx--;
    }

    if(typeOfinput.value === 0){
        alert("Enter a number");
        listItemIdx--;
    }
});

playAgainButton.addEventListener('click', function
(event) {
    location.reload();
});

hintButton.addEventListener('click', function
(event) {
    guessHint.innerText = 'The number is between 1 and 100. Good luck ;)'
});












