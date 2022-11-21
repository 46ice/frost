module.exports = (sequelize, Sequelize) => {
    const Buy = sequelize.define("buy", {
      id: {
        type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
      },
      user_id: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      }
    
    });
  
    return Buy;
  };