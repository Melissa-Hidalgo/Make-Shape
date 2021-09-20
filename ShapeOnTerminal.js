'use strict';

import * as Shaper from './DrawShape.js';
import { writeToFile, deleteFile, readFromFile} from  './fileOperations.js'

var lado = "";
var centro = "";
var outpuType = "web";

for (let j = 0; j < process.argv.length; j++) {

    console.log(j + ' -> ' + (process.argv[j]));

    if (j==2) {
        lado = process.argv[j];
    } else if (j==3) {
        centro = process.argv[j];
    } else if (j==4)  {
        if (process.argv[j].length != 0){
            outpuType = process.argv[j];
        }
    }
}
const fileContent = Shaper.ShapeController(lado, centro, outpuType);

await writeToFile('shape1.2.txt', fileContent, (err)=>{ 
    if (err) { 
      console.log('Error Message:' + err); 
    } 
  });

  // main call
  var finalContent = "";

finalContent = await readFromFile ('shape1.2.txt', (err)=>{ 
    if (err) { 
      console.log(err); 
    } 
  });

  console.log ('here is the final shape:\n' + finalContent);

// await deleteFile("file1.txt", fileContent, (err)=>{ 
//     if (err) { 
//       console.log('Error Message:' + err); 
//     } 
//   });
