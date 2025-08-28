import type { Task } from "../interfaces/task.interface";

type Action =
  | {
      type: "ADD_TASK";
      payload: { id: number | string; name: string; isCompleted: boolean };
    }
  | {
      type: "UPDATE_TASK";
      payload: { id: number | string; name: string };
    }
  | { type: "DELETE_TASK"; payload: { id: number | string } }
  | { type: "TOGGLE_TASK"; payload: { id: number | string } };

export const taskReducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    // Tại sao mặc dù đã clone ra một mảng mới, mà vẫn bị bất đồng bộ
    case "ADD_TASK":
      return [...state, action.payload];

    case "DELETE_TASK":
      return state.filter((task: Task) => task.id !== action.payload.id);

    case "TOGGLE_TASK":
      return state.map((task: Task) =>
        task.id === action.payload.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );

    case "UPDATE_TASK":
      return state.map((task: Task) =>
        task.id === action.payload.id
          ? { ...task, name: action.payload.name }
          : task
      );

    default:
      return state;
  }
};