const { reject } = require('lodash')
const con = require('../mysql')

console.log("starting users query...")
const users = ()=>{

    return new Promise((resolve, reject)=>{

        con.query("SELECT * FROM users", (err, res)=>{

            if(err){
                reject(err)
            }

            resolve(res)
        })
    })

}

users()
.then((res)=>{
    console.log(res)
    console.log("users query done!")
})

.catch((err)=>{
    console.log(err)
    console.log("query user error :(")
})

console.log("processing users query...")

module.exports = users;