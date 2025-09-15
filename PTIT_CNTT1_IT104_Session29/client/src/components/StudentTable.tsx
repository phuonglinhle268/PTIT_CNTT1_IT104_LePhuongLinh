import React, { useEffect, useState } from "react";
import { getAllStudent } from "../pages/StudentPage";
import StudentRow from "./StudentRow";

const StudentTable = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const data = await getAllStudent();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDeleted = (id) => {
    setStudents(students.filter((stu) => stu.id !== id));
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      <h2>Quan li sinh vien</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ background: "#f4f4f4" }}>
          <tr>
            <th>ID</th>
            <th>Ten</th>
            <th>Email</th>
            <th>Dia chi</th>
            <th>So dien thoai</th>
            <th>Lua chon</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <StudentRow key={stu.id} student={stu} onDeleted={handleDeleted} />
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default StudentTable;
