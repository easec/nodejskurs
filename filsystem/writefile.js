var fs = require("fs");

console.log("Kommer att skriva till existerade fil!");
fs.writeFile('input.txt', 'Enkel inlärning!',  function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Information skriven ok!");
   console.log("Läser informationen som precis skrevs!");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynkron läsning: " + data.toString());
   });
});