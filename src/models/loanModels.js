const { v4: uuidv4 } = require("uuid");
const HttpError = require("../error/HttpError");
const booksModel = require("./booksModel");
const loans = [
  {
    id: "1",
    userId: "1",
    bookId: "1",
    loanDate: new Date("2024-01-01"),
    returnDate: null,
    isReturned: false,
    isLate: true,
  },
];

module.exports = {
  getAllLoans: () => loans,

  getLoanById: (id) => loans.find((loan) => loan.id === id),

  createLoan: (user, book) => {
    if (book.quantityAvailable < 1) throw new HttpError(400, "Não há exemplares disponíveis!");

    const today = new Date();
    const returnDate = new Date();
    returnDate.setDate(today.getDate() + 14);

    const newLoan = {
      id: uuidv4(),
      userId: user.id,
      bookId: book.id,
      loanDate: today,
      returnDate: returnDate,
      isReturned: false,
      isLate: false,
    };

    loans.push(newLoan);
    booksModel.takeBook(book.id); // Certifique-se de que essa função atualiza a quantidade de livros no modelo

    return newLoan;
  },

  returnLoan: (id) => {
    const loanIndex = loans.findIndex((loan) => loan.id === id);
    if (loanIndex === -1) throw new HttpError(404, "Empréstimo não encontrado!");

    const loan = loans[loanIndex];
    if (loan.isReturned) throw new HttpError(400, "Este empréstimo já foi devolvido!"); // Lançando erro aqui

    loan.isReturned = true;

    const today = new Date();
    const limitDate = new Date(loan.returnDate);
    loan.isLate = today > limitDate;
    loan.returnDate = today;

    booksModel.returnBook(loan.bookId); // Certifique-se de que essa função aumenta a quantidade de livros no modelo
    return loan;
  },
};
