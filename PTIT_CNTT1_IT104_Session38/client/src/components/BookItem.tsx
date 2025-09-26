import { IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import React from 'react';

interface BookItemProps {
  book: {
    id?: number;
    title: string;
    author: string;
    year: number;
    category: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onEdit, onDelete }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-2">
      <div>
        <span className="font-bold">{book.title}</span>
        <br />
        <span className="text-gray-600">{book.author} - {book.year} - {book.category}</span>
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

export default BookItem;