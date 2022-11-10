import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.user_id;
      state.token = action.payload.token;
    },
    removeUser: (state) => {
      state.id = null;
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
