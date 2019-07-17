/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  PASSED               Tested Code S T E P   3
// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

//  PASSED                Tested Code S T E P   4
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });
//  PASSED                Tested Code S T E P   5
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
//  PASSED                Tested Code S T E P   6
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();
//  PASSED                Tested Code S T E P   7
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
//  PASSED                Tested Code S T E P   8
let game;

$('#btn__reset').on('click', () => {
   
    game = new Game();
    game.startGame();
    
});
//  PASSED                Tested Code S T E P   9           **see Game.js for Step 9**

/** PASSED                Tested Code S T E P   10
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
// handleInteraction(button) {
//     console.log(button);
//     };
// function used to reset display and hearts 


// function disableMe(button) {
//     button.disabled = true;
//     game.handleInteraction(button);
// };

let pressedKeys = [];
const startBtn = document.getElementById('btn__reset');
const keyboardBtns = document.getElementById('qwerty');

const disableMe = (event) => {

    game.handleInteraction(event);

};
// when a letter is selected disables the user from selecting it again
$("#qwerty button").click((e) => {
    game.handleInteraction($(e.target));
  });
  
// allows user to uses the keybord as another option
keyboardBtns.addEventListener('click', function(event) {
    // If a button is clicked, call the markButton() function
    if (event.target.tagName === 'BUTTON') {
        event.target.disabled = true;

        // Call the handleInteraction() method of the Game class
        game.handleInteraction(event);

    // If a key is pressed
    } else if (event.type === 'keypress') {

        // Disable the button on the onscreen keyboard
        const keys = Array.from(document.querySelectorAll('.key'));
        keys.forEach(key => {
            if (event.key === key.innerText) {
                key.disabled = true;
            }
        });
    }
});

// When a key is pressed
document.addEventListener('keypress', function(event) {
    // Only accept letters
    const filter = /[a-zA-Z]+/;
    if (filter.test(event.key) && event.key !== 'Enter') {
        event.target.disabled = true;

        // Call the handleInteraction() method of the Game class
        game.handleInteraction(event);

    // If a key is pressed
    } else if (event.type === 'keypress') {

        // Disable the button on the onscreen keyboard
        const keys = Array.from(document.querySelectorAll('.key'));
        keys.forEach(key => {
            if (event.key === key.innerText) {
                key.disabled = true;
            }
        });
    }
}); 


        // Disable the button on the onscreen keyboard
       
