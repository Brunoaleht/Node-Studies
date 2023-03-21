
const EventEmitter = require('events')
const eventEmiter = new EventEmitter()

eventEmiter.on('start',()=>{
    console.log('Durante')
})

console.log('Antes')

eventEmiter.emit('start')

console.log('Depois')

