class Game {
    constructor(missed, phrases) {
        this.missed = missed;
        this.phrases = phrases.map((phrase) => new Phrase(phrase));
    }
    //randomly retrieves a phrase
    getRandomPhrases() {
        let phraseArray = this.phrases;
        let number = Math.floor(Math.random() * phraseArray.length);
        return phraseArray[number];
    }
    // startGame(): calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
    startGame() {
        this.missed = 0;
        let randomPhrase = this.getRandomPhrases();
        randomPhrase.addPhraseToDisplay(randomPhrase);
    }
    //method checks to see if the button clicked mathches a letter in the phrase
    //if not, then call the removeLife() method
    handleInteraction() {
        let checkWin = this;
        let heart = this;
        this.phrases[0].checkLetter();
        $('#qwerty button').click(function () {
            if ($(this).hasClass('letters in phrase')) {
                $(this).css("background", "#5b85b7");
                $('.rightLetter').css("background", "#4ac0d5");
                checkWin.checkForWin();
            } else {
                $(this).css("background", "#f7a964");
                heart.removeLife();
            }
        });
    }
    //removeLife(): this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
    removeLife() {
        this.missed += 1
        $('.tries').eq([this.missed]).hide();
        if (this.missed === 5) {
            this.gameOver();
        }
    }
    // //checkForWin(): this method checks to see if the player has selected all of the letters.
    checkForWin() {
        if ($('.rightLetter').length === $('.letter').length) {
            $('#game-over-message').text('You Win!');
            console.log('painting the picture');
            let imageurl = "C: \Users\mcmorki\Downloads\oop_game - v2\images\Butterfly1.jpg";
            $(".main-container").css('background-image', 'url("' + imageurl + '")');
            // document.body.style.background = "C:\Users\mcmorki\Downloads\oop_game-v2\images\Butterfly1.jpg";
            console.log('picture painted');
            $('#overlay').prop('className', 'win');
            $('#overlay').show();
        }
    }
    //gameOver(): this method displays a message if the player wins or a different message if they lose.
    gameOver() {
        $('#game-over-message').text('You Lose!');
        $('#overlay').prop('className', 'lose');
        $('#overlay').show();
    }
}