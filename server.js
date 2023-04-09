const http = require('http');

const server = http.createServer((req, res)=>{

    console.log("processing event")
    res.end("Hello World!")
});

server.listen(4000, ()=>{
console.log('Server Listening on Port 4000....');
});

module.exports = server;

