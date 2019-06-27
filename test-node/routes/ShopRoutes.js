const path = require('path');
const express = require('express');
const shopController = require('../controllers/ShopController');
const isAuth = require('../middleware/is-auth');

const router = express.Router();
router.get('/shop', shopController.getIndex);
router.get('/shop/products', shopController.getProducts);
router.get('/shop/products/:id', shopController.getProduct);
router.get('/shop/cart', isAuth, shopController.getCart);
router.post('/shop/cart', isAuth, shopController.postCart);
router.post('/cart-delete-item', isAuth, shopController.postCartDeleteProduct);
router.post('/create-order', isAuth, shopController.postOrder);
router.get('/shop/orders', isAuth, shopController.getOrders);

module.exports = router;
