import { createContext, useContext } from "react";
import type { Task } from "../interfaces/task.interface";

interface TaskContextType {
  tasks?: Task[];
  handleAddTask?: (task: Task) => void;
  handleUpdateTask?: (id: number | string, name: string) => void;
  handleDeleteTask?: (id: number | string) => void;
  handleToggleTask?: (id: number | string) => void;
  handleCountTaskCompleted: number;
}

// Bước 1: Tạo context
export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

// Tạo custome để lấy dữ liệu từ context
export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("TaskContext không được cung cấp bởi TaskContextProvider");
  }

  return context;
};