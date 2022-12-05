module.exports = (sequelize, Sequelize) => {
    const ProductInChest = sequelize.define("products_in_chest", {
      id: {
        type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'products',
            key: 'id'
        }
      },
      chest_id: {
          type: Sequelize.INTEGER,
          references: {
              model: 'chest',
              key: 'id'
          }
      }
      });
  
    return ProductInChest;
  };