import styled from "styled-components";
import { useSelector } from "react-redux";
import { checkOut } from "../../assets/logics/checkOut";

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
  const { cart } = useSelector((state) => state.cart);

  const checkOutAmt = checkOut(cart, 59, 0.12);

  return (
    <Container>
      <CheckOutBlock>
        <H1>Summery</H1>
        <CartPrice>
          <Row>
            <PriceName>Products</PriceName>
            <Price>₹{checkOutAmt.subTotal}/-</Price>
          </Row>
          <Row>
            <PriceName>Shiping charges</PriceName>
            <Price>₹{checkOutAmt.shippingCharge}/-</Price>
          </Row>
          <Row>
            <PriceName>Gst</PriceName>
            <Price>₹{checkOutAmt.gstAmt}/-</Price>
          </Row>
        </CartPrice>
        <TotalPrice>
          <RowTotal>
            <TotalPriceName>total price</TotalPriceName>
            <Total>₹{checkOutAmt.totalAmt}/-</Total>
          </RowTotal>
        </TotalPrice>
        <BtnContainer>
          <Btn>Check Out</Btn>
        </BtnContainer>
      </CheckOutBlock>
    </Container>
  );
}

export default CheckOut;
