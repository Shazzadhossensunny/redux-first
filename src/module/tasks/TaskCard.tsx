import { Trash2 } from "lucide-react";

export const TaskCard = () => {
  return (
    <div>
      {/* Task Card */}
      <div className="border rounded-lg shadow-md p-4 flex items-start gap-4">
        {/* Priority Indicator */}
        <div className="w-2 h-full rounded bg-yellow-500" />

        {/* Task Details */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">This is Task 1</h3>
          <p className="text-sm text-gray-600">
            This is task one please complete as soon as possible
          </p>
          <div className="mt-2 flex justify-between text-sm">
            <span>
              <strong>Status:</strong> Pending
            </span>
            <span>
              <strong>Due Date:</strong> 12-2025
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            className="text-red-500 hover:text-red-700"
            title="Delete Task"
          >
            <Trash2 size={20} />
          </button>
          <input type="checkbox" className="w-5 h-5" title="Toggle Status" />
        </div>
      </div>
    </div>
  );
};
