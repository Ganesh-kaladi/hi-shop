import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const base = "http://127.0.0.1:5050";

export const getAllProducts = createAsyncThunk(
  "allproducts/getAllProducts",
  async function (thunkApi) {
    try {
      const res = await axios.get(`${base}/api/v1/product`);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getAllProductsBasedOnQuery = createAsyncThunk(
  "allproducts/getAllProductsBasedOnQuery",
  async function (query, thunkApi) {
    try {
      const res = await axios.get(`${base}/api/v1/product${query}`);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

const allProductSlice = createSlice({
  name: "allProducts",
  initialState: {
    products: null,
    isPending: false,
    error: null,
    category: "",
    fields: "",
    query: "",
    fecthing: false,
  },
  reducers: {
    removeProducts(state, action) {
      state.products = null;
    },
    addQuery(state, action) {
      const queryFields = action.payload;
      if (Object.keys(queryFields).includes("category")) {
        state.category = queryFields.category;
      }
      if (Object.keys(queryFields).includes("fields")) {
        state.fields = queryFields.fields;
      }
      state.query = `?${state.category}${state.category === "" ? "" : "&"}${
        state.fields
      }`;
    },
    clearAllProducts(state, action) {
      state.products = null;
      state.isPending = false;
      state.error = null;
      state.category = "";
      state.fields = "";
      state.query = "";
      state.fecthing = false;
    },
  },
  extraReducers: (builder) => {
    builder
      //all products
      .addCase(getAllProducts.pending, function (state, action) {
        state.isPending = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, function (state, action) {
        state.products =
          action.payload.data === undefined
            ? undefined
            : action.payload.data.doc;
        state.isPending = false;
        state.fecthing = true;
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
        action.payload.data.doc === undefined
          ? (state.products = null)
          : (state.products = action.payload.data.doc);
        state.isPending = false;
      })
      .addCase(getAllProductsBasedOnQuery.rejected, function (state, action) {
        state.isPending = false;
        state.error = action.payload;
      });
  },
});

export const { removeProducts, addQuery, clearAllProducts } =
  allProductSlice.actions;

export default allProductSlice.reducer;
