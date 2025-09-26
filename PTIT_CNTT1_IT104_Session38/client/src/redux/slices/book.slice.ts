import { createSlice } from "@reduxjs/toolkit";
import type { BookState } from "../../interfaces/book.interface";
import { createBook, deleteBook, getAllBooks, updateBook } from "../../apis/book.api";


const initialState: BookState = {
    status: 'idle',
    books: [],
    error: null,
    selectedBook: null,
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        selectedBook(state, action) {
            state.selectedBook = action.payload;
        }, 
        clearSelectedBook(state){
            state.selectedBook = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllBooks.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(getAllBooks.fulfilled, (state, action) => {
            state.status = 'success';
            state.books = action.payload;
        })
        .addCase(getAllBooks.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || "Lấy danh sách lỗi";
        })
        .addCase(createBook.fulfilled, (state, action) => {
            state.books.push(action.payload)
        })
        .addCase(updateBook.fulfilled, (state, action) => {
            state.books = state.books.map((book) => 
            book.id === action.payload.id ? action.payload : book
        );
        state.selectedBook = null;
        })
        .addCase(deleteBook.fulfilled, (state, action) => {
            state.books = state.books.filter((book) => book.id !== action.payload);
        })
    },
});

export const {setSelectedBook, clearSelectedBook} = bookSlice.actions;
export default bookSlice.reducer;











