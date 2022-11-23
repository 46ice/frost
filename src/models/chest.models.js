module.exports = (sequelize, Sequelize) => {
    const Chest = sequelize.define("chest", {
      id: {
        type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
      },
      qnty: {
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.FLOAT
      }
    
    });
  
    return Chest;
  };