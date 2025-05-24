import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/login",
  async function (form, thunkApi) {
    try {
      const res = await axios.post(
        "http://127.0.0.1:5050/api/v1/user/login",
        form
      );
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const signinUser = createAsyncThunk(
  "user/signin",
  async function (form, thunkApi) {
    try {
      const res = await axios.post(
        "http://127.0.0.1:5050/api/v1/user/sign-up",
        form
      );
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getUserAddress = createAsyncThunk(
  "user/getAddress",
  async function (token, thunkApi) {
    try {
      const res = await axios.get(
        "http://127.0.0.1:5050/api/v1/user/get-address",
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

export const addUserAddress = createAsyncThunk(
  "user/addAddress",
  async function ({ data, token }, thunkApi) {
    try {
      const res = await axios.post(
        "http://127.0.0.1:5050/api/v1/user/add-address",
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

const authSlice = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("hi-shop-token") || null,
    isAuthenticated: !!localStorage.getItem("hi-shop-token"),
    authError: null,
    isAuthPending: false,
    address: [],
    authValidationError: [],
  },
  reducers: {
    logoutUser(state, action) {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("hi-shop-token");
    },
    clearAuth(state, action) {
      state.token = null;
      state.isAuthenticated = false;
      state.authError = null;
      // state.isAuthPending = false;
      state.address = [];
      state.authValidationError = null;
      localStorage.removeItem("hi-shop-token");
    },
  },

  extraReducers: (builder) => {
    builder
      //login
      .addCase(loginUser.pending, function (state) {
        state.isAuthPending = true;
      })
      .addCase(loginUser.fulfilled, function (state, action) {
        state.token = action.payload.token;
        localStorage.setItem("hi-shop-token", action.payload.token);
        state.isAuthenticated = true;
        state.isAuthPending = false;
      })
      .addCase(loginUser.rejected, function (state, action) {
        state.authError = action.payload.error;
        state.isAuthenticated = false;
        state.isAuthPending = false;
      })

      //sign in
      .addCase(signinUser.pending, function (state, action) {
        state.isAuthPending = true;
      })
      .addCase(signinUser.fulfilled, function (state, action) {
        state.token = action.payload.token;
        state.isAuthPending = false;
        state.isAuthenticated = true;
        localStorage.setItem("hi-shop-token", action.payload.token);
      })
      .addCase(signinUser.rejected, function (state, action) {
        state.authValidationError = action.payload.error.split(".");
        state.isAuthPending = false;
      })

      //get address
      .addCase(getUserAddress.pending, function (state) {
        state.isAuthPending = true;
      })
      .addCase(getUserAddress.fulfilled, function (state, action) {
        state.address = action.payload.data.user.address;
        state.isAuthPending = false;
      })
      .addCase(getUserAddress.rejected, function (state, action) {
        state.authError = action.payload;
        state.isAuthPending = false;
      })

      //add address
      .addCase(addUserAddress.pending, function (state) {
        state.isAuthPending = true;
      })
      .addCase(addUserAddress.fulfilled, function (state, action) {
        state.isAuthPending = false;
      })
      .addCase(addUserAddress.rejected, function (state, action) {
        state.authError = action.payload;
        state.isAuthPending = false;
      });
  },
});

export const { logoutUser, clearAuth } = authSlice.actions;

export default authSlice.reducer;
