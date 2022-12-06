module.exports = (sequelize, Sequelize) => {
    const ProductInChest = sequelize.define("products_in_chest", {
      id: {
        type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
      },

      product_id: {
        type: Sequelize.INTEGER
        
      },
      chest_id: {
          type: Sequelize.INTEGER
         
      }
      });
  
    return ProductInChest;
  };