export type TTask = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: "Low" | "Medium" | "High";
  dueDate: string;
};

export type TFilter = "All" | "High" | "Medium" | "Low";

export type TUser = {
  id: string;
  name: string;
};
