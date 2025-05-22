import { useSelector } from "react-redux";
import styled from "styled-components";

const Payment = styled.div`
  padding: 0;

  @media (max-width: 486px) {
    padding: 0;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    grid-column: 2/3;
  }
`;

const PaymentContainer = styled.div`
  @media (max-width: 486px) {
    margin-top: 1rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-top: 1rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const OrderDetails = styled.div`
  background-color: rgb(229, 232, 235);
  padding: 1rem;
  border: 1px solid rgb(167, 167, 167);
  border-bottom: none;
`;

const H3 = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.866rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.896rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.933rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.988rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

const OrderDate = styled.p`
  font-size: 1.1rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.888rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.922rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.988rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

const OrderMode = styled.span`
  font-size: 1.1rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.788rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.8188rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.888rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.9188rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.988rem;
  }
`;

const PaymentDetails = styled.div`
  padding: 1rem;
  border: 1px solid rgb(167, 167, 167);
  border-top: none;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
`;

const PriceName = styled.p`
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 1.1rem;

  @media (max-width: 486px) {
    font-size: 0.788rem;
  }

  @media (max-width: 486px) {
    font-size: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.888rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.922rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.988rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

const Price = styled.p`
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 1.1rem;

  @media (max-width: 486px) {
    font-size: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.888rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.922rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.988rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

const PaymentMode = styled.div`
  border-top: 1px solid #e0e0e0;
  padding-top: 0.4rem;
  font-size: 1.1rem;

  @media (max-width: 486px) {
    font-size: 0.7rem;
  }

  @media (max-width: 486px) {
    font-size: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.888rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.922rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.988rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

const ShippingDetails = styled.div`
  padding: 1rem;
`;

const H5 = styled.h5`
  font-size: 1.1rem;
  padding-top: 10px;
  margin-bottom: 6px;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.888rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.922rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.988rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.7rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.788rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.822rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.889rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.922rem;
  }
`;

const H6 = styled.h6`
  font-size: 1.2rem;
  font-weight: 500;

  @media (max-width: 486px) {
    font-size: 0.88rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.922rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.988rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.04922rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.1822rem;
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
