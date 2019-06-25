const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const errorController = require('./controllers/ErrorController');
const User = require('./models/UserModel');

const MONGODB_URI =
  'mongodb+srv://nickolaikushner:RW3pPvCjGrN9UaE@cluster0-7gsrc.mongodb.net/shop';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions',
});

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
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

const adminRoutes = require('./routes/AdminRoutes');
const shopRoutes = require('./routes/ShopRoutes');
const pagesRoutes = require('./routes/PagesRoutes');
const authRoutes = require('./routes/AuthRoutes');

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(pagesRoutes);
app.use(authRoutes);

app.use(errorController.get404);

console.log('http://localhost:9990');

mongoose
  .connect(MONGODB_URI)
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
