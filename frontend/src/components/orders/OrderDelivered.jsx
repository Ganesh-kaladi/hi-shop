import styled from "styled-components";
import Style from "./OrderDelivered.module.css";
import { FaCartShopping } from "react-icons/fa6";
import image from "../../assets/product/shirt-2.jpg";

const ListItem = styled.li`
  margin-bottom: 12px;
  margin-top: 12px;
  padding: 12px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`;

const Image = styled.img`
  width: 180px;
`;

function OrderDelivered() {
  return (
    <ListItem>
      <div className={Style.ord__delivered}>
        <h4>
          <FaCartShopping /> Delivered
        </h4>
        <p>Delivered on Monday, 11 January </p>
      </div>
      <div className={Style.ord__ship__to}>
        <p>Shipping to</p>
        <h4>siva ganesh</h4>
        <Row>
          <Image src={image} alt="..." />
          <div className={Style.ord__ship__p__details}>
            <h5>title</h5>
            <span className={Style.ord__price}>₹ 120/-</span>
            <p>
              size <span>34</span>
            </p>
            <span></span>
            <div>rating : ⭐⭐⭐⭐⭐</div>
          </div>
        </Row>
      </div>
    </ListItem>
  );
}

export default OrderDelivered;
