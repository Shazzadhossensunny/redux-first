import { Trash2 } from "lucide-react";

export default function UserCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <div className="border rounded-lg shadow-md p-4 flex items-start gap-4">
        <div className="flex flex-1 gap-2">
          {/* user name */}
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold"></h3>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            className="text-red-500 hover:text-red-700"
            title="Delete User"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
