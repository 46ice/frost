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
        references: 'products', // <<< Note, its table's name, not object name
        referencesKey: 'id' // <<< Note, its a column name
    },
    chest_id: {
        type: Sequelize.INTEGER,
        references: 'chests',
        referencesKey: 'id' 
    }
    });
  
    return ProductInChest;
  };