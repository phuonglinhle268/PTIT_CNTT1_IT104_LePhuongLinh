import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormControl, InputLabel, Select, MenuItem,} from '@mui/material';
import type React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { useEffect, useState } from 'react';
import type { Book } from '../interfaces/book.interface';
import { createBook, updateBook } from '../apis/book.api';
import { clearSelectedBook } from '../redux/slices/book.slice';


interface BookFormModalProps{
    open: boolean;
    onClose: () => void;
}

const BookFormModal: React.FC<BookFormModalProps> = ({open, onClose}) => {
    const dispatch = useAppDispatch();
    const {selectedBook} = useAppSelector((state)=> state.book);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if(selectedBook){
            setTitle(selectedBook.title || '');
            setAuthor(selectedBook.author || '');
            setYear(selectedBook.year?.toString() || '');
            setCategory(selectedBook.category || '');
        } else {
            setTitle('');
            setAuthor('');
            setYear('');
            setCategory('');
        }
        setError('');
    }, [selectedBook, open]);

    const validateInput = (title:string, author:string, year:string, category: string) => {
        if (!title.trim()) return 'Tiêu đề không được để trống';

        if (!author.trim()) return 'Tác giả không được để trống';

        const yearNum = parseInt(year);
        if (!year || isNaN(yearNum) || yearNum <= 0) return 'Năm phải là số dương';

        if (!category) return 'Hãy chọn danh mục';
        return '';
    };

    const handleSubmit = () => {
        const validationError = validateInput(title, author, year, category);
        if (validationError){
            setError(validationError);
            return;
        }

        const bookData: Omit<Book, 'id'> = {
            title: title.trim(),
            author: author.trim(),
            year: parseInt(year),
            category: category,
        };

        if(selectedBook) {
            dispatch(updateBook({...bookData, id: selectedBook.id}));
            dispatch(clearSelectedBook());
        } else {
            dispatch(createBook(bookData));
        }
        onClose();
    };

    return(
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{selectedBook ? 'Sửa thông tin' : 'Thêm sách'}</DialogTitle>
            <DialogContent>
                <TextField
                label='Tiêu đề'
                variant='outlined'
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                margin='normal'
                error={error.includes('Tiêu đề')}
                helperText={error.includes('Tiêu đề') ? error : ''}
                />
                <TextField
                label='Tác giả'
                variant='outlined'
                fullWidth
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                margin='normal'
                error={error.includes('Tác giả')}
                helperText={error.includes('Tác giả') ? error : ''}
                />
                <TextField
                label='Năm'
                variant='outlined'
                fullWidth
                value={title}
                onChange={(e) => setYear(e.target.value)}
                margin='normal'
                error={error.includes('Năm')}
                helperText={error.includes('Năm') ? error : ''}
                />
                <FormControl fullWidth margin='normal' error={error.includes('danh mục')}>
                    <InputLabel>Danh mục</InputLabel>
                    <Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as string)}
                    label='Danh mục'
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Science">Science</MenuItem>
                        <MenuItem value="History">History</MenuItem>
                        <MenuItem value="Novel">Novel</MenuItem>
                    </Select>
                    {error.includes('danh mục') && <p className='text-red-500 text-sm'>{error}</p>}
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color='primary'>Hủy</Button>
                <Button onClick={handleSubmit} color='primary'>
                    {selectedBook ? 'Lưu' : 'Thêm'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default BookFormModal;
