"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, lendedBooks, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = lendedBooks;
        this.status = status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log("Them thanh cong");
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thu vien chua co sach");
            return;
        }
        console.log("\nSach co trong thu vien");
        this.books.forEach((book) => {
            console.log(`ID: ${book.id} | Tieu de: ${book.title} | Tac gia: ${book.author} | So luong: ${book.stock} | Trang thai: ${book.status}`);
        });
    }
}
const library = new Library();
const book1 = new Book(1, "ABC", "Nguyễn Văn A", 10, "Co san");
const book2 = new Book(2, "Sherlock Hormes", "Trần Thị B", 3, "Co san");
const book3 = new Book(3, "Barbie", "Phạm Văn C", 0, "Het sach");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();
