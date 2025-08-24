import React, { Component } from "react";
import StudentManager from "./StudentManager";
import Table from "./Table";

type StateType = {
  students: Student[];
};

type Student = {
  stt: number;
  maSinhVien: string;
  tenSinhVien: string;
  date: string;
  email: string;
  trangThai: string;
};

export default class Exercise05 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      students: [
        {
          stt: 1,
          maSinhVien: "SV001",
          tenSinhVien: "Nguyen Van A",
          date: "21/12/2023",
          email: "nva@gmail.com",
          trangThai: "Dang hoat dong",
        },
        {
          stt: 2,
          maSinhVien: "SV002",
          tenSinhVien: "Nguyen Thi B",
          date: "21/10/2021",
          email: "ntb@gmail.com",
          trangThai: "Ngung hoat dong",
        },
      ],
    };
  }
  addStudent = (newStudent: Student) => {
    this.setState((prevState) => ({
      students: [
        ...prevState.students,
        { ...newStudent, stt: prevState.students.length + 1 },
      ],
    }));
  };

  render() {
    return (
      <div>
        <h3>Quan li sinh vien</h3>
        <StudentManager addStudent={this.addStudent} />
        <Table students={this.state.students} />
      </div>
    );
  }
}