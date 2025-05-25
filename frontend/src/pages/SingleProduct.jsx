import styled, { css } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails, removeProduct } from "../slice/singleProductSlice";
import { addToCart, clearCart } from "../slice/cartSlice";
// import useCheckIsInCart from "../assets/logics/checkIsInCart";
import { Loading } from "../components/spinner/Spinner";
import { clearAuth } from "../slice/authSlice";
import { clearOrder } from "../slice/orderSlice";
import { clearCheckOut } from "../slice/checkOutSlice";
import { toast } from "react-toastify";

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 56px;

  @media (max-width: 486px) {
    margin-top: 40px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-top: 44px;
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
  grid-template-columns: 420px 1fr;
  background-color: #fff;
  gap: 5rem;

  @media (max-width: 486px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    gap: 3rem;
  }
`;

const ImageContainer = styled.div`
  @media (min-width: 577px) and (max-width: 768px) {
  }
`;

const Image = styled.img`
  width: 100%;
  box-shadow: 0px 0px 4px 1px #5a5a5a;
  border-top-right-radius: 1.8rem;
  border-bottom-right-radius: 1.8rem;
  box-shadow: 4px 0px 8px -1px #000000a7;

  @media (max-width: 486px) {
    border-radius: 0px;
    box-shadow: 0px 0px 8px -1px #000000a7;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    border-radius: 0px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    border-radius: 0px;
  }
`;

const TextContainer = styled.div`
  margin: 0;
  padding: 0;

  @media (max-width: 486px) {
    padding: 0px;
    margin: 0;
    margin-top: 1.2rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    padding: 0px;
    margin: 0;
    margin-top: 1.278rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 0px;
    margin: 0;
    margin-top: 1.278rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 0px;
    margin: 0;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 0px;
    margin: 0;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 1.1rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 1.4rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.6rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.8rem;
  }
`;

const PriceContainer = styled.div`
  margin-top: 1.1rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: end;
  gap: 20px;
  margin-bottom: 2rem;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 486px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-bottom: 1.4rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-bottom: 1.8rem;
  }
`;

const Price = styled.h3`
  font-size: 1.7rem;
  font-weight: 400;

  @media (max-width: 486px) {
    font-size: 1rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 1.2rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.4rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.6rem;
  }
`;

const ActualPrice = styled.span`
  display: block;
  align-self: self-end;
  color: #727272;
  font-size: 0.945rem;
  text-decoration: line-through;

  @media (max-width: 486px) {
    font-size: 0.677rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.777rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.822rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.822rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.911rem;
  }
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 1.6rem;
`;

const H4 = styled.h4`
  font-size: 1.2999rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  flex: 0 0 23%;

  @media (max-width: 486px) {
    font-size: 0.9rem;
    padding: 0;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.956rem;
    padding: 0;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.111rem;
    padding: 0;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.222rem;
    padding: 0;
  }
`;

const Color = styled.span`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  border: 1px solid #302f2f50;
  margin-right: 0.8rem;

  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `};

  ${({ isClickedColor }) =>
    isClickedColor &&
    css`
      box-shadow: 0 0 2px 3px #1a0117d7;
      border: none;
    `};

  @media (max-width: 486px) {
    width: 1.6rem;
    height: 1.6rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    width: 1.6rem;
    height: 1.6rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const P = styled.p`
  color: red;
  padding: 0.6rem;
`;

const SizeContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 1.6rem;
`;

const Size = styled.button`
  border: 1px solid #757474a4;
  width: 1.6rem;
  height: 1.6rem;
  background-color: unset;
  color: #464242;
  font-weight: 1.9rem;
  cursor: pointer;
  margin-right: 0.6rem;

  &:hover {
    background-color: #4b4a4a;
    color: #fff;
  }

  ${(prop) =>
    prop.isClickedSize &&
    css`
      background-color: #686868;
      color: #fff;
    `}
`;

const QuantityContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 2rem;

  @media (min-width: 769px) and (max-width: 992px) {
    margin-bottom: 1.6rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-bottom: 1.8rem;
  }
