import { useEffect, useRef, useState } from "react";
import axios from "axios";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const inputRef = useRef(null);

  const fetchTodos = () => {
    setLoading(true);
    axios
      .get("http://localhost:8080/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = () => {
    if (!input.trim()) {
      setError("Tên công việc không được để trống");
      return;
    }


    const newTodo = { title: input.trim(), completed: false };
    setLoading(true);
    axios
      .post("http://localhost:8080/todos", newTodo)
      .then((res) => {
        setTodos([...todos, res.data]);
        setInput("");
        setError("");
        inputRef.current.focus();
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const deleteTodo = (id) => {
    setLoading(true);
    axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const toggleTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    setLoading(true);
    axios
      .patch(`http://localhost:8080/todos/${id}`, {
        completed: !todo.completed,
      })
      .then((res) => {
        const updatedTodos = todos.map((t) => (t.id === id ? res.data : t));
        setTodos(updatedTodos);
        if (updatedTodos.length > 0 && updatedTodos.every((t) => t.completed)) {
          setShowCompleteModal(true);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const updateTodo = (id, newTitle) => {
    setLoading(true);
    axios
      .patch(`http://localhost:8080/todos/${id}`, { title: newTitle })
      .then((res) => {
        const updatedTodos = todos.map((t) => (t.id === id ? res.data : t));
        setTodos(updatedTodos);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="todo-app">
      <h2>Quản lý công việc</h2>
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          value={input}
          placeholder="Nhập tên công việc"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Thêm công việc</button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="status">
        <button className="active">Tất cả</button>
        <button>Hoàn thành</button>
        <button>Đang thực hiện</button>
      </div>

      {loading ? (
        <p className="loading">Đang tải dữ liệu...</p>
      ) : (
        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} onUpdate={updateTodo} />
      )}

      <div className="actions">
        <button>Xóa công việc hoàn thành</button>
        <button>Xóa tất cả công việc</button>
      </div>

      {showCompleteModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Hoàn thành công việc!!!</h3>
            <button onClick={() => setShowCompleteModal(false)}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoApp;