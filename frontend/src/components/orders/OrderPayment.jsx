import Style from "./OrderPayment.module.css";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

function OrderPayment() {
  return (
    <div className={Style.ord__payment}>
      <div className={Style.ord__id}>
        <h3>Order# FN9742609454(4 Items)</h3>
        <p>Order placed on 10th January 2025</p>
        <span>Paid by Cash on Delivery</span>
      </div>
      <div className={Style.ord__payment__details}>
        <h4>Order Payment Details</h4>
        <div>
          <Row>
            <p>Order Amount</p>
            <p>₹7,388.00</p>
          </Row>
          <Row>
            <p>Order Savings</p>
            <p>₹3,215.00</p>
          </Row>
          <Row>
            <p>Coupon savings</p>
            <p>₹500.00</p>
          </Row>
          <Row>
            <p>Convenience Fee</p>
            <p>₹48</p>
          </Row>
          <Row className={Style.ord__total__last}>
            <p>Order Total</p>
            <p>₹3,721.00</p>
          </Row>
          <div className={Style.payment__mode}>
            <h5>Payment Mode</h5>
            <Row>
              <p>Cash on Delivery</p>
              <p>₹3721.00</p>
            </Row>
          </div>
        </div>
      </div>
      <div className={Style.ord__shipped__add}>
        <h5>Deliver to</h5>
        <ul>
          <li>
            <h6>siva ganesh</h6>
          </li>
          <li>dhanammagudi street, Prejar peta GGH Kakinada,</li>
          <li>Ambedkar function hall GGH,</li>
          <li>EAST GODAVARI, ANDHRA PRADESH</li>
          <li>ndia - 533001</li>
          <li>
            Phone : <b>9701129109</b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OrderPayment;
