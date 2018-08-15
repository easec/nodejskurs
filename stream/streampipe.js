var fs = require("fs");

// Skapar en läsbar stream
var readerStream = fs.createReadStream('input.txt');

// Skapar en skrivbar stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe operationerna read och write
// läser input.txt och skriver information till output.txt
readerStream.pipe(writerStream);

console.log("Program avslutat");