import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

// Configura todo redux, como o provider do useContext
