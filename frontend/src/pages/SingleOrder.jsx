import styled from "styled-components";
import OrderDelivered from "../components/orders/OrderDelivered";
import OrderReturned from "../components/orders/OrderReturned";
import OrderPayment from "../components/orders/OrderPayment";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 56px;

  @media (max-width: 486px) {
    margin-top: 36px;
    width: 90%;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-top: 42px;
    width: 90%;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 46px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 48px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-top: 52px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 20px;

  @media (max-width: 486px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  }
`;

const List = styled.div`
  @media (min-width: 769px) and (max-width: 992px) {
    grid-column: 1/3;
  }
`;

function SingleOrder() {
  // const { singleOrder } = useSelector((state) => state.order);
  return (
    <Container>
      <Grid>
        <List>
          <OrderDelivered />
          {/* <OrderReturned /> */}
        </List>
        <OrderPayment />
      </Grid>
    </Container>
  );
}

export default SingleOrder;
