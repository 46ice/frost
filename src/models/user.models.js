module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      id: {
        type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      email_recover: {
        type: Sequelize.STRING
      },
      chest_id: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };