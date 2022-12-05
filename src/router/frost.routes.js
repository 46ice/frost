const db = require("../models");
const bcrypt = require("bcrypt");


module.exports = app => {
  
    var router = require("express").Router();
  
  //login
    router.post("/login", async(req, res) => {


      const user = await db.user.findOne({ where : {email : req.body.email }});
      if(user){
         const password_valid = await bcrypt.compare(req.body.password,user.password);
         if(password_valid){           
             res.send({token: user});
     
         } else {
           res.status(400).json({ error : "Password Incorrect" });
         }
       
       }else{
         res.status(404).json({ error : "User does not exist" });
       }

    });

    app.use('/frost', router);
  };