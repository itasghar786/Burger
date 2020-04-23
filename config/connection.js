// Set up MySQL connection.
const mysql = require("mysql");

let connection;
 
//set up Heroku database for deploy, 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
};

connection.connect(function(err){
  if (err){
    console.log('Error Making connection')
  }
  else{
    console.log('Connected successfully!')
  }
})
//exporting 
module.exports= connection;