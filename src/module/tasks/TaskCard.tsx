import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { TTask } from "@/type";

export const TaskCard = ({ task }: { task: TTask }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 flex items-start gap-4">
      {/* Priority Indicator */}

      <div
        className={cn(
          "w-2 h-2 rounded mt-2",
          task.priority === "High" && "bg-red-500",
          task.priority === "Medium" && "bg-yellow-500",
          task.priority === "Low" && "bg-green-500"
        )}
        title={`Priority: ${task.priority}`}
      ></div>

      {/* Task Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <div className="mt-2 flex justify-between text-sm">
          <span>
            <strong>Status:</strong> {task.status}
          </span>
          <span>
            <strong>Due Date:</strong> {task.dueDate}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button className="text-red-500 hover:text-red-700" title="Delete Task">
          <Trash2 size={20} />
        </button>
        <input type="checkbox" className="w-5 h-5" title="Toggle Status" />
      </div>
    </div>
  );
};
