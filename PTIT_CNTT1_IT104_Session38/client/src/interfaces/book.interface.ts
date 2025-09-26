export interface Book {
  id?: number;
  title: string;
  author: string;
  year: number;
  category: string;
}

export interface BookState {
  status: 'idle' | 'pending' | 'success' | 'failed';
  books: Book[];
  error: string | null;
  selectedBook: Book | null;
}