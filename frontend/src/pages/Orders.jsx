import React from "react";
import styled from "styled-components";
import Style from "./Orders.module.css";
import Order from "../components/orders/Order";

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
  return (
    <Block>
      <div>
        <H3>Orders</H3>
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </Block>
  );
}

export default Orders;
