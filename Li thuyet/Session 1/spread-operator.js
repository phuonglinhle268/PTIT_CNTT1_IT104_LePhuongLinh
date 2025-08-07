//thai ra
//tach cac ptu rieng ra
//sao chep, gop vao 1 mang khac

const numbers = [1,2,3,4,5];
const secondNumbers = [6,7,8,9];

//copy cac ptu tu mang numbers sang mang moi
//Cach 1: const numberCopies = numbers.slice();
const numberCopies = [...numbers];   //... mang copy
//ban chan: khi in ra se bo di dau ngoac vuong

//console.log(arr) → [ 1, 2, 3 ] ✅ (in nguyên mảng).
//console.log(...arr) → 1 2 3 ✅ (in từng phần tử, không dấu ngoặc).

//1,2,3,4,5 <=> ...numbers
//6,7,8,9 <=> ...secondNumbers
//[1,2,3,4,5,6,7,8,9]             -> in ra ca dau ngoac

console.log("Number copy: ", numberCopies);