// redux store
import {configureStore} from "@reduxjs/toolkit";
import adminReducer from "../features/admin/adminSlice";
import productReducer from "../features/products/productsSlice";

const store = configureStore({
  reducer : {
    admin : adminReducer,
    products : productReducer,
  }
})

export default store;