import { useSelector } from "react-redux";
import styled from "styled-components";

const Payment = styled.div`
  padding: 0 2rem;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const PaymentContainer = styled.div`
  margin-top: 40px;
`;

const OrderDetails = styled.div`
  background-color: rgb(229, 232, 235);
  padding: 14px 16px;
`;

const H3 = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 4px;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const OrderDate = styled.p`
  font-size: 0.9rem;
  margin-bottom: 12px;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
const OrderMode = styled.span`
  font-size: 0.9rem;
  margin-bottom: 12px;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const PaymentDetails = styled.div`
  padding: 14px 16px;
  border: 1px solid rgb(167, 167, 167);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const PriceName = styled.p`
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Price = styled.p`
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const PaymentMode = styled.div`
  border-top: 1px solid #e0e0e0;
  padding-top: 14px;
  @media (max-width: 480px) {
    font-size: 0.7 rem;
  }
`;

const ShippingDetails = styled.div`
  padding: 0.8rem 1rem;
`;

const H5 = styled.h5`
  font-size: 1rem;
  padding-top: 10px;
  margin-bottom: 6px;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-style: normal;
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  font-size: 0.8rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const H6 = styled.h6`
  font-size: 1.1rem;
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

function OrderPayment() {
  const { singleOrder } = useSelector((state) => state.order);
  return (
    <Payment>
      <PaymentContainer>
        <OrderDetails>
          <H3>
            {singleOrder?.orderId}&nbsp;&nbsp;(
            {singleOrder?.products?.length} Items)
          </H3>
          <OrderDate>
            Order placed on{" "}
            {new Date(singleOrder?.createdAt).toLocaleString("en-US", {
              timeZone: "Asia/Kolkata",
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </OrderDate>
          <OrderMode>Paid by Cash on Delivery</OrderMode>
        </OrderDetails>
        <PaymentDetails>
          <H3>Order Payment Details</H3>
          <div>
            <Row>
              <PriceName>Order Amount</PriceName>
              <Price>₹ {singleOrder?.bagTotal} /-</Price>
            </Row>
            <Row>
              <PriceName>Order Savings</PriceName>
              <Price>₹ {singleOrder?.discount} /-</Price>
            </Row>
            {/* <Row>
              <PriceName>Coupon savings</PriceName>
              <Price>₹{singleOrder?.bagTotal}/-</Price>
            </Row> */}
            <Row>
              <PriceName>Convenience Fee</PriceName>
              <Price>₹ {singleOrder?.shippingCharge} /-</Price>
            </Row>
            <Row>
              <PriceName>Order Total</PriceName>
              <Price>₹ {singleOrder?.totalAmt} /-</Price>
            </Row>
            <PaymentMode>
              <H5>Payment Mode</H5>
              <Row>
                <PriceName>Cash on Delivery</PriceName>
                <Price>₹ {singleOrder?.totalAmt} /-</Price>
              </Row>
            </PaymentMode>
          </div>
        </PaymentDetails>
        <ShippingDetails>
          <H5>Deliver to</H5>
          <ul>
            <ListItem>
              <H6>
                {singleOrder?.deliveryAddress?.firstName}{" "}
                {singleOrder?.deliveryAddress?.lastName}
              </H6>
            </ListItem>
            <ListItem>{singleOrder?.deliveryAddress?.street},</ListItem>
            <ListItem>{singleOrder?.deliveryAddress?.landmark},</ListItem>
            <ListItem>{singleOrder?.deliveryAddress?.city}</ListItem>
            <ListItem>{singleOrder?.deliveryAddress?.pinncode}</ListItem>
            <ListItem>
              contact : <b>{singleOrder?.deliveryAddress?.phone}</b>
            </ListItem>
          </ul>
        </ShippingDetails>
      </PaymentContainer>
    </Payment>
  );
}

export default OrderPayment;
