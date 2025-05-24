import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function useCheckIsInCart(id) {
  const { cart } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(function () {
    if (!token) {
      return navigate("/login");
    }
  }, []);

  dispatch(getCartItems(token));
  return cart?.some((el) => el._id === id);
}

export default useCheckIsInCart;
