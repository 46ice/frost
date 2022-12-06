const db = require("../models");


module.exports = app => {
  
    var router = require("express").Router();
  
  //cria produtos
    router.get("/product/create/", async(req, res) => {
      
      product1 = {
        name: 'HARDWARE',
        description: 'Somos uma empresa impar no mercado atual, com o diferencial de estar presente em todos os meios para suporte de hardware para a sua necessidade e de sua empresa.',
        price: 359.00,
      };
   
      product2 = {
        name: 'SOFWARE',
        description: 'Desenvolvemos todos os tipos de software, contando com uma equipe qualificada para melhor atender sua necessidade.',
        price: 1789.90,
      };
  
      product3 = {
        name: 'INFRAESTRUTURA',
        description: 'Realizamos a instalação da sua rede, cabeamento, instalação de roteadores e Switchs. Tudo que sua estrutura precisar.',
        price: 1100.00,
      };
  
      product4 = {
        name: 'SEGURANÇA',
        description: 'Segrança total ao seu comptador, seja ele pessoal ou empresarial no qual configuramos e instalamos Servidores, Firewall e Anti-virus implementando sempre a melhor opção e solução para sua empresa.',
        price: 3459.00,
      };


      await db.product.create(product1).then(data => {res.send(data);}).catch(err => {});

      await db.product.create(product2).then(data => {res.send(data);}).catch(err => {});
      
      await db.product.create(product3).then(data => {res.send(data);}).catch(err => {});
      
      await db.product.create(product4).then(data => {res.send(data);}).catch(err => {});
      
    });

    //procura todos os produtos
    router.get("/product/all", async (req, res) => {
      try {
          const products = await db.product.findAll()
          return res.send({ products })
      } catch(err) {
          console.error(err);
      }
      return res.json({msg: "None"})
    });


    //procura um produto
    router.get("/product/:id", async(req, res) => {
      const id = req.params.id;
      await db.product.findByPk(id).then(data => {return res.send(data);});
    });


    //atualiza um produto
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


    //deleta um produto
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


    
    

    app.use('/frost', router);
  };