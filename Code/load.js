// The load state
var loadState = {
  // Automatically called
  preload: function() {
    // Load floor images
    game.load.image('FloorN', 'Sprites/FloorN.png');
    game.load.image('FloorE', 'Sprites/FloorE.png');
    game.load.image('FloorS', 'Sprites/FloorS.png');
    game.load.image('FloorW', 'Sprites/FloorW.png');
    game.load.image('FloorNE', 'Sprites/FloorNE.png');
    game.load.image('FloorNS', 'Sprites/FloorNS.png');
    game.load.image('FloorNW', 'Sprites/FloorNW.png');
    game.load.image('FloorES', 'Sprites/FloorES.png');
    game.load.image('FloorEW', 'Sprites/FloorEW.png');
    game.load.image('FloorSW', 'Sprites/FloorSW.png');
    game.load.image('FloorNES', 'Sprites/FloorNES.png');
    game.load.image('FloorNEW', 'Sprites/FloorNEW.png');
    game.load.image('FloorNSW', 'Sprites/FloorNSW.png');
    game.load.image('FloorESW', 'Sprites/FloorESW.png');
    game.load.image('FloorNESW', 'Sprites/FloorNESW.png');
    game.load.image('Wall', 'Sprites/Wall.png');
    game.load.image('Reset', 'Sprites/Reset.png');
    game.load.image('Next', 'Sprites/Next.png');
    game.load.image('Previous', 'Sprites/Previous.png');

    // Load object images
    game.load.image('Blue', 'Sprites/Blue.png');
    game.load.image('Orange', 'Sprites/Orange.png');
    game.load.image('Green', 'Sprites/Green.png');
    game.load.image('Purple', 'Sprites/Purple.png');
    game.load.image('Goal', 'Sprites/Goal.png');
    game.load.image('Portal', 'Sprites/Portal.png');
    game.load.image('ZapOn', 'Sprites/ZapOn.png');
    game.load.image('ZapOff', 'Sprites/ZapOff.png');

    // Load audio
    game.load.audio('Replica', 'Audio/Replica.mp3');
    game.load.audio('Goal', 'Audio/Goal.mp3');
    game.load.audio('Win', 'Audio/Win.mp3');
    game.load.audio('Zap', 'Audio/Zap.mp3');
    game.load.audio('Portal', 'Audio/Portal.mp3');
  },

  // Automatically called
  create: function() {
    // Play background music
    music = game.add.audio('Replica');
    music.loop = true;
    music.play();
    // Start menu state
    game.state.start('menu');
  }
}
