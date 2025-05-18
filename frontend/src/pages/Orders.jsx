import React, { useEffect } from "react";
import styled from "styled-components";
import Style from "./Orders.module.css";
import Order from "../components/orders/Order";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../slice/orderSlice";

const Block = styled.div`
  padding: 1rem;

  @media (max-width: 480px) {
    padding-top: 0;
  }
`;

const H3 = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-bottom: 10px;
`;

function Orders() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(getAllOrders(token));
  }, []);
  return (
    <Block>
      <div>
        <H3>Orders</H3>
        <Order />
      </div>
    </Block>
  );
}

export default Orders;
