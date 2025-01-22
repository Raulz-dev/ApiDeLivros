const { v4: uuidv4 } = require("uuid");
const HttpError = require("../error/HttpError");

let books = [
  { id: "1", title: "book one", author: "Author one", quantityAvailable: 4 },
  { id: "2", title: "book two", author: "Author two", quantityAvailable: 8 },
];

module.exports = {
  getAllbooks: () => books.map((book) => ({ id: book.id, title: book.title })),

  getBookById: (id) => books.find((book) => book.id === id),

  createBook: (title, author, quantityAvailable) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      quantityAvailable,
    };
    books.push(newBook);
    return newBook;
  },
  updateBook: (id, updatedBook) => {
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) throw new HttpError(404, "Livro não encontrado");

    books[bookIndex] = { ...books[bookIndex], ...updatedBook };
    return books[bookIndex];
  },

  deleteBook: (id) => {
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) throw new HttpError(404, "Livro não encontrado");

    const deletedBook = books[bookIndex];

    books = books.filter((book) => book.id !== id);
    return deletedBook;
  },
  takeBook: (id) => {
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) throw new HttpError(404, "Livro não encontrado");

    books[bookIndex].quantityAvailable -= 1;
  },
  returnBook: (id) => {
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) throw new HttpError(404, "Livro não encontrado");

    books[bookIndex].quantityAvailable += 1;
  },
};
