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

export default class StudentManager extends Component<
  ManagerProp,
  ManagerState
> {
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
    const { name, value } = event.target; //destructuring
    this.setState({ [name]: value } as Pick<ManagerState, keyof ManagerState>);


    //     this.setState là hàm của React class component, dùng để cập nhật state.
    // { [name]: value }
    // Đây là computed property name trong object.
    // Nếu name = "email", nó tạo object: { email: value }.
    // Nếu name = "password", nó tạo object: { password: value }.
    // as Pick<ManagerState, keyof ManagerState>
    // Đây là type assertion trong TypeScript, để ép kiểu object vừa tạo thành một phần của ManagerState.
    // Pick<T, K> là utility type của TypeScript:
    // Nó lấy ra từ T (ở đây là ManagerState) một tập con các thuộc tính K.
    // keyof ManagerState nghĩa là tất cả các key có trong ManagerState.
    // => Pick<ManagerState, keyof ManagerState> chính là một object chứa đúng 1 thuộc tính nằm trong ManagerState.
    // 👉 Mục đích: đảm bảo rằng { [name]: value } thực sự hợp lệ với kiểu ManagerState.
    
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
