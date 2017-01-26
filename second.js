var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('callPolice',function callPolice(){
	console.log("police has been called");
})
eventEmitter.on('plantABomb',function plantABomb(){
	console.log("a bomb has been planted");
	eventEmitter.emit('callPolice');
})

eventEmitter.emit('plantABomb');
console.log("Program has ended");