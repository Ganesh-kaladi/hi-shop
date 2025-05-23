import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductDetails = createAsyncThunk(
  "singleProduct/getDetails",
  async function (id, thunkAPI) {
    try {
      const res = await axios.get(`http://127.0.0.1:5050/api/v1/product/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    isLoading: false,
    singleDoc: null,
    singleProductError: null,
  },
  reducers: {
    removeProduct(state, action) {
      state.singleDoc = null;
    },
    clearSidleProduct(state, action) {
      state.isLoading = false;
      state.singleDoc = null;
      state.singleProductError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetails.pending, function (state, action) {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getProductDetails.fulfilled, function (state, action) {
        state.isLoading = false;
        state.singleDoc = action.payload.data.doc;
      })
      .addCase(getProductDetails.rejected, function (state, action) {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { removeProduct } = singleProductSlice.actions;

export default singleProductSlice.reducer;
