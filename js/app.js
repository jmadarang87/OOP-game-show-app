/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();

const startGame = document.getElementById('btn__reset');

startGame.addEventListener( 'click', () => {
   game.startGame();
   console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
   });
   

const qwerty = document.getElementById('qwerty');
qwerty.addEventListener('click', (event) => {
   game.handleInteraction(event);
})