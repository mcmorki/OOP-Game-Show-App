class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()
    }

    addPhraseToDisplay() {
        const ul = document.getElementById("phrase").firstElementChild;

        for (let i = 0; i < this.phrase.length; i++) {

            const child = document.createElement('li');
            ul.appendChild(child);
            if (this.phrase.charAt(i) === ' ') {
                child.className = 'space';
            } else {
                child.className = `hide letter ${this.phrase.charAt(i)}`;
                child.innerText = this.phrase.charAt(i);
                this.phraseLength++;
            }
        }
    }
    /*Adds letter placeholders for phrase to the display
    @params {string} char - character input by user
     */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }
    /*Displays matched letter if check letter returns match remove hidden class of letter
   @params {string} char - character input by user
     */
    showMatchedLetter(letter) {
        $('#phrase ul .' + letter).removeClass("hide")
        $('#phrase ul .' + letter).addClass("show")

    }

}


