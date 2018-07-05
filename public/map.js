// FRONT, LEFT, RIGHT, BACK
const DIRECTIONS = {
  FRONT: "FRONT",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  BACK: "BACK"
};

const allFloors = {
  // 3rd FLOOR
  alfred: {
    directions: [DIRECTIONS.FRONT],
    floor: 3,
    name: "Alfred"
  },
  alma: {
    directions: [DIRECTIONS.LEFT],
    floor: 3,
    name: "Alma"
  },
  vertigo: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 3,
    name: "Vertigo"
  },
  dialm: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 3,
    name: "Dial M"
  },
  gracekelly: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 3,
    name: "Grace Kelly"
  },
  wellness: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 3,
    name: "Wellness"
  },
  ladyvanishes: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 3,
    name: "Lady Vanishes"
  },
  rearwindow: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 3,
    name: "Rear Window"
  },
  batesmotel: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 3,
    name: "Bates Motel"
  },
  nbynw: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 3,
    name: "N by NW"
  },
  
  // 4th FLOOR
  bushnelldabney: {
    directions: [DIRECTIONS.RIGHT],
    floor: 4,
    name: "Bushnell-Dabney"
  },
  miyamoto: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 4,
    name: "Miyamoto"
  },
  donkeykong: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 4,
    name: "Donkey Kong"
  },
  mspacman: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 4,
    name: "Ms. Pacman"
  },
  spaceinvaders: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 4,
    name: "Space Invaders"
  },
  mario: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 4,
    name: "Mario"
  },
  finalfantasy: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 4,
    name: "Final Fantasy"
  },
  dungeonmaster: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 4,
    name: "Dungeon Master"
  },
  princeofpersia: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 4,
    name: "Prince of Persia"
  },
  tetris: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 4,
    name: "Tetris"
  },
  tron: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 4,
    name: "Tron"
  },
  pajitnov: {
    directions: [DIRECTIONS.LEFT],
    floor: 4,
    name: "Pajitnov"
  },
  contra: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 4,
    name: "Contra"
  },
  metroid: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 4,
    name: "Metroid"
  },

  // 8th FLOOR
  strawberry: {
    directions: [DIRECTIONS.RIGHT],
    floor: 8,
    name: "Strawberry"
  },
  fridays: {
    directions: [DIRECTIONS.RIGHT],
    floor: 8,
    name: "Friday's"
  },
  julesberg: {
    directions: [DIRECTIONS.RIGHT],
    floor: 8,
    name: "Julesberg"
  },
  kearny: {
    directions: [DIRECTIONS.RIGHT],
    floor: 8,
    name: "Kearny"
  },
  simpsonpark: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 8,
    name: "Simpson Park"
  },
  fishsprings: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 8,
    name: "Fish Springs"
  },
  redbuttes: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 8,
    name: "Red Buttes"
  },
  southpass: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 8,
    name: "South Pass"
  },
  faust: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 8,
    name: "Faust"
  },
  stjoseph: {
    directions: [DIRECTIONS.FRONT],
    floor: 8,
    name: "St. Joseph"
  },
  sanfrancisco: {
    directions: [DIRECTIONS.LEFT],
    floor: 8,
    name: "San Francisco"
  },
  chimneyrock: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 8,
    name: "Chimney Rock"
  },
  pumpkinseed: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 8,
    name: "Pumpkin Seed"
  },
  rockcreek: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 8,
    name: "Rock Creek"
  },
  hollenberg: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 8,
    name: "Hollenberg"
  },
  smithhotel: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 8,
    name: "Smith Hotel"
  },

  // 10th FLOOR
  enterprise: {
    directions: [DIRECTIONS.FRONT],
    floor: 10,
    name: "The Enterprise"
  },
  organians: {
    directions: [DIRECTIONS.RIGHT],
    floor: 10,
    name: "Organians"
  },
  horta: {
    directions: [DIRECTIONS.RIGHT],
    floor: 10,
    name: "Horta"
  },
  andorians: {
    directions: [DIRECTIONS.RIGHT],
    floor: 10,
    name: "Andorians"
  },
  romulans: {
    directions: [DIRECTIONS.RIGHT],
    floor: 10,
    name: "Romulans"
  },
  gorn: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 10,
    name: "Gorn"
  },
  tribbles: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 10,
    name: "Tribbles"
  },
  tellarites: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 10,
    name: "Tellarites"
  },
  klingons: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 10,
    name: "Klingons"
  },
  metrons: {
    directions: [DIRECTIONS.RIGHT, DIRECTIONS.RIGHT],
    floor: 10,
    name: "Metrons"
  },
  roddenberry: {
    directions: [DIRECTIONS.LEFT],
    floor: 10,
    name: "Roddenberry"
  },
  vulcans: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 10,
    name: "Vulcans"
  },
  talosian: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 10,
    name: "Talosian"
  },
  Tholians: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 10,
    name: "Tholians"
  },
  apollo: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 10,
    name: "Apollo"
  },
  cheron: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 10,
    name: "Cheron"
  },
  
  // 11th FLOOR
  marina: {
    directions: [DIRECTIONS.RIGHT],
    floor: 11,
    name: "Marina Conference Room"
  },
  valencia: {
    directions: [DIRECTIONS.LEFT],
    floor: 11,
    name: "Valencia"
  },
  duboce: {
    directions: [DIRECTIONS.LEFT],
    floor: 11,
    name: "Duboce"
  },
  haight: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 11,
    name: "Haight Conference Room"
  },
  presideo: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 11,
    name: "Presideo Conference Room"
  },
  sunset: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 11,
    name: "Sunset Conference Room"
  },
  irvingphone: {
    directions: [DIRECTIONS.LEFT, DIRECTIONS.LEFT],
    floor: 11,
    name: "Irving Phonebooth"
  },
};
