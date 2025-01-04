import { RootState } from "@/redux/store";
import { TTask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  tasks: TTask[];
  filter: "All" | "High" | "Medium" | "Low";
};

const initialState: TInitialState = {
  tasks: [
    {
      id: "ajlkjjlkjj",
      title: "This is Task",
      description: "This is task one please complete as soon as possible",
      status: false,
      priority: "Medium",
      dueDate: "12-2025",
    },
  ],
  filter: "All",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});
//this is best way to selector send
export const taskSelector = (state: RootState) => state.todo.tasks;
//filter
export const filterSelector = (state: RootState) => state.todo.filter;

export default taskSlice.reducer;
