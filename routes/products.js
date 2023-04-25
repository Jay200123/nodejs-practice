const express = require('express');
const router = express.Router();

const { getProducts, getOneProducts, DeleteOneProduct, storeProduct } = require('../controllers/productController');

router.get('/products', getProducts);
router.post('/products/store', storeProduct);
router.get('/products/:id', getOneProducts);
router.delete('/products/:id', DeleteOneProduct);

module.exports = router;