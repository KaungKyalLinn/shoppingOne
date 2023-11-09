import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminService from "../admin/adminService";

const user = JSON.parse(localStorage.getItem("admin"));

const initialState = {
  adminUser : user ? user : null,
  isLoading : false,
  isSuccess : false,
  isError : false,
  massage : "",
}

export const register = createAsyncThunk("admin/register", async (adminData,ThunkAPI) => {
  try{
    return await adminService.register(adminData);
  }
  catch(err){
    const massage = err.massage || err.toString() || (err.response && err.response.data && err.response.data.massage);
    return ThunkAPI.rejectWithValue(massage);
  }
})

export const login = createAsyncThunk("admin/login", async (adminData,ThunkAPI) => {
  try{
    return await adminService.login(adminData);
  }
  catch(err){
    const massage = err.massage || err.toString() || (err.response && err.response.data && err.response.data.massage);
    return ThunkAPI.rejectWithValue(massage);
  }
})

export const adminSlice = createSlice({
  name : "admin",
  initialState,
  reducers : {
    reset : (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.massage = "";
    }
  },
  extraReducers : (builder) => {
    builder
      .addCase(register.pending,(state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled,(state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.adminUser = action.payload;
      })
      .addCase(register.rejected,(state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.massage = action.payload;
        state.adminUser = null;
      })
      .addCase(login.pending,(state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled,(state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.adminUser = action.payload;
      })
      .addCase(login.rejected,(state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.massage = action.payload;
        state.adminUser = null;
      })
  }

})


export const {reset} = adminSlice.actions;

export default adminSlice.reducer;