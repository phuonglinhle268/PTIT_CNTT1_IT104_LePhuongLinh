//truy xuat vao cac ptu cua mang


const numbers = [1,2,3,4];
//Cach cu:  console.log("Phan tu thu 2: ", numbers[1]);

const colors = ["Red", "Green", "Blue", "Black"];
//lay tu mang
//dung dau ngoac vuong
//gan luon gtri vao bien
//chi dung khi biet truoc so ptu
//cai thua in ra undefined
const[red, green, blue, black] = numbers;

//lay gtri trong object
//dau ngoac nhon
//xuat ra phai dat ten TRUNG KEY (mang ko can) -> neu ko se in undefined
const user = {
    id: 1,
    name: "Nam", 
    age: 20,
};
console.log("Name: ", user.name); //cach lam cu
const{id, name, age} = user;
