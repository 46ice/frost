const db = require("../models");
const bcrypt = require("bcrypt");


module.exports = app => {
  
    var router = require("express").Router();
  
  
    router.post("/login", async(req, res) => {


      const user = await db.user.findOne({ where : {email : req.body.email }});
      if(user){
         const password_valid = await bcrypt.compare(req.body.password,user.password);
         if(password_valid){
             //token = jwt.sign({ "id" : user.id,"email" : user.email,"first_name":user.first_name },process.env.SECRET);
             res.send({token: user});
             //res.status(200).redirect('http://localhost:5173/home');
             
         } else {
           res.status(400).json({ error : "Password Incorrect" });
         }
       
       }else{
         res.status(404).json({ error : "User does not exist" });
       }

    });

    router.post("/user/create", async(req, res) => {
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
      const user = {
        name: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        contact: req.body.contact,
        email_recover: req.body.email_recover,
        chest_id: req.body.chest_id
      };
      console.log(user);
    
  
      await db.user.create(user)
        .then(data => {

          res.status(200).redirect('http://localhost:5173/home');
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message + hashedPassword || "Some error occurred while creating the user."
          });
        });
    });

    router.post("/product/create", async(req, res) => {

      const product = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      };
    
    
      await db.product.create(product)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the user."
          });
        });
    });
    
    router.post("/buy/create", async(req, res) => {
      
      const buy = {
        user_id: req.body.user_id,
        value: req.body.value
      };
    
      await db.buys.create(buy)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the user."
          });
        });
    });


    router.get("/user/all", async (req, res) => {
      try {
          const users = await db.user.findAll()
          return res.send({ users })
      } catch(err) {
          console.error(err);
      }
      return res.json({msg: "None"})
    });

    router.get("/product/all", async (req, res) => {
      try {
          const products = await db.product.findAll()
          return res.send({ products })
      } catch(err) {
          console.error(err);
      }
      return res.json({msg: "None"})
    });

    router.get("/buy/all", async (req, res) => {
      try {
          const buy = await db.buys.findAll()
          return res.send({ buy })
      } catch(err) {
          console.error(err);
      }
      return res.json({msg: "None"})
    });

    router.get("/chest/all", async (req, res) => {
      try {
          const chests = await db.chest.findAll();
          return res.send({ chests })
      } catch(err) {
          console.error(err);
      }
      return res.json({msg: "None"})
    });

    router.get("/user/:id", async(req, res) => {
      const id = req.params.id;
      await db.user.findByPk(id).then(data => {return res.send(data);});
    });
        
        
    router.get("/product/:id", async(req, res) => {
      const id = req.params.id;
      await db.product.findByPk(id).then(data => {return res.send(data);});
    });

    router.get("/buy/:id", async(req, res) => {
      const id = req.params.id;
      await db.buys.findByPk(id).then(data => {return res.send(data);});
    });

    router.get("/chest/:id", async(req, res) => {
      const id = req.params.id;
      await db.chest.findByPk(id).then(data => {return res.send(data);});
    });

    router.put("/user/update/:id", async (req, res) => {
      const id = req.params.id;
    
      await db.user.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Tutorial was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Tutorial with id=" + id
          });
        });
    });


    router.put("/product/update/:id", async (req, res) => {
      const id = req.params.id;
    
      await db.product.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Tutorial was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Tutorial with id=" + id
          });
        });
    });

    router.put("/buy/update/:id", async (req, res) => {
      const id = req.params.id;
    
      await db.buy.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Tutorial was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Tutorial with id=" + id
          });
        });
    });

    router.put("/chest/update/:id", async (req, res) => {
      const id = req.params.id;
    
      await db.chest.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Tutorial was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Tutorial with id=" + id
          });
        });
    });
    
  
    router.delete("/user/delete/:id", async (req, res) => {
      const id = req.params.id;
    
      await db.user.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Tutorial was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Tutorial with id=" + id
          });
        });
    });

    router.delete("/product/delete/:id", async (req, res) => {
      const id = req.params.id;
    
      await db.product.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Tutorial was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Tutorial with id=" + id
          });
        });
    });
    
    router.delete("/buy/delete/:id", async (req, res) => {
      const id = req.params.id;
    
      await db.buys.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Tutorial was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Tutorial with id=" + id
          });
        });
    });

    router.delete("/chest/delete/:id", async (req, res) => {
      const id = req.params.id;
    
      await db.chest.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Tutorial was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Tutorial with id=" + id
          });
        });
    });
  
    app.use('/frost', router);
  };