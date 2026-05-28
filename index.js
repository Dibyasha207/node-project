const http = require('http');

const server = http.createServer((req, res) => {

   res.write("Hello from Jenkins Auto Deployment");

   res.end();

});

server.listen(3000, '0.0.0.0', () => {

   console.log("Server running on port 3000");

});
