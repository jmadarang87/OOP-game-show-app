/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 const phrase = new Phrase('i LOVE DAKOTA!!');
 const game = new Game();

 console.log(phrase);
 game.phrases.forEach((phrase, index) => {
    console.log(`Phrase ${index + 1} - phrase: ${phrase.phrase}`);
 })

 console.log(game.activePhrase);