const express = require("express");
const apiRouter = express.Router();
const booksController = require("../controllers/booksController");

apiRouter.get("/books", booksController.index);
apiRouter.get("/books/:id", booksController.show);

apiRouter.post("/books", booksController.save);
apiRouter.put("/books/:id", booksController.update);
apiRouter.delete("/books/:id", booksController.delete);

module.exports = apiRouter;
