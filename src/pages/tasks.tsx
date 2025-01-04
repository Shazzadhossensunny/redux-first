import { AddTaskModal } from "@/module/tasks/AddTaskModal";
import { TaskCard } from "@/module/tasks/TaskCard";
import { filterSelector, taskSelector } from "@/redux/features/task/taskSlice";
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
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};
