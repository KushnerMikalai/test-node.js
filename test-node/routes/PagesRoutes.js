const path = require('path');
const express = require('express');
const homeController = require('../controllers/HomeController');
const router = express.Router();

router.get('/', homeController.getHomePage);

router.post('/send-email', homeController.postEmail);

module.exports = router;
