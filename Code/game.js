// Initialize game
game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, '');
setStartLevel();

// Add game states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

// Start boot state
game.state.start('boot');

function setStartLevel() {
  var query = window.location.search.substring(1);
  if (query === 'clear') {
    completionList.fill(false);
  }
  var foundIndex = completionList.findIndex(l => !l);
  levelIndex = (foundIndex !== -1) ? foundIndex : 1;
}
