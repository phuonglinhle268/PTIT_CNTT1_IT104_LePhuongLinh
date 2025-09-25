import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../slices/student.slice';

const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];