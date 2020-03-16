const http = require('http')
const port = 3033
const server = http.createServer(function(request, response){
    if(request.url =='/'){
        response.end('welcome to the website')
    } else if (request.url == '/users') {
        const users = [ { id: 1, name: 'arjun'}, { id:2, name: 'ganesh'}]
        response.end(JSON.stringify(users))
    } else {
        response.end('page you are looking for is not available')
    }
})

server.listen(port, function(){
    console.log('listening on port', port)
})