class Student {
    id : number;
    age : number;
    email : string;

    constructor(id:number, age:number, email:string){
        this.id = id;
        this.age = age;
        this.email = email;
    }
    pupil() : string {
        return `Ma sinh vien: ${this.id}, Tuoi: ${this.age}, Email: ${this.email}`;
    }
}
const students : Student[] = [];
students.push(new Student(1, 10, "abc@gmail.com"));
students.push(new Student(2, 20, "123@gmail.com"));
students.push(new Student(3, 30, "qưe@gmail.com"));

students.forEach((students) => {
    console.log(students.pupil());
})
