const path = require('path');
const express = require('express');
const shopController = require('../controllers/ShopController');
const router =  express.Router();

router.get('/shop', shopController.getIndex);
router.get('/shop/products', shopController.getProducts);
router.get('/shop/products/:id', shopController.getProduct);
router.get('/shop/cart', shopController.getCart);
router.post('/shop/cart', shopController.postCart);
router.post('/cart-delete-item', shopController.postCartDeleteProduct);
router.get('/shop/orders', shopController.getOrders);
router.get('/shop/checkout', shopController.getCheckout);

module.exports = router;
