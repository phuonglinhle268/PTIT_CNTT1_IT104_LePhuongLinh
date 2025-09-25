import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { getAllStudents, deleteStudent } from '../apis/student.api';
import StudentFormModal from './StudentFormModal';
import FilterControls from './FilterControls';
import StudentItem from './StudentItem';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { setSelectedStudent } from '../redux/slices/student.slice';
import type { Student } from '../interfaces/student.interface';

const StudentList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { students, status, error } = useAppSelector((state) => state.student);
  const [openForm, setOpenForm] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [filters, setFilters] = useState({
    search: '',
    grade: 'Tất cả',
    sort: 'Name A -> Z',
  });

  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  const handleAdd = () => {
    setOpenForm(true);
  };

  const handleEdit = (student: Student) => {
    dispatch(setSelectedStudent(student));
    setOpenForm(true);
  };

  const handleDelete = (id: number) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId) {
      dispatch(deleteStudent(deleteId));
      setDeleteId(null);
    }
  };

  const handleClear = () => {
    setFilters({
      search: '',
      grade: 'Tất cả',
      sort: 'Name A -> Z',
    });
  };

  const uniqueGrades = ['Tất cả', ...new Set(students.map((s) => s.grade))];

  let filteredStudents = students.filter((student) => {
    const matchSearch = student.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchGrade = filters.grade === 'Tất cả' || student.grade === filters.grade;
    return matchSearch && matchGrade;
  });

  filteredStudents = filteredStudents.sort((a, b) => {
    if (filters.sort === 'Name A -> Z') {
      return a.name.localeCompare(b.name);
    } else if (filters.sort === 'Name Z -> A') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  if (error) {
    return <h1 className="text-red-500 text-center">Đã có lỗi xảy ra: {error}</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 flex items-center">
        <span role="img" aria-label="graduation cap" className="mr-2">🎓</span>
        Student Manager
      </h1>
      <Button variant="contained" color="primary" onClick={handleAdd} className="mb-4">
        ADD STUDENT
      </Button>
      <FilterControls
        search={filters.search}
        grade={filters.grade}
        sort={filters.sort}
        grades={uniqueGrades}
        onSearchChange={(search) => setFilters({ ...filters, search })}
        onGradeChange={(grade) => setFilters({ ...filters, grade })}
        onSortChange={(sort) => setFilters({ ...filters, sort })}
        onClear={handleClear}
      />
      {status === 'pending' && (
        <div className="flex justify-center mb-4">
          <div className="loader animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      <div>
        {filteredStudents.map((student) => (
          <StudentItem
            key={student.id}
            student={student}
            onEdit={() => handleEdit(student)}
            onDelete={() => handleDelete(student.id || 0)}
          />
        ))}
      </div>
      <StudentFormModal open={openForm} onClose={() => setOpenForm(false)} />
      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>Bạn có chắc muốn xóa sinh viên này?</DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)} color="primary">
            Hủy
          </Button>
          <Button onClick={confirmDelete} color="error">
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StudentList;