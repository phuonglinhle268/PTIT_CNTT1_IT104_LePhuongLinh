abstract class Person {
    name : string;
    constructor(name:string){
        this.name = name;
    }
    displayInfo() : void {
        console.log(`Ten: ${this.name}`);
    }
}
class Student extends Person {
    id : number;
    constructor(id:number, name:string){
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`ID: ${this.id}`);
        super.displayInfo();
        
    }
}
class Teacher extends Person {
    subject : string;
    constructor(name:string, subject:string){
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        super.displayInfo();
        console.log(`Mon hoc: ${this.subject}`)
    }
}
const student = new Student(1, "Nguyen Van A");
student.displayInfo();
const teacher = new Teacher("Giao vien", "Toan");
teacher.displayInfo();