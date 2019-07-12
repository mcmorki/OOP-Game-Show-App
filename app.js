// /**************************
// Treehouse FSJS Techdegree
// Project 4 - OOP Game App
// app.js Comments
// ***************************/

const game = new Game();

$("#btn__reset").on("click", () => {
    game.startGame();
});

$("#qwerty").on("click", game.handleInteraction);

