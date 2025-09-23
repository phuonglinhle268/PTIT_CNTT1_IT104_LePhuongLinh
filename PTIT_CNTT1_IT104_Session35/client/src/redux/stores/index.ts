import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "../slices/counter.slice";
import numberSlice from '../slices/number.slice';
import themeSlice from '../slices/theme.slice';
import viewSlice from '../slices/view.slice';
import menuSlice from '../slices/menu.slice';
import languageSlice from '../slices/language.slice';
import favoriteSlice from "../slices/favorite.slice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    number: numberSlice,
    theme: themeSlice,
    view: viewSlice,
    menu: menuSlice,
    language: languageSlice,
    favorite: favoriteSlice,
  },
});

export default store;

// Định nghĩa type cho dispatch và selector
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];