import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userList from "./userListSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    users: userList
  },
});
