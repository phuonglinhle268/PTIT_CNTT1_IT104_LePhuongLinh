// Import các hook từ React và thư viện axios
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import TodoList from "./TodoList"; 

const TodoApp = () => {
  // Khai báo các state
  const [todos, setTodos] = useState([]);             // Lưu danh sách công việc
  const [input, setInput] = useState("");             // Lưu nội dung input
  const [error, setError] = useState("");             // Lưu thông báo lỗi khi input rỗng
  const [loading, setLoading] = useState(false);      // Trạng thái loading khi gọi API
  const [showCompleteModal, setShowCompleteModal] = useState(false); // Trạng thái hiển thị modal hoàn thành
  const inputRef = useRef(null);                      // ref trỏ đến ô input (dùng để focus sau khi thêm)

  // Hàm lấy toàn bộ danh sách công việc từ server
  const fetchTodos = () => {
    setLoading(true); // bật trạng thái loading
    axios
      .get("http://localhost:8080/todos") 
      .then((res) => setTodos(res.data))  // Lưu dữ liệu vào state
      .catch((err) => console.error(err)) // Xử lý lỗi nếu có
      .finally(() => setLoading(false));  // Tắt loading
  };

  // useEffect sẽ chạy 1 lần khi component mount để lấy dữ liệu ban đầu
  useEffect(() => {
    fetchTodos();
  }, []);

  // Hàm thêm công việc mới
  const addTodo = () => {
    if (!input.trim()) { 
      setError("Tên công việc không được để trống");
      return;
    }

    // Tạo object công việc mới
    const newTodo = { title: input.trim(), completed: false };
    setLoading(true);
    axios
      .post("http://localhost:8080/todos", newTodo) // Gửi POST request
      .then((res) => {
        setTodos([...todos, res.data]); // Thêm vào danh sách hiện tại
        setInput("");                   // Reset input
        setError("");                   // Reset lỗi
        inputRef.current.focus();       
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  // Hàm xóa công việc theo id
  const deleteTodo = (id) => {
    setLoading(true);
    axios
      .delete(`http://localhost:8080/todos/${id}`) 
      .then(() => {
        // Xóa công việc trong state
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  // Hàm toggle trạng thái completed của 1 công việc
  const toggleTodo = (id) => {
    const todo = todos.find((t) => t.id === id); // Tìm công việc cần toggle
    setLoading(true);
    axios
      .patch(`http://localhost:8080/todos/${id}`, {
        completed: !todo.completed, // Đổi trạng thái completed
      })
      .then((res) => {
        // Cập nhật lại danh sách todos
        const updatedTodos = todos.map((t) => (t.id === id ? res.data : t));
        setTodos(updatedTodos);

        // Nếu tất cả công việc đều hoàn thành => hiện modal
        if (updatedTodos.length > 0 && updatedTodos.every((t) => t.completed)) {
          setShowCompleteModal(true);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  // Hàm cập nhật tiêu đề công việc
  const updateTodo = (id, newTitle) => {
    setLoading(true);
    axios
      .patch(`http://localhost:8080/todos/${id}`, { title: newTitle })
      .then((res) => {
        // Cập nhật lại todo trong danh sách
        const updatedTodos = todos.map((t) => (t.id === id ? res.data : t));
        setTodos(updatedTodos);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="todo-app">
      <h2>Quản lý công việc</h2>

      {/* Ô nhập và nút thêm công việc */}
      <div className="input-group">
        <input
          ref={inputRef}                  // tham chiếu đến input
          type="text"
          value={input}                   
          placeholder="Nhập tên công việc"
          onChange={(e) => setInput(e.target.value)} 
        />
        <button onClick={addTodo}>Thêm công việc</button>
      </div>

      {/* Thông báo lỗi */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="status">
        <button className="active">Tất cả</button>
        <button>Hoàn thành</button>
        <button>Đang thực hiện</button>
      </div>

      {/* Hiển thị loading hoặc danh sách công việc */}
      {loading ? (
        <p className="loading">Đang tải dữ liệu...</p>
      ) : (
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
          onUpdate={updateTodo}  //chua xay ham
        />
      )}

      <div className="actions">
        <button>Xóa công việc hoàn thành</button>
        <button>Xóa tất cả công việc</button>
      </div>

      {/* Modal hiển thị khi tất cả công việc hoàn thành */}
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
