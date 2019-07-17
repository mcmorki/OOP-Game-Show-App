
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()
    }
    // appends the phrases and the boxes that they are nested in to the page, also inlcuding spaces
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
    * @param (string) letter - 
    */
    checkLetter(letter) {
        return (this.phrase.includes(letter))
    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        $('#phrase ul .' + letter).removeClass("hide")
        $('#phrase ul .' + letter).addClass("show")

    }
}

