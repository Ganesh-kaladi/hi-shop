import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decQuantity,
  incQunatity,
  removeFromCart,
} from "../../slice/cartSlice";

const Container = styled.div`
  background-color: #ffffff;

  @media (max-width: 480px) {
    margin-bottom: -32px;
  }
`;

const H1 = styled.h1`
  padding: 0.6rem;
  font-size: 1.4rem;
  text-align: center;
  color: #0f48b1;
  background-color: #ededee;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 1.1rem;
  }
`;

const CartListContainer = styled.div`
  padding: 0 2rem 2rem;
`;

const Grid = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: 22% 28% 10% 10% 20% 10%;
  grid-template-rows: 1fr;
  grid-template-areas: "list-1 list-2 list-3 list-4 list-5 list-6";
  align-items: center;
  justify-items: start;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

  @media (max-width: 480px) {
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 120px;
    grid-template-areas:
      "list-1 list-1 list-1 list-2 list-2 list-2 list-2 "
      "list-1 list-1 list-1 list-3 list-5 list-5 list-6 ";
  }
`;

const ImageBox = styled.div`
  margin-bottom: 12px;
  margin-top: 12px;
  grid-area: list-1;
`;
const CustomAlignedItem = styled.div`
  justify-self: start;
  align-self: start;
  grid-area: list-2;
`;
const SizeBox = styled.div`
  margin-bottom: 12px;
  margin-top: 24px;
  grid-area: list-3;
`;
const PriceBox = styled.div`
  margin-bottom: 12px;
  margin-top: 12px;
  grid-area: list-4;
  @media (max-width: 480px) {
    display: none;
  }
`;
const QuantityBox = styled.div`
  margin-bottom: 12px;
  margin-top: 12px;
  grid-area: list-5;
`;
const TotalPriceBox = styled.div`
  margin-bottom: 12px;
  margin-top: 12px;
  grid-area: list-6;
`;

const Image = styled.img`
  width: 140px;
  height: 140px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  color: #585858;
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 26px);
  grid-template-areas:
    "title"
    "brand"
    "collection"
    "stock"
    "love";

  @media (max-width: 480px) {
    grid-template-rows: repeat(5, 22px);
    align-items: start;
    justify-items: start;
  }
`;

const Title = styled.h4`
  font-size: 0.9rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  margin-bottom: 10px;
  grid-area: title;
`;

const Brand = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  grid-area: brand;
`;

const Collection = styled.span`
  display: block;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 0.8rem;
  grid-area: collection;
`;

const Stock = styled.span`
  display: block;
  font-size: 0.8rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  grid-area: stock;
`;

const Icon = styled.span`
  height: 1.8rem;
  width: 1.8rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #4244446e;
  border-radius: 8px;
  cursor: pointer;
  grid-area: love;

  &:hover {
    background-color: #ececec;
  }

  @media (max-width: 480px) {
    height: 1.8rem;
    width: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.4rem;
  }
`;

const Button = styled.button`
  padding: 0 6px;
  background-color: var(--color-white);
  outline: none;
  border: 1px solid var(--color-grey-200);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-100);
    color: var(--color-white);
  }
`;

const Size = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #aaa0a0;
  background-color: #e6e1e1;
  margin-top: -8px;
  padding: 2px;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Price = styled.span`
  font-weight: 550;
  letter-spacing: 1px;
  color: #5a5a5a;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
`;

const DeleBox = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  justify-content: end;
  border-bottom: 1px solid #9b969684;
  border-top: 1px solid #9b969684;
`;

const DelIcon = styled.button`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #646161;
  background-color: unset;
  border: 1px solid #a09a9a84;
  text-align: end;
  font-size: 1.05rem;

  &:hover {
    background-color: #eeebeb;
  }
`;

function CartList() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  return (
    <Container>
      <H1>Cart Items</H1>
      <CartListContainer>
        {/* <Grid>
          <List>
            <h3>product</h3>
          </List>
          <List>
            <h3>size</h3>
          </List>
          <List>
            <h3>price</h3>
          </List>
          <List>
            <h3>quantity</h3>
          </List>
          <List>
            <h3>total price</h3>
          </List>
          <List></List>
        </Grid> */}
        {cart?.map((el) => {
          return (
            <div key={el.id}>
              <Grid>
                <ImageBox className="list-1">
                  <Image src={el.image} />
                </ImageBox>
                <CustomAlignedItem
                  style={{ justifySelf: "start", alignSelf: "start" }}
                >
                  <TextContainer className="list-2">
                    <Title>{el.title}</Title>
                    <Brand>{el.brand}</Brand>
                    <Collection>
                      {el.collection}'s&nbsp; {el.category}
                    </Collection>
                    <Stock>avaialable: {el.stock}</Stock>
                    <Icon>
                      <FaHeart color="red" size={18} />
                    </Icon>
                  </TextContainer>
                </CustomAlignedItem>
                <SizeBox className="list-3">
                  <Size>xl</Size>
                </SizeBox>
                <PriceBox className="list-4">
                  <Price>₹{el.price}/-</Price>
                </PriceBox>
                <QuantityBox className="list-5">
                  <Button onClick={() => dispatch(decQuantity(el.id))}>
                    -
                  </Button>
                  &nbsp;{el.quantity}&nbsp;
                  <Button onClick={() => dispatch(incQunatity(el.id))}>
                    +
                  </Button>
                </QuantityBox>
                <TotalPriceBox className="list-6">
                  <Price>₹120/-</Price>
                </TotalPriceBox>
              </Grid>
              <DeleBox className="list-7">
                <DelIcon onClick={() => dispatch(removeFromCart(el.id))}>
                  remove
                </DelIcon>
              </DeleBox>
            </div>
          );
        })}
      </CartListContainer>
    </Container>
  );
}

export default CartList;
