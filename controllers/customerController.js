const con = require('../database/mysql');

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

module.exports = { getAllCustomers, getOneCustomer, DeleteOneCustomer };