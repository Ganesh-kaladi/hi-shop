import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import singleProductReducer from "./slice/singleProductSlice";
import adminProductReducer from "./slice/adminProductSlice";
import allProductReducer from "./slice/allProductSlice";
import cartReducer from "./slice/cartSlice";
import pageWidthReducer from "./slice/pageWidthSlice";
import checkOutReducer from "./slice/checkOutSlice";
import orderReducer from "./slice/orderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    singleProduct: singleProductReducer,
    adminProduct: adminProductReducer,
    allProduct: allProductReducer,
    cart: cartReducer,
    pageWidth: pageWidthReducer,
    checkOut: checkOutReducer,
    order: orderReducer,
  },
});

export default store;
