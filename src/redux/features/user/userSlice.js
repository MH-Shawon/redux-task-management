import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "MH Shawon",
  email: "mh@gmail.com",
};

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{},
})
export default userSlice.reducer;
