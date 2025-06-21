import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const appStore = configureStore({
  reducer: todoReducer,
});

export default appStore;
