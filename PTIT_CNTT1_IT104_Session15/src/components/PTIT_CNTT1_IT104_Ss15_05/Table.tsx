import React, { Component } from 'react'

type Student = {
    stt:number;
    maSinhVien:string;
    tenSinhVien:string;
    date:string;
    email:string;
    trangThai:string;
}
type TableProp = {
    students: Student[];
}
export default class Table extends Component<TableProp> {
  render() {
    const {students} = this.props;
    return (
      <div>
                <h3>Danh sách sinh viên</h3>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Ngày sinh</th>
                            <th>Email</th>
                            <th>Trạng thái</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.stt}>
                                <td>{student.stt}</td>
                                <td>{student.maSinhVien}</td>
                                <td>{student.tenSinhVien}</td>
                                <td>{student.date}</td>
                                <td>{student.email}</td>
                                <td>{student.trangThai}</td>
                                <td>
                                    <button>Chỉnh</button>
                                    <button>Sửa</button>
                                    <button>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                </div>
            </div>
    )
  }
}
