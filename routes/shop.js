const path = require('path');
const express = require('express');
const shopController = require('../controllers/ShopController');
const router =  express.Router();


router.get('/shop', shopController.getIndex);
router.get('/shop/products', shopController.getProducts);
router.get('/shop/cart', shopController.getCart);
router.get('/shop/checkout', shopController.getCheckout);

module.exports = router;
