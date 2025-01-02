import Logo from "@/assets/Logo";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-16 bg-red-200">
      <div className="container mx-auto h-full flex items-center gap-6">
        <div className="flex items-center gap-4 h-full">
          <Logo />
          <span className="text-3xl font-bold">Task</span>
        </div>
        <Link className="text-lg font-semibold" to="/">
          Tasks
        </Link>
        <Link className="text-lg font-semibold" to="/users">
          Users
        </Link>
      </div>
    </nav>
  );
}
