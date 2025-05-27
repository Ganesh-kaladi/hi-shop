import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useCheckOut } from "../../assets/logics/checkOut";
import { useNavigate } from "react-router-dom";
import { getUserAddress } from "../../slice/authSlice";

const Container = styled.div`
  background-color: #ffffff;
  min-height: 340px;
  max-height: 420px;
  border: 1px solid #6363636a;
  padding: 1rem;
  height: 340px;

  @media (max-width: 486px) {
    margin-top: 32px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-top: 32px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 32px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 40px;
    grid-column: 2/3;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-top: 40px;
    grid-column: 2/3;
  }
`;

const CheckOutBlock = styled.div`
  padding: 0 1rem;

  @media (max-width: 486px) {
    padding: 0;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    padding: 0rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 992px) {
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  }
`;

const H1 = styled.h1`
  padding: 0.6rem;
  font-size: 1.1rem;
  margin-bottom: 12px;
  text-align: center;
  background-color: #d3d3d3;
  color: #4b4949;
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
  /* padding: 0 12px; */
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
  /* padding: 0 18px; */
  padding: 0rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    padding: 0rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 992px) {
  }

  @media (min-width: 993px) and (max-width: 1200px) {
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

  padding: 0rem 0.4rem;
`;

const Total = styled.span`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #7e7878;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0rem 0.4rem;
  }
`;
const BtnContainer = styled.div`
  /* padding: 2rem 1rem; */

  margin-top: 0.8rem;
  text-align: right;

  @media (max-width: 480px) {
    text-align: right;
  }
`;

const Btn = styled.button`
  padding: 0.8rem 1rem;
  cursor: pointer;
  border-radius: 0px;
  background-color: #fff;
  border: 1px solid #8886865a;
  font-size: 0.9rem;
  box-shadow: 0px 0px 8px 0px #423d4138;
  letter-spacing: 1px;
  color: #535151;

  &:hover {
    background-color: #474646c5;
    color: #fff;
  }

  @media (max-width: 480px) {
    width: 40%;
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
          <Btn onClick={handleCheckOutBtn}>check out</Btn>
        </BtnContainer>
      </CheckOutBlock>
    </Container>
  );
}

export default CheckOut;
