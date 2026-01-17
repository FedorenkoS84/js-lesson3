import Book from "./book.js";

class EBook extends Book {
  constructor(name, author, year, fileFormat) {
    super(name, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      console.error("Формат файлу має бути непорожнім рядком");
      return;
    }
    this._fileFormat = value;
  }

  static fromBook(book, fileFormat) {
    if (!(book instanceof Book)) {
      console.error("Потрібно передати екземпляр Book");
      return null;
    }

    return new EBook(book.name, book.author, book.year, fileFormat);
  }
  printInfo() {
    console.log(
      `Електронна книга: "${this.name}", Aвтор: "${this.author}", Рік: "${this.year}", Формат: "${this.fileFormat}"`
    );
  }
}

export default EBook;
