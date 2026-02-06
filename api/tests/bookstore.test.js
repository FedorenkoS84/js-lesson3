const api = require("../src/services/bookstore.service");

describe("Bookstore API tests", () => {
  test("GET /Books", async () => {
    const response = await api.getBooks();
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data.books)).toBe(true);
  });

  test("GET /Book/:isbn", async () => {
    const booksResponse = await api.getBooks();
    const isbn = booksResponse.data.books[0].isbn;

    const response = await api.getBookById(isbn);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("isbn", isbn);
  });
});
