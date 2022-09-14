const EventEimtter = require("events");


const Logger = require('./logger_event');
const logger = new Logger();

//Register a Listener
logger.on("Messagelogged", function () {
    console.log('Listener called logger');
})

logger.log('Hello World!!')

//const EventEmitter = require('events');
//const emitter = new EventEmitter();
//
//// Register a Listener
//emitter.on('logging', eventArgs => {
//    console.log("Logged : ", eventArgs['message']);
//})
//
////Raise an Event
//emitter.emit('logging', { id: 1, message: 'Hello' });