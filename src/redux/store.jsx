import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'
import tasksSlice from './features/tasks/tasksSlice'


export const store = configureStore({
    reducer: {
        tasksSlice: tasksSlice,
        userSlice:userSlice,
    },
   
})
