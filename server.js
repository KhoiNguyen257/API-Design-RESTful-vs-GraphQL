const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { sequelize, connectDB } = require('./config/db');

// Import Models và Mối quan hệ
const Author = require('./models/Author');
const Category = require('./models/Category');
const Book = require('./models/Book');

// Import GraphQL
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const bookRoutes = require('./routes/bookRoutes');
const app = express();
const PORT = 5000;

const startServer = async () => {
  await connectDB();
  await sequelize.sync();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

app.use(cors());
app.use(express.json());
// Thiết lập mối quan hệ
Author.hasMany(Book, { foreignKey: 'author_id' });
Book.belongsTo(Author, { foreignKey: 'author_id' });
Book.belongsToMany(Category, { through: 'book_categories', foreignKey: 'book_id' });
Category.belongsToMany(Book, { through: 'book_categories', foreignKey: 'category_id' });

app.use('/api/books', bookRoutes);

const startServer = async () => {
  await connectDB();
  await sequelize.sync(); 
  
  app.listen(PORT, () => {
    console.log(`🚀 Server REST đang chạy tại: http://localhost:${PORT}/api/books`);
  });
};
  app.use(
    '/graphql',
    (req, res, next) => {
      if (req.method === 'GET' && !req.body) {
        req.body = {};
      }
      next();
    },
    expressMiddleware(server)
  );

  app.listen(PORT, () => {
    console.log(`🚀 REST API: http://localhost:${PORT}/api/books`);
    console.log(`🚀 GraphQL: http://localhost:${PORT}/graphql`);
  });
};

startServer();