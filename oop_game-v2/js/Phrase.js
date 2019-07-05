class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }
    addPhraseToDisplay() {
        let contentHTMLFormat = `<ul>`;
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === " ") {
                contentHTMLFormat += `<li class="hide space"> </li>`;
            } else if (this.checkDuplication(this.phrase[i])) {
                contentHTMLFormat += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            } else {
                contentHTMLFormat += `<li class="hide letter-multiple ${this.phrase[i]}">${this.phrase[i]}</li>`;
            }
        } contentHTMLFormat += `</ul>`;
        const boxes = document.querySelector('#phrase ');
        boxes.innerHTML = contentHTMLFormat;
    }



    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
    showMatchedLetter(letter) {
        const allLetters = document.querySelectorAll('#phrase li');
        for (let i = 0; i < allLetters.length; i++) {
            if (allLetters[i].textContent === letter) {
                allLetters[i].className += " show";
            }
        }
    }

    checkDuplication(letter) {
        let letters = this.phrase.split("");
        return letters.indexOf(letter) === letters.lastIndexOf(letter);
    }
}
