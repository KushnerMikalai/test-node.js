const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const errorController = require('./controllers/ErrorController');
const app = express();

const mongoConnect = require('./util/database').mongoConnect;
/**
 * check device
 */
// const device = require('express-device');
// app.use(device.capture());
// app.get('/hello',function(req,res) {
//   res.send(req.device);
// });

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes = require('./routes/AdminRoutes');
const shopRoutes = require('./routes/ShopRoutes');
const pagesRoutes = require('./routes/PagesRoutes');

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(pagesRoutes);

app.use(errorController.get404);

console.log('http://localhost:9990');

mongoConnect(() => {
  app.listen(9990)
});
