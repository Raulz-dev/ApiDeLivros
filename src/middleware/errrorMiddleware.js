const HttpError = require("../error/HttpError");

module.exports = (erro, req, res, next) => {
  if (error) {
    if (error instanceof HttpError) {
      res.status(error.status).json({ message: error.message });
    } else {
      res.status(404).json({ message: error.message });
    }
  } else {
    next();
  }
};
