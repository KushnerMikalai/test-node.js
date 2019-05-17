const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

  const url = request.url;
  const method = request.method;

  if (url === '/') {
    response.write(`
      <html lang="en">
        <head>
          <title>node</title>
        </head>
        <body>
          <h1 class="title">home</h1>
          <form action="/message" method="POST">
            <input type="text">
            <button type="submit">send</button>
          </form>
        </body>
      </html>
    `);
    return response.end();
  }

  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    response.statusCode = 302;
    response.setHeader('Location', '/');
    return response.end();
  }

  response.setHeader('Content-Type', 'text/html');

  response.end();
});

server.listen(3000);
