import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { getAllBooks, deleteBook } from '../apis/book.api';
import BookFormModal from './BookFormModal';
import FilterControls from './FilterControls';
import BookItem from './BookItem';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { setSelectedBook } from '../redux/slices/book.slice';

const BookList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { books, status, error } = useAppSelector((state) => state.book);
  const [openForm, setOpenForm] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [filters, setFilters] = useState({
    search: '',
    category: 'All',
    sort: 'Title A -> Z',
  });

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const handleAdd = () => {
    setOpenForm(true);
  };

  const handleEdit = (book:unknown) => {
    dispatch(setSelectedBook(book));
    setOpenForm(true);
  };

  const handleDelete = (id: number) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId) {
      dispatch(deleteBook(deleteId));
      setDeleteId(null);
    }
  };

  const handleClear = () => {
    setFilters({
      search: '',
      category: 'All',
      sort: 'Title A -> Z',
    });
  };

  const categories = ['All', 'Science', 'History', 'Novel'];

  let filteredBooks = books.filter((book) => {
    const matchSearch = (book.title + ' ' + book.author).toLowerCase().includes(filters.search.toLowerCase());
    const matchCategory = filters.category === 'All' || book.category === filters.category;
    return matchSearch && matchCategory;
  });

  filteredBooks = filteredBooks.sort((a, b) => {
    if (filters.sort === 'Title A -> Z') {
      return a.title.localeCompare(b.title);
    } else if (filters.sort === 'Title Z -> A') {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  if (error) {
    return <h1 className="text-red-500 text-center">Đã có lỗi xảy ra: {error}</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 flex items-center">
        <span role="img" aria-label="books" className="mr-2">📚</span>
        Book Library Manager
      </h1>
      <Button variant="contained" color="primary" onClick={handleAdd} className="mb-4">
        ADD BOOK
      </Button>
      <FilterControls
        search={filters.search}
        category={filters.category}
        sort={filters.sort}
        categories={categories}
        onSearchChange={(search) => setFilters({ ...filters, search })}
        onCategoryChange={(category) => setFilters({ ...filters, category })}
        onSortChange={(sort) => setFilters({ ...filters, sort })}
        onClear={handleClear}
      />
      {status === 'pending' && (
        <div className="flex justify-center mb-4">
          <div className="loader animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      <div>
        {filteredBooks.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            onEdit={() => handleEdit(book)}
            onDelete={() => handleDelete(book.id || 0)}
          />
        ))}
      </div>
      <BookFormModal open={openForm} onClose={() => setOpenForm(false)} />
      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>Bạn có chắc muốn xóa sách này?</DialogContent>
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

export default BookList;