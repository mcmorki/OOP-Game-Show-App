//                          S T E P  2 / 3
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.phrase;

    }
    //                      S T E P   4
    createPhrases() {
        let phrasesList = [];
        let phraseOne = new Phrase("Doris Longwing");
        phrasesList.push(phraseOne);
        let phraseTwo = new Phrase("Blue Morpho");
        phrasesList.push(phraseTwo);
        let phraseThree = new Phrase("Banded Peacock");
        phrasesList.push(phraseThree);
        let phraseFour = new Phrase("Ceylon Rose");
        phrasesList.push(phraseFour);
        let phraseFive = new Phrase("Island Marble");
        phrasesList.push(phraseFive);
        let phraseSix = new Phrase("Luzon Giant Swallowtail");
        phrasesList.push(phraseSix);
        let phraseSeven = new Phrase("glasswinged butterfly");
        phrasesList.push(phraseSeven);
        let phraseEight = new Phrase("Jamaican Giant Swallowtail");
        phrasesList.push(phraseEight);

        return phrasesList;
    }
    /**                 S T E P  5
    * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    };
    /**                 S T E P  7
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.handleInteraction()
    };
    /**                 S T E P   9
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        return ($(".hide").length === 0)
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
    */
    gameOver(won) {
        // if (this.missed === 5) {
        //     $('#game-over-message').text(`You lost. '${this.activePhrase.phrase}'...`)
        //     // overlay.className = "lose animate-pop-in";
        // } else {
        //     $('#game-over-message').text(`Winner! '${this.activePhrase.phrase}'...`)
        //     // overlay.className = "win animate-pop-in";
        // }
        $('#btn__reset').text("Play Again")
        $('#overlay').fadeToggle()
        $("ul").html("")

        const keys = document.querySelectorAll(".key");
        keys.forEach(key => {
            key.className = "key";
            key.removeAttribute("disabled");
        })
        const lifeHearts = document.querySelectorAll(".tries img");
        lifeHearts.forEach(lifeHeart => {
            lifeHeart.src = "images/liveHeart.png";
        })
    }

    handleInteraction(event) {
        // const keys = document.querySelectorAll(".key");
        // keys.forEach(key => {
        //     key.className = "key";
        //     key.removeAttribute("disabled");
        // })
        // const lifeHearts = document.querySelectorAll(".tries img");
        // lifeHearts.forEach(lifeHeart => {
        //     lifeHeart.src = "images/liveHeart.png";
        // })


        if (event.target.className === "key") {
            event.target.setAttribute("disabled", true);

            if (game.activePhrase.checkLetter(event.target.textContent) === false) {
                event.target.className += " wrong";
                game.removeLife();
            } else {
                event.target.className += " chosen";
                game.activePhrase.showMatchedLetter(event.target.textContent);
                if (game.checkForWin() === true) {
                    game.gameOver(true)
                };
            }
        } else {
            if (key.innerHTML === event.key) {
                key.setAttribute("disabled", true);
                if (game.activePhrase.checkLetter(event.key) === false) {
                    key.className += " wrong";
                    game.removeLife();
                } else {
                    key.className += " chosen";
                    if (game.checkForWin() === true) {
                        game.gameOver(false);
                    }
                }
            }

        }
    };
}