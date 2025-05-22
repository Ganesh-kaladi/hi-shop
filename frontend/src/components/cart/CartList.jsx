import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decQuantity,
  getCartItems,
  incQunatity,
  removeFromCart,
} from "../../slice/cartSlice";

const Container = styled.div`
  background-color: #ffffff;

  @media (max-width: 486px) {
    margin-bottom: -32px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    grid-column: 1/3;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    grid-column: 1/3;
  }
`;

const H1 = styled.h1`
  padding: 0.6rem;
  font-size: 1.4rem;
  text-align: center;
  background-color: #d3d3d3;
  color: #4b4949;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 1.1rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 1.167rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.233rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.299rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.311rem;
  }
`;

const CartListContainer = styled.div`
  @media (max-width: 486px) {
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: 2fr 3fr 2fr 2fr 2fr 2fr;
  grid-template-rows: 1fr;
  grid-template-areas: "image text size price quntity tPrice";
  align-items: center;
  justify-items: start;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  width: 100%;
  gap: 1rem;
  padding: 1rem 0.8rem;

  @media (max-width: 486px) {
    align-items: start;
    justify-items: center;
    grid-template-columns: repeat(7, 1fr);
    grid-template-areas:
      "image image image text text text text"
      "image image image text text text text"
      "image image image text text text text"
      "image image image size quntity quntity tPrice";
    gap: 0px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    align-items: start;
    justify-items: center;
    grid-template-columns: repeat(7, 1fr);
    grid-template-areas:
      "image image image text text text text"
      "image image image text text text text"
      "image image image text text text text"
      "image image image size quntity tPrice tPrice";
    gap: 0px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    align-items: start;
    justify-items: center;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
      "image image text text text text"
      "image image text text text text"
      "image image text text text text"
      "image image size quntity tPrice tPrice";
    padding: 0.8rem;
  }
`;

const ImageBox = styled.div`
  grid-area: image;
  border: 1px solid #6b696996;
  border-radius: 0.6rem;
`;
const CustomAlignedItem = styled.div`
  justify-self: start;
  align-self: start;
  grid-area: text;
  height: 100%;
`;
const SizeBox = styled.div`
  margin-bottom: 12px;
  margin-top: 24px;
  grid-area: size;

  @media (max-width: 486px) {
    justify-self: start;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    justify-self: start;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    justify-self: start;
  }
`;

const PriceBox = styled.div`
  margin-bottom: 12px;
  margin-top: 12px;
  grid-area: price;

  @media (max-width: 486px) {
    display: none;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    display: none;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    display: none;
  }
`;

const QuantityBox = styled.div`
  margin-bottom: 12px;
  margin-top: 12px;
  grid-area: quntity;

  @media (max-width: 486px) {
    justify-self: start;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    justify-self: start;
  }

  @media (min-width: 577px) and (max-width: 768px) {
  }
`;

const TotalPriceBox = styled.div`
  margin-bottom: 12px;
  margin-top: 12px;
  grid-area: tPrice;

  @media (max-width: 486px) {
    justify-self: start;
  }

  @media (min-width: 487px) and (max-width: 576px) {
  }

  @media (min-width: 577px) and (max-width: 768px) {
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 0.6rem;

  @media (max-width: 486px) {
    width: 8rem;
    height: 8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    width: 8.99rem;
    height: 8.99rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 9.55rem;
    height: 9.55rem;
  }
`;

const TextContainer = styled.div`
  color: #585858;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 486px) {
    gap: 0.266rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    gap: 0.299rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    gap: 0.511rem;
  }

  /* @media (min-width: 769px) and (max-width: 992px) {
    padding: 0;
  } */

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 100%;
  }
`;

const Title = styled.h4`
  font-size: 0.989rem;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-style: normal;
  grid-area: title;
  color: #424242;

  @media (max-width: 486px) {
    font-size: 0.811rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.821rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.861rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.899rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.912rem;
  }
`;

const Brand = styled.span`
  display: inline-block;
  font-size: 0.8899rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  grid-area: brand;

  @media (max-width: 486px) {
    font-size: 0.769rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.791rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.802rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.832rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.852rem;
  }
`;

const Collection = styled.span`
  display: block;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 0.8899rem;
  grid-area: collection;

  @media (max-width: 486px) {
    font-size: 0.769rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.791rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.802rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.832rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.852rem;
  }
`;

