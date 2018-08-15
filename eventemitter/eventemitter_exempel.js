var events = require('events');
var eventEmitter = new events.EventEmitter();

// listner #1
var listner1 = function listner1() {
   console.log('listner1 exekverad.');
}

// listner #2
var listner2 = function listner2() {
  console.log('listner2 exekverad.');
}

// Knyt connection event med listner1
eventEmitter.addListener('connection', listner1);

// Knyt connection event med listner2
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) lyssnar på connection event");

// Skicka connection event 
eventEmitter.emit('connection');

// Ta bort knytning till listner1
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 kommer inte att lyssna nu.");

// Skicka connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) lyssnar på connection event");

console.log("Program avslutat.");
