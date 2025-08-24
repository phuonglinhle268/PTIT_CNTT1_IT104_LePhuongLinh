import React, { Component } from "react";

type Student = {
  stt: number;
  maSinhVien: string;
  tenSinhVien: string;
  date: string;
  email: string;
  trangThai: string;
};
type ManagerState = {
  maSinhVien: string;
  tenSinhVien: string;
  date: string;
  email: string;
};
type ManagerProp = {
  addStudent: (student: Student) => void;
};

export default class StudentManager extends Component<ManagerProp, ManagerState> {
  constructor(props: ManagerProp) {
    super(props);
    this.state = {
      maSinhVien: "",
      tenSinhVien: "",
      date: "",
      email: "",
    };
  }
  handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<ManagerState, keyof ManagerState>);
  };
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { maSinhVien, tenSinhVien, date, email } = this.state;
    const newStudent: Student = {
      stt: 0,
      maSinhVien,
      tenSinhVien,
      date,
      email,
      trangThai: "Dang hoat dong",
    };
    this.props.addStudent(newStudent);
    this.setState({ maSinhVien: "", tenSinhVien: "", date: "", email: "" });
  };
  render() {
    return (
      <div>
        <form>
          <label>Ma sinh vien: </label>
          <input type="text" name="maSinhVien" onChange={this.handleClick} />
          <label>Ten sinh vien: </label>
          <input type="text" name="tenSinhVien" onChange={this.handleClick} />
          <label>Ngay sinh: </label>
          <input type="date" name="date" onChange={this.handleClick} />
          <label>Email: </label>
          <input type="email" name="email" onChange={this.handleClick} />
          <button onClick={this.handleSubmit}>Them moi</button>
        </form>
      </div>
    );
  }
}
