const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const products = require('./routes/products');
app.use('/api/v1', products);

const customers = require('./routes/customers');
app.use('/api/v1', customers);

const employees = require('./routes/employees');
app.use('/api/v1', employees);

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Listening on PORT ${port}...`);
});