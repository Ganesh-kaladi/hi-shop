import { useEffect } from "react";
import styled from "styled-components";
import Order from "../components/orders/Order";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../slice/orderSlice";
import NoOrders from "../components/orders/NoOrders";
import { clearAuth } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";

const Block = styled.div`
  padding: 1rem;
  margin-top: -1rem;

  @media (max-width: 486px) {
    padding-top: 0;
    margin-top: -1.4rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-top: -1.8rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: -1.8rem;
  }

  /* @media (min-width: 769px) and (max-width: 992px) {
    margin-top: -1rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-top: -1rem;
  } */
`;

const H3 = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-bottom: 10px;
  margin-top: 0;
  display: none;

  @media (max-width: 486px) {
    text-align: center;
    font-size: 0.9rem;
    display: block;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    text-align: center;
    font-size: 0.9rem;
    display: block;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    text-align: center;
    font-size: 1.1rem;
    display: block;
  }

  @media (min-width: 769px) and (max-width: 992px) {
  }
`;

function Orders() {
  const { orders, orderError } = useSelector((state) => state.order);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!token) {
        navigate("/login");
      }
      dispatch(getAllOrders(token));
    },
    [dispatch, navigate, token]
  );

  useEffect(
    function () {
      if (orderError === "TokenExpiredError") {
        dispatch(clearAuth());
        navigate("/login");
      }
    },
    [dispatch, navigate, orderError]
  );

  return (
    <Block>
      {orders?.length > 0 ? (
        <div>
          <H3>Orders</H3>
          <Order />
        </div>
      ) : (
        <NoOrders />
      )}
    </Block>
  );
}

export default Orders;
