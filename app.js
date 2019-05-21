const http = require('http');
const routes = require('./routes');

const serversss = http.createServer(routes.handler);

serversss.listen(9990);
