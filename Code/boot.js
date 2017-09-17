// The boot state
var bootState = {
  // Automatically called
  create: function() {
    // Set orientation
    landscape = (game.width >= game.height);
    // Initialize background
    game.stage.backgroundColor = "#646464";
    // Start load state
    game.state.start('load');
  }
}
