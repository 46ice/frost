const db = require("../models");

module.exports = app => {
  
    var router = require("express").Router();
  
    //cria compra  
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

    
    //procura todas as compras
    router.get("/buy/all", async (req, res) => {
      try {
          const buy = await db.buys.findAll()
          return res.send({ buy })
      } catch(err) {
          console.error(err);
      }
      return res.json({msg: "None"})
    });


    //procura uma compra
    router.get("/buy/:id", async(req, res) => {
      const id = req.params.id;
      await db.buys.findByPk(id).then(data => {return res.send(data);});
    });


    //atualiza uma compra
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


    //deleta uma compra
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
    
  
    app.use('/frost', router);
  };