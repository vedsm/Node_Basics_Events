var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('plantABomb',function plantABomb(){
	console.log("a bomb has been planted");
});

eventEmitter.emit('plantABomb');
console.log("Program Ended");