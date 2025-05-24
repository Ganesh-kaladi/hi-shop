import React, { useEffect } from "react";
import styled from "styled-components";
import CartList from "../components/cart/CartList";
import CheckOut from "../components/cart/CheckOut";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner, { Loading } from "../components/spinner/Spinner";
import { clearCart, getCartItems } from "../slice/cartSlice";
import { clearAuth } from "../slice/authSlice";
import { clearOrder } from "../slice/orderSlice";
import { clearCheckOut } from "../slice/checkOutSlice";

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 56px;

  @media (max-width: 486px) {
    margin-top: 38px;
    width: 90%;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-top: 42px;
    width: 90%;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 46px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 48px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-top: 52px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 68% 32%;
  grid-template-rows: auto;
  gap: 20px;

  @media (max-width: 486px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 10px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const EmptyContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Empty = styled.div`
  background-color: #d3d3d3;
  padding: 3rem;
  text-align: center;
`;

const H4 = styled.h4`
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 1.111rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 1.233rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.366rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.433rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.544rem;
  }
`;

const Para = styled.p`
  margin-bottom: 1.2rem;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 1.233rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.899rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.921rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.977rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.1rem;
  }
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

  @media (max-width: 480px) {
    font-size: 0.888rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.911rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.955rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.111rem;
  }
`;

function Cart() {
  const { cart, isLoadingCart, cartJWT } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (!token) {
        navigate("/login");
      }
      dispatch(getCartItems(token));
    },
    [navigate, token, dispatch]
  );

  useEffect(
    function () {
      if (cartJWT === "TokenExpiredError") {
        dispatch(clearAuth());
        dispatch(clearCart());
        dispatch(clearOrder());
        dispatch(clearCheckOut());
        navigate("/login");
      }
    },
    [navigate, cartJWT, dispatch]
  );

  return (
    <>
      {isLoadingCart && <Loading />}
      <Container>
        {cart?.length > 0 && (
          <Grid>
            <CartList />
            <CheckOut />
          </Grid>
        )}
        {cart?.length <= 0 && (
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
    </>
  );
}

export default Cart;
