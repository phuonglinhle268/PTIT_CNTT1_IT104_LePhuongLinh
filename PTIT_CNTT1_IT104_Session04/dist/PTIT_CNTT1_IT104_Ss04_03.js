"use strict";
const introduction = (student) => {
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi, va email cua toi la ${student.email}`);
};
const studentIntroduction = {
    name: "Nguyen Van A",
    age: 20,
    email: "nguyenvana@gmail.com",
};
introduction(studentIntroduction);
