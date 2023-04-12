const express = require('express');
const app = express();
require('dotenv').config()
const con = require('./mysql');
const { resolve } = require('path');
const { reject } = require('lodash');
const { error } = require('console');

app.get('/', (req, res)=>{
    const data = {message: "Welcome to Our Home Page!!!"}
    res.json(data);
})

app.get('/about', (req, res)=>{
    
    const about = {message: "About Our Page"}
    res.json(about)
})

//fetch all data from users
app.get('/api/users', (req, res)=>{

    const users = "SELECT * FROM users";

    con.query(users, (err, result)=>{
        if(err){
            console.log(err)
           res.status(500).send('Error in Fetching Users Data' + err)
           return;
        }

        res.send(result)

    })
})

//fetch all data from products
app.get('/api/products', async(req, res)=>{
    
    try{

        const query = 'SELECT * FROM products';

        const result = await new Promise((resolve, reject)=>{

            con.query(query, (err, result)=>{
                
                if(err){
                    reject(err)
                }
                resolve(result)
            })
        })

        res.status(200).send(result)

    }catch{
        console.log(err)
        res.status(500).send(`Query Error Data ${err}`)

    }

})

//fetches all data from student table
app.get('/api/students', async(req, res)=>{

    try{
        
        const query = "SELECT * FROM students";

        const result = await new Promise((resolve, reject)=>{

            con.query(query, (err, result)=>{

                if(err){
                    reject(err)
                }

                resolve(result)

            })

        })
        res.status(200).send(result)
    }catch{

        console.log(err)
        res.status(500).send(err)

    }
})

//fetch all records from officers
app.get('/api/officers', (req, res)=>{

    const officer = 'SELECT * FROM users WHERE role="officer" '

    con.query(officer, (err, result)=>{

        if(err){
            console.log(err)
            res.status(500).send(`Error in Finding Officers Data, Data ${err}`)
        }

        res.status(200).send(result)
    })
});

//async function with Promise
app.get('/api/city', async (req, res)=>{

    try{
        const query = 'SELECT * FROM students WHERE city="Taguig City" ';

        const result = await new Promise((resolve, reject)=>{    
            con.query(query, (err, result)=>{

                if(err){
                    reject(err)
                }
                resolve(result)

            })
        })
        res.status(200).send(result)
    }catch{
        console.log(err)
        res.status(500).send(err)

    }
})


const port = process.env.PORT
app.listen(port, ()=>
 console.log(`Listening on PORT ${port}...`)
 );

// const server = http.createServer((req, res)=>{

//     console.log("processing event")
//     res.end("Hello World!")
// });

// const port = process.env.PORT
// server.listen(port, ()=>{
// console.log('Server Listening on Port 4000....');

// });



// module.exports = server;

