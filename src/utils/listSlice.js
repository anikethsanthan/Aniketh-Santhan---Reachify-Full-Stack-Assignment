import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "List",
  initialState: [],
  reducers: {
    setTasks: (state, action) => {
      return action.payload; // Set the initial tasks from the database
    },
    addTask: (state, action) => {
      state.push(action.payload); // Add a new task
    },
    removeTask: (state, action) => {
      return state.filter((task, index) => index !== action.payload); // Remove task by index
    },
  },
});

export const { setTasks, addTask, removeTask } = listSlice.actions;
export default listSlice.reducer;
