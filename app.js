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
  res.status(404).render('404', { pageTitle: 'Page Not Found'})
});

/**
 * listen server
 */
console.log('http://localhost:9990');
app.listen(9990);
