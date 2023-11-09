import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import productManagement from "./productsService";

const initialState = {
  products : [],
  isLoading : false,
  isSuccess : false,
  isError : false,
  massage : "",
}

export const dashboard = createAsyncThunk("products/dashboard", async (token, ThunkAPI) => {
  try{
   return await productManagement.dashboard(token);
  }
  catch(err){
    const massage = err.massage || err.toString() || (err.response && err.response.data && err.response.data.massage);
    return ThunkAPI.rejectWithValue(massage);
  }
})

export const createProduct = createAsyncThunk("products/createProduct", async (product, ThunkAPI) => {
  try{
    const token = ThunkAPI.getState().admin.adminUser.token;
    return await productManagement.createProduct(product, token);
  }
  catch(err){
    const massage = err.massage || err.toString() || (err.response && err.response.data && err.response.data.massage);
    return ThunkAPI.rejectWithValue(massage);
  }
})

export const getProduct = createAsyncThunk("products/getProduct", async (_,ThunkAPI) => {
  try{
    return await productManagement.getProduct();
  }
  catch(err){
    const massage = err.massage || err.toString() || (err.response && err.response.data && err.response.data.massage);
    return ThunkAPI.rejectWithValue(massage);
  }
})

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (data, ThunkAPI) => {
  try{
    return await productManagement.deleteProduct(data.productId, data.token);
  }
  catch(err){
    const massage = err.massage || err.toString() || (err.response && err.response.data && err.response.data.massage);
    return ThunkAPI.rejectWithValue(massage);
  }
})

export const editProduct = createAsyncThunk("products/update", async (product,ThunkAPI) => {
  try{
    const token = ThunkAPI.getState().admin.adminUser.token;
    return await productManagement.editProduct(product, token)
  }
  catch(err){
    const massage = err.massage || err.toString() || (err.response && err.response.data && err.response.data.massage);
    return ThunkAPI.rejectWithValue(massage);
  }
})

export const productsSlice = createSlice({
  name : "products",
  initialState,
  reducers : {
    resetProduct : (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.massage = "";
    }
  },
  extraReducers : (builder) => {
    builder
      .addCase(dashboard.pending , (state) => {
        state.isLoading = true;
      })
      .addCase(dashboard.fulfilled , (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(dashboard.rejected , (state, action) => {
        state.isLoading = false;
        state.massage = action.payload;
        state.products = [];
      })
      .addCase(createProduct.pending , (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled , (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products.push(action.payload);
        state.massage = "one product created..."
      })
      .addCase(createProduct.rejected , (state, action) => {
        state.isLoading = false;
        state.massage = action.payload;
        state.products = [];
      })
      .addCase(getProduct.pending , (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled , (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProduct.rejected , (state, action) => {
        state.isLoading = false;
        state.massage = action.payload;
        state.products = [];
      })
      .addCase(deleteProduct.pending , (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled , (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.massage = action.payload;
      })
      .addCase(deleteProduct.rejected , (state, action) => {
        state.isLoading = false;
        state.massage = action.payload;
      })
      .addCase(editProduct.pending , (state) => {
        state.isLoading = true;
      })
      .addCase(editProduct.fulfilled , (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.massage = "product successful edit";
      })
      .addCase(editProduct.rejected , (state, action) => {
        state.isLoading = false;
        state.massage = action.payload;
      })
  }
})

export const {resetProduct} = productsSlice.actions;
export default productsSlice.reducer;