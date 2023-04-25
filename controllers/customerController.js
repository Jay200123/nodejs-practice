const { resolve } = require('path');
const con = require('../database/mysql');
const { reject } = require('lodash');

const getAllCustomers = async(req, res)=>{

    try{

        const data = await new Promise((resolve, reject)=>{

            const sql = "SELECT * FROM customers";

            con.query(sql, (err, result)=>{

                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });

        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};//end for getAllCustomer

const storeCustomer = async(req, res)=>{

    try{

        const data = await new Promise((resolve, reject)=>{

            const sql = "INSERT INTO customers(fname, lname, phone, address, city, customer_image, user_id) VALUES (?,?,?,?,?,?,?)";

            const { fname, lname, phone, address, city, customer_image, user_id } = req.body; //uses destructure to extract the exact value from the req.body
            const values = [ fname, lname, phone, address, city, customer_image, user_id ]; //contains values from the destructured values from the req.body
            
            con.query(sql, values,(err, result)=>{

                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });//end of promise
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};

const getOneCustomer = async(req, res)=>{

    try{

        const data = await new Promise((resolve, reject)=>{

            const sql = "SELECT * FROM customers WHERE id = ?";
            const customerId = req.params.id;

            con.query(sql,[customerId],(err, result)=>{
                
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        }); // end for promise
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json(err);

    }
};//end for getOneCustomer

const DeleteOneCustomer = async(req, res)=>{

    try{    
        
        const data = await new Promise((resolve, reject)=>{

            const sql = "DELETE FROM customers WHERE id = ?";
            const customerId = req.params.id;

            con.query(sql,[customerId], (err, result)=>{

                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });// end of promise
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};//end for DeleteOneCustomer

module.exports = { getAllCustomers, getOneCustomer, DeleteOneCustomer, storeCustomer };