const overlay = document.getElementById('overlay');
const scoreBoard = document.getElementById('scoreboard');
let hide = document.getElementsByClassName('hide');
const lives = 5;

class Game {
   missed = 0;
   phrases = this.createPhrases();
   activePhrase = null;

   // initiates new game
   startGame() {
      const overlay = document.getElementById('overlay');
      overlay.style.display = 'none';
      this.getRandomPhrase();
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
      this.setLives();
   }

   // sets lives based on const lives
   setLives() {
      let hearts = document.getElementById('hearts');
      hearts.innerHTML = '';
      for ( let i = 0; i < lives; i ++ ) {
         let li = document.createElement('li');
         li.className = "tries";
         li.innerHTML = "";
         let img = document.createElement('img');
         img.src = "images/liveHeart.png";
         img.alt = "Heart Icon";
         img.height = "35";
         img.width = "30";
         li.appendChild(img);
         hearts.appendChild(li);
      }
   }
   
   // creates main phrase bank
   createPhrases() {
      let phraseArray = [];
      phraseArray.push(new Phrase('Minnesota'));
      phraseArray.push(new Phrase('Oregon'));
      phraseArray.push(new Phrase('California'));
      phraseArray.push(new Phrase('Colorado'));
      phraseArray.push(new Phrase('Colombia'));
      return phraseArray;
   }

   // computes random number and returns random phrase located at index
   getRandomPhrase() {
      let randomNumber = Math.floor(Math.random() * (this.phrases.length));
      return this.phrases[randomNumber];
   }

   // qwerty keyboard click event handler. checks if selected key is in phrase
   handleInteraction(event) {
      const letter = event.target.textContent;
      event.target.disabled = true;
      if (event.target.className === "key") {
         if (game.activePhrase.checkLetter(letter)) {
            event.target.className = "chosen";
            game.checkForWin();
            } else {
            event.target.className = "wrong";
            game.removeLife();
            }
         }
   }

   // removes life if selected key is not in phrase
   removeLife() {
      let li = scoreBoard.firstElementChild.children;
      let heartIndex = parseInt(this.missed);
      li[heartIndex].innerHTML = `<img src="images/lostheart.png" alt="Lost Heart Icon" height="35" width="30">`;
      this.missed++;
      if (this.missed === lives) {
         this.gameOver();
      }
   }

   // checks if all letters in phrase have been guessed. if yes, starts new game.
   checkForWin() {
      if (hide.length === 0) {
         alert(`YAY! You got it! Keep guessing!`);
         this.newGame();
      }
   }

   // resets game if missed === lives
   gameOver() {
      alert(`Sorry! You lost, try again!`);
      this.reset();
   }

   // selects new phrase to display
   newPhrase() {
      this.getRandomPhrase();
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
   }

   // resets all keyboard keys to enabled and back to original state
   keysReset() {
      const keys = document.getElementsByTagName('button');
      for (let i = 0; i < keys.length; i++) {
         keys[i].className = `key`;
         keys[i].disabled = false;
      };
   }

   // resets board game
   reset() {
      this.missed = 0;
      this.newGame();
      this.setLives();
   }

   // creates new game by setting new phrase and resetting qwerty keyboard
   newGame() {
      this.newPhrase();
      this.keysReset();
   }
}
