/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// CREATING GAME GLASS. (Entire Javascript file is this one class)

// Track the number of missed guesses, initially set to 0
// Store array of phrases
// Initially there is no phrase chosen
//                          S T E P  2 / 3
class Game {
    constructor() {
        this.missed = 0;
        this.activePhrase = null
        this.phrases = [
            new Phrase("Mauve"),
            new Phrase("Scarlett"),
            new Phrase("Cerulean"),
            new Phrase("Jade"),
            new Phrase("Clementine"),
            new Phrase("Mazarin"),
            new Phrase("Xanthe"),
            new Phrase("Melanie"),
            new Phrase("Fuchsia"),
            new Phrase("Viridian"),
            new Phrase("Aurelia"),
            new Phrase("Alba")]
    }
    /**                 S T E P  5
    * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    /**                 S T E P  7
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.resetGame();
    }
    /**                   S T E P   9
       * Checks for winning move
       * @return {boolean} True if game has been won, false if game wasn't
       won
       */
    checkForWin() {
        if ($('#phrase .show').length === $('#phrase .letter').length) {
            this.gameOver();
        }
    }
    /**
    * Increases the value of the missed property
    *  Removes a life from the scoreboard
         * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        $("img")[this.missed].src = "images/lostHeart.png";
        this.missed += 1;
        if (this.missed === 5) {
            game.gameOver(false);
        }
    }
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    while diplaying a specific photo based off the lose of win */
    gameOver(won) {
        $('#overlay').show()
        $('#qwerty button').attr("disabled", true);
        if (this.missed === 5) {
            $('#game-over-message').text(`You lost! The answer was '${this.activePhrase.phrase}'`)
            $('#overlay').css("background-image", "url(http://oysterbaytown.com/wp-content/uploads/painting-concept-with-brushes-and-colors_23-2147781603.jpg)");
        } else {
            $('#game-over-message').text(`Winner! You guessed correctly`)
            $('#overlay').css("background-image", "url(https://image.freepik.com/free-photo/painting-concept-with-copyspace_23-2147781609.jpg)");
        }
    }
    //checks whether a the letter selected is apart of the phrase displayed 
    handleInteraction(letter) {

        if (this.activePhrase.checkLetter(letter.textContent)) {
            this.activePhrase.showMatchedLetter(letter.textContent);
            letter.className += ' chosen';
            this.checkForWin();
        } else {

            letter.className += ' wrong';
            this.removeLife();
        }
    }
    // resets the keyboard so all previous selected options are unselected
    resetGame() {
        this.missed = 0;
        let disabledButton = document.querySelectorAll('#qwerty button[disabled]');
        for (let i = 0; i < disabledButton.length; i++) {
            $('#qwerty button').attr("disabled", false);
            disabledButton[i].className = 'key';
        }

        document.querySelectorAll('#scoreboard img').forEach(item => { item.src = "images/liveHeart.png" });
    }

}


