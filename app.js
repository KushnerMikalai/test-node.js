const http = require('http');
const routes = require('./routes');

const serverolo = http.createServer(routes.handler);

server.listen(9990);
