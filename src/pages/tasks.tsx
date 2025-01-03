import { TaskCard } from "@/module/tasks/TaskCard";
import { filterSelector, taskSelector } from "@/redux/features/task/taskSlice";
import { PlusCircle } from "lucide-react";
import { useSelector } from "react-redux";

export const Tasks = () => {
  const tasks = useSelector(taskSelector);
  const filter = useSelector(filterSelector);

  console.log(tasks);
  console.log(filter);
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Tasks</h2>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <PlusCircle size={20} />
          Add Task
        </button>
      </div>
      <TaskCard />
    </div>
  );
};
