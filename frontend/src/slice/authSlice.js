import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/login",
  async function (form, thunkAPI) {
    try {
      const res = await axios.post(
        "http://127.0.0.1:5050/api/v1/user/login",
        form
      );
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const signinUser = createAsyncThunk(
  "user/signin",
  async function (form, thunkAPI) {
    try {
      const res = await axios.post(
        "http://127.0.0.1:5050/api/v1/user/sign-up",
        form
      );
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const authSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    isAuthenticated: false,
    error: null,
    isPending: false,
  },
  reducers: {
    logoutUser(state, action) {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
    setToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
  },

  extraReducers: (builder) => {
    builder
      //login
      .addCase(loginUser.pending, function (state) {
        state.isPending = true;
      })
      .addCase(loginUser.fulfilled, function (state, action) {
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        state.isAuthenticated = true;
        state.isPending = false;
      })
      .addCase(loginUser.rejected, function (state, action) {
        console.log(state.error);
        state.error = action.payload;
        state.isAuthenticated = false;
        state.isPending = false;
      })

      //sign in
      .addCase(signinUser.pending, function (state, action) {
        state.isPending = true;
      })
      .addCase(signinUser.fulfilled, function (state, action) {
        state.token = action.payload.token;
        state.isPending = false;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(signinUser.rejected, function (state, action) {
        state.error = action.payload.response.data;
        state.isPending = false;
      });
  },
});

export const { logoutUser, setToken } = authSlice.actions;

export default authSlice.reducer;
