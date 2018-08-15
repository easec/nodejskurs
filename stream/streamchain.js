var fs = require("fs");
var zlib = require('zlib');

// Komprimera filen input.txt till input.txt.gz
fs.createReadStream('output.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('output.txt.gz'));
  
console.log("Fil komprimerad.");