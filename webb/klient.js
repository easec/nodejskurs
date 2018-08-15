var http = require('http');

// Val som kan användas av begäran 
var options = {
   host: 'localhost',
   port: '8081',
   path: '/index.html'  
};

// Callback funktion som används för att ta hand om respons
var callback = function(response){
   // Uppdatera stream med information kontinuerligt
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Komplett kropp.
      console.log(body);
   });
}
// Gör begäran till server
var req = http.request(options, callback);
req.end();