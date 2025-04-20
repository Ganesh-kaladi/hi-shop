import styled, { css } from "styled-components";
import image from "../assets/product/shirt-2.jpg";
import image2 from "../assets/product/shirt-3.jpg";
import image3 from "../assets/product/shirt-4.jpg";
import image4 from "../assets/product/shirt-5.jpg";
import Product from "../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails, removeProduct } from "../slice/singleProductSlice";
import { addToCart } from "../slice/cartSlice";
import CheckIsInCart from "../assets/logics/checkIsInCart";
import Spinner from "../components/spinner/Spinner";

const arrImage = [image2, image3, image4, image2, image3];

const Container = styled.div`
  margin: var(--container-margin);
  width: 80%;
  margin-top: 120px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #fff;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  box-shadow: 0px 0px 4px 1px #5a5a5a;
  border-top-right-radius: 1.8rem;
  border-bottom-right-radius: 1.8rem;
  box-shadow: 4px 0px 8px -1px #000000a7;
`;

const TextContainer = styled.div`
  margin: 0 2rem;
  padding: 2rem 3.5rem;
`;

const Title = styled.h1`
  font-size: 2.4rem;
`;

const PriceContainer = styled.div`
  margin-top: 1.1rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: end;
  gap: 20px;
  margin-bottom: 2rem;
`;

const Price = styled.h3`
  font-size: 1.8rem;
`;

const ActualPrice = styled.span`
  display: block;
  align-self: self-end;
  color: #727272;
  font-size: 0.8rem;
  text-decoration: line-through;
`;

const ColorContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 1.2rem;
`;

const H4 = styled.h4`
  font-size: 1.2rem;
`;

const Color = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  padding: 0.35rem 0.8rem;
  margin-right: 10px;
  border-radius: 12px;
  border: 3px solid #bebaba;
  cursor: pointer;
  ${(prop) =>
    prop.color &&
    css`
      background-color: ${prop.color};
    `};
`;

const SizeContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 1.2rem;
`;

const Size = styled.button`
  border: 1px solid #757474;
  margin-left: 0.8rem;
  width: 1.6rem;
  height: 1.6rem;
  background-color: unset;
  color: #464242;
  font-weight: 1.9rem;
  cursor: pointer;
`;

const QuantityContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 2.4rem;
`;

const QuantityBtn = styled.button`
  border: 1px solid #757474;
  width: 1.6rem;
  height: 1.6rem;
  background-color: unset;
  cursor: pointer;
`;

const CartContainer = styled.div`
  margin-bottom: 1.2rem;
`;

const CartBtn = styled.button`
  width: 100%;
  border: none;
  background-color: #000;
  color: #fff;
  height: 2.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #363636;
  }
`;

const WhislistContainer = styled.div`
  margin-bottom: 1.2rem;
`;

const WishListBtn = styled.button`
  width: 100%;
  border: none;
  height: 2.4rem;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #777676;
  background-color: #f04babb3;

  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #e41464b3;
    color: #fff;
  }
`;

const ProductDetails = styled.div`
  padding: 2rem;
  background-color: aliceblue;
  margin-bottom: 2.4rem;
`;

const SProductsContainer = styled.div``;

const H1 = styled.h1`
  font-size: 2rem;
  padding-left: 10px;
  margin-bottom: 1.1rem;
`;

const SProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 12px;
`;

function SingleProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, singleDoc } = useSelector((state) => state.singleProduct);
  const { cart } = useSelector((state) => state.cart);

  const id = useParams();
  useEffect(
    function () {
      if (!id) return;
      dispatch(getProductDetails(id.id));
      return () => {
        dispatch(removeProduct());
      };
    },
    [dispatch, id]
  );

  function handleAddToCart() {
    dispatch(
      addToCart({
        title: singleDoc.title,
        image: singleDoc.image[1],
        size: singleDoc.size,
        brand: singleDoc.brand,
        collection: singleDoc.productCollection,
        category: singleDoc.category,
        quantity: 1,
        price: singleDoc.discountPrice,
        id: singleDoc._id,
        stock: singleDoc.stock,
      })
    );
  }

  let val = false;
  val = CheckIsInCart(singleDoc?._id, cart);

  return (
    <>
      {isLoading && <Spinner />}
      <Container>
        {singleDoc && (
          <section>
            <Grid>
              <ImageContainer>
                <Image src={singleDoc.image[1]} alt="..." />
              </ImageContainer>
              <TextContainer>
                <Title>{singleDoc.title}</Title>
                <p>
                  ⭐⭐⭐⭐⭐<b>{singleDoc.ratings}</b> <span>343</span>
                </p>
                <PriceContainer>
                  <Price>₹{singleDoc.discountPrice}/-</Price>
                  <ActualPrice>₹{singleDoc.price}/-</ActualPrice>
                </PriceContainer>

                <ColorContainer>
                  <H4>color</H4>
                  <div>
                    {singleDoc.color?.map((el) => (
                      <Color color={el}></Color>
                    ))}
                  </div>
                </ColorContainer>
                <SizeContainer>
                  <H4>size</H4>
                  <div>
                    {singleDoc.size?.map((el) => (
                      <Size>{el}</Size>
                    ))}
                  </div>
                </SizeContainer>
                <QuantityContainer>
                  <H4>Quantity</H4>
                  <div>
                    <QuantityBtn>-</QuantityBtn>
                    <QuantityBtn>1</QuantityBtn>
                    <QuantityBtn>+</QuantityBtn>
                  </div>
                </QuantityContainer>
                <CartContainer>
                  {val ? (
                    <CartBtn onClick={() => navigate("/cart")}>
                      go to Cart
                    </CartBtn>
                  ) : (
                    <CartBtn onClick={handleAddToCart}>Add to cart</CartBtn>
                  )}
                </CartContainer>
                <WhislistContainer>
                  <WishListBtn>SAVE TO WISHLIST</WishListBtn>
                </WhislistContainer>
              </TextContainer>
            </Grid>
            <ProductDetails>
              <div>
                <h1>description</h1>
                <p>{singleDoc.description}</p>
              </div>
              <div>
                <H4>Features:</H4>
                <ul>
                  <li>Soft and breathable 100% cotton</li>
                  <li>Classic crew neck design</li>
                  <li>Regular fit — not too loose, not too tight</li>
                  <li>Pre-shrunk to minimize shrinkage</li>
                  <li>Available in multiple colors</li>
                </ul>
              </div>
            </ProductDetails>

            <SProductsContainer>
              <H1>similar products</H1>
              {/* <SProducts>
              {arrImage.map((el) => (
                <Product image={el} />
              ))}
            </SProducts> */}
            </SProductsContainer>
          </section>
        )}
      </Container>
    </>
  );
}

export default SingleProduct;
