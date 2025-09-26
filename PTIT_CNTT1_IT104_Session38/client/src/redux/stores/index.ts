import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../slices/book.slice';

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];