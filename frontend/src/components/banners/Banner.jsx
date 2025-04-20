import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import banner1 from "../../assets/banner/banner-1.jpeg";
import banner2 from "../../assets/banner/banner-2.jpeg";
import banner3 from "../../assets/banner/banner-3.jpeg";

const Section = styled.section`
  margin-top: 1.6rem;
  padding: 1.4rem;
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
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  color: #1f2937;
  padding-bottom: -0.1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px 20px;
  height: 500px;
`;

const ImageContainer = styled.div`
  background: linear-gradient(0deg, #0000008f 50%, #00000037 100%),
    url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  height: 480px;
  width: 100%;
  border-radius: 12px;
  position: relative;
`;

const TextContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  position: absolute;
  bottom: 10%;
  color: #fff;
  text-align: center;
`;

const CategoryTitle = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 0.3rem;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Description = styled.p`
  letter-spacing: 1px;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  background-color: #0a3f85;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.4s;
  letter-spacing: 1px;

  &:hover {
    background-color: #092b58;
    box-shadow: 0px 0px 6px 0px #fff;
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
          <ImageContainer image={banner3}>
            <TextContainer>
              <CategoryTitle>Men's 👞</CategoryTitle>
              <Description>
                Step up your game with premium shoes, watches & chains. Curated
                for modern men who value both style and comfort.
              </Description>
              <StyledButton onClick={() => navigate("/products")}>
                Shop Now
              </StyledButton>
            </TextContainer>
          </ImageContainer>
        </div>
        <div>
          <ImageContainer image={banner2}>
            <TextContainer>
              <CategoryTitle>Women's 👠</CategoryTitle>
              <Description>
                Elegant footwear, chic watches, and stunning
                accessories—everything a woman needs to shine at every moment.
              </Description>
              <StyledButton onClick={() => navigate("/products")}>
                Shop Now
              </StyledButton>
            </TextContainer>
          </ImageContainer>
        </div>
        <div>
          <ImageContainer image={banner1}>
            <TextContainer>
              <CategoryTitle>Kids' 🎒</CategoryTitle>
              <Description>
                Playful and comfy! Shoes, watches, and more that match your
                little one's big personality.
              </Description>
              <StyledButton onClick={() => navigate("/products")}>
                Shop Now
              </StyledButton>
            </TextContainer>
          </ImageContainer>
        </div>
      </Grid>
    </Section>
  );
}

export default Banner;
