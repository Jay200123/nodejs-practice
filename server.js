const express = require('express');
const con = require('./mysql');
require('dotenv').config()

const route = express();

route.get('/', (req, res)=>{

    const data = {message: "Congratulations... the route variable is working!!!"}
    res.json(data);

})

route.get('/router', (req, res)=>{
    const data = {message: "Welcome to Our Home Page!!!"}
    res.json(data);
})

route.get('/about', (req, res)=>{
        
    const about = {message: "About Our Page"}
    res.json(about)
})

// route.get('/api/products2', (req, res)=>{

//     const sql = "SELECT * FROM products";

//     con.query(sql, (err, result)=>{

//         if(err){
//             console.log(err)
//             res.status(500).json(err)
//         }else{
//             res.status(200).json(result)
//         }

//     })
// })


route.get('/api/products', async(req, res)=>{

    try{

        const data = await new Promise((resolve, reject)=>{
        const sql = "SELECT * FROM products";

        con.query(sql, (err, result)=>{
            
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
        })

        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json(err)

    }
})



route.get('/api/products/:id', async (req, res)=>{

    try{

        const data = await new Promise((resolve, reject)=>{

            const productId = req.params.id
            
            const sql = "SELECT * FROM products WHERE product_id = ?";

            con.query(sql, [productId], (err, result)=>{

                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }

            })

        })

        res.status(201).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json(err);

    }
})

    //fetch all data from users
route.get('/api/users', (req, res)=>{

    const users = "SELECT * FROM users";

    con.query(users, (err, result)=>{

        if(err){
            console.log(err)
            res.status(500).send(err)

        }else{
            res.status(200).json(result)
            }

        })
    });

    route.get('/api/users/:id', async(req, res)=>{

        try{

            const data = await new Promise((resolve, reject)=>{

                const userId = req.params.id;
                const sql = "SELECT * FROM users WHERE id = ?";

                con.query(sql, [userId],(err, result)=>{

                    if(err){
                        reject(err)
                    }else{
                        resolve(result)
                    }

                })

            })

            res.status(201).json(data);

        }catch(err){

            console.log(err)
            res.status(500).json(err)
        }
    });

//fetch all data from students and uses promise function
route.get('/api/students', async (req, res)=>{

    try{

        const results = await new Promise((resolve, reject)=>{

        const query = "SELECT * FROM students";
        con.query(query, (err, result)=>{
                
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })

    res.status(200).send(results)

     }catch(err){
        console.log(err)
        res.status(500).send(err)
    }

})

//service cost 
route.get('/api/sum', (req, res)=>{

    const sum = "SELECT SUM(cost) FROM serviceinfo";

    con.query(sum, (err, result)=>{

        if(err){
            console.log(err)
            res.status(500).send(err)
        }else{
            res.status(200).json(result)
        }

    })
})

//membership query 
route.get('/api/sum2', (req, res)=>{

// const sum2 = "SELECT SUM(amount) FROM statusline";
const sum2 = 'SELECT SUM(amount) FROM statusline INNER JOIN membershipinfo ON statusline.info_id = membershipinfo.info_id WHERE membershipinfo.status="paid" '

    con.query(sum2, (err, result)=>{
        
        if(err){
        console.log(err)
        res.status(500).json(err)
        }else{
            res.status(200).json(result)
        }
    })
})

route.get('/api/sum3', (req, res)=>{

 const sum3 = 'SELECT SUM(price) FROM products INNER JOIN orderline ON products.product_id = orderline.product_id INNER JOIN orderinfo ON orderline.orderinfo_id = orderinfo.id WHERE orderinfo.status="Finished" '

    con.query(sum3, (err, result)=>{
        
        if(err){
            console.log(err)
            res.status(500).json(err)
        }else{  
            res.status(200).json(result)
        }
    })
})

route.get('/api/sum4', (req, res)=>{

const sum4 = 'SELECT SUM(price) FROM products INNER JOIN orderline ON products.product_id = orderline.product_id INNER JOIN orderinfo ON orderline.orderinfo_id = orderinfo.id WHERE orderinfo.status="processing" '

    con.query(sum4, (err, result)=>{

        if(err){
            console.log(err)
            res.status(500).json(err)
        }else{
            res.status(200).json(result)
        }
    })


})

route.get('/api/sum5', (req,res)=>{

    const sum5 = 'SELECT SUM(price) FROM products INNER JOIN orderline ON products.product_id = orderline.product_id INNER JOIN orderinfo ON orderline.orderinfo_id = orderinfo.id WHERE products.description="Tech Shirt - Small" '

    con.query(sum5, (err, result)=>{

        if(err){

            console.log(err)
            res.status(200).json(err)

            }else{
                res.status(200).json(result)

            }
    })
    })

route.get('/api/quantity1', (req, res)=>{


const sql = "SELECT COUNT(orderline.product_id) FROM orderline INNER JOIN products ON orderline.product_id = products.product_id WHERE products.description = 'Tech Shirt - Small' "
        con.query(sql, (err, result)=>{

            if(err){
                console.log(err)
                res.status(500).json(err)
            }else{
                
                res.status(200).json(result)
            }
        })
    })

    const port = process.env.PORT
    route.listen(port, ()=>
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

