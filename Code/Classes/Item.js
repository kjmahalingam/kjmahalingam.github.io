// Class to hold item attributes
function Item(x_, y_, col_, row_, width_, height_, type_) {
  this.x = x_;
  this.y = y_;
  this.col = col_;
  this.row = row_;
  this.width = width_;
  this.height = height_;
  this.type = type_;
  this.sprite;

  // Draw item
  this.show = function() {
    var typeMap = new Object();
    typeMap['B'] = 'Blue';
    typeMap['O'] = 'Orange';
    typeMap['G'] = 'Green';
    typeMap['P'] = 'Purple';
    typeMap['W'] = 'Goal';
    typeMap['T'] = 'Portal';
    typeMap['Z'] = 'ZapOn';
    typeMap['Y'] = 'ZapOff';

    this.sprite = game.add.sprite(this.x, this.y, typeMap[this.type]);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.width = this.width;
    this.sprite.height = this.height;
    this.sprite.alpha = 1;
    game.add.tween(this.sprite).from({alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 300);
  }

  // Move replica item
  this.move = function(dir) {
    if (['B', 'O', 'G', 'P'].includes(this.type)) {
      switch (dir) {
        case "N":
          this.y -= this.height;
          this.row--;
          game.add.tween(this.sprite).to({width: this.width / 4, height: this.height / 4}, 100, Phaser.Easing.Linear.None, true);
          game.add.tween(this.sprite).to({y: this.sprite.y - this.height}, 100, Phaser.Easing.Linear.None, true, 100);
          game.add.tween(this.sprite).to({width: this.width, height: this.height}, 100, Phaser.Easing.Linear.None, true, 200);
          break;
        case "E":
          this.x += this.width;
          this.col++;
          game.add.tween(this.sprite).to({width: this.width / 4, height: this.height / 4}, 100, Phaser.Easing.Linear.None, true);
          game.add.tween(this.sprite).to({x: this.sprite.x + this.width}, 100, Phaser.Easing.Linear.None, true, 100);
          game.add.tween(this.sprite).to({width: this.width, height: this.height}, 100, Phaser.Easing.Linear.None, true, 200);
          break;
        case "S":
          this.y += this.height;
          this.row++;
          game.add.tween(this.sprite).to({width: this.width / 4, height: this.height / 4}, 100, Phaser.Easing.Linear.None, true);
          game.add.tween(this.sprite).to({y: this.sprite.y + this.height}, 100, Phaser.Easing.Linear.None, true, 100);
          game.add.tween(this.sprite).to({width: this.width, height: this.height}, 100, Phaser.Easing.Linear.None, true, 200);
          break;
        case "W":
          this.x -= this.width;
          this.col--;
          game.add.tween(this.sprite).to({width: this.width / 4, height: this.height / 4}, 100, Phaser.Easing.Linear.None, true);
          game.add.tween(this.sprite).to({x: this.sprite.x - this.width}, 100, Phaser.Easing.Linear.None, true, 100);
          game.add.tween(this.sprite).to({width: this.width, height: this.height}, 100, Phaser.Easing.Linear.None, true, 200);
          break;
        default:
          break;
      }
    }
  }
}
