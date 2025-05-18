import { createSlice } from "@reduxjs/toolkit";

const checkOutSlice = createSlice({
  name: "checkOut",
  initialState: {
    bagTotal: null,
    discount: null,
    shippingCharge: 59,
    gstAmt: null,
    totalAmt: null,
  },
  reducers: {
    checkOutAmt(state, action) {
      console.log(action);

      state.bagTotal = action.payload.bagTotal;
      state.discount = action.payload.discount;
      state.gstAmt = action.payload.gstAmt;
      state.totalAmt = action.payload.totalAmt;
    },
  },
});

export const { checkOutAmt } = checkOutSlice.actions;

export default checkOutSlice.reducer;
