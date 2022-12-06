const event = require('events');
const uuid = require('uuid');

class Logger extends event  {
    logmon (msg) {
        this.emit('message',{id: uuid.v4(), msg});
    }
}

module.exports = Logger;