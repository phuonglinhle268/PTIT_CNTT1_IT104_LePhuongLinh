import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';

interface FilterControlsProps {
  search: string;
  category: string;
  sort: string;
  categories: string[];
  onSearchChange: (search: string) => void;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
  onClear: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  search,
  category,
  sort,
  categories,
  onSearchChange,
  onCategoryChange,
  onSortChange,
  onClear,
}) => {
  return (
    <div className="flex gap-4 items-center mb-4 bg-white p-2 rounded-lg shadow-sm">
      <TextField
        label="Search by title or author"
        variant="outlined"
        size="small"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1"
      />
      <FormControl size="small" className="w-32">
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          label="Category"
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl size="small" className="w-40">
        <InputLabel>Sort</InputLabel>
        <Select
          value={sort}
          label="Sort"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <MenuItem value="Title A -> Z">Title A - Z</MenuItem>
          <MenuItem value="Title Z -> A">Title Z - A</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" color="primary" onClick={onClear}>
        CLEAR
      </Button>
    </div>
  );
};

export default FilterControls;