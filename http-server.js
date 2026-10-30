const http = require('http');

const server = http.createServer((request, response) => {
    console.log(`${request.url} 200`);
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello');
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`HTTP server listening at http://localhost:${port}`);
});