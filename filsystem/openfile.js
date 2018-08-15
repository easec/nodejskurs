var fs = require("fs");

// Asynkron  - Öppnar fil
console.log("Går till öppen fil!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
  console.log("Fil öppnades ok!");     
});