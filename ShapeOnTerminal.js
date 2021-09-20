'use strict';

import * as Shaper from './DrawShape.js';
import { writeToFile, deleteFile, readFromFile, jsonReader} from  './fileOperations.js'
import fs from 'fs';

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

var finalContent = await readFromFile ('shape1.2.txt', (err)=>{ 
    if (err) { 
      console.log(err); 
    } 
});
console.log("\n\n" + fileContent + "\n\n");

// Now Let's Process all json requests from the file
processJsonRequests('./shapesRequest.json');

function processJsonRequests(filePath){

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log('Error reading file:', err);
      return;
    }
    try {
      const customer = JSON.parse(data);
  
      for (let index = 0; index < customer.shapes.length; index++) { 
        // console.log(customer.shapes[index].lado + " " + customer.shapes[index].centro + "\n");
        var lado = customer.shapes[index].lado;
        var centro = customer.shapes[index].centro;      
        let fileContent = Shaper.ShapeController(lado , centro, outpuType);
        console.log(fileContent + "\n\n");
      }
    } catch (err) {
      console.log('Error parsing JSON:', err);
    }
  });
}

/*
{
    "collection" : [
    {
        "lado" : "@", 
        "centro" : "+"
    },
    {
        "lado" : "0", 
        "centro" : "-"
    }]
}

*/