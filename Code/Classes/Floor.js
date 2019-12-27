// Class to hold floor attributes
function Floor(x_, y_, col_, row_, width_, height_, type_) {
  this.x = x_;
  this.y = y_;
  this.col = col_;
  this.row = row_;
  this.width = width_;
  this.height = height_;
  this.type = type_;
  this.sprite;
  this.north = (this.type.indexOf('N') > 0);
  this.east = (this.type.indexOf('E') > 0);
  this.south = (this.type.indexOf('S') > 0);
  this.west = (this.type.indexOf('W') > 0);
  this.pipe = (this.type.indexOf('P') > 0);

  // Draw floor
  this.show = function() {
    var typeMap = new Object();
    typeMap['N'] = 'FloorN';
    typeMap['E'] = 'FloorE';
    typeMap['S'] = 'FloorS';
    typeMap['W'] = 'FloorW';
    typeMap['NE'] = 'FloorNE';
    typeMap['NS'] = 'FloorNS';
    typeMap['NW'] = 'FloorNW';
    typeMap['ES'] = 'FloorES';
    typeMap['EW'] = 'FloorEW';
    typeMap['SW'] = 'FloorSW';
    typeMap['NES'] = 'FloorNES';
    typeMap['NEW'] = 'FloorNEW';
    typeMap['NSW'] = 'FloorNSW';
    typeMap['ESW'] = 'FloorESW';
    typeMap['NESW'] = 'FloorNESW';
    typeMap['PEW'] = 'PipeEW';
    typeMap['PNS'] = 'PipeNS';
    typeMap['PNESW'] = 'PipeNESW';
    typeMap['O'] = 'Wall';

    this.sprite = game.add.sprite(this.x, this.y, typeMap[this.type]);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.width = this.width + 1;
    this.sprite.height = this.height + 1;
    if (!landscape) {
      this.sprite.angle = 270;
    }
  }
}
