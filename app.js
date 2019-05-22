const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the moddleware!')
  next();
});

app.use((req, res, next) => {
  res.send(`
    <h1>Ololo</h1>
    <div>ololo2</div>
  `)
});

const server = http.createServer(app);
server.listen(9990);
