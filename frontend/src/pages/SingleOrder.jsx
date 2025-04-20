import styled from "styled-components";
import OrderDelivered from "../components/orders/OrderDelivered";
import OrderReturned from "../components/orders/OrderReturned";
import OrderPayment from "../components/orders/OrderPayment";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
`;

const List = styled.ul`
  list-style: none;
`;

function SingleOrder() {
  return (
    <div>
      <Grid>
        <div>
          <List>
            <OrderDelivered />
            <OrderReturned />
          </List>
        </div>
        <div>
          <OrderPayment />
        </div>
      </Grid>
    </div>
  );
}

export default SingleOrder;
