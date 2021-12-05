const game = new Game();
const startGame = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');

// initites game on 'Start Game' button click
startGame.addEventListener( 'click', () => {
   game.startGame();
   }
);

// qwerty keyboard event handler
qwerty.addEventListener('click', (event) => {
   game.handleInteraction(event);
});