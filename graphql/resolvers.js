const Book = require('../models/Book');
const Author = require('../models/Author');
const Category = require('../models/Category');

const resolvers = {
  Query: {
    // Lấy danh sách sách
    books: async () => {
      return await Book.findAll({ include: [Author, Category] });
    },
    // Lấy chi tiết 1 cuốn sách
    book: async (_, { id }) => {
      return await Book.findByPk(id, { include: [Author, Category] });
    },
    authors: async () => await Author.findAll({ include: [Book] }),
    categories: async () => await Category.findAll({ include: [Book] }),
  },
  // Giải quyết quan hệ nested để tránh lỗi N+1
  Book: {
    author: async (parent) => await parent.getAuthor(),
    categories: async (parent) => await parent.getCategories(),
  }
};

module.exports = resolvers;