/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

const input = document.getElementsByTagName
('input')[0];

console.log(input)

const submitButton = document.getElementById
('submit-button');

const listItems = document.getElementsByTagName
('li');

let listItemIdx = 0;

let winningNumber = Math.floor((Math.random() * 100) + 1)

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
        console.log('you win!')
    }
});


