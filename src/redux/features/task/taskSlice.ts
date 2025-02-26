import { RootState } from "@/redux/store";
import { TFilter, TTask } from "@/type";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { deleteUser } from "../user/userSlice";

type TInitialState = {
  tasks: TTask[];
  filter: TFilter;
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
      assignedTo: null,
    },
  ],
  filter: "All",
};

type draftTask = Pick<
  TTask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;

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
    updateTask: (state, action) => {
      const updateTask = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...updateTask } : task
      );
    },
    updateFilter: (state, action: PayloadAction<TFilter>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignedTo === action.payload ? (task.assignedTo = null) : task
      );
    });
  },
});
//this is best way to selector send
export const taskSelector = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "High") {
    return state.todo.tasks.filter((task) => task.priority === "High");
  } else if (filter === "Medium") {
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  } else if (filter === "Low") {
    return state.todo.tasks.filter((task) => task.priority === "Low");
  } else {
    return state.todo.tasks;
  }
};

//filter
export const filterSelector = (state: RootState) => {
  return state.todo.filter;
};

export const {
  addTask,
  toggleTaskComplete,
  deleteTask,
  updateFilter,
  updateTask,
} = taskSlice.actions;

export default taskSlice.reducer;
