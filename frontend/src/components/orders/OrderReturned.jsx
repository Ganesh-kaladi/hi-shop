import styled, { css } from "styled-components";
import image from "../../assets/product/shirt-2.jpg";
import { FaTruck } from "react-icons/fa6";
import Style from "./OrderDelivered.module.css";

const ListItem = styled.li`
  margin-bottom: 18px;
  margin-top: 18px;
  padding: 12px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;

  ${(props) =>
    props.type === "ord__refund" &&
    css`
      width: 50%;
      justify-content: space-between;
      margin-bottom: 12px;
    `}
`;

const Image = styled.img`
  width: 180px;
`;

function OrderReturned() {
  return (
    <ListItem>
      <div className={Style.ord__returned}>
        <h4>
          <FaTruck />
          Refunded{" "}
          <span>
            return ID:
            <b>#12345</b>
          </span>
        </h4>
        <p>pikup on Monday, 11 January </p>
      </div>
      <div className={Style.ord__pikeup__to}>
        <p>pikup from</p>
        <h4>Siva Ganesh</h4>
        <ul>
          <li>D.no. 1-1-32/1</li>
          <li>ZP colony</li>
          <li>rajam vari street</li>
          <li>kakinada</li>
          <li>AP</li>
          <li>11123</li>
        </ul>
        <Row>
          <Image src={image} alt="..." />
          <div className={Style.ord__ship__p__details}>
            <h5>title</h5>
            <span className={Style.ord__price}>₹ 120/-</span>
            <p>
              size <span>34</span>
            </p>
            <div>rating : ⭐⭐⭐⭐⭐</div>
          </div>
        </Row>
      </div>
      <div className={Style.ord__return__refund}>
        <h4>Refund Credit Mode</h4>
        <div>
          <Row type="ord__refund">
            <p>Bank Transfer</p>
            <p> ₹439.21</p>
          </Row>
          <Row type="ord__refund" className={Style.refund}>
            <p>Total Refund</p>
            <p> ₹439.21</p>
          </Row>
        </div>
      </div>
    </ListItem>
  );
}

export default OrderReturned;
