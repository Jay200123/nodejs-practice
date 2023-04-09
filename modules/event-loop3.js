const con = require('../mysql')

console.log('starting query')
const events = ()=>{

    return new Promise((resolve, reject)=>{

        con.query('SELECT * FROM events', function(err, res){
    
            if(err){
                reject(err)
            }
        
            resolve(res)
        })
    
    })

}

events()
  .then(res => {
  console.log(res)
  console.log('success! query done!')
  })
  .catch(err => {
    // handle the error here
    console.log(err)
    console.log('query error!')
  });

console.log('processing query')