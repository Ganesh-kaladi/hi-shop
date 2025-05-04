import { createSlice } from "@reduxjs/toolkit";

const pageWidthSlice = createSlice({
  name: "pageWidth",
  initialState: {
    width: null,
  },
  reducers: {
    addWidth(state, action) {
      state.width = action.payload;
    },
  },
});

export const { addWidth } = pageWidthSlice.actions;

export default pageWidthSlice.reducer;
