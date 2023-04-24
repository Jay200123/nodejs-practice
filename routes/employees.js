const express = require('express');
const router =  express.Router();

const { getEmployees, getOneEmployee, deleteOneEmployee } = require('../controllers/employeeController');

router.get('/employees', getEmployees);
router.get('/employees/:id', getOneEmployee);
router.delete('/employees/:id', deleteOneEmployee);

module.exports = router;