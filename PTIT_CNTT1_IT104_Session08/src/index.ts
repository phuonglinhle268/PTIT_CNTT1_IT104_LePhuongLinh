//generic voi mang
const numbers:number[] = [];    //cach thong thuong
const studentName : Array<string> = [];    //generic

//generic record
const user : Record<string, string> = {
    //key, value
    //key la gtri dau tien
    id: "1", 
    name: "A"
};

interface createUserDto {
    id: number;
    name: string;
    age: number;
}

//partial: bien tat ca thuoc tinh thanh tuy chon
//optional: truyen du lieu hay ko cx dc
const partialCreateUser: Partial<createUserDto> = {};


//readonly chi cho phep doc, ko the thay doi gtri
interface Point {
    x:number;
    y:number;
}
const point : Readonly<Point> = {
    x:10,
    y:20,
};


//pick : lay ra tung truong can thiet
//cac gtri la co dinh
interface User {
    id:number;
    name:string;
    age:number;
    result:string;
    email: string;
    address: string;
    dateOfBirth: string;
}
const cloneUser: Pick<User, "id" | "name" | "age"> = {
    id: 1,
    name: "B",
    age: 20,
}


//loai bo di truong ko can thiet
//o day la loai bo id
const omitUser : Omit<User, "id"> = {
    address: "Ha Noi",
    age: 21,
    dateOfBirth: "11,11,2011",
    email: "nguyenvan@gmail.com",
    name: "A",
    result: "true",
};