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

// when a letter is selected disables the user from selecting it again
$("#qwerty .key").click((e) => {
    game.handleInteraction((e));
});

// allows user to use the keybord as another option 
document.addEventListener('keyup', function (e) {
    const keyCodes = 'abcdefghijklmnopqrstuvwxyz';
    if (keyCodes.includes(e.key)) {
        for (let key of $('.key')) {
            if (key.innerText == e.key) {
                key.click();
            }
        }
    }
});