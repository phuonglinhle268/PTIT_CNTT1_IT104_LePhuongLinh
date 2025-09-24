import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  favorite: boolean;
}

interface FavoriteState {
  users: User[];
}

const initialState: FavoriteState = {
  users: [
    { id: 1, name: "Nguyễn Văn A", favorite: false },
    { id: 2, name: "Nguyễn Văn B", favorite: false },
    { id: 3, name: "Nguyễn Văn C", favorite: false },
    { id: 4, name: "Nguyễn Văn D", favorite: false },
  ],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const user = state.users.find((u) => u.id === action.payload);
      if (user) {
        user.favorite = !user.favorite;
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
