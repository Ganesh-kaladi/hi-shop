import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import singleProductReducer from "./slice/singleProductSlice";
import adminProductReducer from "./slice/adminProductSlice";
import allProductReducer from "./slice/allProductSlice";
import cartReducer from "./slice/cartSlice";
import pageWidthReducer from "./slice/pageWidthSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    singleProduct: singleProductReducer,
    adminProduct: adminProductReducer,
    allProduct: allProductReducer,
    cart: cartReducer,
    pageWidth: pageWidthReducer,
  },
});

export default store;
