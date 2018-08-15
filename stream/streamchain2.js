var fs = require("fs");
var zlib = require('zlib');

// Packa upp filen input.txt.gz till input.txt
fs.createReadStream('output.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input.txt'));
  
console.log("Fil uppackad.");