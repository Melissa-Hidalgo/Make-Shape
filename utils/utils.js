export function PonerLetras(Tamano, LetraDeseada) {
    var MiFila = "";
    for (var i = 0; i < Tamano; i++) {
      MiFila += LetraDeseada;
      // console.log(LetraDeseada);
      try {
        // TODO: implement delay promise
        // await sleep(1000);
        process.stdout.write(LetraDeseada)
        // for (let index = 0; index < 200000; index++) {
        //   // Just a waiting time
        // }

        } catch (error) {
          // prodeed 
      }
    }
    return MiFila;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export function helloWorld(name){
  return ("Hello " + name);
}