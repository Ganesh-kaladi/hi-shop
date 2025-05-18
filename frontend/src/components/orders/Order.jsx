import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";
import image from "../../assets/product/shirt-2.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleOrder } from "../../slice/orderSlice";

const Container = styled.div`
  border: 1px solid #d3ceced6;
  padding: 0.4rem 1rem;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    padding: 0.4rem 1rem 1rem;
  }
`;

const H5 = styled.h5`
  font-weight: lighter;
  font-size: 1.2rem;
  margin-bottom: 8px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 4px;
`;

const ListItem = styled.li`
  padding: 0 1rem;
  margin-bottom: 14px;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const Row = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  gap: 5;
`;

const ImageContainer = styled.div`
  flex: 0 0 22%;
  @media (max-width: 480px) {
    flex: 0 0 36%;
    align-self: stretch;
  }
`;

const Image = styled.img`
  width: 100%;
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const ProductDetails = styled.div`
  flex: 0 0 78%;
  padding: 1rem;
  background-color: #f3f1f1;
  width: 100%;

  @media (max-width: 480px) {
    flex: 0 0 64%;
  }
`;

const H6 = styled.h6`
  font-weight: lighter;
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-bottom: 8px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const DelivaryStatus = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 6px;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const DelivaryTime = styled.span`
  display: block;
  font-size: 1rem;
  margin-bottom: 6px;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin-bottom: 12px;
  }
`;

const NavIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 96%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  font-size: 1rem;
  padding: 8px 8px 6px 8px;
  border-radius: 6px;
  border: 1px solid #413e3ec5;
  color: rgb(36, 42, 48);
  cursor: pointer;

  &:hover {
    background-color: #555151;
    color: #fff;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 4px;
    left: 94%;
  }
`;

function Order() {
  const { orders } = useSelector((state) => state.order);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSingleOrder(id) {
    dispatch(getSingleOrder({ id, token }));
  }
  return (
    <>
      {orders?.length < 0 && <p>No Orders</p>}
      {orders?.length > 0 &&
        orders?.map((el) => {
          return (
            <Container>
              <H5>order id:{el.orderId}</H5>
              <List>
                <ListItem>
                  <Row>
                    {/* <ImageContainer>
                      <Image src={image} alt="..." />
                    </ImageContainer> */}
                    <ProductDetails>
                      <H6>{el.products.length} - Product</H6>
                      <DelivaryStatus>{el.status}</DelivaryStatus>
                      <DelivaryTime>
                        {new Date(el.createdAt).toLocaleString()}
                      </DelivaryTime>
                      <div>⭐⭐⭐⭐⭐</div>
                    </ProductDetails>
                    <NavIcon
                      onClick={() => {
                        navigate(`/orders/${el._id}`);
                        handleSingleOrder(el._id);
                      }}
                    >
                      <FaArrowRight />
                    </NavIcon>
                  </Row>
                </ListItem>
              </List>
            </Container>
          );
        })}
    </>
  );
}

export default Order;
