const StreamrClient = require('streamr-client')

// node boiler
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const client = new StreamrClient({
  auth: {
      privateKey: 'your-private-key'
  }
})

// code to get reddit message

const msg = {
  temperature: 25.4,
  humidity: 10,
  happy: true
}

// 
client.publish('9X1YO-T6Q5qi1L8rliMzpQ', {
    temperature: 25.4,
    humidity: 10,
    happy: true,
})