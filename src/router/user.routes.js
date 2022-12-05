const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = app => {
  
    var router = require("express").Router();
  
  
    //cria usuario
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


    //procura todos os usuarios
    router.get("/user/all", async (req, res) => {
      try {
          const users = await db.user.findAll()
          return res.send({ users })
      } catch(err) {
          console.error(err);
      }
      return res.json({msg: "None"})
    });

  //procura um usuario
  router.get("/user/:id", async(req, res) => {
    const id = req.params.id;
    await db.user.findByPk(id).then(data => {return res.send(data);});
  });


  //atualiza um usuario
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

  //deleta um usuario
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



    app.use('/frost', router);
  };