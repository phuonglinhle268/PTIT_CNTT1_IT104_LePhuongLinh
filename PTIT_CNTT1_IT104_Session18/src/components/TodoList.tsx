import { useTaskContext } from "../context/TaskContext";
import TaskComplete from "./TaskComplete";
import TaskEmpty from "./TaskEmpty";
import TaskList from "./TaskList";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";

export default function TodoList() {
  const { tasks } = useTaskContext();
  return (
    <>
      <div className="container todo-container">
        {/* Phần tiêu đề */}
        <TodoHeader />

        {/* Phần todoinput (lấy dữ liệu từ người dùng) */}
        <TodoInput />

        {/* Phần danh sách công việc */}
        <TaskList />

        {/* Hiển thị công việc hoàn thành */}
        <TaskComplete />

        {tasks?.length === 0 && (
          <>
            {/* Hiển thị khi chưa có công việc */}
            <TaskEmpty />
          </>
        )}
      </div>
    </>
  );
}