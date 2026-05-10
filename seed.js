const { sequelize } = require('./config/db');
const Author = require('./models/Author');
const Category = require('./models/Category');
const Book = require('./models/Book');

Author.hasMany(Book, { foreignKey: 'author_id' });
Book.belongsTo(Author, { foreignKey: 'author_id' });

Book.belongsToMany(Category, { through: 'book_categories', foreignKey: 'book_id' });
Category.belongsToMany(Book, { through: 'book_categories', foreignKey: 'category_id' });

const seedData = async () => {
  try {
    // Xóa dữ liệu cũ để tránh trùng lặp khi chạy lại
    await sequelize.sync({ force: true });
    console.log('--- Đang khởi tạo dữ liệu mẫu ---');

    // 1. Tạo Tác giả
    const authors = await Author.bulkCreate([
      { name: 'Robert C. Martin', email: 'unclebob@example.com', bio: 'Tác giả của Clean Code.' },
      { name: 'Andrew Hunt', email: 'andy@example.com', bio: 'Tác giả của The Pragmatic Programmer.' },
      { name: 'Marijn Haverbeke', email: 'marijn@example.com', bio: 'Tác giả của Eloquent JavaScript.' }
    ]);

    // 2. Tạo Thể loại
    const categories = await Category.bulkCreate([
      { name: 'Software Engineering', description: 'Kỹ thuật phần mềm chuyên sâu.' },
      { name: 'Programming', description: 'Ngôn ngữ lập trình tổng quát.' },
      { name: 'Web Development', description: 'Lập trình web hiện đại.' }
    ]);

    // 3. Tạo Sách và gán mối quan hệ
    const book1 = await Book.create({
      title: 'Clean Code',
      isbn: '978-0132350884',
      publishYear: 2008,
      description: 'A Handbook of Agile Software Craftsmanship.',
      author_id: authors[0].id 
    });

    const book2 = await Book.create({
      title: 'Eloquent JavaScript',
      isbn: '978-1593279509',
      publishYear: 2018,
      description: 'A Modern Introduction to Programming.',
      author_id: authors[2].id 
    });

    // 4. Gán Thể loại cho Sách (Quan hệ Nhiều - Nhiều)
    await book1.addCategories([categories[0], categories[1]]);
    await book2.addCategories([categories[1], categories[2]]);

    console.log('✅ Đã nạp dữ liệu mẫu thành công!');
    process.exit();
  } catch (error) {
    console.error('❌ Lỗi khi nạp dữ liệu:', error);
    process.exit(1);
  }
};

seedData();