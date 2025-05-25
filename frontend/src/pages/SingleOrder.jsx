import styled from "styled-components";
import OrderDelivered from "../components/orders/OrderDelivered";
// import OrderReturned from "../components/orders/OrderReturned";
import OrderPayment from "../components/orders/OrderPayment";
import ErrorMessage from "../ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../components/spinner/Spinner";
import { useEffect } from "react";
import { clearSingleOrder, getSingleOrder } from "../slice/orderSlice";
import { useParams } from "react-router-dom";

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
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleOrder, isLoadingOrder } = useSelector((state) => state.order);
  const { token } = useSelector((state) => state.auth);

  useEffect(
    function () {
      if (!id) return;
      dispatch(getSingleOrder({ id, token }));
      return () => dispatch(clearSingleOrder());
    },
    [id, dispatch, token]
  );

  // useEffect(function () {
  //   return () => {
  //     dispatch(clearSingleOrder());
  //   };
  // }, []);
  return (
    <Container>
      {!singleOrder && isLoadingOrder && <Loading />}
      {!isLoadingOrder && singleOrder && (
        <Grid>
          <List>
            <OrderDelivered />
            {/* <OrderReturned /> */}
          </List>
          <OrderPayment />
        </Grid>
      )}
      {(singleOrder === null || undefined) && !isLoadingOrder && (
        <ErrorMessage />
      )}
    </Container>
  );
}

export default SingleOrder;
