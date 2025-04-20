import React from "react";
import styled from "styled-components";
import Style from "./Orders.module.css";
import Order from "../components/orders/Order";

const Block = styled.div`
  padding: 0px 14px;
`;

function Orders() {
  return (
    <Block>
      <div className={Style.orders}>
        <h3>Orders</h3>
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </Block>
  );
}

export default Orders;
