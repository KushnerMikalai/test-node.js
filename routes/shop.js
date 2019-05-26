const path = require('path');
const expre = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');

const routsdasdsder =  express.Router();

router.get('/', (req, res, next) => {
  console.clear();
  console.log(adminData.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

module.exports = router;
