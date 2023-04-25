const express = require('express');
const router =  express.Router();

const { getEmployees, getOneEmployee, deleteOneEmployee, storeEmployee } = require('../controllers/employeeController');

router.get('/employees', getEmployees);
route.post('/employees/store', storeEmployee);
router.get('/employees/:id', getOneEmployee);
router.delete('/employees/:id', deleteOneEmployee);

module.exports = router;