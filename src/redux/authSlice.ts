import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "auth",
  initialState: {
    name: "",
    isLogged: false,
  },
  reducers: {
    setAccount: (state, action) => {
      state.name = action.payload.name;
      state.isLogged = true;
    },
    logout: state => {
      state.name = "";
      state.isLogged = false;
    },
  },
});

export const { setAccount, logout } = slice.actions;

export default slice.reducer;
