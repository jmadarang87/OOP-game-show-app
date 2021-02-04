/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 let phraseSection = document.getElementById('phrase');

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        let string = this.phrase.split('');
        let stringHTML = string.map( letter => {
            if (letter !== " ") {
                return `<li class="hide letter ${letter}">${letter}</li>`;
            } else {
                return `<li class="space"> </li>`;
            }
        })
        let ul = document.createElement('ul');
        ul.innerHTML = stringHTML.join("");
        phraseSection.appendChild(ul);
    }

    checkLetter(letter) {
        const phraseLetters = game.activePhrase.phrase.split('');
        if (phraseLetters.includes(letter)) {
           this.showMatchedLetter(letter);
        } else {
           console.log(false)};
    };

    showMatchedLetter(letter) {
        let lettersList = document.getElementsByTagName('li');
        for (let i = 0 ; i < lettersList.length; i++ ) {
            if ( lettersList[i].innerHTML === letter) {
                lettersList[i].className = 'show letter ${letter}';
            }
        }
    };
 };
