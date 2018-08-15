var fs = require("fs");

// Asynkron läsning
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynkon läsning: " + data.toString());
});

// Synkron läsning
var data = fs.readFileSync('input.txt');
console.log("Synkron läsning: " + data.toString());

console.log("Program avslutat");
