import Style from "./Order.module.css";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";
import image from "../../assets/product/shirt-2.jpg";

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;
`;

const ListItem = styled.li`
  background-color: var(--color-grey-0);
  border: 1px solid rgb(203, 204, 204);
`;

const Row = styled.div`
  height: 100%;
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 120px;
`;

function Order() {
  return (
    <div className={Style.ord__container}>
      <h5>order id</h5>
      <List>
        <ListItem>
          <Row className={Style.ord__list}>
            <Image src={image} alt="..." />
            <div className={Style.ord__text}>
              <h6>Product Titkle</h6>
              <span className={Style.ord__delivery__status}>
                Delivery Status
              </span>
              <span className={Style.ord__delivery__time}>
                mon 01/01/2025-12:00 pm
              </span>
              <div>⭐⭐⭐⭐⭐</div>
            </div>
            <span className={Style.ord__right__icon}>
              <FaArrowRight />
            </span>
          </Row>
        </ListItem>
      </List>
    </div>
  );
}

export default Order;
