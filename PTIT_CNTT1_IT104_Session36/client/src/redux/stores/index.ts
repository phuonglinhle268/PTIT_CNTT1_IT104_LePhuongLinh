import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../slices/task.slice'

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;

// Định nghĩa type cho dispatch và selector
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];