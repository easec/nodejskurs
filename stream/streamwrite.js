var fs = require("fs");
var data = 'Helt enkelt mycket lärande!';

// Skapa writable stream
var writerStream = fs.createWriteStream('output.txt');

// Skriv information till stream med encoding satt till utf8
writerStream.write(data,'UTF8');

// Märkera slut på filen
writerStream.end();

// Hantera stream events --> finish och error
writerStream.on('finish', function() {
    console.log("Skrivning klar!.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program avslutat");