var fs = require("fs");
var data = '';

// Skapa läsbar stream
var readerStream = fs.createReadStream('input.txt');

// Sätt encoding till utf8. 
readerStream.setEncoding('UTF8');

// Hantera stream events --> data, end, och error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program avslutat");