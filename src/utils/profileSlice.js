import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    username: "",
    loggedIn: false,
  },
  reducers: {
    addUserName: (state, action) => {
      state.username = action.payload;
    },
    userLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { addUserName, userLoggedIn } = profileSlice.actions;

export default profileSlice.reducer;
