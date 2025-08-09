class Book {
    private title : string;
    private author : string;
    private id : number;
    private year : number;

    constructor(id:number, title:string, author:string, year:number){
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        
    }
    getId() : number{
        return this.id;
    }
    getTitle() : string {
        return this.title;
    }
    getBook() : string {
        return `ID: ${this.id}, Tieu de: ${this.title}, Tac gia: ${this.author}`;
    }
    update(title:string, author: string):void{
        this.title = title;
        this.author = author;
    }
    updateInfo(title:string, author:string, year:number): void {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Library {
    private books : Book[] = [];

    addBook(book : Book): void {
        this.books.push(book);
    }
    showBook() : void {
        if(this.books.length === 0){
            console.log("Chua co sach");
            return;
        } else {
            this.books.forEach((book) => {
                console.log(`${book.getBook()}`);
            });
        }
    }
    //bai 7
    updateBook(id:number, updateTitle:string, updateAuthor:string): void {
        const book = this.books.find(b => b.getId() === id);
        //find: tim ptu dau tien (dung lai ngay khi tim thay)
        if (book){
            book.update(updateTitle, updateAuthor);
        } else {
            console.log("Khong co sach tuong ung");
        }
    }
    
    //bai 8
    searchTitle(key : string): void {
        const found = this.books.filter(book => 
            //filter: tra mang moi chua TAT CA gtri thoa man, loc tat ca ptu
            book.getTitle().toLowerCase().includes(key.toLowerCase())
        );
        if (found.length === 0) {
            console.log("Khong co sach");
            return;
        }
        found.forEach((book) => {
            console.log(book.getBook());
        });
    }
    
    //bai 9
    delete(id : number): void {
        const bookID = this.books.findIndex(book => book.getId() === id);
        if (bookID !== -1) {
            this.books.splice(bookID, 1);  //splice:thay doi mang goc(them,sua,xoa)
            console.log("Xoa thanh cong");
        } else {
            console.log("Khong co sach tuong ung");
        }
    }
    updateByID(id:number, newTitle:string, newAuthor:string, newYear:number): void {
        const book = this.books.find(b => b.getId() === id);
        if (book){
            book.updateInfo(newTitle, newAuthor, newYear);
        } else {
            console.log("Khong co sach tuong ung")
        }
    }
}
const book1 = new Book(1, "Bup sen xanh", "Son Tung", 1981);
const book2 = new Book(2, "Lao hac", "Nam Cao", 1943);
const book3 = new Book(3, "So do", "Vu Trong Phung", 1938);
const book4 = new Book(4, "Nhung ngay tho au", "Nguyen Hong", 1940);
const book5 = new Book(5, "Tat den", "Ngo Tat To", 1937);

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.showBook();

library.updateBook(5, "Chi Pheo", "Nam Cao");
console.log("Danh sach moi");
library.showBook();

console.log("Sach duoc tim thay: ");
library.searchTitle("bup sen xanh");

library.updateByID(3, "Ha Noi bam sau pho phuong", "Thach Lam", 1943);
console.log("Danh sach sau cap nhat");
library.showBook();

library.delete(2);
console.log("Danh sach sau khi xoa");
library.showBook();