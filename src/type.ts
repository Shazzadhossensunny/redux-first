export type TTask = {
  id: string;
  title: string;
  description: string;
  status: boolean;
  priority: "Low" | "Medium" | "High";
  dueDate: string;
};
