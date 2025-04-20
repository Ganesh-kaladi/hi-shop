import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "allproducts/getAllProducts",
  async function (thunkAPI) {
    try {
      const res = await axios.get(`http://127.0.0.1:5050/api/v1/product`);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const getAllProductsBasedOnQuery = createAsyncThunk(
  "allproducts/getAllProductsBasedOnQuery",
  async function (query, thunkAPI) {
    try {
      const res = await axios.get(
        `http://127.0.0.1:5050/api/v1/product${query}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const allProductSlice = createSlice({
  name: "allProducts",
  initialState: {
    products: null,
    isPending: false,
    error: null,
    query: null,
  },
  reducers: {
    removeProducts(state, action) {
      state.products = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, function (state, action) {
        state.isPending = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, function (state, action) {
        state.products = action.payload.data.doc;
        state.isPending = false;
      })
      .addCase(getAllProducts.rejected, function (state, action) {
        state.isPending = false;
        state.error = action.payload;
      })

      // query searching
      .addCase(getAllProductsBasedOnQuery.pending, function (state, action) {
        state.isPending = true;
        state.error = null;
      })
      .addCase(getAllProductsBasedOnQuery.fulfilled, function (state, action) {
        state.products = action.payload.data.doc;
        state.isPending = false;
      })
      .addCase(getAllProductsBasedOnQuery.rejected, function (state, action) {
        state.isPending = false;
        state.error = action.payload;
      });
  },
});

export const { removeProducts } = allProductSlice.actions;

export default allProductSlice.reducer;
