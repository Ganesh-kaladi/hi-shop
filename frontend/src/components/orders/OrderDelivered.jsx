import styled from "styled-components";
import { FaCartShopping } from "react-icons/fa6";
import image from "../../assets/product/shirt-2.jpg";
import { useSelector } from "react-redux";

const ListItem = styled.div`
  margin-bottom: 28px;

  @media (max-width: 480px) {
    margin-bottom: 18px;
  }
`;

const Container = styled.div`
  padding: 12px;
  border: 1px solid #b8b6b6a9;
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const DateBlock = styled.div`
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const H4 = styled.h4`
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 1.254rem;
    margin-bottom: 4px;
  }
`;

const DeliveryDate = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 540;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
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

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 2px;
  }
`;

const Name = styled.h4`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.1rem;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 18px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`;

const ImageContainer = styled.div`
  @media (max-width: 480px) {
    flex: 0 0 32%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const ProductDetails = styled.div`
  flex: 0 0 68%;
`;

const H5 = styled.h5`
  font-weight: lighter;
  font-size: 1.2rem;
  margin-bottom: 8px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 6px;
  }
`;

const Price = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin-bottom: 6px;
  }
`;

const SizeBlock = styled.p`
  margin-bottom: 8px;
  font-size: 0.9rem;
  font-weight: 300;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin-bottom: 6px;
  }
`;

const Size = styled.span`
  display: inline-block;
  margin-left: 6px;
  font-size: 1rem;
  font-weight: 700;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Rating = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 0.7rem;
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
