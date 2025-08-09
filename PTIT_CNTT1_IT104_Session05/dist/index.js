"use strict";
class StudentInfo {
    constructor(name, dateOfBirth, email) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
    }
    // Phương thức: trả về thông tin sinh viên
    study() {
        return `Tên: ${this.name}, Ngày sinh: ${this.dateOfBirth}, Email: ${this.email}`;
    }
}
// Tạo đối tượng
const student1 = new Student("Nguyen Van A", "13/01/2013", "nguyenvana@gmail.com");
// Gọi phương thức để in ra thông tin
console.log(student1.study());
