const Author = require("./model");

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json({ message: "success", author });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addAuthor: addAuthor,
};
