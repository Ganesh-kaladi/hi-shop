import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrder = createAsyncThunk(
  "cart/addOrder",
  async function ({ data, token }, thunkApi) {
    try {
      const res = await axios.post(`http://127.0.0.1:5050/api/v1/order`, data, {
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
      const res = await axios.get(`http://127.0.0.1:5050/api/v1/order`, {
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
      const res = await axios.get(`http://127.0.0.1:5050/api/v1/order/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
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
  },
  extraReducers: (builder) => {
    builder

      //create order
      .addCase(createOrder.pending, function (state, action) {
        state.isLoadingOrder = true;
      })
      .addCase(createOrder.fulfilled, function (state, action) {
        state.isLoadingOrder = false;
        state.statusOrder = action.payload.data.status;
      })
      .addCase(createOrder.rejected, function (state, action) {
        state.isLoadingOrder = false;
        state.orderError = action.payload;
      })

      //get all orders
      .addCase(getAllOrders.pending, function (state, action) {
        state.isLoadingOrder = true;
      })
      .addCase(getAllOrders.fulfilled, function (state, action) {
        state.isLoadingOrder = false;
        state.statusOrder = action.payload.status;
        state.orders = action.payload.data.order;
      })
      .addCase(getAllOrders.rejected, function (state, action) {
        state.isLoadingOrder = false;
        state.orderError = action.payload;
      })

      //get single orders
      .addCase(getSingleOrder.pending, function (state, action) {
        state.isLoadingOrder = true;
      })
      .addCase(getSingleOrder.fulfilled, function (state, action) {
        state.isLoadingOrder = false;
        state.statusOrder = action.payload.status;
        state.singleOrder = action.payload.data.order;
      })
      .addCase(getSingleOrder.rejected, function (state, action) {
        state.isLoadingOrder = false;
        state.orderError = action.payload;
      });
  },
});

export default orderSlice.reducer;
