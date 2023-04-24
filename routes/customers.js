const express = require('express');
const router = express.Router();

const { getAllCustomers, getOneCustomer, DeleteOneCustomer } = require('../controllers/customerController');

router.get('/customers', getAllCustomers);
router.get('/customers/:id', getOneCustomer);
router.delete('/customers/:id', DeleteOneCustomer);

module.exports = router;