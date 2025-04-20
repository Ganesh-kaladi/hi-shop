import React from "react";
import styled from "styled-components";
import CartList from "../components/cart/CartList";
import CheckOut from "../components/cart/CheckOut";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  margin: var(--container-margin);
  width: var(--container-width);
  margin-top: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
`;

const EmptyContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Empty = styled.div`
  background-color: aliceblue;
  padding: 3rem;
  text-align: center;
`;

const H4 = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 0.4rem;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
`;

const Para = styled.p`
  margin-bottom: 1.2rem;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #575656;
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #d8d8d8;
  }
`;

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <Container>
      {cart?.length > 0 ? (
        <Grid>
          <CartList />
          <CheckOut />
        </Grid>
      ) : (
        <EmptyContainer>
          <Empty>
            <H4>🛒 Your Cart is Currently Empty</H4>
            <Para>Looks like you haven't added anything yet.</Para>
            <Para>
              <b>Start shopping now and discover something amazing! 🤩</b>
            </Para>
            <Button onClick={() => navigate("/products")}>Shop Now</Button>
          </Empty>
        </EmptyContainer>
      )}
    </Container>
  );
}

export default Cart;
