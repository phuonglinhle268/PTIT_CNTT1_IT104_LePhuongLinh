import React, { useState } from "react";
import { deleteStudent } from "../pages/StudentPage";

const StudentRow = ({ student, onDeleted }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    const success = await deleteStudent(student.id);
    if (success) {
      onDeleted(student.id);
    }
    setShowModal(false);
  };

  return (
    <>
      <tr>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.address}</td>
        <td>{student.phone}</td>
        <td>
          <button
            style={{ background: "red", color: "#fff", border: "none", cursor: "pointer" }}
            onClick={() => setShowModal(true)}
          >
            🗑 Xoa
          </button>
        </td>
      </tr>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", width: "300px" }}>
            <h3>Xac nhan xoa</h3>
            <p>Ban chac muon xoa khong?</p>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
              <button onClick={() => setShowModal(false)}>Huy</button>
              <button
                style={{ background: "red", color: "#fff", border: "none", cursor: "pointer" }}
                onClick={handleDelete}
              >
                Xoa
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentRow;
