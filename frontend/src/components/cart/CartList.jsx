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
`;

const H1 = styled.h1`
  padding: 1.2rem;
  text-align: center;
  color: #0f48b1;
  background-color: #ededee;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const CartListContainer = styled.div`
  padding: 0 2rem 2rem;
`;

const Grid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 3fr 3fr 1fr 1fr 2fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  border-bottom: 2px solid #86868667;
`;

const List = styled.li`
  margin-bottom: 12px;
  margin-top: 12px;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

const Image = styled.img`
  width: 140px;
  height: 140px;
`;

const CustomAlignedItem = styled(List)`
  justify-self: start;
  align-self: start;
`;

const TextContainer = styled.div`
  color: #585858;
`;

const Title = styled.h4`
  font-size: 1rem;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  margin-bottom: 10px;
`;

const Brand = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  margin-bottom: 8px;
`;

const Collection = styled.span`
  display: block;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  margin-bottom: 8px;
  margin-bottom: 8px;
`;

const Stock = styled.span`
  display: block;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  margin-bottom: 8px;
  margin-bottom: 12px;
`;

const Icon = styled.span`
  display: inline-block;
  height: 2rem;
  width: 2rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #9ccbd6;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ececec;
  }
`;

const Button = styled.button`
  width: 18px;
  height: 18px;
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
  display: inline-block;
  width: 32px;
  height: 32px;
  background-color: var(--color-grey-300);
  border-radius: 50%;
  color: var(--color-white);
  font-size: 1.2rem;
  padding-top: 4px;
  letter-spacing: 1px;
`;

const Price = styled.span`
  font-weight: 550;
  letter-spacing: 1px;
  color: #5a5a5a;
`;

const DelIcon = styled.span`
  display: inline-block;
  cursor: pointer;
  height: 1.2rem;
  width: 1.2rem;
  padding: 0.05rem 0.4rem 0.8rem;
  border-radius: 1rem;
  color: #fff;
  background-color: #222222;
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
            <Grid key={el.id}>
              <List>
                <Image src={el.image} />
              </List>
              <CustomAlignedItem
                style={{ justifySelf: "start", alignSelf: "start" }}
              >
                <TextContainer>
                  <Title>{el.title}</Title>
                  <Brand>{el.brand}</Brand>
                  <Collection>
                    {el.collection}'s&nbsp; {el.category}
                  </Collection>
                  <Stock>avaialable: {el.stock}</Stock>
                  <Icon>
                    <FaHeart color="red" />
                  </Icon>
                </TextContainer>
              </CustomAlignedItem>
              <List>
                <Size>xl</Size>
              </List>
              <List>
                <Price>₹{el.price}/-</Price>
              </List>
              <List>
                <Button onClick={() => dispatch(decQuantity(el.id))}>-</Button>
                &nbsp;{el.quantity}&nbsp;
                <Button onClick={() => dispatch(incQunatity(el.id))}>+</Button>
              </List>
              <List>
                <Price>₹120/-</Price>
              </List>
              <List>
                <DelIcon onClick={() => dispatch(removeFromCart(el.id))}>
                  x
                </DelIcon>
              </List>
            </Grid>
          );
        })}
      </CartListContainer>
    </Container>
  );
}

export default CartList;
