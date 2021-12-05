let phraseSection = document.getElementById('phrase');

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // adds hidden letters to phrase section for select phrase
    addPhraseToDisplay() {
        let string = this.phrase.split('');
        let stringHTML = string.map( letter => {
            if (letter !== " ") {
                return `<li class="hide letter ${letter}">${letter}</li>`;
            } else {
                return `<li class="space"> </li>`;
            }
        })
        let ul = document.getElementById("phrase");
        ul.innerHTML = stringHTML.join("");
    }

    // checks if letter selected is in phrase
    checkLetter(letter) {
        const phraseLetters = game.activePhrase.phrase.split('');
        if (phraseLetters.includes(letter)) {
            this.showMatchedLetter(letter);
            return true;
        } else {
            return false;
        }
    }

    // if letter is in secret word, make visible
    showMatchedLetter(letter) {
        let lettersList = document.getElementsByTagName('li');
        for (let i = 0 ; i < lettersList.length; i++ ) {
            if ( lettersList[i].innerHTML === letter) {
                lettersList[i].className = 'show letter ${letter}';
            }
        }
    }
};
