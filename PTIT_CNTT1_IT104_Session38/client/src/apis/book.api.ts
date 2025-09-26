import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../utils/axiosInstance"
import type { Book } from "../interfaces/book.interface";

export const getAllBooks = createAsyncThunk("book/getAllBooks", async() => {
    const response = await axiosInstance.get("books");
    return response.data;
});

export const createBook = createAsyncThunk(
    "book/createBook",
    async (book: Omit<Book, "id">) => {
        const response = await axiosInstance.post("books", book);
        return response.data;
    }
);

export const updateBook = createAsyncThunk(
    "book/updateBook",
    async (book: Book) => {
        const {id, ...updateData} = book;
        const response = await axiosInstance.put( `books/${id}`, updateData);
        return response.data;
    }
);

export const deleteBook = createAsyncThunk(
    "book/deleteBook",
    async (id: number) => {
        await axiosInstance.delete(`books/${id}`);
        return id;
    }
)







