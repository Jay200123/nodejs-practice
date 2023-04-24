const con = require('../database/mysql');

const getEmployees = async(req, res)=>{

    try{

        const data = await new Promise((resolve, reject)=>{

            const sql = "SELECT * FROM employees";

            con.query(sql, (err, result)=>{

                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });//end for promise
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(200).json(err);
    }
}

const getOneEmployee = async(req, res)=>{

    try{
        
        const data = await new Promise((resolve, reject)=>{

            const sql = "SELECT * FROM employees WHERE id = ?";
            const employeeId = req.params.id;

        con.query(sql, [employeeId],(err, result)=>{

            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });//end for promise
    res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json(err);

    }
}

const deleteOneEmployee = async(req, res)=>{

    try{

        const data = await new Promise((resolve, reject)=>{

            const sql = "DELETE FROM employees WHERE id =?";
            const employeeId = req.params.id;

            con.query(sql,[employeeId],(err, result)=>{

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

module.exports = { getEmployees, getOneEmployee, deleteOneEmployee };