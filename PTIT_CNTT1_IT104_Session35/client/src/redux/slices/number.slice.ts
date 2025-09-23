import { createSlice } from "@reduxjs/toolkit";

interface NumberState {
  list: number[];
}

const initialState: NumberState = {
  list: [],
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    randomNumber(state) {
      // Sinh 1 số ngẫu nhiên từ 1 -> 10
      const randomNum = Math.floor(Math.random() * 10) + 1;
      state.list.push(randomNum); // thêm vào mảng
    },
    resetList(state) {
      state.list = [];
    },
  },
});

export const { randomNumber, resetList } = numberSlice.actions;
export default numberSlice.reducer;
