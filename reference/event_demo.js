const event  = require('events');

//  create class 
class myEvent extends event {};

// init obj
const MyEvent = new myEvent();

MyEvent.on('event', () => console.log('Event fired'));

MyEvent.emit('event');