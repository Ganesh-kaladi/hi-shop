import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useCheckOut } from "../../assets/logics/checkOut";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUserAddress } from "../../slice/authSlice";

const Container = styled.div`
  background-color: #ffffff;
  min-height: 340px;
  max-height: 420px;
`;

const CheckOutBlock = styled.div`
  padding: 0 1rem;
`;

const H1 = styled.h1`
  padding: 0.6rem;
  font-size: 1.1rem;
  margin-bottom: 12px;
  text-align: center;
  background-color: rgb(20, 89, 192);
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 480px) {
    text-align: start;
    font-size: 1.1rem;
    margin-bottom: 4px;
    background-color: unset;
    color: #666161;
  }
`;

const CartPrice = styled.div`
  padding: 0rem 0.4rem;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const Row = styled.div`
  margin-bottom: 1.2rem;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
`;

const PriceName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: #5e5c5c;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Price = styled.span`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #7e7878;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const TotalPrice = styled.div`
  /* margin-bottom: 1.2rem; */
  padding: 0 18px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0rem 0.4rem;
  }
`;

const RowTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0rem 0.4rem;
`;

const TotalPriceName = styled.span`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #7e7878;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
`;

const Total = styled.span`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #7e7878;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0rem 0.4rem;
  }
`;
const BtnContainer = styled.div`
  padding: 2rem 1rem;

  @media (max-width: 480px) {
    text-align: right;
  }
`;

const Btn = styled.button`
  width: 100%;
  padding: 8px;
  cursor: pointer;
  border-radius: 0px;
  background-color: #e2e1e18f;
  border: none;
  font-size: 0.9rem;

  &:hover {
    background-color: #cececec6;
  }

  @media (max-width: 480px) {
    width: 30%;
    font-size: 0.9rem;
  }
`;

function CheckOut() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { bagTotal, discount, shippingCharge, gstAmt, totalAmt } = useSelector(
    (state) => state.checkOut
  );
  const navigate = useNavigate();

  useCheckOut();

  function handleCheckOutBtn() {
    dispatch(getUserAddress(token));
    navigate("/place-order");
  }

  return (
    <Container>
      <CheckOutBlock>
        <H1>Summery</H1>
        <CartPrice>
          <Row>
            <PriceName>Bag Total</PriceName>
            <Price>₹{bagTotal}/-</Price>
          </Row>
          <Row>
            <PriceName>Discount</PriceName>
            <Price>-₹{discount}/-</Price>
          </Row>
          <Row>
            <PriceName>Shiping charges</PriceName>
            <Price>₹{shippingCharge}/-</Price>
          </Row>
          <Row>
            <PriceName>Gst</PriceName>
            <Price>₹{gstAmt}/-</Price>
          </Row>
        </CartPrice>
        <TotalPrice>
          <RowTotal>
            <TotalPriceName>total price</TotalPriceName>
            <Total>₹{totalAmt}/-</Total>
          </RowTotal>
        </TotalPrice>
        <BtnContainer>
          <Btn onClick={handleCheckOutBtn}>Check Out</Btn>
        </BtnContainer>
      </CheckOutBlock>
    </Container>
  );
}

export default CheckOut;
