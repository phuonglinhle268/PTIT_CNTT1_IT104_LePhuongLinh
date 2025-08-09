"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    pupil() {
        return `Ma sinh vien: ${this.id}, Tuoi: ${this.age}, Email: ${this.email}`;
    }
}
const students = [];
students.push(new Student(1, 10, "abc@gmail.com"));
students.push(new Student(2, 20, "123@gmail.com"));
students.push(new Student(3, 30, "qưe@gmail.com"));
students.forEach((students) => {
    console.log(students.pupil());
});
