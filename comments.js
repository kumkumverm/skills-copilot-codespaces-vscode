// Create web server
// Create a web server that listens to the port 3000 and returns the comments array in response to the GET request to the path /comments.

const http = require('http');
const comments = require('./comments');

const port = 3000;

const requestHandler = (request, response) => {
  response.end(JSON.stringify(comments));
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Error has occured', err);
  }

  console.log(`Server is listening on ${port}`);
});