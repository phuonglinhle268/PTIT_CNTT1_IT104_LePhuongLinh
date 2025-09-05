import React, { useState, useEffect } from "react";
import { Button, Modal, Input, Checkbox, message } from "antd";

const { TextArea } = Input;

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    checkAllCompleted();
  }, [tasks]);

  const handleAddTask = () => {
    setError("");
    if (!newTask.trim()) {
      setError("Tên công việc không được để trống!");
      return;
    }
    if (tasks.some((task) => task.name.toLowerCase() === newTask.trim().toLowerCase())) {
      setError("Tên công việc đã tồn tại!");
      return;
    }
    setTasks([...tasks, { name: newTask.trim(), completed: false }]);
    setNewTask("");
  };

  const handleDeleteTask = (task) => {
    setTaskToDelete(task);
    setIsDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    setTasks(tasks.filter((t) => t !== taskToDelete));
    setIsDeleteModalVisible(false);
    setTaskToDelete(null);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setEditedTask(task.name);
    setIsEditModalVisible(true);
  };

  const handleUpdateTask = () => {
    if (!editedTask.trim()) {
      message.error("Tên công việc không được để trống!");
      return;
    }
    if (tasks.some((t) => t.name.toLowerCase() === editedTask.trim().toLowerCase() && t !== taskToEdit)) {
      message.error("Tên công việc đã tồn tại!");
      return;
    }
    setTasks(
      tasks.map((t) =>
        t === taskToEdit ? { ...t, name: editedTask.trim() } : t
      )
    );
    setIsEditModalVisible(false);
    setTaskToEdit(null);
    setEditedTask("");
  };

  const toggleTaskCompletion = (task) => {
    setTasks(
      tasks.map((t) =>
        t === task ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const checkAllCompleted = () => {
    if (tasks.length > 0 && tasks.every((task) => task.completed)) {
      message.success("Hoàn thành công việc!");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>Danh sách công việc</h2>
      <div style={{ display: "flex", marginBottom: 20 }}>
        <div style={{ flex: 1, marginRight: 10 }}>
          <Input
            placeholder="Nhập tên công việc"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
              setError("");
            }}
            status={error ? "error" : ""}
            style={{ width: "100%" }}
          />
          {error && <div style={{ color: "red", fontSize: 12, marginTop: 4 }}>{error}</div>}
        </div>
        <Button type="primary" onClick={handleAddTask}>
          Thêm
        </Button>
      </div>
      {tasks.map((task, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 10,
            padding: 10,
            background: "#fff",
            borderRadius: 4,
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }}
        >
          <Checkbox
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task)}
          />
          <span
            style={{
              flex: 1,
              marginLeft: 10,
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.name}
          </span>
          <Button
            type="link"
            icon={<img src="https://img.icons8.com/ios-filled/16/000000/edit.png" alt="Edit" />}
            onClick={() => handleEditTask(task)}
            style={{ marginRight: 10 }}
          />
          <Button
            type="link"
            danger
            icon={<img src="https://img.icons8.com/ios-filled/16/000000/trash.png" alt="Delete" />}
            onClick={() => handleDeleteTask(task)}
          />
        </div>
      ))}
      <div style={{ marginTop: 10, color: "#888" }}>
        Công việc đã hoàn thành: {tasks.filter((t) => t.completed).length} / {tasks.length}
      </div>

      <Modal
        title="Xác nhận xóa"
        open={isDeleteModalVisible}
        onCancel={() => setIsDeleteModalVisible(false)}
        onOk={confirmDelete}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p>Bạn có chắc muốn xóa công việc "{taskToDelete?.name}"?</p>
      </Modal>

      <Modal
        title="Sửa công việc"
        open={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        onOk={handleUpdateTask}
      >
        <Input
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          placeholder="Nhập tên công việc"
        />
      </Modal>
    </div>
  );
}

export default TaskManager;