import styled, { css } from "styled-components";
import image from "../../assets/product/shirt-2.jpg";
import { FaTruck } from "react-icons/fa6";

const ListItem = styled.div`
  margin-bottom: 28px;

  @media (max-width: 480px) {
    margin-bottom: 18px;
  }
`;

const Container = styled.div`
  padding: 12px;
  border: 1px solid #b8b6b6a9;
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const DateBlock = styled.div`
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const H4 = styled.h4`
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 1.254rem;
    margin-bottom: 4px;
  }
`;

const DeliveryDate = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 540;
  margin-bottom: 18px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ShipBlock = styled.div``;

const Span = styled.span`
  display: block;
  margin-bottom: 12px;
  color: rgb(131, 131, 131);
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 2px;
  }
`;

const Name = styled.h4`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1.1rem;

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 2px;
  }
`;

const AddListItem = styled.li`
  list-style: none;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  margin-top: 12px;
`;

const ImageContainer = styled.div`
  @media (max-width: 480px) {
    flex: 0 0 32%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const ProductDetails = styled.div`
  flex: 0 0 68%;
`;

const H5 = styled.h5`
  font-weight: lighter;
  font-size: 1.2rem;
  margin-bottom: 8px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 6px;
  }
`;

const Price = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin-bottom: 6px;
  }
`;
const SizeBlock = styled.p`
  margin-bottom: 8px;
  font-size: 0.9rem;
  font-weight: 300;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin-bottom: 6px;
  }
`;

const Size = styled.span`
  display: inline-block;
  margin-left: 6px;
  font-size: 1rem;
  font-weight: 700;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Rating = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const ReturnPayment = styled.div`
  margin-top: 30px;

  @media (max-width: 480px) {
    margin-top: 18px;
  }
`;

const H6 = styled.h6`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 480px) {
    margin-bottom: 8px;
    font-size: 0.9rem;
  }
`;

const Payment = styled.div`
  /* margin-top: 12px; */
  /* @media (max-width: 480px) {
    margin-bottom: 2px;
    font-size: 0.9rem;
  } */
`;

const RefundRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  width: 50%;
  justify-content: space-between;
  margin-bottom: 12px;

  ${(cur) =>
    cur.type === "ord__refund" &&
    css`
      padding-bottom: 6px;
      padding-top: 6px;
      border-bottom: 1px solid rgba(170, 169, 169, 0.822);
      border-top: 1px solid rgba(170, 169, 169, 0.822);

      @media (max-width: 480px) {
        padding-bottom: 4px;
        padding-top: 4px;
      }
    `}
`;

const PaymentPara = styled.span`
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 0.8rem;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const PaymentPrice = styled.span`
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 0.8rem;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

function OrderReturned() {
  return (
    <ListItem>
      <Container>
        <DateBlock>
          <H4>
            <FaTruck />
            Refunded
            <span>
              return ID:
              <b>#12345</b>
            </span>
          </H4>
          <DeliveryDate>pikup on Monday, 11 January </DeliveryDate>
        </DateBlock>
        <ShipBlock>
          <Span>pikup from</Span>
          <Name>siva ganesh</Name>
          <ul>
            <AddListItem>D.no. 1-1-32/1</AddListItem>
            <AddListItem>ZP colony</AddListItem>
            <AddListItem>rajam vari street</AddListItem>
            <AddListItem>kakinada</AddListItem>
            <AddListItem>AP</AddListItem>
            <AddListItem>11123</AddListItem>
          </ul>
          <Row>
            <ImageContainer>
              <Image src={image} alt="..." />
            </ImageContainer>
            <ProductDetails>
              <H5>title</H5>
              <Price>₹ 120/-</Price>
              <SizeBlock>
                size <Size>34</Size>
              </SizeBlock>
              <Rating>rating : ⭐⭐⭐⭐⭐</Rating>
            </ProductDetails>
          </Row>
        </ShipBlock>
        <ReturnPayment>
          <H6>Refund Credit Mode</H6>
          <Payment>
            <RefundRow>
              <PaymentPara>Bank Transfer</PaymentPara>
              <PaymentPrice> ₹439.21</PaymentPrice>
            </RefundRow>
            <RefundRow type="ord__refund">
              <PaymentPara>Total Refund</PaymentPara>
              <PaymentPrice> ₹439.21</PaymentPrice>
            </RefundRow>
          </Payment>
        </ReturnPayment>
      </Container>
    </ListItem>
  );
}

export default OrderReturned;
