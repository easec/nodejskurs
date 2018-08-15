var fs = require("fs");

console.log("Kommer att ta bort existerande fil");
fs.unlink('input.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Fil borttagen!");
});