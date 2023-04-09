const Event = require('events')

const testEvent = new Event();

console.log('listening to event...')
testEvent.on('listen',(name, age)=>{

    console.log('event successfully heard!',`Hello user: ${name}, age: ${age}`)
    console.log('event finished!!!')

})

console.log('processing event...')
testEvent.emit('listen', 'renyel jay', 21)


// const testEvent2 = new Event();

// console.log('starting request event...')
// testEvent2.on('request', ()=>{
//     console.log('event request successfully heard')
//     console.log('event request finished!')
// })

// console.log('processing request event...')
// testEvent2.emit('request')

//on listening to even
// emit creates an event 