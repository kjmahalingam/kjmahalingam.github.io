// Level 1
var floor1 = [
  ['ES', 'EW', 'W'],
  ['NE', 'EW', 'SW'],
  ['E', 'EW', 'NW']
];
var item1 = [
  ['', '', 'W'],
  ['', '', ''],
  ['B', '', '']
];

// Level 2
var floor2 = [
  ['ES', 'EW', 'W', 'ES', 'EW', 'W'],
  ['NE', 'EW', 'SW', 'NE', 'EW', 'SW'],
  ['E', 'EW', 'NW', 'E', 'EW', 'NW']
];
var item2 = [
  ['', '', 'W', '', '', 'W'],
  ['', '', '', '', '', ''],
  ['B', '', '', 'O', '', '']
];

// Level 3
var floor3 = [
  ['E', 'EW', 'EW', 'SW', 'O', 'O', 'ES', 'W'],
  ['O', 'O', 'O', 'NE', 'EW', 'EW', 'NW', 'O'],
  ['O', 'ES', 'EW', 'EW', 'SW', 'O', 'O', 'O'],
  ['E', 'NW', 'O', 'O', 'NE', 'EW', 'EW', 'W']
];
var item3 = [
  ['B', '', '', '', '', '', '', 'W'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['O', '', '', '', '', '', '', 'W']
];

// Level 4
var floor4 = [
  ['E', 'SW', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'NE', 'EW', 'EW', 'W', 'O', 'O'],
  ['E', 'EW', 'EW', 'EW', 'EW', 'EW', 'W'],
  ['O', 'O', 'ES', 'EW', 'EW', 'W', 'O'],
  ['E', 'EW', 'NW', 'O', 'O', 'O', 'O']
];
var item4 = [
  ['B', '', '', '', '', '', ''],
  ['', '', '', '', 'W', '', ''],
  ['O', '', '', '', '', '', 'W'],
  ['', '', '', '', '', 'W', ''],
  ['G', '', '', '', '', '', '']
];

// Level 5
var floor5 = [
  ['O', 'O', 'ES', 'ESW', 'SW', 'O', 'O'],
  ['E', 'EW', 'NESW', 'NESW', 'NESW', 'EW', 'W'],
  ['O', 'O', 'NE', 'NEW', 'NW', 'O', 'O']
];
var item5 = [
  ['', '', '', '', '', '', ''],
  ['B', '', '', 'Z', '', '', 'W'],
  ['', '', '', '', '', '', '']
];

// Level 6
var floor6 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW'],
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item6 = [
  ['', '', '', '', '', '', ''],
  ['B', '', 'Z', '', '', '', 'W'],
  ['', '', '', '', 'Z', '', 'W'],
  ['O', '', '', '', '', '', '']
];

// Level 7
var floor7 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW', '', ''],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW', '', ''],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW', '', ''],
  ['', 'ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW', ''],
  ['', 'NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW', ''],
  ['', 'NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW', ''],
  ['', '', 'ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['', '', 'NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['', '', 'NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item7 = [
  ['', '', '', 'Z', '', '', '', '', ''],
  ['B', 'Z', '', '', '', '', 'W', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', 'W', ''],
  ['', 'O', '', '', 'Z', '', '', '', ''],
  ['', '', '', '', '', '', 'Z', '', ''],
  ['', '', '', '', '', '', '', 'Z', ''],
  ['', '', 'G', '', '', '', '', '', ''],
  ['', '', '', 'Z', '', '', '', '', 'W']
];

// Level 8
var floor8 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item8 = [
  ['B', 'O', '', '', 'Z', '', 'W'],
  ['Z', '', '', '', '', '', 'W']
];

// Level 9
var floor9 = [
  ['S', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['NES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item9 = [
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['B', 'O', '', 'Z', 'W', 'Z', 'W']
];

// Level 10
var floor10 = [
  ['S', 'O', 'O', 'ES', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NS', 'ES', 'ESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NS', 'NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NEW', 'NW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW', 'O', 'O']
];
var item10 = [
  ['Z', '', '', 'Z', 'Z', 'W', 'Z', 'Z', 'W'],
  ['B', 'Z', 'Z', '', '', '', '', '', ''],
  ['O', '', '', '', '', '', '', 'Z', 'Z'],
  ['', '', '', '', '', 'Z', 'Z', '', '']
];
// Level 11
var floor11 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item11 = [
  ['', '', '', '', '', '', '', 'W'],
  ['', '', '', '', '', '', '', ''],
  ['B', 'O', 'G', '', 'Z', 'W', 'Z', 'W']
];

// Level 12
var floor12 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NES', 'NESW', 'NSW', 'NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NES', 'NESW', 'NSW', 'NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item12 = [
  ['B', '', '', '', '', 'Z', 'W', 'Z', 'W', 'Z'],
  ['O', '', '', '', '', 'Z', '', 'Z', '', 'Z'],
  ['G', '', '', '', '', '', '', '', '', ''],
  ['P', '', '', '', '', 'Z', 'Z', 'W', 'Z', 'W']
];

// Level 13
var floor13 = [
  ['E', 'EW', 'EW', 'EW', 'EW', 'W', ''],
  ['', 'E', 'EW', 'EW', 'EW', 'EW', 'W']
];
var item13 = [
  ['B', '', '', '', '', 'T', ''],
  ['', 'T', '', '', '', '', 'W']
];

// Level 14
var floor14 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item14 = [
  ['B', '', '', 'W', 'Z', '', '', '', '', 'Z'],
  ['O', '', 'T', '', 'Z', 'W', '', '', 'T', 'Z']
];

// Level 15
var floor15 = [
  ['O', 'E', 'EW', 'EW', 'ESW', 'SW', 'O', 'O', 'ES', 'ESW', 'SW'],
  ['O', 'O', 'O', 'O', 'NES', 'NESW', 'SW', 'ES', 'NESW', 'NESW', 'NSW'],
  ['E', 'EW', 'EW', 'EW', 'NESW', 'NESW', 'NSW', 'NES', 'NESW', 'NESW', 'NSW'],
  ['O', 'O', 'O', 'O', 'NES', 'NESW', 'NW', 'NE', 'NESW', 'NESW', 'NSW'],
  ['O', 'E', 'EW', 'EW', 'NEW', 'NW', 'O', 'O', 'NE', 'NEW', 'NW'],
];
var item15 = [
  ['', 'W', '', '', '', 'Z', '', '', 'Z', 'Z', 'Z'],
  ['', '', '', '', '', '', 'Z', 'Z', '', '', ''],
  ['Z', 'B', 'O', 'G', '', 'T', 'Z', 'W', '', '', 'T'],
  ['', '', '', '', '', '', 'Z', 'Z', '', '', ''],
  ['', 'W', '', '', '', 'Z', '', '', 'Z', 'Z', 'Z']
];

// Level 16
var floor16 = [
  ['ES', 'SW', 'ES', 'ESW', 'ESW', 'ESW', 'SW', 'O', 'O'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW', 'O', 'S'],
  ['NES', 'NSW', 'NES', 'NESW', 'NESW', 'NESW', 'NSW', 'E', 'NSW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW', 'O', 'N'],
  ['NE', 'NW', 'NE', 'NEW', 'NEW', 'NEW', 'NW', 'O', 'O'],
  ['O', 'ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['O', 'NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['O', 'NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item16 = [
  ['', '', '', '', '', '', '', '', ''],
  ['B', '', '', '', '', 'Z', 'W', '', 'Z'],
  ['O', '', '', 'Z', '', '', 'W', 'W', 'T'],
  ['G', '', '', '', '', 'Z', 'W', '', 'Z'],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', 'Z', 'Z'],
  ['', 'P', '', '', 'Z', '', '', '', 'T'],
  ['', '', '', '', 'Z', '', '', '', 'Z']
];

// Level 17
var floor17 = [
  ['E', 'EW', 'EW', 'EW', 'EW', 'EW', 'W']
];
var item17 = [
  ['B', '', '', 'Y', '', '', 'W']
];

// Level 18
var floor18 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item18 = [
  ['', '', '', '', 'Y', '', '', '', 'W'],
  ['B', '', 'O', '', 'Y', '', '', '', 'W']
];

// Level 19
var floor19 = [
  ['ES', 'ESW', 'ESW', 'SW', 'O', 'ES', 'ESW', 'ESW', 'SW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'ESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item19 = [
  ['Z', '', '', '', '', '', 'Y', 'Y', 'W'],
  ['Z', 'B', 'O', 'G', '', '', 'Y', 'Y', 'W'],
  ['Z', '', '', '', '', '', 'Y', 'Y', 'W']
];

// Level 20
var floor20 = [
  ['S', 'O', 'O', 'ES', 'ESW', 'ESW', 'ESW', 'ESW', 'SW', 'S', 'S', 'S'],
  ['NES', 'ESW', 'ESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NES', 'NEW', 'NEW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['N', 'O', 'O', 'NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NW', 'N', 'N', 'N']
];
var item20 = [
  ['Y', '', '', 'Y', '', 'Y', '', '', 'Z', 'W', 'Z', 'W'],
  ['B', '', '', '', '', 'Y', '', '', '', 'Y', '', 'Y'],
  ['O', '', '', '', '', 'Y', '', '', '', '', '', ''],
  ['G', '', '', '', '', 'Y', '', '', '', '', '', ''],
  ['P', '', '', '', '', 'Y', '', '', '', 'Y', '', 'Y'],
  ['Y', '', '', 'Y', '', 'Y', '', '', 'Z', 'W', 'Z', 'W']
];

// Level loading
levelIndex = 0;
floorList = [
  floor1,
  floor2,
  floor3,
  floor4,
  floor5,
  floor6,
  floor7,
  floor8,
  floor9,
  floor10,
  floor11,
  floor12,
  floor13,
  floor14,
  floor15,
  floor16,
  floor17,
  floor18,
  floor19,
  floor20
];
itemList = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item17,
  item18,
  item19,
  item20
];
completionList = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];
replicaList = [];
goalList = [];
zapOnList = [];
zapOffList = [];
portalList = [];
blockedList = [];
function loadLevel() {
  // Scale and draw grid
  var cols = floorList[levelIndex][0].length;
  var rows = floorList[levelIndex].length;
  var tileWidth = game.width * 0.85 / cols;
  var tileHeight = game.height * 0.85 / rows;
  tileWidth = tileHeight = Math.min(tileWidth, tileHeight);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      var xpos = (game.width / 2) + (((i + 0.5) - (cols / 2)) * tileWidth);
      var ypos = (game.height / 2) + (((j + 0.5) - (rows / 2)) * tileHeight);
      var floor = new Floor(xpos, ypos, i, j, tileWidth, tileHeight, floorList[levelIndex][j][i]);
      floor.show();
      if (itemList[levelIndex][j][i] !== '') {
        var item = new Item(xpos, ypos, i, j, tileWidth, tileHeight, itemList[levelIndex][j][i]);
        if (['B', 'O', 'G', 'P'].includes(item.type)) {
          replicaList.push(item);
        }
        else if (item.type === 'W') {
          goalList.push(item);
        }
        else if (item.type === 'Z') {
          zapOnList.push(item);
        }
        else if (item.type === 'Y') {
          zapOffList.push(item);
        }
        else if (item.type === 'T') {
          portalList.push(item);
        }
      }
    }
  }
  for (i = 0; i < replicaList.length; i++) {
    replicaList[i].show();
  }
  for (i = 0; i < portalList.length; i++) {
    portalList[i].show();
  }
  for (i = 0; i < zapOffList.length; i++) {
    zapOffList[i].show();
  }
  for (i = 0; i < zapOnList.length; i++) {
    zapOnList[i].show();
  }
  for (i = 0; i < goalList.length; i++) {
    goalList[i].show();
  }
}
function nextLevel() {
  levelIndex = (levelIndex + 1) % completionList.length;
}
function previousLevel() {
  levelIndex = levelIndex - 1;
  if (levelIndex < 0) {
    levelIndex = completionList.length - 1;
  }
}
function resetLevel() {
  replicaList = [];
  goalList = [];
  zapOnList = [];
  zapOffList = [];
  portalList = [];
  blockedList = [];
  game.state.start('play');
}
