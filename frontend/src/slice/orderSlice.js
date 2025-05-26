import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const base = "http://127.0.0.1:5050";
const base = "hi-shop.up.railway.app";

export const createOrder = createAsyncThunk(
  "cart/addOrder",
  async function ({ data, token }, thunkApi) {
    try {
      const res = await axios.post(`${base}/api/v1/order`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getAllOrders = createAsyncThunk(
  "cart/allOrders",
  async function (token, thunkApi) {
    try {
      const res = await axios.get(`${base}/api/v1/order`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getSingleOrder = createAsyncThunk(
  "cart/singleOrders",
  async function ({ id, token }, thunkApi) {
    try {
      const res = await axios.get(`${base}/api/v1/order/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    singleOrder: null,
    isLoadingOrder: false,
    orderError: null,
    statusOrder: null,
    orderJWT: null,
  },
  reducers: {
    removeOrderError(state, action) {
      state.orderError = "";
    },
    clearOrder(state, action) {
      state.orders = [];
      state.isLoadingOrder = false;
      state.orderError = null;
      state.statusOrder = null;
      state.singleOrder = null;
      state.orderJWT = null;
    },
    clearSingleOrder(state, action) {
      state.singleOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder

      //create order
      .addCase(createOrder.pending, function (state, action) {
        state.isLoadingOrder = true;
        state.orderError = "";
      })
      .addCase(createOrder.fulfilled, function (state, action) {
        state.isLoadingOrder = false;
        state.statusOrder = action.payload.data.status;
        state.orderError = "";
      })
      .addCase(createOrder.rejected, function (state, action) {
        state.isLoadingOrder = false;
        // state.orderError = action.payload.error.name;
        state.orderJWT = action.payload?.message?.name;
      })

      //get all orders
      .addCase(getAllOrders.pending, function (state, action) {
        state.isLoadingOrder = true;
        state.orderError = "";
      })
      .addCase(getAllOrders.fulfilled, function (state, action) {
        state.isLoadingOrder = false;
        state.statusOrder = action.payload.status;
        state.orders = action.payload.data.order;
        state.orderError = "";
      })
      .addCase(getAllOrders.rejected, function (state, action) {
        state.isLoadingOrder = false;
        state.orderJWT = action.payload?.message?.name;
        // state.orderError = action.payload?.error?.name;
      })

      //get single orders
      .addCase(getSingleOrder.pending, function (state, action) {
        state.isLoadingOrder = true;
        state.orderError = "";
      })
      .addCase(getSingleOrder.fulfilled, function (state, action) {
        state.isLoadingOrder = false;
        state.statusOrder = action.payload.status;
        state.singleOrder = action.payload.data.order;
        state.orderError = "";
      })
      .addCase(getSingleOrder.rejected, function (state, action) {
        state.isLoadingOrder = false;
        // state.orderError = action.payload?.error?.name;
        state.orderJWT = action.payload?.message?.name;
      });
  },
});

export const { removeOrderError, clearOrder, clearSingleOrder } =
  orderSlice.actions;

export default orderSlice.reducer;
