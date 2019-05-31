const path = require('path');
const express = require('express');
const homeController = require('../controllers/HomeController');
const router =  express.Router();

router.get('/', homeController.getHomePage);

module.exports = router;
