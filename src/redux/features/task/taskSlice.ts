import { RootState } from "@/redux/store";
import { TTask } from "@/type";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  tasks: TTask[];
  filter: "All" | "High" | "Medium" | "Low";
};

const initialState: TInitialState = {
  tasks: [
    {
      id: "KlfWzuisgbWQLYUS8tyUP",
      isCompleted: false,
      title: "Complete the Project Documentation",
      description:
        "Prepare and finalize all documentation related to the project, including technical specifications and user guides.",
      priority: "High",
      dueDate: "2025-01-09T18:00:00.000Z",
    },
  ],
  filter: "All",
};

type draftTask = Pick<TTask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: draftTask): TTask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<draftTask>) => {
      // const id = uuidv4();
      // const taskData = {
      //   ...action.payload,
      //   id,
      //   isCompleted: false,
      // };
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleTaskComplete: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});
//this is best way to selector send
export const taskSelector = (state: RootState) => state.todo.tasks;
//filter
export const filterSelector = (state: RootState) => state.todo.filter;

export const { addTask, toggleTaskComplete, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
