import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    data: {},
    isLogged: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      state.isLogged = true;
    },
    logout: state => {
      state = {
        data: {},
        isLogged: false,
      };
    },
  },
});

export const { setUser, logout } = slice.actions;

export default slice.reducer;
