const bookstoreClient = require("../client/bookstoreClient");

const getBooks = () => bookstoreClient.get("/BookStore/v1/Books");
const getBookById = (isbn) => bookstoreClient.get(`/BookStore/v1/Book/${isbn}`);

module.exports = {
  getBooks,
  getBookById,
};
