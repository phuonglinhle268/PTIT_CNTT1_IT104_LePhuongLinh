import { createSlice } from '@reduxjs/toolkit';
import { getAllStudents, createStudent, updateStudent, deleteStudent } from '../../apis/student.api';
import type { StudentState } from '../../interfaces/student.interface';

const initialState: StudentState = {
  status: 'idle',
  students: [],
  error: null,
  selectedStudent: null,
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setSelectedStudent(state, action) {
      state.selectedStudent = action.payload;
    },
    clearSelectedStudent(state) {
      state.selectedStudent = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllStudents.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getAllStudents.fulfilled, (state, action) => {
        state.status = 'success';
        state.students = action.payload;
      })
      .addCase(getAllStudents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Lỗi khi lấy danh sách sinh viên';
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.students = state.students.map((stu) =>
          stu.id === action.payload.id ? action.payload : stu
        );
        state.selectedStudent = null;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter((stu) => stu.id !== action.payload);
      });
  },
});

export const { setSelectedStudent, clearSelectedStudent } = studentSlice.actions;
export default studentSlice.reducer;