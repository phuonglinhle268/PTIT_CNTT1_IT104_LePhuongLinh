import { IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import React from 'react';

interface StudentItemProps {
  student: {
    id?: number;
    name: string;
    age: number;
    grade: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

const StudentItem: React.FC<StudentItemProps> = ({ student, onEdit, onDelete }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-2">
      <div>
        <span className="font-bold">{student.name}</span>
        <br />
        <span className="text-gray-600">Age: {student.age} - Grade: {student.grade}</span>
      </div>
      <div>
        <IconButton onClick={onEdit} color="primary">
          <Edit />
        </IconButton>
        <IconButton onClick={onDelete} color="error">
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default StudentItem;