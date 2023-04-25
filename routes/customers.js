const express = require('express');
const router = express.Router();

const { getAllCustomers, getOneCustomer, DeleteOneCustomer, storeCustomer } = require('../controllers/customerController');

router.get('/customers', getAllCustomers);
router.post('/customers/store', storeCustomer);
router.get('/customers/:id', getOneCustomer);
router.delete('/customers/:id', DeleteOneCustomer);

module.exports = router;