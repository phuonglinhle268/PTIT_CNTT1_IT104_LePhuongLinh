"use strict";
class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookById(id) {
        return this.books.find((book) => book.id === id);
    }
    removeBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
    updateBook(id, newBook) {
    }
}
