const { Router } = require("express");

const bookRouter = Router();

const {
  addBook,
  getAllBooks,
  getBookByTitle,
  getBookByAuthor,
  updateBookByTitle,
  deleteBookByTitle,
  deleteAllBooks,
} = require("./controllers");

bookRouter.post("/addBook", addBook);
bookRouter.get("/getAllBooks", getAllBooks);
bookRouter.get("/getBookByTitle/:title", getBookByTitle);
bookRouter.get("/getBookByAuthor", getBookByAuthor);
bookRouter.put("/updateBookByTitle/:title", updateBookByTitle);
bookRouter.delete("/deleteBookByTitle/:title", deleteBookByTitle);
bookRouter.delete("/deleteAllBooks", deleteAllBooks);

bookRouter.get("/test", (req, res) => {
  res.status(200).json({ message: "Test successful" });
});

module.exports = bookRouter;
