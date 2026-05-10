const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false 
  }
);

// Hàm kiểm tra kết nối
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Kết nối Database thành công!');
  } catch (error) {
    console.error('❌ Kết nối Database thất bại:', error);
  }
};

module.exports = { sequelize, connectDB };