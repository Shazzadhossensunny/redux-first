import { RootState } from "@/redux/store";
import { TTask } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

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
      isCompleted: false,
      priority: "Medium",
      dueDate: "12-2025",
    },
  ],
  filter: "All",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TTask>) => {
      const id = uuidv4();
      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.tasks.push(taskData);
    },
  },
});
//this is best way to selector send
export const taskSelector = (state: RootState) => state.todo.tasks;
//filter
export const filterSelector = (state: RootState) => state.todo.filter;

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
