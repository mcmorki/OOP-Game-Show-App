// /**************************
// Treehouse FSJS Techdegree
// Project 4 - OOP Game App
// app.js Comments
// ***************************/





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
const game = new Game();

$("#btn__reset").on("click", () => {
    game.startGame();
});
//  PASSED                Tested Code S T E P   9           **see Game.js for Step 9**


$("#qwerty").on("click", game.handleInteraction);

 // Listening for "start game" button to be clicked

// Listening for interactive keyboard to be clicked

// Listening for physical keyboard to be pressed (For Exceeds only)
