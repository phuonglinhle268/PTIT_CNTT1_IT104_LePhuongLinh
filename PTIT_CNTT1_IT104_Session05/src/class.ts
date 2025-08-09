class StudentInfo {
    name: string;
    dateOfBirth: string;
    email: string;

    constructor(name: string, dateOfBirth: string, email: string) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
    }

    // Phương thức: trả về thông tin sinh viên
    study(): string {
        //return `Tên: ${this.name}, Ngày sinh: ${this.dateOfBirth}, Email: ${this.email}`;
        return "Studying";  //in ra studying
    }
}

// Tạo đối tượng
const student1 = new StudentInfo("Nguyen Van A", "13/01/2013", "nguyenvana@gmail.com");


// Gọi phương thức để in ra thông tin
console.log(student1.study());
