const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Book = sequelize.define('Book', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  isbn: { type: DataTypes.STRING },
  publishYear: { type: DataTypes.INTEGER, field: 'publish_year' }
}, {
  tableName: 'books',
  timestamps: true // 
});

module.exports = Book;