const express=require('express');
const router = express.Router();

//Importing the database funcions for bugers
const burger= require('../models/burger.js');

//create routes and logic for routes
router.get("/", (req, res)=> {
  console.log("donezo")
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    //instead of json, this is how it renders to handlebars
    res.render("index", hbsObject);
  });
});
//add a new buger
router.post('/api/burgers', (req,res)=>{
  burger.insertOne(["burger_name"
],[
  req.body.burger_name
], function(result){
  //send back a new buger 
    res.json({ id: result.insertId});
    });
});
router.put('/api/burgers/:id', (req,res)=>{
  var condition = "id = " + req.params.id;
    console.log("condition", condition);

      burger.updateOne({devoured: req.body.devoured}, condition, (result)=>{
        if (result, changedRows === 0){

          return res.status(404).end();
        } else{
          return res.status(200).end();
        }
      });
});


module.exports = router;