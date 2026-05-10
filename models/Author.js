const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Author = sequelize.define('Author', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  bio: { type: DataTypes.TEXT }
}, {
  tableName: 'authors',
  timestamps: true 
});

module.exports = Author;