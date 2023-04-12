var mysql = require('mysql')
require('dotenv').config()

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})


const connect = con.connect(function(err, res){

  if(err){
    console.log(err)
    console.log('Error cant connect to the database')
  }

  console.log(res)
  console.log('Connected to MySQL Server')

})


module.exports = con