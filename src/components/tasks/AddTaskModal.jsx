import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

// eslint-disable-next-line react/prop-types
const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch()
  
  const onSubmit = (data) => {
    dispatch(addTask(data))
    handleCancel();
  };
  const handleCancel = () => {
    reset();
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <h2 className="text-lg font-semibold">Add a New Task</h2>

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: true })}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.title && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.description && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-700"
          >
            Deadline
          </label>
          <input
            id="deadline"
            type="date"
            {...register("date", { required: true })}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.deadline && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <label
            htmlFor="assignedTo"
            className="block text-sm font-medium text-gray-700"
          >
            Assign to
          </label>
          <select
            id="assignedTo"
            {...register("assignedTo", { required: true })}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Select...</option>
            <option value="MH Shawon">MH Shawon</option>
            <option value="John">John</option>
            <option value="Jane">Jane</option>
          </select>
          {errors.assignedTo && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700"
          >
            Priority
          </label>
          <select
            id="priority"
            {...register("priority", { required: true })}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Select...</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-4 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 btn-sm"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 mt-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline btn-sm"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
