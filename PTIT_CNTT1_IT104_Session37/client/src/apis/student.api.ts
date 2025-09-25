import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";
import type { Student } from "../interfaces/student.interface";


export const getAllStudents = createAsyncThunk("student/getAllStudents", async() => {
    const response = await axiosInstance.get("students");
    return response.data;
})

export const createStudent = createAsyncThunk(
    "student/createStudent",
    async (student: Omit<Student, "id">) => {
        const response = await axiosInstance.post("student", student);
        return response.data;
    }
);

export const updateStudent = createAsyncThunk(
    "student/updateStudent",
    async (student: Student) => {
        const {id, ...updateData} = student;
        const response = await axiosInstance.put(`students/${id}`, updateData);
        return response.data;
    }
);

export const deleteStudent = createAsyncThunk(
    "student/deleteStudent",
    async(id:number) => {
        await axiosInstance.delete(`students/${id}`);
        return id;
    }
)