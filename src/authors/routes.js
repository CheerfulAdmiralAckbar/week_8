const { Router } = require("express");

const authorRouter = require("./model");

const { addAuthor } = require("./controllers");

authorRouter.post("/addAuthor", addAuthor);

module.exports = authorRouter;
