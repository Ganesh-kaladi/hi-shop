// Product.jsx
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  padding: 1rem;
  text-align: center;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
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

const Title = styled.h2`
  font-size: 1.1rem;
  margin: 0.75rem 0 0.25rem;
  color: #111827;
`;

const Price = styled.h4`
  color: #ef4444;
  margin-bottom: 0.5rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.type === "rate" ? "center" : "space-between"};
  align-items: center;
  gap: ${(props) => (props.type === "rate" ? "1rem" : "0.5rem")};
  margin-bottom: 0.5rem;
`;

function Product({ product, id }) {
  return (
    <Card>
      <ImageContainer>
        <Link to={`/products/${id}`}>
          <Image src={product.image[1]} alt="product" />
        </Link>
        <Icon>
          <FaHeart />
        </Icon>
      </ImageContainer>
      <Title>{product.title}</Title>
      <Price>₹{product.price}/-</Price>
      <Row type="rate">
        <p>⭐ {product.ratings}</p>
        <span>|</span>
        <p>243 reviews</p>
      </Row>
      <Row>
        <p style={{ fontWeight: "bold", color: "#10b981" }}>
          ₹{product.discountPrice}/-
        </p>
        <p style={{ textDecoration: "line-through", color: "#9ca3af" }}>
          ₹{product.price}/-
        </p>
      </Row>
    </Card>
  );
}

export default Product;
