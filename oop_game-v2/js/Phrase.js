
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()
    }
    addPhraseToDisplay() {
        let contentHTMLFormat = `<ul>`;
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === " ") {
                contentHTMLFormat += `<li class="hide space"></li>`;
            } else {
                contentHTMLFormat += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            } 
        } contentHTMLFormat += `</ul>`;
        const boxes = document.querySelector('#phrase ');
        boxes.innerHTML = contentHTMLFormat;
    }
    /**                 S T E P   9
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */  
        checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        $('#phrase ul .' + letter).removeClass("hide")
        $('#phrase ul .' + letter).addClass("show")

    }}

