var cartas = ["1c","2c","3c","4c","5c","6c","7c","8c","9c","10c","11c","12c","1d","2d","3d","4d","5d","6d","7d","8d","9d","10d","11d","12d","1t","2t","3t","4t","5t","6t","7t","8t","9t","10t","11t","12t","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p","12p"]

y necesito filtrar las cartas rojas

var cartasrojas = [];

for (var i = 0; i < cartas.length; i ++){

if (cartas[i][1] === "c" || cartas[i][1] === "d" || cartas[i][2] === "c" || cartas[i][2] === "d"){

 cartasrojas(cartasrojas.length) = cartas[i];

}

}
