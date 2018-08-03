const esRoja = carta => carta.endsWith('c') || carta.endsWith('d');

const cartas = [
  "1c","2c","3c","4c","5c","6c","7c","8c","9c","10c","11c","12c",
  "1d","2d","3d","4d","5d","6d","7d","8d","9d","10d","11d","12d",
  "1t","2t","3t","4t","5t","6t","7t","8t","9t","10t","11t","12t",
  "1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p","12p"
];

const cartasRojas = cartas.filter(esRoja);