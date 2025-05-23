import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk(
  "cart/addCart",
  async function ({ data, token }, thunkApi) {
    try {
      const res = await axios.post(`http://127.0.0.1:5050/api/v1/cart`, data, {
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

export const getCartItems = createAsyncThunk(
  "cart/getCart",
  async function (token, thunkApi) {
    try {
      const res = await axios.get(`http://127.0.0.1:5050/api/v1/cart`, {
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

export const incQunatity = createAsyncThunk(
  "cart/incQuntityItem",
  async function ({ quantity, id, token }, thunkApi) {
    try {
      const res = await axios.patch(
        `http://127.0.0.1:5050/api/v1/cart/${id}`,
        { quantity: quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const decQuantity = createAsyncThunk(
  "cart/decQuntityItem",
  async function ({ quantity, id, token }, thunkApi) {
    try {
      const res = await axios.patch(
        `http://127.0.0.1:5050/api/v1/cart/${id}`,
        { quantity: quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeCartItem",
  async function ({ id, token }, thunkApi) {
    try {
      const res = await axios.delete(
        `http://127.0.0.1:5050/api/v1/cart/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeAllCart = createAsyncThunk(
  "cart/removeAllCartItems",
  async function ({ data, token }, thunkApi) {
    try {
      const res = await axios.patch(
        "http://127.0.0.1:5050/api/v1/cart/delete-cart-items",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

const cartSlie = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isLoadingCart: false,
    message: "",
    status: null,
    cartError: "",
  },
  reducers: {
    removeCartError(state, action) {
      state.cartError = "";
    },
    clearCart(state, action) {
      state.cart = [];
      state.isLoadingCart = false;
      state.message = "";
      state.status = null;
      state.cartError = "";
    },
  },
  extraReducers: (builder) => {
    builder

      //add to cart
      .addCase(addToCart.pending, function (state, action) {
        state.cartError = "";
        state.isLoadingCart = true;
      })
      .addCase(addToCart.fulfilled, function (state, action) {
        state.isLoadingCart = false;
        state.cart = action.payload.data.cart;
      })
      .addCase(addToCart.rejected, function (state, action) {
        state.isLoadingCart = false;
        state.cartError = action.payload.error?.name;
      })

      //get cart items
      .addCase(getCartItems.pending, function (state, action) {
        state.cartError = "";
        state.isLoadingCart = true;
      })
      .addCase(getCartItems.fulfilled, function (state, action) {
        state.isLoadingCart = false;
        state.cart = action.payload.data.cart;
        state.cartError = "";
      })
      .addCase(getCartItems.rejected, function (state, action) {
        state.isLoadingCart = false;
        state.cartError = action.payload.error?.name;
      })

      //inc quantity
      .addCase(incQunatity.pending, function (state, action) {
        state.cartError = "";
        state.isLoadingCart = true;
      })
      .addCase(incQunatity.fulfilled, function (state, action) {
        state.isLoadingCart = false;
        // state.message = action.payload.message;
        state.cartError = "";
      })
      .addCase(incQunatity.rejected, function (state, action) {
        state.isLoadingCart = false;
        state.cartError = action.payload.error?.name;
      })

      //dec quantity
      .addCase(decQuantity.pending, function (state, action) {
        state.cartError = "";
        state.isLoadingCart = true;
      })
      .addCase(decQuantity.fulfilled, function (state, action) {
        state.isLoadingCart = false;
        // state.message = action.payload.message;
        state.cartError = "";
      })
      .addCase(decQuantity.rejected, function (state, action) {
        state.isLoadingCart = false;
        state.cartError = action.payload.error?.name;
      })

      //remove Cart item
      .addCase(removeFromCart.pending, function (state, action) {
        state.cartError = "";
        state.isLoadingCart = true;
      })
      .addCase(removeFromCart.fulfilled, function (state, action) {
        state.isLoadingCart = false;
        state.message = action.payload.message;
      })
      .addCase(removeFromCart.rejected, function (state, action) {
        state.isLoadingCart = false;
        state.cartError = action.payload.error?.name;
      })

      //remove all items
      .addCase(removeAllCart.pending, function (state, action) {
        state.cartError = "";
        state.isLoadingCart = true;
      })
      .addCase(removeAllCart.fulfilled, function (state, action) {
        state.isLoadingCart = false;
        // state.status = action.payload.data.status;
        state.cartError = "";
      })
      .addCase(removeAllCart.rejected, function (state, action) {
        state.isLoadingCart = false;
        state.cartError = action.payload.error?.name;
      });
  },
});

export const { removeCartError, clearCart } = cartSlie.actions;

export default cartSlie.reducer;
