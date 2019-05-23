const express = require('express');
const router =  express.Router();

router.get('/', (req, res, next) => {
  res.send(`<div>home</div>`)
});

module.exports = router;
