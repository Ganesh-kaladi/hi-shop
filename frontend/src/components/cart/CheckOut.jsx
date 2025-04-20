import styled from "styled-components";
import { useSelector } from "react-redux";
import { checkOut } from "../../assets/logics/checkOut";

const Container = styled.div`
  background-color: #fff;
  min-height: 340px;
  max-height: 420px;
`;

const H1 = styled.h1`
  padding: 1.2rem;
  margin-bottom: 12px;
  border-bottom: 2px solid var(--color-grey-200);
  text-align: center;
  background-color: rgb(20, 89, 192);
  color: #fff;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const CartPrice = styled.div`
  padding: 1.2rem 1.8rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
`;

const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  color: #3b3b3b;
`;

const TotalPrice = styled.div`
  padding: 0 1.8rem;
`;

const RowTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 0.8rem 0.5rem 0.1rem;
`;

const BtnContainer = styled.div`
  padding: 2rem;
`;

const Btn = styled.button`
  width: 100%;
  height: 2.5rem;
  cursor: pointer;
  border-radius: 0px;
  background-color: #c5c5c5;
  border: 1px solid #616161;
  font-size: 1.2rem;

  &:hover {
    background-color: #808080;
  }
`;

function CheckOut() {
  const { cart } = useSelector((state) => state.cart);

  const checkOutAmt = checkOut(cart, 59, 0.12);

  return (
    <Container>
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
          <PriceName>total price</PriceName>
          <Price>₹{checkOutAmt.totalAmt}/-</Price>
        </RowTotal>
      </TotalPrice>
      <BtnContainer>
        <Btn>Check Out</Btn>
      </BtnContainer>
    </Container>
  );
}

export default CheckOut;
