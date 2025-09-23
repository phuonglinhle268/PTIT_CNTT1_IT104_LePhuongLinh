export interface Student {
  id: string;
  age:number;
  name: string;
  gender: 'Nam' | 'Nữ';
  birthday?: string;
  hometown?: string;
  address?: string;
}