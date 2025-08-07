"use strict";
//khai bao kieu du lieu
const students = [];
const createStudent = (student) => {
    students.push(student);
};
const updateStudent = (id, newStudent) => {
    //tim kiem sinh vien theo id
    const findIndexStudent = students.findIndex((st) => st.id === id);
    if (!findIndexStudent) {
        console.log("Khong tim thay sinh vien");
    }
    else {
        students[findIndexStudent].name = newStudent.name;
        students[findIndexStudent].age = newStudent.age;
        students[findIndexStudent].subjects = newStudent.subjects;
    }
};
const deleteStudent = (id) => {
    const findIndexStudent = students.findIndex((st) => st.id === id);
    if (findIndexStudent != -1) {
        students.splice(findIndexStudent, 1);
    }
    else {
        console.log("Khong tim thay sinh vien");
    }
};
//ap dung type guard de ktra kieu du lieu
const isNumber = (score) => {
    return typeof score === "number";
};
//chuyen doi diem tu chuoi thanh so
const converScoreToNumber = (score) => {
    const scoreMap = {
        A: 10,
        B: 8,
        C: 6,
        D: 4,
    };
    //tra ve ket qua sau khi chuyen doi
    return scoreMap[score];
};
const caculaAvg = (student) => {
    const total = student.subjects.reduce((sum, subject) => {
        if (isNumber(subject.score)) {
            return sum + subject.score;
        }
        else {
            return sum + converScoreToNumber(subject.score);
        }
    }, 0);
    console.log("Total: ", total);
};
