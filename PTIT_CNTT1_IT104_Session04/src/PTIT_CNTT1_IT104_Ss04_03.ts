interface Students {
    name : string;
    age : number;
    email : string;
}

const introduction = (student : Students): void => {
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi, va email cua toi la ${student.email}`);
}

const studentIntroduction : Students = {
    name: "Nguyen Van A",
    age: 20,
    email: "nguyenvana@gmail.com",
}
introduction(studentIntroduction);