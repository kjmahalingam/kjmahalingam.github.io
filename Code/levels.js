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
  ['E', 'SW', '', '', '', '', ''],
  ['', 'NE', 'EW', 'EW', 'W', '', ''],
  ['E', 'EW', 'EW', 'EW', 'EW', 'EW', 'W'],
  ['', '', 'ES', 'EW', 'EW', 'W', ''],
  ['E', 'EW', 'NW', '', '', '', '']
];
var item3 = [
  ['B', '', '', '', '', '', ''],
  ['', '', '', '', 'W', '', ''],
  ['O', '', '', '', '', '', 'W'],
  ['', '', '', '', '', 'W', ''],
  ['G', '', '', '', '', '', '']
];

// Level 4
var floor4 = [
  ['', '', 'ES', 'ESW', 'ESW', 'SW', '', ''],
  ['E', 'EW', 'NESW', 'NESW', 'NESW', 'NESW', 'EW', 'W'],
  ['', '', 'NE', 'NEW', 'NEW', 'NW', '', ''],
  ['', '', 'ES', 'ESW', 'ESW', 'SW', '', ''],
  ['E', 'EW', 'NESW', 'NESW', 'NESW', 'NESW', 'EW', 'W'],
  ['', '', 'NE', 'NEW', 'NEW', 'NW', '', '']
];
var item4 = [
  ['', '', '', '', '', '', '', ''],
  ['B', '', '', 'Z', '', '', '', 'W'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['O', '', '', '', 'Z', '', '', 'W'],
  ['', '', '', '', '', '', '', '']
];

// Level 5
var floor5 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW'],
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item5 = [
  ['', '', '', '', '', '', ''],
  ['B', '', 'Z', '', '', '', 'W'],
  ['', '', '', '', 'Z', '', 'W'],
  ['O', '', '', '', '', '', '']
];

// Level 6
var floor6 = [
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
var item6 = [
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

// Level 7
var floor7 = [
  ['S', '', '', '', '', '', ''],
  ['NES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item7 = [
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['B', 'O', '', 'Z', 'W', 'Z', 'W']
];

// Level 8
var floor8 = [
  ['S', '', '', 'ES', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NS', 'ES', 'ESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NS', 'NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NEW', 'NW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW', '', '']
];
var item8 = [
  ['Z', '', '', 'Z', 'Z', 'W', 'Z', 'Z', 'W'],
  ['B', 'Z', 'Z', '', '', '', '', '', ''],
  ['O', '', '', '', '', '', '', 'Z', 'Z'],
  ['', '', '', '', '', 'Z', 'Z', '', '']
];

var floor9 = [
  ["ES", "ESW", "ESW", "ESW", "ESW", "ESW", "ESW", "SW"],
  ["NES", "NESW", "NESW", "NESW", "NESW", "NESW", "NESW", "NSW"],
  ["NE", "NEW", "NEW", "NEW", "NEW", "NEW", "NEW", "NW"]
];
var item9 = [
  ["", "", "", "", "", "", "", "W"],
  ["B", "O", "G", "", "", "", "", ""],
  ["", "", "", "", "Z", "W", "Z", "W"]
];

// Level 10
var floor10 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NES', 'NESW', 'NSW', 'NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NES', 'NESW', 'NSW', 'NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item10 = [
  ['B', '', '', '', '', 'Z', 'W', 'Z', 'W', 'Z'],
  ['O', '', '', '', '', 'Z', '', 'Z', '', 'Z'],
  ['G', '', '', '', '', '', '', '', '', ''],
  ['P', '', '', '', '', 'Z', 'Z', 'W', 'Z', 'W']
];

// Level 11
var floor11 = [
  ['E', 'EW', 'EW', 'EW', 'EW', 'EW', 'W']
];
var item11 = [
  ['B', '', '', 'Y', '', '', 'W']
];

// Level 12
var floor12 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item12 = [
  ['', '', '', 'Y', '', '', 'W'],
  ['B', '', 'O', 'Y', '', '', 'W']
];

// Level 13
var floor13 = [
  ['ES', 'ESW', 'ESW', 'SW', 'ES', 'ESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item13 = [
  ['Z', 'B', 'Y', 'Y', 'Y', 'Y', 'W'],
  ['Z', 'O', 'Y', '', '', 'Y', 'W']
];

// Level 14
var floor14 = [
  ['ES', 'ESW', 'ESW', 'SW', '', 'ES', 'ESW', 'ESW', 'SW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'ESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item14 = [
  ['Z', '', '', '', '', '', 'Y', 'Y', 'W'],
  ['Z', 'B', 'O', 'G', '', '', 'Y', 'Y', 'W'],
  ['Z', '', '', '', '', '', 'Y', 'Y', 'W']
];

// Level 15
var floor15 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NEW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NE', 'NEW', 'NEW', 'NW', '', 'NE', 'NEW', 'NEW', 'NW']
];
var item15 = [
  ['Z', '', '', '', '', '', 'Y', 'Y', 'W'],
  ['Z', 'B', 'O', 'G', 'Y', '', 'Y', 'Y', 'W'],
  ['Z', '', '', '', '', '', 'Y', 'Y', 'W']
];

// Level 16
var floor16 = [
  ['', '', '', 'S', '', '', ''],
  ['', '', '', 'NS', '', '', ''],
  ['', '', 'ES', 'NESW', 'SW', '', ''],
  ['E', 'EW', 'NESW', 'NESW', 'NESW', 'EW', 'W'],
  ['', '', 'NE', 'NESW', 'NW', '', ''],
  ['', '', '', 'NS', '', '', ''],
  ['', '', '', 'N', '', '', '']
];
var item16 = [
  ['', '', '', 'W', '', '', ''],
  ['', '', '', 'Y', '', '', ''],
  ['', '', 'B', '', 'O', '', ''],
  ['W', 'Y', '', '', '', 'Y', 'W'],
  ['', '', 'G', '', 'P', '', ''],
  ['', '', '', 'Y', '', '', ''],
  ['', '', '', 'W', '', '', '']
];

// Level 17
var floor17 = [
  ['S', '', 'S', '', 'ES', 'SW', 'S', '', ''],
  ['NES', 'ESW', 'NESW', 'ESW', 'NESW', 'NESW', 'NESW', 'W', ''],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'EW', 'W'],
  ['NES', 'NEW', 'NESW', 'NEW', 'NESW', 'NESW', 'NESW', 'W' ,''],
  ['N', '', 'N', '', 'NE', 'NW', 'N', '', '']
];
var item17 = [
  ['Y', '', 'Y', '', 'Y', 'Z', 'W', '', ''],
  ['', 'B', '', 'Y', '', '', 'Y', 'Z', ''],
  ['', 'O', '', 'Y', '', '', '', 'Y', 'W'],
  ['', 'G', '', 'Y', '', '', 'Y', 'Z', ''],
  ['Y', '', 'Y', '', 'Y', 'Z', 'W', '', '']
];

// Level 18
var floor18 = [
  ['', '', '', '', 'S', '', '', '', ''],
  ['', '', '', '', 'NS', '', '', '', ''],
  ['', 'E', 'EW', 'ESW', 'NESW', 'ESW', 'EW', 'W', ''],
  ['E', 'EW', 'EW', 'NESW', 'NESW', 'NESW', 'EW', 'EW', 'W'],
  ['', 'E', 'EW', 'NEW', 'NESW', 'NEW', 'EW', 'W', ''],
  ['', '', '', '', 'NS', '', '', '', ''],
  ['', '', '', '', 'N', '', '', '', '']
];
var item18 = [
  ['', '', '', '', 'W', '', '', '', ''],
  ['', '', '', '', 'Y', '', '', '', ''],
  ['', 'Y', 'B', '', '', '', 'O', 'Y', ''],
  ['W', 'Y', '', '', 'Y', '', '', 'Y', 'W'],
  ['', 'Y', 'G', '', '', '', 'P', 'Y', ''],
  ['', '', '', '', 'Y', '', '', '', ''],
  ['', '', '', '', 'W', '', '', '', '']
];

// Level 19
var floor19 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'SW', 'ES', 'ESW', 'ESW', 'SW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NE', 'NEW', 'NEW', 'NW', 'NE', 'NEW', 'NEW', 'NEW', 'NW']
];
var item19 = [
  ['Z', '', '', '', 'Y', '', 'Y', 'Y', 'W'],
  ['Z', 'B', 'O', '', '', '', 'Y', 'Y', 'W'],
  ['Z', 'G', 'P', '', '', '', 'Y', 'Y', 'W'],
  ['Z', '', '', 'Y', '', '', 'Y', 'Y', 'W']
];

// Level 20
var floor20 = [
  ['S', '', '', 'ES', 'ESW', 'ESW', 'ESW', 'ESW', 'SW', 'S', 'S', 'S'],
  ['NES', 'ESW', 'ESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NES', 'NEW', 'NEW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['N', '', '', 'NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NW', 'N', 'N', 'N']
];
var item20 = [
  ['Y', '', '', 'Y', '', 'Y', '', '', 'Z', 'W', 'Z', 'W'],
  ['', 'B', '', '', '', 'Y', '', '', '', 'Y', '', 'Y'],
  ['', 'O', '', '', '', 'Y', '', '', '', '', '', ''],
  ['', 'G', '', '', '', 'Y', '', '', '', '', '', ''],
  ['', 'P', '', '', '', 'Y', '', '', '', 'Y', '', 'Y'],
  ['Y', '', '', 'Y', '', 'Y', '', '', 'Z', 'W', 'Z', 'W']
];

// Level 21
var floor21 = [
  ['E', 'EW', 'EW', 'EW', 'EW', 'W', ''],
  ['', 'E', 'EW', 'EW', 'EW', 'EW', 'W']
];
var item21 = [
  ['B', '', '', '', '', 'T', ''],
  ['', 'T', '', '', '', '', 'W']
];

// Level 22
var floor22 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item22 = [
  ['B', '', '', 'W', 'Z', '', '', '', '', 'Z'],
  ['O', '', 'T', '', 'Z', 'W', '', '', 'T', 'Z']
];

// Level 23
var floor23 = [
  ['E', 'EW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['', '', 'NES', 'NESW','NESW', 'NESW', 'NSW'],
  ['E', 'EW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['', '', 'NES', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['E', 'EW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']

];
var item23 = [
  ['Z', '', 'B', '', '', '', 'W'],
  ['', '', '', '', '', 'Z', ''],
  ['W', 'T', 'O', '', 'Z', '', 'T'],
  ['', '', '', '', '', 'Z', ''],
  ['Z', '', 'G', '', '', '', 'W']
];

// Level 24
var floor24 = [
  ['ES', 'SW', 'ES', 'ESW', 'ESW', 'ESW', 'SW', 'ES', 'W', '', ''],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW', 'NS', 'ES', 'ESW', 'SW'],
  ['NES', 'NSW', 'NES', 'NESW', 'NESW', 'NESW', 'NSW', 'NS', 'NES', 'NESW', 'NSW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW', 'NE', 'NEW', 'NEW', 'NW'],
  ['NE', 'NW', 'NE', 'NEW', 'NEW', 'NEW', 'NW', '', '', '', ''],
  ['', '', '', 'ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['', '', '', 'NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['', '', '', 'NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item24 = [
  ['', '', '', '', '', '', '', '', 'W', '', ''],
  ['B', '', '', '', '', 'Z', 'W', '', 'Z', 'Z', 'Z'],
  ['O', '', '', 'Z', '', '', 'W', '', '', '', 'T'],
  ['G', '', '', '', '', 'Z', 'W', '', '', 'Z', 'Z'],
  ['', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', 'Z', 'Z'],
  ['', '', '', 'P', '', '', 'Z', '', '', '', 'T'],
  ['', '', '', '', '', '', 'Z', '', '', '', 'Z']
];

// Level 25
var floor25 = [
  ['', 'E', 'EW', 'EW', 'ESW', 'SW', '', '', 'ES', 'ESW', 'SW'],
  ['', '', '', '', 'NES', 'NESW', 'SW', 'ES', 'NESW', 'NESW', 'NSW'],
  ['E', 'EW', 'EW', 'EW', 'NESW', 'NESW', 'NSW', 'NES', 'NESW', 'NESW', 'NSW'],
  ['', '', '', '', 'NES', 'NESW', 'NW', 'NE', 'NESW', 'NESW', 'NSW'],
  ['', 'E', 'EW', 'EW', 'NEW', 'NW', '', '', 'NE', 'NEW', 'NW'],
];
var item25 = [
  ['', 'W', '', '', '', 'Z', '', '', 'Z', 'Z', 'Z'],
  ['', '', '', '', '', '', 'Z', 'Z', '', '', ''],
  ['Z', 'B', 'O', 'G', '', 'T', 'Z', 'W', '', 'Z', 'T'],
  ['', '', '', '', '', '', 'Z', 'Z', '', '', ''],
  ['', 'W', '', '', '', 'Z', '', '', 'Z', 'Z', 'Z']
];

// Level 26
var floor26 = [
  ['', 'ES', 'ESW', 'SW', 'S', 'ES', 'ESW', 'SW'],
  ['E', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['', 'NE', 'NEW', 'NW', 'N', 'NE', 'NEW', 'NW']
];
var item26 = [
  ['', 'B', '', '', 'Z', 'W', 'Y', 'Z'],
  ['T', 'Y', '', '', '', 'Y', '', 'T'],
  ['', 'O', '', '', 'Z', 'W', 'Y', 'Z']
];

// Level 27
var floor27 = [
  ['', 'E', 'ESW', 'EW', 'EW', 'EW', 'ESW', 'W', ''],
  ['E', 'EW', 'NEW', 'EW', 'EW', 'EW', 'NEW', 'EW', 'W'],
  ['', '', 'E', 'ESW', 'EW', 'ESW', 'W', '', ''],
  ['E', 'EW', 'EW', 'NEW', 'EW', 'NEW', 'EW', 'EW', 'W']
];
var item27 = [
  ['', 'Z', '', '', 'Y', '', '', 'Z', ''],
  ['W', 'B', '', 'T', '', 'T', '', '', 'Z'],
  ['', '', 'Z', '', '', '', 'Z', '', ''],
  ['Z', 'O', '', '', 'Y', '', '', '', 'W']
];

// Level 28
var floor28 = [
  ['S', 'ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NE', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['', 'NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW'],
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW', ''],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW', 'N']
];
var item28 = [
  ['T', '', 'Y', 'Y', 'Y', 'Y', 'Y', 'W'],
  ['', 'B', 'Y', 'Y', 'Z', 'Y', 'Y', ''],
  ['', '', 'Z', 'Y', 'Y', 'Y', 'Y', 'W'],
  ['', '', '', '', '', '', 'Z', ''],
  ['O', '', '', '', '', '', '', ''],
  ['', '', '', '', 'Z', '', 'Z', 'T']
];

// Level 29
var floor29 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'SW', '', ''],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'SW', ''],
  ['NE', 'NEW', 'NEW', 'NEW', 'NESW', 'NESW', 'NSW', ''],
  ['ES', 'ESW', 'ESW', 'SW', 'NES', 'NESW', 'NESW', 'SW'],
  ['NE', 'NESW', 'NESW', 'NSW', 'NE', 'NEW', 'NEW', 'NW'],
  ['', 'NES', 'NESW', 'NESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['', 'NE', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['', '', 'NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item29 = [
  ['', '', 'Y', '', '', '', '', ''],
  ['T', 'B', 'Y', '', 'Y', '', 'Z', ''],
  ['', '', 'Y', '', '', '', 'W', ''],
  ['O', '', 'Y', 'Y', '', '', '', 'Y'],
  ['Y', '', '', '', 'Y', 'Y', '', 'W'],
  ['', 'G', '', '', '', 'Y', '', 'W'],
  ['', 'Z', '', 'Y', '', 'Y', '', 'T'],
  ['', '', 'P', '', '', 'Y', '', 'W']
];

// Level 30
var floor30 = [
  ['E', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW', ''],
  ['', 'NES', 'NESW', 'NESW', 'NESW', 'NSW', 'N', ''],
  ['E', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'EW', 'W'],
  ['', 'NES', 'NESW', 'NESW', 'NESW', 'NSW', 'S', ''],
  ['E', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW', '']
];
var item30 = [
  ['Z', 'B', '', 'Y', '', '', '', ''],
  ['', 'Y', '', 'Y', 'Y', 'Y', 'W', ''],
  ['W', 'O', 'Y', 'T', '', '', 'T', 'Z'],
  ['', 'Y', '', 'Y', 'Y', 'Y', 'W', ''],
  ['Z', 'G', '', 'Y', '', '', '', '']
];

// Level 31
var floor31 = [
  ['', '', 'ES', 'ESW', 'SW', '', ''],
  ['E', 'EW', 'NESW', 'NESW', 'NESW', 'EW', 'W'],
  ['', '', 'NE', 'NEW', 'NW', '', ''],
  ['', 'E', 'EW', 'EW', 'EW', 'W', '']
];
var item31 = [
  ['', '', '', '', '', '', ''],
  ['B', '', '', 'W', 'K', 'K', 'K'],
  ['', '', '', '', '', '', ''],
  ['', 'O', '', '', 'L', 'W', '']
];

// Level 32
var floor32 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW'],
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW']
];
var item32 = [
  ['Z', '', '', '', 'K', '', '', 'L'],
  ['Z', '', '', 'B', 'L', '', 'L', 'W'],
  ['W', 'L', '', 'L', 'O', '', '', 'Z'],
  ['L', '', '', 'K', '', '', '', 'Z']
];

// Level 33
var floor33 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW', 'S'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW', 'N'],
  ['ES', 'ESW', 'ESW', 'ESW', 'ESW', 'ESW', 'SW', 'S'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NEW', 'NEW', 'NW', 'N']
];
var item33 = [
  ['Z', '', '', '', '', '', 'Z', 'Z'],
  ['K', '', '', 'B', '', '', '', 'L'],
  ['Z', '', '', 'L', '', '', 'Z', 'W'],
  ['Z', '', '', 'L', '', '', 'Z', 'W'],
  ['K', '', '', 'O', '', '', '', 'L'],
  ['Z', '', '', '', '', '', 'Z', 'Z']
];

// Level 34
var floor34 = [
  ['ES', 'ESW', 'ESW', 'SW', 'ES', 'ESW', 'ESW', 'SW'],
  ['NES', 'NESW', 'NEW', 'NSW', 'NES', 'NEW', 'NESW', 'NSW'],
  ['NES', 'NSW', '', 'NS', 'NS', '', 'NES', 'NSW'],
  ['NE', 'NEW', 'EW', 'NW', 'NE', 'EW', 'NEW', 'NW'],
  ['ES', 'ESW', 'EW', 'SW', 'ES', 'EW', 'ESW', 'SW'],
  ['NES', 'NSW', '', 'NS', 'NS', '', 'NES', 'NSW'],
  ['NES', 'NESW', 'ESW', 'NSW', 'NES', 'ESW', 'NESW', 'NSW'],
  ['NE', 'NEW', 'NEW', 'NW', 'NE', 'NEW', 'NEW', 'NW']
];
var item34 = [
  ['W', 'L', 'Z', '', '', 'Z', 'L', 'W'],
  ['L', 'K', '', '', '', '', 'K', 'L'],
  ['Z', '', '', '', '', '', '', 'Z'],
  ['', '', '', 'B', 'O', '', '', ''],
  ['', '', '', 'G', 'P', '', '', ''],
  ['Z', '', '', '', '', '', '', 'Z'],
  ['L', 'K', '', '', '', '', 'K', 'L'],
  ['W', 'L', 'Z', '', '', 'Z', 'L', 'W']
];

// Level 35
var floor35 = [
  ['ES', 'ESW', 'ESW', 'ESW', 'SW', 'S', 'ES', 'ESW', 'ESW', 'ESW', 'SW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NSW', 'NS', 'NES', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NSW', 'NS', 'NES', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NES', 'NESW', 'NESW', 'NESW', 'NSW', 'NS', 'NES', 'NESW', 'NESW', 'NESW', 'NSW'],
  ['NE', 'NEW', 'NEW', 'NEW', 'NW', 'NS', 'NE', 'NEW', 'NEW', 'NEW', 'NW'],
  ['', '', 'E', 'EW', 'EW', 'NEW', 'EW', 'EW', 'W', '', '']
];
var item35 = [
  ['', '', '', '', 'K', 'W', 'K', '', '', '', ''],
  ['', 'Z', '', '', '', 'L', '', '', '', 'Z', ''],
  ['K', 'B', '', '', 'W', 'Y', 'W', '', '', 'O', 'K'],
  ['', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', 'K', '', 'K', '', '', '', ''],
  ['', '', '', 'Y', '', 'G', '', 'Y', '', '', '']
];

// Level loading
levelIndex = 0;
floorList = [
  // floor1,
  // floor2,
  floor3,
  floor4,
  floor5,
  floor6,
  floor7,
  floor8,
  // floor9,
  floor10,
  floor11,
  // floor12,
  floor13,
  floor14,
  // floor15,
  // floor16,
  // floor17,
  floor18,
  // floor19,
  // floor20,
  floor21,
  floor22,
  // floor23,
  // floor24,
  floor26,
  floor27,
  floor25,
  // floor28,
  // floor29,
  // floor30,
  floor31,
  floor32,
  floor33,
  // floor34,
  floor35
];

itemList = [
  // item1,
  // item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  // item9,
  item10,
  item11,
  // item12,
  item13,
  item14,
  // item15,
  // item16,
  // item17,
  item18,
  // item19,
  // item20,
  item21,
  item22,
  // item23,
  // item24,
  // item25,
  item26,
  item27,
  item25,
  // item28,
  // item29,
  // item30,
  item31,
  item32,
  item33,
  // item34,
  item35
];

completionList = Array(floorList.length).fill(false);
replicaList = [];
goalList = [];
zapOnList = [];
zapOffList = [];
portalList = [];
keyList = [];
lockList = [];
blockedList = [];

function loadLevel() {
  // Scale and draw grid
  var cols = floorList[levelIndex][0].length;
  var rows = floorList[levelIndex].length;
  if (landscape) {
    var tileWidth = game.width * 0.8 / cols;
    var tileHeight = game.height * 0.8 / rows;
  } else {
    var tileWidth = game.width * 0.8 / rows;
    var tileHeight = game.height * 0.8 / cols;
  }
  tileWidth = tileHeight = Math.min(tileWidth, tileHeight);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (landscape) {
        var xpos = (game.width * 0.5) + (((i + 0.5) - (cols / 2)) * tileWidth);
        var ypos = (game.height * 0.425) + (((j + 0.5) - (rows / 2)) * tileHeight);
      } else {
        var xpos = (game.width * 0.5) + (((j + 0.5) - (rows / 2)) * tileHeight);
        var ypos = (game.height * 0.425) - (((i + 0.5) - (cols / 2)) * tileWidth);
      }
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
        else if (item.type === 'K') {
          keyList.push(item);
        }
        else if (item.type === 'L') {
          lockList.push(item);
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
  for (i = 0; i < keyList.length; i++) {
    keyList[i].show();
  }
  for (i = 0; i < lockList.length; i++) {
    lockList[i].show();
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
  keyList = [];
  lockList = [];
  blockedList = [];
  game.state.start('play');
}
