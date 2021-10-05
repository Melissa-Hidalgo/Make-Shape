import { PonerLetras } from "./utils.js";

function ShapeController(c1, c2, outputType, shapeType, ratio){

  if (shapeType == "diamond") {
    return MakeDiamond(c1, c2, outputType);
  } else if (shapeType == "square") {
    return MakeSquare (c1, c2, outputType, ratio);
  } else if (shapeType == "rhombus") {
    return MakeRhombus (c1, c2, outputType, ratio);
  } else {
    return "shape not implemented";
  } 
   
}

function MakeDiamond(c1, c2, outputType, ratio) {

   // console.log("Output Type Requested: " + outputType);

   var rows = 30;
   var Shape = "";
   var lineFeed = "\n";

    //  var headerDiamond = Izquierda(rows-i+1, c1) + "^" + Derecha(rows-i, c1) + lineFeed; questionner Luiz

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

};

function MakeRhombus(c1, c2, outputType, ratio){
  
  var columnas =Math.round (24 * ratio) ;                    // # de columnas del area del trabajo
  var rows = Math.round(columnas * 0.25);                   // # de vueltas de una mitad  
  var tamanoDelCentro = Math.round(columnas * 0.70);        // # de columnas dentro del shape
  var lateral = Math.round(columnas * 0.20);                // # de columnas afuera del shape

  var Shape = "";                                           // contenido del shape
  var lineFeed = "\n";

  const cuerpoFinal =  (lateral * 2 + tamanoDelCentro);

  // if (columnas < cuerpoFinal) {
  //   columnas = cuerpoFinal;
  // } else if (columnas > cuerpoFinal){
  //   tamanoDelCentro += (columnas - cuerpoFinal) 
  // }
  
  var offset = 0;
  var lateralIzquierda = Math.round(columnas - (tamanoDelCentro + 2));
  var headerFooter = Centro(columnas, c1 ) +  lineFeed ;
  var aperturaCierre = "";
  var cuerpo = "";
  

  if (outputType == "web") {
    lineFeed = "<br>";
  } else {
    lineFeed = "\n";
  }

   var limite = Math.round ((rows*2) * 0.3);
   var limiteDeAbajo = rows*2 - limite;

  Shape = "\n ratio: " + ratio  +  ", columnas: " + columnas  + ", rows: " + (rows * 2)  + ", lateral: " +  lateral  + ", tamanoDelCentro: "  +  tamanoDelCentro +  ", limite: " + limite  + lineFeed + lineFeed;


   for (var i=0; i<rows*2; i++)
    switch (true){
     
      // Header de arriba
      case ( i < limite - 1):
        Shape += headerFooter;
        break;

      // limite de arriba
      // Apertura del Cuadrado
      
      case (i == limite - 1):

       aperturaCierre = Izquierda(lateralIzquierda - offset, c1)+ "/" + Centro(tamanoDelCentro, "-") + "/" + Derecha(offset, c1) + lineFeed ;
       Shape += aperturaCierre;
       offset += 1;
        break;
        
      // Cierre del Cuadrado
      case (i == limiteDeAbajo):
       aperturaCierre = Izquierda(lateralIzquierda - offset, c1)+ "/" + Centro(tamanoDelCentro, "-") + "/" + Derecha(offset, c1) + lineFeed ;
       Shape += aperturaCierre;
       offset += 1;
        break;

      // limite de abajo
      case ( i > limiteDeAbajo):
        Shape += headerFooter;
        break;

      // Cuerpo del Cuadrado 
      default:

        cuerpo = Izquierda(lateralIzquierda - offset, c1)+ "/" + Centro(tamanoDelCentro, c2) + "/" + Derecha(offset, c1) + lineFeed ;
        Shape += cuerpo;
        offset += 1;
    }


  return Shape;

}


/*

........................ (24) columnas
........................
........................
[3] limite arriba = columnas / 4
.....(5)++++++++++++++(14)..... apertura = limite + 1
.....|............(12)|.....
.....|............|.....
.....|............|.....
.....|............|.....
.....++++++++++++++..... cierre = limite abajo - 1
[6] limite abajo = rows - limite arriba 
........................
........................
........................
[12] rows = columnas / 2

*/

function MakeSquare(c1, c2, outputType, ratio) {

  var columnas =Math.round (24 * ratio) ;                   // # de columnas del area del trabajo
  var rows = Math.round(columnas * 0.25);       // # de vueltas de una mitad  
  var tamanoDelCentro = Math.round(columnas * 0.50);    // # de columnas dentro del shape
  var lateral = Math.round(columnas * 0.25);   // # de columnas afuera del shape

  var Shape = "";                                        // contenido del shape
  var lineFeed = "\n";

  const cuerpoFinal =  (lateral * 2 + tamanoDelCentro);

  if (columnas < cuerpoFinal) {
    columnas = cuerpoFinal;
  } else if (columnas > cuerpoFinal){
    tamanoDelCentro += (columnas - cuerpoFinal) 
  }

  var headerFooter = Centro(columnas + 2, c1 ) +  lineFeed ;
  var aperturaCierre = Izquierda(lateral, c1)  + Centro(tamanoDelCentro +2, "-") +  Derecha(lateral, c1) + lineFeed;
  var cuerpo = Izquierda(lateral, c1) + "|" + Centro(tamanoDelCentro, c2) + "|" + Derecha(lateral, c1) + lineFeed;
  

  if (outputType == "web") {
    lineFeed = "<br>";
  } else {
    lineFeed = "\n";
  }

   var limite = Math.round ((rows*2) * 0.3);
   var limiteDeAbajo = rows*2 - limite;

  Shape = "ratio: " + ratio  +  ", columnas: " + columnas  + ", rows: " + (rows * 2)  + ", lateral: " +  lateral  + ", tamanoDelCentro: "  +  tamanoDelCentro +  ", limite: " + limite  + lineFeed;

  // First Half
  for (var i=0; i<rows*2; i++) {
    
    switch (true){
     
      // Header de arriba
      case ( i < limite - 1):
        Shape += headerFooter;
        break;

      // limite de arriba
      // Apertura del Cuadrado
      case (i == limite - 1):
        Shape += aperturaCierre;
        break;
        
      // Cierre del Cuadrado
      case (i == limiteDeAbajo):
        Shape += aperturaCierre;
        break;

      // limite de abajo
      case ( i > limiteDeAbajo):
        Shape += headerFooter;
        break;

      // Cuerpo del Cuadrado 
      default:
        Shape += cuerpo;
    }
     GetLineFeed(outputType);
   }

  //  Second Half
  //  for (var i=0; i<=rows; i++) {

  //   switch (true) {

  //     // Apertura del Cuadrado
  //     case (i == (limite + 1)):
  //       Shape += aperturaCierre;
  //       break;

  //      // Header
  //     case ( i >= limite + 1 ):
  //       Shape += headerFooter;
  //      break;
      
  //     // Cuerpo del Cuadrado 
  //     default:
  //       Shape += cuerpo;
  //    }
  //    GetLineFeed(outputType);
  // }
   return Shape;
}
function GetLineFeed(outputType){
  if (outputType != "web")
  return process.stdout.write("\n"); 
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