import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserTasks, updateStatus } from "../../redux/features/tasks/tasksSlice";
import TaskDetailsModal from "./TaskDetailsModal";

const MyTasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(0)
  
  const { tasks, userSpecificTask } = useSelector((state) => state.tasksSlice);

  const { name: userName } = useSelector((state) => state.userSlice);

  const dispatch = useDispatch();

  const handleTaskId=(id)=>{
    setTaskId(id)
    setIsOpen(!isOpen)
  }
  
  useEffect(() => {
    dispatch(setUserTasks(userName));
  }, [userName, dispatch, tasks]);

  return (
    <div>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskId}></TaskDetailsModal>
      <h1 className="my-3 text-xl">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTask?.map((item) => (
          <div
            key={item.id}
            className="flex justify-between p-3 rounded-md bg-secondary/10"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon onClick={()=>handleTaskId(item.id)} className="w-5 h-5 text-primary" />
              </button>
              <button className="grid place-content-center" title="Done">
                <CheckIcon onClick={()=>{dispatch(updateStatus({id:item.id, status:'done'}))}} className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
