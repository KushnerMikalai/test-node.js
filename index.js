const express = require('express');
const _ = require('lodash');

const app = express();
const port = 4000;
process.env.NODE_ENV = 'dev';

app.get('/', (req, res) => res.send(`yep \n ${process.env.NODE_ENV}`));
app.listen(port, () => console.log(`app start on port ${port}`));
