const Book = require("./model");

const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json({ message: "Book added successfully", book });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    res.status(201).json({ books });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const getBookByTitle = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { title: req.params.title } });

    res.status(200).json({ book });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const getBookByAuthor = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { author: req.body.author } });

    res.status(200).json({ book });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const updateBookByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const updateData = req.body;

    // Assuming 'title' is unique, this will update the first match
    const updatedBook = await Book.update(updateData, {
      where: { title: title },
    });

    if (updated) {
      return res.status(200).json({ book: updatedBook });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteBookByTitle = async (req, res) => {
  try {
    const { title } = req.params;

    const deletedBook = await Book.destroy({
      where: { title: title },
    });

    if (deletedBook) {
      return res.status(200).json({ message: "Book deleted successfully" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteAllBooks = async (req, res) => {
  try {
    const deletedBooks = await Book.destroy({
      where: {},
    });

    if (deletedBooks) {
      return res
        .status(200)
        .json({ message: "All books deleted successfully" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  getBookByTitle: getBookByTitle,
  getBookByAuthor: getBookByAuthor,
  updateBookByTitle: updateBookByTitle,
  deleteBookByTitle: deleteBookByTitle,
  deleteAllBooks: deleteAllBooks,
};
