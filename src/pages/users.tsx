import AddUserModal from "@/module/users/AddUserModal";
import UserCard from "@/module/users/UserCard";

export const Users = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-bold mr-auto">Users</h2>

        {/* user model */}
        <AddUserModal />
      </div>
      <div className="space-y-4">
        <UserCard />
      </div>
    </div>
  );
};
