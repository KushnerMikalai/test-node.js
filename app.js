const http = require('http');
const routes = require('./routes');

const serverss = http.createServer(routes.handler);

serverss.listen(9990);
