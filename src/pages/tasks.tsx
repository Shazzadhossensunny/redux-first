import { filterSelector, taskSelector } from "@/redux/features/task/taskSlice";
import { useSelector } from "react-redux";

export const Tasks = () => {
  const tasks = useSelector(taskSelector);
  const filter = useSelector(filterSelector);

  console.log(tasks);
  console.log(filter);
  return <div>tasks page</div>;
};
