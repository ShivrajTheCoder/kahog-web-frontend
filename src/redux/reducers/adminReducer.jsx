import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "Admin",
  initialState: {
    userId: "",
    token: "",
    isLoggedIn: false, 
    isAdmin:false,
    creatorId:1
  },
  reducers: {
    adminLogin : (state, action) => {
      const { userId, token } = action.payload;
      state.userId = userId;
      state.token = token;
      state.isLoggedIn = true;
      state.isAdmin=true,
      state.creatorId=1
    },
    adminLogout: (state) => {
      state.userId = "";
      state.token = "";
      state.isLoggedIn = false; 
      state.isAdmin=false
      state.creatorId=1
    },
  },
});

export const { adminLogin, adminLogout } = adminSlice.actions;
export default adminSlice.reducer;
