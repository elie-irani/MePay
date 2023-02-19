const http = require('http');
require('dotenv').config();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(process.env.APP_PORT, process.env.APP_URL, () => {
  console.log(`Server running at http://${process.env.APP_URL}:${process.env.APP_PORT}/`);
});