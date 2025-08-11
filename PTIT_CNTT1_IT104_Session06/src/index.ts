//dc dung khi tao khung
//phai tao cac abtract method (class con) ben trong 1 abstract class
//ko tao dc instance (new...) o ben ngoai
abstract class User {
    getName(): void {
        console.log("Nguyen Van A");
    }

    //abstract method
    //void dai dien cho kieu du lieu 
    //ko co phan than (tinh tu dau ngoac nhon), chi dc khai bao
    abstract run(): void;

    abstract study(): void;
}

//phai trien khai ra (ban dau chi co phan getName) khi co abstract method ko se bao loi o Employee
class Employee extends User {
    run(): void {
        throw new Error("Method not implemented.");
    }
    study(): void {
        throw new Error("Method not implemented.");
    }
    //ghi de lai cac phuong thuc co san trong User
    // getName(): void {
    //     console.log("Employee name");   
    // }
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
