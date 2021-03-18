/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 const overlay = document.getElementById('overlay');
 const scoreBoard = document.getElementById('scoreboard');
 let hide = document.getElementsByClassName('hide');

 class Game {
     missed = 0;
     phrases = this.createPhrases();
     activePhrase = null;
     
     createPhrases() {
        let phraseArray = [];
        phraseArray.push(new Phrase('Minnesota'));
        phraseArray.push(new Phrase('Oregon'));
        phraseArray.push(new Phrase('California'));
        phraseArray.push(new Phrase('Colorado'));
        phraseArray.push(new Phrase('Colombia'));
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
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
     }

     removeLife() {
      console.log('life lost');
      let li = scoreBoard.firstElementChild.children;
      let heartIndex = parseInt(this.missed);
      console.log(li);
      li[heartIndex].innerHTML = `<img src="images/lostheart.png" alt="Lost Heart Icon" height="35" width="30">`;
      this.missed++;
      if (this.missed === 5) {
         this.gameOver();
      }
     }

     checkForWin() {
      if (hide.length === 0) {
         console.log(`YOU WIN!!!!!!`);
      }
     }

     gameOver() {
        alert(`YOU LOSE!!!!!!`);
     }

     handleInteraction(event) {
      const letter = event.target.textContent;
      event.target.disabled = true;
      if (game.activePhrase.checkLetter(letter)) {
         event.target.className = "chosen";
         game.checkForWin();
         } else {
         event.target.className = "wrong";
         game.removeLife();
         }
     }

 }