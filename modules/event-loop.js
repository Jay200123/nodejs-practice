const con = require('../mysql')

const students = ()=>{

  return new Promise((resolve, reject)=>{

    con.query('SELECT * FROM students', function(err, res){

      if(err){
        reject(err)
        console.log('query error')
      }

      resolve(res)
      console.log('query result')

    })

  });

  }

  students()
  .then((result)=>console.log(result))
  .catch((err)=>console.log(err))

// console.log('starting query')
// con.query('SELECT * FROM students', function(err, res){

//     if(err){
//       console.log(err)
//       console.log('Query Not Found')
//     }
  
//     console.log(res)
//     console.log('Query Done!')
  
//   })
  
//   console.log('Processing Query')
  