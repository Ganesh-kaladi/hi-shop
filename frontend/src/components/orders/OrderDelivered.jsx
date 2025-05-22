import styled from "styled-components";
import { FaCartShopping } from "react-icons/fa6";
import image from "../../assets/product/shirt-2.jpg";
import { useSelector } from "react-redux";

const ListItem = styled.div`
  margin-bottom: 1.011rem;

  @media (max-width: 486px) {
    margin-bottom: 0.6rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-bottom: 0.711rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-bottom: 0.711rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  }
`;

const Container = styled.div`
  padding: 12px;
  border: 1px solid #b8b6b6a9;
  padding: 2rem;

  @media (max-width: 486px) {
    padding: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    padding: 0.911rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 1.111rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 1.511rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  }
`;

const DateBlock = styled.div`
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

const H4 = styled.h4`
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 8px;
  font-weight: 500;

  @media (max-width: 486px) {
    font-size: 0.9519rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.999rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.266rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.4266rem;
    margin-bottom: 0.6rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  }
`;

const DeliveryDate = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 540;

  @media (max-width: 486px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.911rem;
    margin-bottom: 0.8rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.0022rem;
    margin-bottom: 0.8rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.12022rem;
    margin-bottom: 0.888rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  }
`;

const ShipBlock = styled.div``;

const Span = styled.span`
  display: block;
  margin-bottom: 6px;
  color: rgb(131, 131, 131);
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 0.9rem;

  @media (max-width: 486px) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.877rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.911rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.0911rem;
    margin-bottom: 0.6rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  }
`;

const Name = styled.h4`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.1rem;
  margin-bottom: 24px;

  @media (max-width: 486px) {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.977rem;
    margin-bottom: 0.911rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.981rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.4rem;
    margin-bottom: 1.0981rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`;

const ImageContainer = styled.div`
  @media (max-width: 486px) {
    flex: 0 0 32%;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    flex: 0 0 25%;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    flex: 0 0 20%;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 1rem;
  border: 1px solid #8f8b8b88;
  box-shadow: 0px 0px 4px 1px #8d8a8a84;
`;

const ProductDetails = styled.div`
  flex: 0 0 68%;
`;

const H5 = styled.h5`
  font-weight: lighter;
  font-size: 1.301rem;
  margin-bottom: 8px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.888rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.911rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.111rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.27rem;
    margin-bottom: 0.6rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  }
`;

const Price = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 1.301rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.733rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.811rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.922rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.122rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  }
`;

const SizeBlock = styled.p`
  margin-bottom: 8px;
  font-size: 1.301rem;
  font-weight: 300;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.789rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.853rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.9153rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.2122rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  }
`;

const Size = styled.span`
  display: inline-block;
  margin-left: 6px;
  font-size: 1.301rem;
  font-weight: 700;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.888rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.948rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.2122rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  }
`;

const Rating = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.301rem;

  @media (max-width: 486px) {
    font-size: 0.777rem;
    letter-spacing: 1px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.821rem;
    letter-spacing: 1px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.921rem;
    letter-spacing: 1px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.2121rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  }
`;

function OrderDelivered() {
  const { singleOrder } = useSelector((state) => state.order);

  return (
    <div>
      {singleOrder?.products.length > 0 &&
        singleOrder?.products?.map((el) => {
          return (
            <ListItem>
              <Container>
                <DateBlock>
                  <H4>
                    <FaCartShopping /> {singleOrder?.status}
                  </H4>
                  <DeliveryDate>
                    {singleOrder?.status === "pending" && "Order placed"}
                    {singleOrder?.status === "delivered" && "Delivered"} on{" "}
                    {new Date(singleOrder?.createdAt).toLocaleString("en-US", {
                      timeZone: "Asia/Kolkata",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </DeliveryDate>
                </DateBlock>
                <ShipBlock>
                  <Span>shipping to</Span>
                  <Name>
                    {singleOrder?.deliveryAddress.firstName}&nbsp;
                    {singleOrder?.deliveryAddress.lastName}
                  </Name>
                  <Row>
                    <ImageContainer>
                      <Image src={el.product.image[1]} alt="..." />
                    </ImageContainer>
                    <ProductDetails>
                      <H5>{el.product.title}</H5>
                      <Price>₹ {el.product.price} /-</Price>
                      <SizeBlock>
                        size <Size>{el.size}</Size>
                      </SizeBlock>
                      <Rating>rating : {el.product.ratings}</Rating>
                    </ProductDetails>
                  </Row>
                </ShipBlock>
              </Container>
            </ListItem>
          );
        })}
    </div>
  );
}

export default OrderDelivered;
