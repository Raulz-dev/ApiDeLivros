const HttpError = require("../error/HttpError");
const loanModels = require("../models/loanModels");
const booksModel = require("../models/booksModel");

module.exports = {
  // GET /api/loans
  index: (req, res) => {
    const loans = loanModels.getAllLoans();
    res.json(loans);
  },

  // GET /api/loans/:id
  show: (req, res) => {
    const { id } = req.params;
    const loan = loanModels.getLoanById(id);
    if (!loan) throw new HttpError(404, "Empréstimo não encontrado!");
    res.json(loan);
  },

  // POST /api/loans
  save: (req, res) => {
    const user = req.user; // Certifique-se de que o usuário está sendo atribuído corretamente
    const { bookId } = req.body;

    if (typeof bookId !== "string") throw new HttpError(400, "ID de livro inválido!");

    const book = booksModel.getBookById(bookId); // Verificando se o livro existe
    if (!book) throw new HttpError(404, "Livro não encontrado!");

    const newLoan = loanModels.createLoan(user, book); // Criando o empréstimo
    res.status(201).json(newLoan);
  },

  // POST /api/loans/:id/return
  return: (req, res) => {
    const { id } = req.params;
    let loan;
    try {
      loan = loanModels.returnLoan(id);
    } catch (err) {
      if (err instanceof HttpError) {
        return res.status(err.status).json({ message: err.message });
      }

      return res.status(500).json({ message: "Erro interno do servidor." });
    }

    res.status(200).json(loan);
  },
};
