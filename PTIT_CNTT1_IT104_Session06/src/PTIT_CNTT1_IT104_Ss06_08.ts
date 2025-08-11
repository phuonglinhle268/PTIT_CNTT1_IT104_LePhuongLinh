class Book {
    public id: number;
    public title: string;
    public author: string;
    public stock: number;
    public status: string;

    constructor(id: number, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}

class Member {
    public id: number;
    public name: string;
    public contact: string;
    public lendedBooks: LendedBook[];
    public status: string;

    constructor(id: number, name: string, contact: string, lendedBooks: LendedBook[], status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = lendedBooks;
        this.status = status;
    }
}

class LendedBook {
    public memberId: number;
    public bookId: number;
    public dueDate: Date;

    constructor(memberId: number, bookId: number, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}

class Library {
    public books: Book[] = [];
    public members: Member[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log("Them thanh cong");
    }

    showBooks(): void {
        if (this.books.length === 0) {
            console.log("Thu vien chua co sach");
            return;
        }
        console.log("\nSach co trong thu vien");
        this.books.forEach((book) => {
            console.log(
                `ID: ${book.id} | Tieu de: ${book.title} | Tac gia: ${book.author} | So luong: ${book.stock} | Trang thai: ${book.status}`
            );
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
