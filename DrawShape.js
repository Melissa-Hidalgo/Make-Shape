import { PonerLetras } from "./utils.js";

function ShapeController(c1, c2, outputType){

    console.log("Shape function 1: " + outputType);

    var rows = 30;
    var Shape = "";
    var lineFeed = "\n";

    if (outputType == "web") {
      lineFeed = "<br>";
    } else {
      lineFeed = "\n";
    }

    for (var i = 0; i <= rows; i++) {
      if( i == 0 ){
        Shape += Izquierda(rows-i+1, c1) + "^" + Derecha(rows-i, c1) + lineFeed;
      } else {
        Shape += Izquierda(rows-i, c1) + "/" + Centro(61-2*(rows-i), c2) + "\\" + Derecha(rows-i, c1) + lineFeed;
      }
      if (outputType != "web") process.stdout.write("\n");
    }

    for (var i = rows; i >= 0; i--) {
      if( i == 0 ){
        Shape += Izquierda(rows-i+1, c1) + "v" + Derecha(rows-i, c1) + lineFeed;
      } else {
        Shape += Izquierda(rows-i, c1) + "\\" + Centro(61-2*(rows-i), c2) + "/" + Derecha(rows-i, c1) + lineFeed;
      }
      if (outputType != "web") process.stdout.write("\n");
    }
    return Shape;
}
// function PonerLetras(Tamano, LetraDeseada) {
//     var MiFila = "";
//     for (var i = 0; i < Tamano; i++) {
//       MiFila += LetraDeseada;
//     }
//     return MiFila;
// }
function Izquierda(Tamano, CaracterDeseado){
  return PonerLetras(Tamano, CaracterDeseado);
}
function Centro(Tamano, CaracterDeseado){
    return PonerLetras(Tamano, CaracterDeseado);
}
function Derecha(Tamano, CaracterDeseado){
    return PonerLetras(Tamano, CaracterDeseado);
}

export { ShapeController};