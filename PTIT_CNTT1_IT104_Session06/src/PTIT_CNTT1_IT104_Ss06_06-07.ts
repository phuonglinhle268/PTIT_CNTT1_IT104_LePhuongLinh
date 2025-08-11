class Student {
    private id : number;
    name:string;
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
    getID() : number {
        return this.id;
    }
    getName() : string {
        return this.name;
    }
    setName(newName : string) : void {
        this.name = newName;
    }
}
let classStudent : Student[] = [];

class Classroom {
    private students : Student[] = [];
    showStudent(): void {
        console.log("Danh sach cac hoc sinh trong lop: ");
        this.students.forEach((student) => {
            console.log(`ID: ${student.getID()} | Ten: ${student.getName()}`);
        })
    }
    addStudent (student : Student) : void {
        this.students.push(student);
    }
    filterStudent(id : number) : Student[]{
        return this.students.filter(student => student.getID() === id);
    }
    addStudentInClass(id : number) : void {
        const st = classStudent.findIndex(student => student.getID() === id);
        if (st !== -1){
            this.students.push(classStudent[st]);
            classStudent.splice(st, 1);   //day xong roi xoa
        } else {
            console.log("Khong co sinh vien tuong ung");
            
        }
    }

    //bai 7
     removeStudent(id: number): void {
        const st = this.students.findIndex(student => student.getID() === id);
        if (st !== -1) {
            classStudent.push(this.students[st]); 
            this.students.splice(st, 1); 
            console.log("\nXoa thanh cong");
        } else {
            console.log("Khong co sinh vien tuong ung");
        }
    }
    editStudent(id: number, newName: string): void {
        const student = this.students.find(student => student.getID() === id);
        if (student) {
            student.setName(newName);
            console.log("Cap nhat ten thanh cong");
        } else {
            console.log("Khong co sinh vien tuong ung");
        }
    }
}
classStudent.push(
    new Student(1, "Ken"),
    new Student(2, "Alice"),
    new Student(3, "Linh"),
    new Student(4, "Kay"),
    new Student(5, "Bin"),
    new Student(6, "Aeri")
);

const class1 = new Classroom();
const class2 = new Classroom();

class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);

class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);

console.log("Lop 1:");
class1.showStudent();

console.log("\nLop 2");
class2.showStudent();

class1.removeStudent(1);
class2.editStudent(5, "Sara");

console.log("\nLop 1 moi:");
class1.showStudent();
console.log("\nLop 2 moi:");
class2.showStudent();