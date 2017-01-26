var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('callPolice',function callPolice(){
	console.log("police has been called");
})

eventEmitter.on('callBatman',function lightTheBatSignal(){
	console.log("nanananan batman");
})
eventEmitter.on('plantABomb',function plantABomb(terrorist){
	console.log("a bomb has been planted by "+terrorist);
	if(terrorist=="joker"){
		eventEmitter.emit('callBatman');
	}
	else{
		eventEmitter.emit('callPolice');
	}
})

eventEmitter.emit('plantABomb','pikachu');
console.log("Program has ended");