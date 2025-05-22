import { FaArrowRight, FaTags, FaShoppingBag } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  margin-top: 1.8rem;
  padding-bottom: 1.4rem;

  @media (min-width: 487px) and (max-width: 576px) {
    padding-bottom: 0.788rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding-bottom: 0.8rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    padding-bottom: 1rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    padding-bottom: 1.2rem;
  }
`;

const Img = styled.img`
  width: 1.722rem;
  height: 1.722rem;

  @media (max-width: 486px) {
    width: 0.855rem;
    height: 0.855rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    width: 0.999rem;
    height: 0.999rem;
    padding-top: 2px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 1.122rem;
    height: 1.122rem;
    padding-top: 4px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    width: 1.3rem;
    height: 1.3rem;
    padding-top: 4px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 1.555rem;
    height: 1.555rem;
    padding-top: 4px;
  }
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  color: #1f2937;
  text-align: start;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.956rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.999rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.111rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.266rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 486px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px 20px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px 20px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px 20px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    gap: 0.6rem;
  }
`;

const CollectionContainer = styled.div`
  border: 1px solid #9b9b9b;
  padding: 1rem;

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 0.6rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 0.8rem;
  }
`;

const Block = styled.div`
  /* background-color: #fff; */
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;

  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const Description = styled.p`
  padding: 0rem 1rem;
  color: #3c424b;
  font-size: 0.888rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 486px) {
    font-weight: 600;
    font-size: 0.678rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.711rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.811rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.711rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.844rem;
  }
`;

const BtnContainer = styled.div`
  width: 100%;
  padding: 0.8rem 0 0;
`;

const Button = styled.button`
  width: 100%;
  background-color: #f7f7f7;
  color: #3d3d3d;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  border-left: 1px solid #3d3d3d;
  border-right: 4px solid #3d3d3d;
  border-top: 1px solid #3d3d3d;
  border-bottom: 4px solid #3d3d3d;
  cursor: pointer;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  transition: background 0.2s ease, transform 0.3s ease;

  &:hover {
    background-color: #cfcfcf;
    transform: scale(0.97);
  }

  @media (max-width: 486px) {
    font-size: 0.687rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.766rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.888rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.666rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.901rem;
  }
`;

function Collection({ collection }) {
  const { heading, col, icon } = collection;

  return (
    <Section>
      <Heading>
        <Img src={icon} alt="" /> {heading}
      </Heading>
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
      <Block>
        <ImageContainer>
          <Image src={el.image} alt={el.category} />
        </ImageContainer>
        <Description>{el.description} 👕🧥👟</Description>
        <BtnContainer>
          <Button onClick={() => navigate("/products")}>
            <FaShoppingBag />
            Shop Now <FaArrowRight />
          </Button>
        </BtnContainer>
      </Block>
    </CollectionContainer>
  );
}

export default Collection;
