import { useState } from "react";

const TodoItem = ({ todo, onDelete, onToggle, onUpdate }) => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editInput, setEditInput] = useState(todo.title);
  const [editError, setEditError] = useState("");

  const handleUpdate = () => {
    if (!editInput.trim()) {
      setEditError("Tên công việc không được để trống");
      return;
    }
    onUpdate(todo.id, editInput.trim());
    setShowEditModal(false);
    setEditError("");
  };

  return (
    <div>
      <div className="todo-item">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </span>
        <button onClick={() => setShowEditModal(true)}>✏️</button>
        <button onClick={() => setShowModal(true)}>🗑️</button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-delete">
            <h3>Bạn có chắc muốn xóa công việc này?</h3>
            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>Hủy</button>
              <button
                className="delete"
                onClick={() => {
                  onDelete(todo.id);
                  setShowModal(false);
                }}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal-edit">
            <h3>Chỉnh sửa công việc</h3>
            <input
              type="text"
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
              placeholder="Nhập tên công việc mới"
            />
            {editError && <p className="error">{editError}</p>}
            <div className="modal-actions">
              <button onClick={() => setShowEditModal(false)}>Hủy</button>
              <button className="update" onClick={handleUpdate}>
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;