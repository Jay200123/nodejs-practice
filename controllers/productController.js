const { resolve } = require('path');
const con = require('../mysql');
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

module.exports = {getProducts, getOneProducts, DeleteOneProduct };

