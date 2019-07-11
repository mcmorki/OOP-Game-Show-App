let currentGame;
let currentPhrase;
let phrases = [
    "Doris Longwing",
    "Blue Morpho",
    "Mitchell\'s Satyr",
    "Banded Peacock",
    "Ceylon Rose",
    "Island Marble",
    "Luzon Giant Swallowtail",
    "glasswinged butterfly",
    "Jamaican Giant Swallowtail"]

let game = new Game(0, phrases);
// resetDisplay(): this function hides the start screen overlay.
function resetDisplay() {
    $('#overlay').hide();
    $('#phrase li').remove();
    $('.key').prop("className", "key").css("background", "#D2D2D2");
    $('.tries').show();
}
// Add an event listener to the "Start Game" button which calls the resetDisplay() function, creates a new Game object, and starts the game.
$('#btn__reset').click(function () {
    resetDisplay();
    gamePhrase = game.startGame();
});
// markButton(): this function is called when a player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
// Add event listeners to each of the keyboard buttons, so that clicking a button calls the markButton() function.
function markButton() {
    $(this).attr('disabled', 'disabled');
    game.handleInteraction();
}
markButton();
