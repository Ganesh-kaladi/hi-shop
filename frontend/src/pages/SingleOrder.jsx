import styled from "styled-components";
import OrderDelivered from "../components/orders/OrderDelivered";
import OrderReturned from "../components/orders/OrderReturned";
import OrderPayment from "../components/orders/OrderPayment";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 60px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const List = styled.div`
  margin-top: 20px;
`;

function SingleOrder() {
  const { singleOrder } = useSelector((state) => state.order);
  console.log(singleOrder);
  return (
    <Container>
      <Grid>
        <List>
          <OrderDelivered />
          <OrderReturned />
        </List>
        <OrderPayment />
      </Grid>
    </Container>
  );
}

export default SingleOrder;
