//khai bao lop student
class Student {
    constructor(id, name, age, scores){
        //this dai dien cho lop cha
        this.id = id;
        this.name = name;
        this.age = age;
        this.scores = scores;
    }
}
//khoi tao 5 doi tuong Student
const student1 = new Student(1, "Nguyen Van A", 20,[7,8,9]);
const student2 = new Student(2, "Nguyen Van B", 20,[7,9,9]);
const student3 = new Student(3, "Nguyen Van C", 20,[5,9,3]);
const student4 = new Student(4, "Nguyen Van D", 20,[4,9,6]);
const student5 = new Student(5, "Nguyen Van E", 20,[3,1,7]);

//tao mang gom 5 sinh vien vua dc khoi tao
const studentList = [student1, student2, student3, student4, student5];

//ham tinh diem trung binh
const getAverage = (scores) => {
    return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

//ham tim kiem sinh vien theo id
const getStudentById = (studentList, id) => {
    const findStudent = studentList.find((student) => student.id == id);
    return findStudent;
}

//ham lay sinh vien co diem trung binh cao nhat
const topStudent = (studentList) => {
    let highestAvg = Math.max(...studentList.map(s => getAverage(s.scores)));
    return studentList.filter(s => getAverage(s.scores) === highestAvg);
}

//ham tinh diem trung binh ca lop
const classAvg = (studentList) => {
    let total = studentList.reduce((sum, s) => sum + getAverage(s.scores),0);
    return total / studentList.length;
}

//ham loc sinh vien theo diem trung binh

//ham sap xep theo ten
const sortStudent = (studentList) => {
    return [...studentList].sort((a,b) => a.name.localeCompare(b.name));
}

//goi cac ham
const resultFind = getStudentById(studentList, 1);
if(!resultFind){
    console.log("Khong tim thay sinh vien");
} else {
    console.log("Tim thay sinh vien: ", resultFind);
}
console.log("\nSinh vien co diem trung binh cao nhat: ");
console.log(topStudent(studentList));

console.log("\nDiem trung binh cua ca lop: ");
console.log(classAvg(studentList));

console.log("\nDanh sach sinh vien: ");
console.log(sortStudent(studentList));