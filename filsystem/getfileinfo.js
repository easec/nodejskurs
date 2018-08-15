var fs = require("fs");

console.log("Inhämtar filinformation!");
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("Hämtade filinformation ok!");
   
   // Kontrollerar filtyp
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
});