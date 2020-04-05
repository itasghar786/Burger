const mysql= require('mysql');
const connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection({
        
    })
}
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'burgers_db'
});

connection.connect(function(err){
  if (err){
    console.log('Error Making connection')
  }
  else{
    console.log('Connected successfully!')
  }
})

module.exports= connection;