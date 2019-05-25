const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

/**
 * app express
 */
const app = express();

/**
 * template engine
 */
app.set('view engine', 'pug');

/**
 * dir for views template engine
 */
app.set('views', 'views');

/**
 * routes
 */
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

/**
 * parse enter data
 */
app.use(bodyParser.urlencoded({extended: false}));

/**
 * set static dir for all files (img, css, js)
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * use routes
 */
app.use('/admin', adminData.routes);
app.use(shopRoutes);

/**
 * use 404 page
 */
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

/**
 * listen server
 */
app.listessn(9990);