const Stock = styled.span`
  display: block;
  font-size: 0.8899rem;
  font-family: "Nunito", sans-serif;
  font-weight: 500;
  font-style: normal;
  grid-area: stock;

  @media (max-width: 486px) {
    font-size: 0.769rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.791rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.802rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.832rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.852rem;
  }
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

  @media (max-width: 486px) {
    height: 1.2rem;
    width: 1.2rem;
    font-size: 0.6rem;
    padding: 2px;
    border-radius: 4px;
    margin-bottom: -0.4rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    height: 1.3rem;
    width: 1.3rem;
    font-size: 0.666rem;
    padding: 2px;
    border-radius: 4px;
    margin-bottom: -0.4rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    height: 1.4rem;
    width: 1.4rem;
    font-size: 0.722rem;
    padding: 2px;
    border-radius: 4px;
    margin-bottom: -1.277rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    height: 1.4rem;
    height: 1.5rem;
    width: 1.5rem;
    font-size: 0.789rem;
    padding: 2px;
    border-radius: 4px;
  }
`;

const Button = styled.button`
  padding: 0 6px;
  background-color: #ffffff;
  outline: none;
  border: 1px solid #69696989;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #69696989;
    color: #ffffff;
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
  grid-area: size;

  @media (max-width: 486px) {
    width: 1rem;
    height: 1rem;
  }
`;

const Price = styled.span`
  font-weight: 550;
  letter-spacing: 1px;
  color: #5a5a5a;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  grid-area: price;
  font-size: 1rem;
`;

const DeleBox = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  justify-content: end;
  border-bottom: 1px solid #9b969650;
  border-top: 1px solid #9b969650;

  @media (max-width: 486px) {
    margin-bottom: 1.4rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-bottom: 1.4rem;
  }
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
  margin-bottom: 0.188rem;

  &:hover {
    background-color: #eeebeb;
  }

  @media (max-width: 486px) {
    margin-bottom: 0.188rem;
  }
`;

function CartList() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);

  async function handleRemoveCart(id) {
    const res = await dispatch(removeFromCart({ id, token }));
    if (res.meta.requestStatus === "fulfilled") {
      dispatch(getCartItems(token));
    }
  }

  async function handleDecQuantity(quantity, id) {
    if (quantity <= 0) return;
    const res = await dispatch(decQuantity({ quantity, id, token }));
    if (res.meta.requestStatus === "fulfilled") {
      dispatch(getCartItems(token));
    }
  }

  async function handleIncQuantity(quantity, id) {
    const res = await dispatch(incQunatity({ quantity, id, token }));
    if (res.meta.requestStatus === "fulfilled") {
      dispatch(getCartItems(token));
    }
  }

  return (
    <>
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
              <div key={el._id}>
                <Grid>
                  <ImageBox>
                    <Image src={el.product.image[1]} />
                  </ImageBox>
                  <CustomAlignedItem
                    style={{ justifySelf: "start", alignSelf: "start" }}
                  >
                    <TextContainer>
                      <Title>{el.product.title}</Title>
                      <Brand>{el.product.brand}</Brand>
                      <Collection>
                        {el.product.collection}'s&nbsp; {el.product.category}
                      </Collection>
                      <Stock>avaialable: {el.product.stock}</Stock>
                      <Icon>
                        <FaHeart color="red" size={18} />
                      </Icon>
                    </TextContainer>
                  </CustomAlignedItem>
                  <SizeBox>
                    <Size>{el.size}</Size>
                  </SizeBox>
                  <PriceBox>
                    <Price>₹{el.product.price}/-</Price>
                  </PriceBox>
                  <QuantityBox className="list-5">
                    <Button
                      onClick={async () => {
                        handleDecQuantity(el.quantity * 1 - 1, el._id);
                      }}
                    >
                      -
                    </Button>
                    &nbsp;{el.quantity}&nbsp;
                    <Button
                      onClick={async () => {
                        handleIncQuantity(el.quantity * 1 + 1, el._id);
                      }}
                    >
                      +
                    </Button>
                  </QuantityBox>
                  <TotalPriceBox>
                    <Price>₹{el.totalPrice}/-</Price>
                  </TotalPriceBox>
                </Grid>
                <DeleBox>
                  <DelIcon onClick={() => handleRemoveCart(el._id)}>
                    remove
                  </DelIcon>
                </DeleBox>
              </div>
            );
          })}
        </CartListContainer>
      </Container>
    </>
  );
}

export default CartList;
