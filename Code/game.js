// Initialize game
game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, '');
var startLevel = getStartLevel();
setStartLevel(startLevel);

// Add game states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

// Start boot state
game.state.start('boot');

// Get starting level
function getStartLevel() {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0;i < vars.length; i++) {
    var pair = vars[i].split("=");
    if(pair[0] == "level"){
      return pair[1];
    }
  }
  return(1);
}

function setStartLevel(level) {
  for (var i = 0; i < level - 1; i++) {
    completionList[i] = true;
  }
  levelIndex = level - 1;
}
