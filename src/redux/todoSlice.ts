import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchTodos } from "../helpers/fetchTodos";
import type { Todo, TodosState } from "../types/types";

// 3. Define initial state
export const initialState: TodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchTodos.fulfilled,
      (state, action: PayloadAction<Todo[]>) => {
        state.isLoading = false;
        state.todos = action.payload;
      }
    );
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Failed to fetch todos";
    });
  },
});

export default todoSlice.reducer;
