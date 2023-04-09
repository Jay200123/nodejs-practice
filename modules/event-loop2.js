const con = require('../mysql')


const products = ()=>{

    return new Promise((resolve, reject)=>{

        con.query('SELECT * FROM products', function(err, res){
            if(err){
                reject(err)
            }

            resolve(res)
        })

    })
}

products()
.then((res)=>console.log(res))
.catch((err)=>console.log(err))


// console.log('testing product query')

// con.query('SELECT * FROM products', function(err, res){

//     if(err){
//         console.log(err)
//         console.log('Query Not Found')
//     }

//     console.log(res)
//     console.log('product query done!')
// })

// console.log('processing item query')