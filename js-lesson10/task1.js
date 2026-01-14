import Book from "./book.js";
import EBook from "./ebook.js";

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);

book1.printInfo();
book2.printInfo();

const ebook1 = new EBook("Digital Fortress", "Dan Brown", 1998, "PDF");
// static
const books = [book1, book2, ebook1];
const oldestBook = Book.findOldestBook(books);
console.log("Найдавніша книга: ");
oldestBook.printInfo();

// getters
console.log(book1.name);
console.log(ebook1.fileFormat);

// valid setters
book1.name = "Animal Farm";
// ebook1.fileFormat = "EPUB";

// NEGATIVE TESTS
book1.year = -10;
book1.author = "";
ebook1.fileFormat = 123;

const ebookFromBook = EBook.fromBook(book1, "EPUB");

ebookFromBook.printInfo();
// POSITIVE TEST
EBook.fromBook(book1, "PDF");
// NEGATIVE TESTS
// EBook.fromBook({}, "PDF");

ebook1.printInfo();
