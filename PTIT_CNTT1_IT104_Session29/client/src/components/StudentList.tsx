import React, { useEffect, useState } from "react";
import { getAllStudent, deleteStudent } from "../services/studentService";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Load danh sách sinh viên
  const loadStudents = async () => {
    const data = await getAllStudent();
    setStudents(data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  // Mở modal khi click vào icon xóa
  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  // Hủy xóa
  const handleCancel = () => {
    setShowModal(false);
    setSelectedId(null);
  };

  // Xác nhận xóa
  const handleConfirmDelete = async () => {
    if (selectedId !== null) {
      await deleteStudent(selectedId);
      loadStudents(); // render lại dữ liệu mới
    }
    setShowModal(false);
    setSelectedId(null);
  };

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} - {s.email}
            <button
              style={{ marginLeft: "10px", color: "red" }}
              onClick={() => handleDeleteClick(s.id)}
            >
              ❌ Xóa
            </button>
          </li>
        ))}
      </ul>

      {/* Modal xác nhận xóa */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              width: "300px",
              margin: "150px auto",
              padding: "20px",
              background: "#fff",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <p>Bạn có chắc chắn muốn xóa sinh viên này?</p>
            <button onClick={handleCancel} style={{ marginRight: "10px" }}>
              Hủy
            </button>
            <button onClick={handleConfirmDelete} style={{ color: "red" }}>
              Xóa
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentList;
