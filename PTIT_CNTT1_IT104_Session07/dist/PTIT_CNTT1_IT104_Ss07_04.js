"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Ten: ${this.name}`);
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`ID: ${this.id}`);
        super.displayInfo();
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Mon hoc: ${this.subject}`);
    }
}
const student = new Student(1, "Nguyen Van A");
student.displayInfo();
const teacher = new Teacher("Giao vien", "Toan");
teacher.displayInfo();
