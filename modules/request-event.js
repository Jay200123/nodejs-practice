const http = require('http')

const server = http.createServer()


server.on('request', (req, res)=>{

    if(req.url=== '/'){
        res.end('Welcome!')

    }else if(req.url==='/about'){
        res.end('About our Home Page...')
        
    }else{
        res.end('Ooops error 404 page not Found:(')
    }
})

server.listen(4000)