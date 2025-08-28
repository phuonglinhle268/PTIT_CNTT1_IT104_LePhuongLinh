import { useCallback, useEffect, useMemo, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { TaskContext } from "./TaskContext";
import TodoList from "../components/TodoList";
import type { Task } from "../interfaces/task.interface";

export default function TaskContextProvider() {
  const taskListLocal = localStorage.getItem("taskList");
  const taskListLocalParse = (taskListLocal && JSON.parse(taskListLocal)) || [];

  //   useEffect(() => {});
  //   useEffect(() => {}, []);
  //   useEffect(() => {}, [deps]);

  const [tasks, dispatch] = useReducer(taskReducer, taskListLocalParse);

  // Cứ mỗi lần tasks bị thay đổi, thì sẽ lưu dữ liệu lên local
  useEffect(() => {
    // Lưu dữ liệu lên local
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = useCallback((task: Task) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  }, []);

  const handleToggleTask = useCallback((id: number | string) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: { id },
    });
  }, []);

  const handleUpdateTask = useCallback((id: number | string, name: string) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: {
        id,
        name,
      },
    });
  }, []);

  const handleDeleteTask = useCallback((id: number | string) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { id },
    });
  }, []);

  const handleCountTaskCompleted = useMemo((): number => {
    const taskCompleteds = tasks.filter((task: Task) => task.isCompleted);

    return taskCompleteds.length;
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleAddTask,
        handleToggleTask,
        handleUpdateTask,
        handleDeleteTask,
        handleCountTaskCompleted,
      }}
    >
      <TodoList />
    </TaskContext.Provider>
  );
}