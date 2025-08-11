"use strict";
//dc dung khi tao khung
//phai tao cac abtract method (class con) ben trong 1 abstract class
//ko tao dc instance (new...) o ben ngoai
class User {
    getName() {
        console.log("Nguyen Van A");
    }
}
//phai trien khai ra (ban dau chi co phan getName) khi co abstract method ko se bao loi o Employee
class Employee extends User {
    run() {
        throw new Error("Method not implemented.");
    }
    study() {
        throw new Error("Method not implemented.");
    }
}
//cung de tao ra 1 cai khung, tao ham ben trong cung chi dc khai bao
// interface Animal {
//     name: string;
//     makeSound(): void;
// }
// class Dog implements Animal{
//     name : string;
//     constructor(name:string){
//         this.name = name;
//     }   
//     makeSound(): void {
//         throw new Error("Method not implemented.");
//     }
// }
