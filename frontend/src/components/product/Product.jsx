// Product.jsx
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #9b9b9b;
  padding: 0.8rem;
`;

const ProductContainer = styled.div``;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  &:hover img {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  transition: transform 0.3s ease;
`;

const Icon = styled.span`
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 1.8rem;
  color: #e96c4d;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const Title = styled.h4`
  min-height: 42px;
  padding: 0.3rem 0.9rem;
  font-size: 0.8rem;
  color: #111827;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  text-align: center;
`;

// const Price = styled.h4`
//   padding: auto 0.9rem;
//   color: #ef4444;
// `;

const RateingDiv = styled.div`
  padding: 0 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
  font-size: 0.8rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const PriceDiv = styled.div`
  padding: 0.4rem 0.8rem 0rem;
  display: flex;
  justify-content: space-around;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  letter-spacing: 1px;
  font-size: 0.7rem;
  font-family: "Lato", sans-serif;
  font-weight: 800;
  font-style: normal;
`;

const DiscountPrice = styled.div`
  color: #0d5e45;
`;

function Product({ product, id }) {
  return (
    <Card>
      <ProductContainer>
        <ImageContainer>
          <Link to={`/products/${id}`}>
            <Image src={product.image[1]} alt="product" />
          </Link>
          <Icon>
            <FaHeart />
          </Icon>
        </ImageContainer>
        <Title>{product.title}</Title>
        {/* <Price>₹{product.price}/-</Price> */}
        <RateingDiv type="rate">
          <p>⭐ {product.ratings}</p>
          <span>|</span>
          <p>243 reviews</p>
        </RateingDiv>
        <PriceDiv>
          <DiscountPrice>₹{product.discountPrice}/-</DiscountPrice>
          <p style={{ textDecoration: "line-through", color: "#9ca3af" }}>
            ₹{product.price}/-
          </p>
        </PriceDiv>
      </ProductContainer>
    </Card>
  );
}

export default Product;
