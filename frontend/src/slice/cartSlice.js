import { createSlice } from "@reduxjs/toolkit";

const cartSlie = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
    },
    incQunatity(state, action) {
      state.cart = state.cart.map((el) =>
        el.id === action.payload ? { ...el, quantity: el.quantity + 1 } : el
      );
    },
    decQuantity(state, action) {
      state.cart = state.cart.map(
        (el) =>
          el.id === action.payload
            ? el.quantity === 1
              ? el
              : { ...el, quantity: el.quantity - 1 }
            : el
        //  if(el.quantity ===1) ?{ ...el, quantity: el.quantity - 1 }:state : state
      );
    },
  },
});

export const { addToCart, removeFromCart, incQunatity, decQuantity } =
  cartSlie.actions;

export default cartSlie.reducer;
