//kieu du lieu array
const numbers : number[] = [1,2,3,4,5];

const characters : Array <string> = ["A", "B", "C"];

//kieu du lieu object
interface User {
    id: number;
    name: string;
    age : number;
}

//extends: dung de ke thua cac thuoc tinh da co san (tai su dung)
interface Employees extends User {
    salary : number;
}

type StudentInfo = {
    id : number;
    name : string;
    age: number;
}

const user : {name:string} = {
    name: "Nguyen Van A",
}

//union type
const score : number | string | null = 10;

//khai bao kieu alias
//gop nhieu kieu du lieu vao voi nhau
const point : {x: number; y: number} = {
    x:10,
    y:20,
};

type Dog = {
    make : string;
}
type Cat = {
    id: number;
    name : string;
}
type Tiger = {
    height : number;
}
type Animal = Cat & Dog & Tiger;  //ko gioi han kieu du lieu
