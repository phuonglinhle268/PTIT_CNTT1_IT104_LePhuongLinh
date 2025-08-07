//khai bao kieu du lieu

type Subject = {
    subjectName : string;
    score : number | string;
}
type Student = {
    id : number;
    name : string;
    age : number | string;
    subjects : Subject[];
};

const students : Student[] = [];

const createStudent = (student : Student) => {
    students.push(student);
};

const updateStudent = (id:number, newStudent : Student) => {
    //tim kiem sinh vien theo id
    const findIndexStudent = students.findIndex((st) => st.id === id);

    if (!findIndexStudent) {
        console.log("Khong tim thay sinh vien");
    } else {
        students[findIndexStudent].name = newStudent.name;
        students[findIndexStudent].age = newStudent.age;
        students[findIndexStudent].subjects = newStudent.subjects;
    }
}
const deleteStudent = (id:number):void => {
    const findIndexStudent = students.findIndex((st) => st.id === id);

    if (findIndexStudent != -1){
        students.splice(findIndexStudent, 1);
    } else {
        console.log("Khong tim thay sinh vien");
    }
};

//ap dung type guard de ktra kieu du lieu
const isNumber = (score:string|number) => {
    return typeof score === "number";
};

//chuyen doi diem tu chuoi thanh so
const converScoreToNumber = (score:string): number => {
    const scoreMap: { [key: string]:number } = {
        A: 10,
        B: 8,
        C: 6,
        D: 4,
    };
    //tra ve ket qua sau khi chuyen doi
    return scoreMap[score];
}

const caculaAvg = (student : Student) => {
    const total = student.subjects.reduce((sum, subject) => {
        if (isNumber(subject.score) ){
            return sum + subject.score;
        } else {
            return sum + converScoreToNumber(subject.score);
        }
    }, 0);
    console.log("Total: ", total);
}

