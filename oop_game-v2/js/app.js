
let game = new Game();
// resetDisplay(): this function hides the start screen overlay.
function resetDisplay() {
    $('#overlay').hide();
    $('#phrase li').remove();
    $('.key').prop("className", "key").css("background", "#D2D2D2");
    $('.tries').show();
}

$('#btn__reset').click(function () {
    resetDisplay();
    game.startGame();
    game.handleInteraction();
});
