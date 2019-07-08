class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    //to create empty boxes for the chosen phrase
    addPhraseToDisplay() {
        for (let x = 0, c = ''; c = this.phrase.charAt(x); x++) {
            if (this.phrase.charAt(x) === ' ') {
                $('#phrase ul').append("<li class='hide space'</li>");
            } else {
                $('#phrase ul').append("<li class='hide letter'" + c + '>' + c + '</li>');
            }
        }
    };
    //checks to see if the letter selected is a letter within the phrase
    checkLetter() {
        let show = this;
        $('#qwerty button').click(function () {
            let letter = $('#phrase li')
            for (let i = 0; i < letter.length; i++) {
                if ($(this).text() === letter[i].innerHTML) {
                    $(this).addClass('letters in phrase');
                    letter[i].classList.add("rightLetter");
                    show.showMatchedLetter();
                }
            }
        })
    };
    //if the letter chosen does match one in the phrase, then the letter is shown
    showMatchedLetter() {
        $('.rightLetter').css('color', 'black');
    }
};

