const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message) {
        console.log(message);

        //Raise an Event
        this.emit('Messagelogged');
    }
}


module.exports = Logger;