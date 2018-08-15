var http = require('http');
var fs = require('fs');
var url = require('url');

// Skapa server
http.createServer( function (request, response) {  
   // Tolka begäran som innehåller filnamn
   var pathname = url.parse(request.url).pathname;
   
   // Skriv ut filnamn på fil som begärs.
   console.log("Request for " + pathname + " received.");
   
   // Läs innehåll för fil som begärs, från filsystemet
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else {	
         // Sida hittad	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // Skriv innehåll för fil till kropp för svar
         response.write(data.toString());		
      }
      // Skicka svar 
      response.end();
   });   
}).listen(8081);

// Konsol kommer att skriva ut detta meddelande
console.log('Server körs på http://127.0.0.1:8081/');