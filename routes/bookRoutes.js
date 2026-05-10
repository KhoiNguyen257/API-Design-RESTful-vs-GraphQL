const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const Author = require('../models/Author');

router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll({
      include: [{ model: Author }]
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server', error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id, {
      include: [{ model: Author }]
    });
    if (!book) return res.status(404).json({ message: 'Không tìm thấy sách' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server', error });
  }
});

module.exports = router;