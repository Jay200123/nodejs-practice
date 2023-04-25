const { resolve } = require('path');
const con = require('../database/mysql');
const { reject } = require('lodash');


const getProducts = async (req, res)=>{

    try{

        const data = await new Promise((resolve, reject)=>{

            const sql = "SELECT * FROM products";

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
        res.status(500).json(err);
    }
}//end for getProducts

const storeProduct = async(req, res)=>{

    try{

        const sql = "INSERT INTO products(description, cost_price, sell_price, product_image) VALUES (?, ?, ?, ?)";
        const body = {description, cost_price, sell_price, product_image } = req.body;
        const values = [description, cost_price, sell_price, product_image ];

        const data = await new Promise((resolve, reject)=>{

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
}

const getOneProducts = async(req, res)=>{

    try{

        const data = await new Promise((resolve, reject)=>{

            const sql = "SELECT * FROM products WHERE id=?";
            const productId = req.params.id;

            con.query(sql,[productId], (err, result)=>{

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
}//end for getOneProducts

const DeleteOneProduct = async(req, res)=>{

    try{
        const data = await new Promise((resolve, reject)=>{

            const sql = "DELETE FROM products WHERE id =? ";
            const productId = req.params.id;

        con.query(sql, [productId], (err, result)=>{

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
}//end for DeleteOneProducts

module.exports = {getProducts, getOneProducts, DeleteOneProduct, storeProduct };

