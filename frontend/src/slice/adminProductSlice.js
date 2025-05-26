import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const base = "http://127.0.0.1:5050";

export const createProduct = createAsyncThunk(
  "admin/createProduct",
  async function ({ formData, token }, thunkApi) {
    try {
      const res = await axios.post(`${base}/api/v1/product`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);

const adminProductSlice = createSlice({
  name: "admin",
  initialState: {
    product: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    removceProduct(state, action) {
      state.product = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, function (state, action) {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, function (state, action) {
        state.product = action.payload.data;
        state.isLoading = false;
      })
      .addCase(createProduct.rejected, function (state, action) {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { removceProduct } = adminProductSlice.actions;

export default adminProductSlice.reducer;