`;

const QuantityBtn = styled.button`
  border: 1px solid #757474a4;
  width: 1.6rem;
  height: 1.6rem;
  background-color: unset;
  cursor: pointer;

  &:hover {
    background-color: #686868;
    color: #fff;
  }
`;

const CartContainer = styled.div`
  margin-bottom: 1.4rem;

  @media (min-width: 769px) and (max-width: 992px) {
    margin-bottom: 1rem;
  }
`;

const CartBtn = styled.button`
  width: 60%;
  border: none;
  background-color: #000;
  color: #fff;
  padding: 0.6rem 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #363636;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.1rem;
  }
`;

const WhislistContainer = styled.div`
  margin-bottom: 1.2rem;
`;

const WishListBtn = styled.button`
  width: 60%;
  border: none;
  padding: 0.6rem 0;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #777676;
  background-color: #f04babb3;
  font-size: 0.9111rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #e41464b3;
    color: #fff;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.8rem;
  }
`;

const ProductDetails = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 1rem;
  }
`;

const DescriptionContainer = styled.div`
  padding: 1rem;

  @media (max-width: 486px) {
    padding: 0;
    margin-bottom: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    padding: 0;
    margin-bottom: 0.8rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 0;
    margin-bottom: 0.9rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 0;
    margin-bottom: 0.978rem;
  }
`;

const H3 = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1.444rem;

  @media (max-width: 486px) {
    font-size: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.911rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.9888rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.122rem;
  }
`;

const DescriptionPara = styled.p`
  font-size: 1.111rem;
  padding-left: 1rem;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.855rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.9118rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.999rem;
  }
`;

const FeaturesContainer = styled.div`
  padding: 1rem;

  @media (max-width: 486px) {
    padding: 0;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    padding: 0;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 0;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 0;
  }
`;

const FeatureH4 = styled.h4`
  font-size: 1.4rem;
  padding-left: 0rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.9rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.978rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.111rem;
  }
`;

const Features = styled.ul`
  padding-left: 2rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 0.9rem;

  @media (max-width: 486px) {
    font-size: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.9rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.9338rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.9899rem;
  }
`;

// const SimilarProductsContainer = styled.div``;

// const H1 = styled.h1`
//   font-size: 2rem;
//   padding-left: 10px;
//   margin-bottom: 1.1rem;
// `;

function SingleProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, singleDoc } = useSelector((state) => state.singleProduct);
  const { cartJWT, isLoadingCart } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);

  const [pColor, setPColor] = useState({
    color: "",
    isSelectColor: false,
    id: "",
  });
  const [pSize, setPSize] = useState({
    size: "",
    isSelectSize: false,
    id: "",
  });
  const [pQuntity, setPQuantity] = useState(1);
  const [errMessage, setErrMessage] = useState({});

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

  function handleColor(i, el) {
    setPColor((cur) =>
      cur.id === i || ""
        ? {
            ...cur,
            color: "",
            isSelectColor: false,
            id: "",
          }
        : {
            ...cur,
            color: el,
            isSelectColor: true,
            id: i,
          }
    );
  }

  function handleSize(i, el) {
    setPSize((cur) =>
      cur.id === i || ""
        ? { ...cur, size: "", isSelectSize: false, id: "" }
        : { ...cur, size: el, isSelectSize: true, id: i }
    );
  }

  function validateErr() {
    let er = {};
    if (pSize.size === "") er.sizeErr = "please select size";
    if (pColor.color === "") er.colorErr = "please select color";

    return er;
  }

  function handleQuntityInc() {
    setPQuantity((cur) => cur + 1);
  }

  function handleQuntityDec() {
    setPQuantity((cur) => (cur > 1 ? cur - 1 : cur));
  }

  let val = false;
  function handleAddToCart() {
    const erValidate = validateErr();

    if (Object.keys(erValidate).length > 0) {
      setErrMessage(erValidate);
      return;
    }
    setErrMessage({});
    if (!token) {
      navigate("/login");
    }
    dispatch(
      addToCart({
        data: {
          product: singleDoc._id,
          quantity: pQuntity,
          size: pSize.size,
          color: pColor.color,
        },
        token,
      })
    ).then((res) => {
      console.log(res);
      if (res.payload.status === "success") {
        toast.success("added to cart.");
      }
    });
  }

  useEffect(
    function () {
      if (cartJWT === "TokenExpiredError") {
        dispatch(clearAuth());
        dispatch(clearCart());
        dispatch(clearOrder());
        dispatch(clearCheckOut());
        navigate("/login");
      }
    },
    [navigate, cartJWT, dispatch]
  );

  // const val = CheckIsInCart(singleDoc?._id);
  // console.log(val);
  // val = useCheckIsInCart(singleDoc?._id);
  return (
    <Container>
      {" "}
      {isLoading && <Loading />}
      {singleDoc && (
        <section>
          <Grid>
            <ImageContainer>
              <Image src={singleDoc.image[1]} alt="..." />
            </ImageContainer>
            <TextContainer>
              <Title>{singleDoc.title}</Title>
              <p>
                ⭐⭐⭐⭐⭐<b>{singleDoc.ratings}</b> <span>(343)</span>
              </p>
              <PriceContainer>
                <Price>₹{singleDoc.discountPrice}/-</Price>
                <ActualPrice>₹{singleDoc.price}/-</ActualPrice>
              </PriceContainer>

              <ColorContainer>
                <H4>color</H4>
                <div>
                  {singleDoc.color?.map((el, i) => (
                    <Color
                      key={i}
                      color={el}
                      onClick={() => handleColor(i, el)}
                      isClickedColor={pColor.id === i && pColor.isSelectColor}
                    ></Color>
                  ))}
                  {errMessage.colorErr && <P>{errMessage.colorErr}</P>}
                </div>
              </ColorContainer>
              <SizeContainer>
                <H4>size</H4>
                <div>
                  {singleDoc.size?.map((el, i) => (
                    <Size
                      key={i}
                      onClick={() => handleSize(i, el)}
                      isClickedSize={pSize.id === i && pSize.isSelectSize}
                    >
                      {el}
                    </Size>
                  ))}
                  {errMessage.sizeErr && <P>{errMessage.sizeErr}</P>}
                </div>
              </SizeContainer>
              <QuantityContainer>
                <H4>quantity</H4>
                <div>
                  <QuantityBtn onClick={handleQuntityDec}>-</QuantityBtn>
                  <QuantityBtn>{pQuntity}</QuantityBtn>
                  <QuantityBtn onClick={handleQuntityInc}>+</QuantityBtn>
                </div>
              </QuantityContainer>
              <CartContainer>
                {val ? (
                  <CartBtn onClick={() => navigate("/cart")}>
                    go to Cart
                  </CartBtn>
                ) : (
                  <CartBtn onClick={handleAddToCart}>
                    {isLoadingCart ? "adding..." : "Add to cart"}
                  </CartBtn>
                )}
              </CartContainer>
              <WhislistContainer>
                <WishListBtn>SAVE TO WISHLIST</WishListBtn>
              </WhislistContainer>
            </TextContainer>
          </Grid>
          <ProductDetails>
            <DescriptionContainer>
              <H3>Description</H3>
              <DescriptionPara>{singleDoc.description}</DescriptionPara>
            </DescriptionContainer>
            <FeaturesContainer>
              <FeatureH4>Features:</FeatureH4>
              <Features>
                {singleDoc.highlights?.length > 0 &&
                  singleDoc.highlights?.map((el, i) => <li key={i}>{el}</li>)}
              </Features>
            </FeaturesContainer>
          </ProductDetails>

          {/* <SimilarProductsContainer>
              <H1>similar products</H1>
              <p>similar products api not completed...</p> */}
          {/* <SProducts>
              {arrImage.map((el) => (
                <Product image={el} />
              ))}
            </SProducts> */}
          {/* </SimilarProductsContainer> */}
        </section>
      )}
    </Container>
  );
}

export default SingleProduct;
