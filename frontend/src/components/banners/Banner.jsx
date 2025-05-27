import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  margin-top: 1.6rem;
  padding: 1.4rem;

  @media (max-width: 486px) {
    margin-top: 0.2rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-top: 0.6rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 0.6rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 1.2rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-top: 1.4rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Span = styled.span`
  display: inline-block;
  border-bottom: 2px solid rgb(104, 104, 104);
  font-size: 1.411rem;
  margin-bottom: 1.2rem;
  color: #1f2937;
  padding-bottom: -0.1rem;

  @media (max-width: 486px) {
    font-size: 1rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 1.1rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.277rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.355rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 24px 0px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 24px 0px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px 0px;
  }
`;

const ImageContainer = styled.div`
  background: linear-gradient(0deg, #0000005e 50%, #00000024 100%),
    url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  background-position: top center;
  height: 480px;
  width: 100%;
  position: relative;

  @media (max-width: 480px) {
    height: 420px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    height: 430px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    height: 520px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0%;
  color: #fff;
  text-align: center;
`;

const TextBlock = styled.div`
  background-color: #5a504345;
  padding-bottom: 14px;
`;

const CategoryTitle = styled.h1`
  padding: 1rem;
  font-size: 1.4rem;
  margin-bottom: -8px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.1rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.267rem;
  }
`;

const Description = styled.p`
  letter-spacing: 1px;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.8rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.8899rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.82rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.82rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.912rem;
  }
`;

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  background-color: #d3d3d3;
  color: #3d3d3d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.4s;
  letter-spacing: 1px;

  &:hover {
    background-color: #c4c4c4;
    box-shadow: 0px 0px 6px 0px #fff;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.8rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.72rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.8rem;
  }
`;

function Banner() {
  const navigate = useNavigate();
  return (
    <Section>
      <Title>
        <Span>Explore Our Collections</Span>
      </Title>
      <Grid>
        <div>
          <ImageContainer
            image={
              "https://res.cloudinary.com/drbklccpt/image/upload/c_fill,w_420,h_520/v1748171912/banner-3_quxswn.jpg"
            }
          >
            <TextContainer>
              <TextBlock>
                <CategoryTitle>Men's</CategoryTitle>
                <Description>
                  Step up your game with premium shoes, watches & chains.
                  Curated for modern men who value both style and comfort.
                </Description>
                <StyledButton onClick={() => navigate("/products")}>
                  Shop Now
                </StyledButton>
              </TextBlock>
            </TextContainer>
          </ImageContainer>
        </div>
        <div>
          <ImageContainer
            image={
              "https://res.cloudinary.com/drbklccpt/image/upload/c_fill,w_420,h_520/v1748171897/banner-2_tycs64.jpg"
            }
          >
            <TextContainer>
              <TextBlock>
                <CategoryTitle>Women's</CategoryTitle>
                <Description>
                  Elegant footwear, chic watches, and stunning
                  accessories—everything a woman needs to shine at every moment.
                </Description>
                <StyledButton onClick={() => navigate("/products")}>
                  Shop Now
                </StyledButton>
              </TextBlock>
            </TextContainer>
          </ImageContainer>
        </div>
        <div>
          <ImageContainer
            image={
              "https://res.cloudinary.com/drbklccpt/image/upload/c_fill,w_420,h_520/v1748171874/banner-1_oriz1q.jpg"
            }
          >
            <TextContainer>
              <TextBlock>
                <CategoryTitle>Kids'</CategoryTitle>
                <Description>
                  Playful and comfy! Shoes, watches, and more that match your
                  little one's big personality. kid's special cloths.
                </Description>
                <StyledButton onClick={() => navigate("/products")}>
                  Shop Now
                </StyledButton>
              </TextBlock>
            </TextContainer>
          </ImageContainer>
        </div>
      </Grid>
    </Section>
  );
}

export default Banner;
