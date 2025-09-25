import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';

interface FilterControlsProps {
  search: string;
  grade: string;
  sort: string;
  grades: string[];
  onSearchChange: (search: string) => void;
  onGradeChange: (grade: string) => void;
  onSortChange: (sort: string) => void;
  onClear: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  search,
  grade,
  sort,
  grades,
  onSearchChange,
  onGradeChange,
  onSortChange,
  onClear,
}) => {
  return (
    <div className="flex gap-4 items-center mb-4">
      <TextField
        label="Tìm theo tên"
        variant="outlined"
        size="small"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1"
      />
      <FormControl size="small" className="w-32">
        <InputLabel>Grade</InputLabel>
        <Select
          value={grade}
          label="Grade"
          onChange={(e) => onGradeChange(e.target.value)}
        >
          {grades.map((g) => (
            <MenuItem key={g} value={g}>{g}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl size="small" className="w-40">
        <InputLabel>Sắp xếp</InputLabel>
        <Select
          value={sort}
          label="Sắp xếp"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <MenuItem value="Name A -> Z">Name A - Z</MenuItem>
          <MenuItem value="Name Z -> A">Name Z - A</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" color="primary" onClick={onClear}>
        CLEAR
      </Button>
    </div>
  );
};

export default FilterControls;