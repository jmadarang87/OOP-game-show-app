/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 const overlay = document.getElementById('overlay');
 const scoreBoard = document.getElementById('scoreboard');


 class Game {
     missed = 0;
     phrases = this.createPhrases();
     activePhrase = this.getRandomPhrase();
     
     createPhrases() {
        let phraseArray = [];
        phraseArray.push(new Phrase('Give others the best of you not the stressed of you'));
        phraseArray.push(new Phrase('In each of us there is a little of all of us'));
        phraseArray.push(new Phrase('Be kind for everyone you meet is fighting a hard battle'));
        phraseArray.push(new Phrase('Kindness is in our power even when fondness is not'));
        phraseArray.push(new Phrase('If you want to change the world go home and love your family'));
        return phraseArray;
     }

     getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * (this.phrases.length));
        return this.phrases[randomNumber];
     }

     startGame() {
      const overlay = document.getElementById('overlay');
      overlay.style.display = 'none';
      this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
     }

     removeLife() {
      console.log('life lost');
      let li = scoreBoard.firstElementChild.children;
      li[0].remove();
      this.missed++;
      console.log(`${this.missed}`);
      if (this.missed === 5) {
         console.log(`You Lost!`);
         this.gameOver();
      }
     }

     checkForWin() {
      
     }

     gameOver() {
        alert(`You lost!!!!!!`);
     }
 }