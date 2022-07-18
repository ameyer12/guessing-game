const input = document.getElementsByTagName
('input')[0];

console.log(input)

const submitButton = document.getElementById
('submit-button');

const listItems = document.getElementsByTagName
('li');

const guessHint = document.getElementById
('guess-hint');

let listItemIdx = 0;

let winningNumber = 50;

// let winningNumber = Math.floor((Math.random() * 100) + 1);


submitButton.addEventListener('click', function
(event) {
    // event.preventDefault keeps page from refreshing
    event.preventDefault();
    
    // event.target gives access to the target node where the event occurred
    
    // event.value will give us the current value of that element (looking at the input element = input.value)
    listItems[listItemIdx].innerText = input.value;
    
    listItemIdx++;
    
    const guess = parseInt(input.value)
  
    if(winningNumber === guess){
        guessHint.innerText = 'You win!'
    }

    if(listItemIdx === 5 && guess !== winningNumber){
        guessHint.innerHTML = 'GAME OVER'
    }
    
    if(Math.abs(winningNumber - guess) >= 30 && guess > winningNumber && guess != winningNumber && listItemIdx !== 5){
        guessHint.innerText = "You're ice cold!"
    }

    if(Math.abs(winningNumber - guess) >= 30 && guess < winningNumber && guess != winningNumber && listItemIdx !== 5){
        guessHint.innerText = "You're ice cold! Guess higher"
    }

    if(Math.abs(winningNumber - guess) > 10 && guess > winningNumber && guess != winningNumber && listItemIdx !== 5){
        guessHint.innerText = "You're chilly. Guess lower"
    }

    if(Math.abs(winningNumber - guess) > 10 && guess < winningNumber && guess != winningNumber && listItemIdx !== 5){
        guessHint.innerText = "You're chilly. Guess higher"
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



// function generateWinningNumber(){
//     return winningNumber;
// }

// function shuffle(array) {
    //     let currentIndex = array.length,  randomIndex;
  
//     while (currentIndex != 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
      
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
// }

// function newGame(){
//     let currentGuess = 
//     const newGame = {
//       playerGuess: 1,
//       pastGuesses: 1,
//    };
//  return newGame
// }









