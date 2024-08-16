import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "MH Shawon",
      priority: "high",
    },
  ],
  userSpecificTask: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks.filter((task) => task.id !== payload);
    },
    updateStatus:(state,{payload})=>{
const targetedStatus = state.tasks.find(task=> task.id=== payload.id)
targetedStatus.status = payload.status
    },

    setUserTasks:(state,{payload})=>{
state.userSpecificTask = state.tasks.filter(
  (item) => item.assignedTo === payload
);
    }
  },
});
export const { addTask,removeTask, updateStatus,setUserTasks } = taskSlice.actions;
export default taskSlice.reducer;
