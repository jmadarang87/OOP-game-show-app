/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

// const startGame = document.getElementById('btn__reset');

// startGame.addEventListener( "click", () => {
//    const overlay = document.getElementById('overlay');
//    overlay.style.display = 'none';
//    });

//  const randomPhrase = game.getRandomPhrase();
//  const phrase = new Phrase(randomPhrase.phrase);



//  console.log(phrase);
//  game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index + 1} - phrase: ${phrase.phrase}`);
//  });
