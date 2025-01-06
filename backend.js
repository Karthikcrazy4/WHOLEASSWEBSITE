const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((request, response) => {
    const filePath = path.join(__dirname, 'PAGE.html');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.write('Internal Server Error');
            response.end();
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end();
        }
    });
}).listen(3000);
console.log("Server started on port 3000. Open http://localhost:3000 to view the website.");
