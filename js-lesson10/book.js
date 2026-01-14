class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== "string" || value.trim() === "") {
      console.log("Name не має бути порожнім рядком");
      return;
    }
    this._name = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      console.error("Author не має бути порожнім рядком");
      return;
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== "number" || value <= 0) {
      console.error("Рік має бути додатнім числом");
      return;
    }
    this._year = value;
  }

  static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      console.error("Передайте непорожній масив книг");
      return null;
    }

    let oldestBook = books[0];

    for (let book of books) {
      if (book.year < oldestBook.year) {
        oldestBook = book;
      }
    }

    return oldestBook;
  }

  printInfo() {
    console.log(this.name, this.author, this.year);
  }
}

export default Book;
