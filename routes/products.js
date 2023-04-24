const express = require('express');
const router = express.Router();

const { getProducts, getOneProducts, DeleteOneProduct } = require('../controllers/productController');

router.get('/products', getProducts);
router.get('/products/:id', getOneProducts);
router.delete('/products/:id', DeleteOneProduct);

module.exports = router;