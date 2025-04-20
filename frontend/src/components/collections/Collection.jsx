import { FaArrowRight, FaTags, FaShoppingBag } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  margin-top: 1.8rem;
  padding-bottom: 1.8rem;
  /* background-color: #f9fafb; */
`;

const Heading = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  color: #1f2937;
  text-align: start;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const CollectionContainer = styled.div`
  background-color: #fff;
  padding: 1.2rem;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;

  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const Span = styled.span`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Description = styled.p`
  margin: 0.75rem 0;
  color: #4b5563;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Button = styled.button`
  background-color: #111827;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s ease;

  &:hover {
    background-color: #374151;
  }
`;

function Collection({ collection }) {
  const { heading, col } = collection;

  return (
    <Section>
      <Heading>🛍️ {heading}</Heading>
      <Grid>
        {col.map((el, index) => (
          <CollectionList key={index} el={el} />
        ))}
      </Grid>
    </Section>
  );
}

function CollectionList({ el }) {
  const navigate = useNavigate();
  return (
    <CollectionContainer>
      <ImageContainer>
        <Image src={el.image} alt={el.category} />
        <Span>
          <FaTags /> {el.category}
        </Span>
      </ImageContainer>
      <Description>{el.description} 👕🧥👟</Description>
      <Button onClick={() => navigate("/products")}>
        <FaShoppingBag /> Shop Now <FaArrowRight />
      </Button>
    </CollectionContainer>
  );
}

export default Collection;
