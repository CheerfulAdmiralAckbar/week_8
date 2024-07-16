const Genre = require("./model");
const Book = require("../books/model");

const addGenre = async (req, res) => {
  console.log("addGenre");
  try {
    const genre = await Genre.create(req.body);

    res.status(201).json({ message: "success", genre });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getGenre = async (req, res) => {
  try {
    const genre = await Genre.findOne({
      where: { genreName: req.params.genreName },
      include: Book,
    });
    res.status(200).json({ message: "success", genre });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addGenre: addGenre,
  getGenre: getGenre,
};
