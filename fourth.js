var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('callPolice',function callPolice(){
	console.log("police has been called");
})

eventEmitter.on('callBatman',function lightTheBatSignal(){
	console.log("nanananan batman");
});

var gordon = function(terrorist){
	console.log("a bomb has been planted by "+terrorist);
	if(terrorist=="joker"){
		eventEmitter.emit('callBatman');
	}
	else{
		eventEmitter.emit('callPolice');
	}
}
eventEmitter.on('plantABomb',gordon);

var bombSquad = function(terrorist){
	console.log("the bomb squal has been notified that a bomb has been planted");
};
eventEmitter.addListener('plantABomb',bombSquad);

eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'plantABomb');
console.log(eventListeners + " listener(s) are listening to the event");
eventEmitter.emit('plantABomb','pikachu');

console.log("emitting the second event");
eventEmitter.removeListener('plantABomb',bombSquad);

eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'plantABomb');
console.log(eventListeners + " listener(s) are listening to the event");
eventEmitter.emit('plantABomb','joker');
console.log("Program has ended");