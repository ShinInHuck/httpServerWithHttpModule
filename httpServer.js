const http = require("http")

const server = http.createServer()

const httpRequestListener = function(request, response) {
    response.writeHead(200, {'Content-Type' : 'application/json'})
    response.end(JSON.stringify({message : "Hello World!"}))
}

server.on("request", httpRequestListener)

const IP = '127.0.0.1';
const PORT = 8000;

server.listen(PORT, IP, function() {
    console.log(`Listening to request on ip ${IP} & port ${PORT}`)
})