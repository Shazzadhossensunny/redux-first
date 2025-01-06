import { TUser } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  users: TUser[];
};
const initialState: InitialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
