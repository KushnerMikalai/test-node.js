const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const errorController = require('./controllers/ErrorController');
const app = express();

const User = require('./models/UserModel');

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
const authRoutes = require('./routes/AuthRoutes');

app.use((req, res, next) => {
  User.findById('5d037e60edaacd06c852a8d8')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(pagesRoutes);
app.use(authRoutes);

app.use(errorController.get404);

console.log('http://localhost:9990');

mongoose
  .connect(
    'mongodb+srv://nickolaikushner:RW3pPvCjGrN9UaE@cluster0-7gsrc.mongodb.net/shop?retryWrites=true&w=majority'
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Nick',
          email: 'kushner.of.by@yandex.ru',
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(9990);
  })
  .catch(err => {
    console.log(err);
  });
