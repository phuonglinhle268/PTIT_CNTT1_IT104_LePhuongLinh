import TaskItem from "./TaskItem";
import { useTaskContext } from "../context/TaskContext";
import type { Task } from "../interfaces/task.interface";
import React from "react";

export default function TaskList() {
  // Bước 3: Lấy giá trị từ context thông qua hook useContext
  const { tasks } = useTaskContext();

  return (
    <>
      <ul className="list-group my-3">
        {tasks?.map((task: Task) => (
          <React.Fragment key={task.id}>
            {/* Phần hiển thị các TaskItem */}
            <TaskItem task={task} />
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}