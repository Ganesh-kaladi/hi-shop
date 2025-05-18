import { useDispatch, useSelector } from "react-redux";
import { checkOutAmt } from "../../slice/checkOutSlice";
import { useEffect } from "react";

export function useCheckOut() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const shippingCharge = 59;
  const gst = 0.12;

  //bag total
  const bagTotal = cart.reduce((sum, p) => {
    return sum + Number(p.product.price) * Number(p.quantity);
  }, 0);

  //discount price
  const discountPrice = cart.reduce((sum, product) => {
    return sum + product.product.discountPrice * 1 * (product.quantity * 1);
  }, 0);
  const discount = bagTotal * 1 - discountPrice * 1;
  const gstAmt = gst * discountPrice;
  const totalAmt = bagTotal + gstAmt + shippingCharge - discount;

  useEffect(
    function () {
      dispatch(
        checkOutAmt({
          bagTotal,
          discount,
          gstAmt: gstAmt.toFixed(2),
          totalAmt: totalAmt.toFixed(2),
        })
      );
    },
    [cart]
  );
}
