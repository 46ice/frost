module.exports = (sequelize, Sequelize) => {
    const ProductInBuy = sequelize.define("products_in_buy", {
      id: {
        type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
    },
    product_id: {
        type: Sequelize.INTEGER,
        // references: {
        //     model: 'products',
        //     key: 'id'
        // }
    },
    buy_id: {
        type: Sequelize.INTEGER,
        // references: {
        //     model: 'buys',
        //     key: 'id'
        // }
    }
    });

  
    return ProductInBuy;
  };