class Book {
    id:number;
    title:string;
    author:string;
    year:number;

    constructor(id:number, title:string, author:string, year:number){
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Library<T> {
    private books : T[] = [];
    addBook(book:T): void {
        this.books.push(book);
    }

    getBookById(id:number) : T | undefined {
        return this.books.find((book: T) => (book as Book).id === id);
    }

    removeBook(id: number){
        this.books = this.books.filter((book: T) => (book as Book).id !== id);
    }

    updateBook(id:number | string, newBook : Omit<T, "id">){
    }
}