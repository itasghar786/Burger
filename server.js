const express = require('express')
const bodyParser = require('body-parser');
const handleBars = require('express-handlebars'); 


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.engine('handlebars', handleBars({defaultLayout: "main"})); 
app.set("view engine", "handlebars");

const routes = require('./controllers/burgersController.js');
app.use(routes);


app.listen(PORT, ()=>{
  console.log('Listening on '+PORT)
});