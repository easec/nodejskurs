var fs = require("fs");
var buf = new Buffer(1024);

console.log("Kommer att öppna existerande fil");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("Fil öppnades ok!");
   console.log("Kommer att läsa filen!");
   
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }

      // Kommer bara att läsa bytes.
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }

      // Stänger den öppna filen.
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("Fil stängdes ok!");
      });
   });
});