const { Router } = require("express");

const genreRouter = Router();

const { addGenre, getGenre } = require("./controllers");

genreRouter.post("/addGenre", addGenre);
genreRouter.get("/getGenre/:genreName", getGenre);

module.exports = genreRouter;
