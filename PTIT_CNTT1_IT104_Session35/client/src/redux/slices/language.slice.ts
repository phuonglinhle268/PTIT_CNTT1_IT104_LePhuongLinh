import { createSlice} from "@reduxjs/toolkit";

interface LanguageState {
  currentLang: "en" | "vi";
}

const initialState: LanguageState = {
  currentLang: "vi", // mặc định English
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.currentLang = action.payload;
    },
    toggleLanguage(state) {
      state.currentLang = state.currentLang === "en" ? "vi" : "en";
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
