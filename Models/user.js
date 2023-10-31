const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = User;
