import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";
import image from "../../assets/product/shirt-2.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleOrder } from "../../slice/orderSlice";

const Container = styled.div`
  border: 1px solid #d3ceced6;
  padding: 1rem;
  margin-bottom: 1.4rem;
  background-color: #f1f1f1;

  @media (max-width: 486px) {
    padding: 0.6rem;
    margin-bottom: 0.677rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    padding: 0.7rem;
    margin-bottom: 0.711rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 0.8rem;
    margin-bottom: 0.833rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 0.955rem;
    margin-bottom: 0.955rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 0.911rem;
    margin-bottom: 1rem;
  }
`;

const H5 = styled.h5`
  font-weight: lighter;
  font-size: 1.2884rem;
  margin-bottom: 1.1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 1px;

  @media (max-width: 486px) {
    font-size: 0.855rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.855rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.9722rem;
    margin-bottom: 0.6rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.11rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.23rem;
    margin-bottom: 1rem;
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
  padding: 0;
  /* margin-bottom: 2rem; */

  /* @media (max-width: 480px) {
    padding: 0;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    padding: 0;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 0;
  }

  @media (min-width: 769px) and (max-width: 992px) {
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  } */
`;

const Row = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const ProductDetails = styled.div`
  padding: 0;
  /* background-color: #ebe9e9; */
  width: 100%;

  /* @media (max-width: 486px) {
    padding: 0;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    padding: 0;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 0;
  }

  @media (min-width: 769px) and (max-width: 992px) {
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  } */
`;

const H6 = styled.h6`
  font-weight: lighter;
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-bottom: 0.9rem;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.799rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.799rem;
    margin-bottom: 0.56rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.888rem;
    margin-bottom: 0.656rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1rem;
    margin-bottom: 0.7rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

const DelivaryStatus = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.9rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.755rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.755rem;
    margin-bottom: 0.56rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.888rem;
    margin-bottom: 0.656rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1rem;
    margin-bottom: 0.7rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

const DelivaryTime = styled.span`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.9rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.755rem;
    margin-bottom: 0.5555rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.755rem;
    margin-bottom: 0.5555rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.822rem;
    margin-bottom: 0.678rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1rem;
    margin-bottom: 0.7rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

const Star = styled.div`
  @media (max-width: 486px) {
    font-size: 0.755rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.755rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.854rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
  }

  @media (min-width: 993px) and (max-width: 1200px) {
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

  @media (max-width: 486px) {
    font-size: 0.7rem;
    padding: 4px;
    left: 94%;
  }

  @media (min-width: 487px) and (max-width: 576px) {
  }

  @media (min-width: 577px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 992px) {
  }

  @media (min-width: 993px) and (max-width: 1200px) {
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
              <H5>id:{el.orderId}</H5>
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
                      <Star>⭐⭐⭐⭐⭐</Star>
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
