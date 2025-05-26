import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const base = "http://127.0.0.1:5050";
const base = "hi-shop.up.railway.app";

export const loginUser = createAsyncThunk(
  "user/login",
  async function (form, thunkApi) {
    try {
      const res = await axios.post(
        `hi-shop.up.railway.app/api/v1/user/login`,
        form
      );
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const signinUser = createAsyncThunk(
  "user/signin",
  async function (form, thunkApi) {
    try {
      const res = await axios.post(`${base}/api/v1/user/sign-up`, form);
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
      const res = await axios.get(`${base}/api/v1/user/get-address`, {
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

export const addUserAddress = createAsyncThunk(
  "user/addAddress",
  async function ({ data, token }, thunkApi) {
    try {
      const res = await axios.post(`${base}/api/v1/user/add-address`, data, {
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

const authSlice = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("hi-shop-token") || null,
    isAuthenticated: !!localStorage.getItem("hi-shop-token"),
    authError: null,
    isAuthLoading: false,
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
      // state.isAuthLoading = false;
      state.address = [];
      state.authValidationError = null;
      localStorage.removeItem("hi-shop-token");
    },
  },

  extraReducers: (builder) => {
    builder
      //login
      .addCase(loginUser.pending, function (state) {
        state.isAuthLoading = true;
      })
      .addCase(loginUser.fulfilled, function (state, action) {
        state.token = action.payload.token;
        localStorage.setItem("hi-shop-token", action.payload.token);
        state.isAuthenticated = true;
        state.isAuthLoading = false;
      })
      .addCase(loginUser.rejected, function (state, action) {
        state.authError = action.payload.error;
        state.isAuthenticated = false;
        state.isAuthLoading = false;
      })

      //sign in
      .addCase(signinUser.pending, function (state, action) {
        state.isAuthLoading = true;
      })
      .addCase(signinUser.fulfilled, function (state, action) {
        state.token = action.payload.token;
        state.isAuthLoading = false;
        state.isAuthenticated = true;
        localStorage.setItem("hi-shop-token", action.payload.token);
      })
      .addCase(signinUser.rejected, function (state, action) {
        state.authValidationError = action.payload.error.split(".");
        state.isAuthLoading = false;
      })

      //get address
      .addCase(getUserAddress.pending, function (state) {
        state.isAuthLoading = true;
      })
      .addCase(getUserAddress.fulfilled, function (state, action) {
        state.address = action.payload.data.user.address;
        state.isAuthLoading = false;
      })
      .addCase(getUserAddress.rejected, function (state, action) {
        state.authError = action.payload;
        state.isAuthLoading = false;
      })

      //add address
      .addCase(addUserAddress.pending, function (state) {
        state.isAuthLoading = true;
      })
      .addCase(addUserAddress.fulfilled, function (state, action) {
        state.isAuthLoading = false;
      })
      .addCase(addUserAddress.rejected, function (state, action) {
        state.authError = action.payload;
        state.isAuthLoading = false;
      });
  },
});

export const { logoutUser, clearAuth } = authSlice.actions;

export default authSlice.reducer;
