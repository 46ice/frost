const db = require("../models");

module.exports = app => {
  
    var router = require("express").Router();
  
    //procura todos os carrinhos
    router.get("/chest/all", async (req, res) => {
      try {
          const chests = await db.chest.findAll();
          return res.send({ chests })
      } catch(err) {
          console.error(err);
      }
      return res.json({msg: "None"})
    });
    

    //procura um carrinho
    router.get("/chest/:id", async(req, res) => {
      const id = req.params.id;
      await db.chest.findByPk(id).then(data => {return res.send(data);});
    });


    //atualiza um carrinho
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


    //deleta um carrinho
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


    //adiciona um produto no carrinho
    router.get("/chest/add/:id/:idUser", async (req, res) => {

      const product_in_chest = {
        product_id: parseInt(req.params.id) ,
        chest_id:  parseInt(req.params.idUser)
      }

      await db.products_in_chest.create(product_in_chest)
        .then(data => {

          res.status(200).redirect('http://localhost:5173/home');
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Não foi possivel salvar o produto no carrinho."
          });
        });
    
    
  })

  app.use('/frost', router);
};