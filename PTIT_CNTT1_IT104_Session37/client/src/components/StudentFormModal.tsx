


import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { createStudent, updateStudent } from '../apis/student.api';
import type { Student } from '../interfaces/student.interface';
import { clearSelectedStudent } from '../redux/slices/student.slice';

interface StudentFormModalProps {
  open: boolean;
  onClose: () => void;
}

const StudentFormModal: React.FC<StudentFormModalProps> = ({ open, onClose }) => {
  const dispatch = useAppDispatch();
  const { selectedStudent } = useAppSelector((state) => state.student);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (selectedStudent) {
      setName(selectedStudent.name || '');
      setAge(selectedStudent.age?.toString() || '');
      setGrade(selectedStudent.grade || '');
    } else {
      setName('');
      setAge('');
      setGrade('');
    }
    setError('');
  }, [selectedStudent, open]);

  const validateInput = (name: string, age: string, grade: string) => {
    if (!name.trim()) {
      return 'Tên sinh viên không được để trống';
    }
    const ageNum = parseInt(age);
    if (!age || isNaN(ageNum) || ageNum <= 0) {
      return 'Tuổi phải là số dương';
    }
    if (!grade.trim()) {
      return 'Vui lòng nhập lớp';
    }
    return '';
  };

  const handleSubmit = () => {
    const validationError = validateInput(name, age, grade);
    if (validationError) {
      setError(validationError);
      return;
    }

    const studentData: Omit<Student, 'id'> = {
      name: name.trim(),
      age: parseInt(age),
      grade: grade.trim(),
    };

    if (selectedStudent) {
      dispatch(updateStudent({ ...studentData, id: selectedStudent.id }));
      dispatch(clearSelectedStudent());
    } else {
      dispatch(createStudent(studentData));
    }

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{selectedStudent ? 'Sửa Sinh Viên' : 'Thêm Sinh Viên'}</DialogTitle>
      <DialogContent>
        <TextField
          label="Tên"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          error={error.includes('Tên')}
          helperText={error.includes('Tên') ? error : ''}
        />
        <TextField
          label="Tuổi"
          variant="outlined"
          fullWidth
          value={age}
          onChange={(e) => setAge(e.target.value)}
          margin="normal"
          type="number"
          error={error.includes('Tuổi')}
          helperText={error.includes('Tuổi') ? error : ''}
        />
        <TextField
          label="Lớp"
          variant="outlined"
          fullWidth
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          margin="normal"
          error={error.includes('lớp')}
          helperText={error.includes('lớp') ? error : ''}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Hủy
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {selectedStudent ? 'Lưu' : 'Thêm'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StudentFormModal;