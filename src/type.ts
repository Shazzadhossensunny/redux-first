export type TTask = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: "Low" | "Medium" | "High";
  dueDate: string;
};
