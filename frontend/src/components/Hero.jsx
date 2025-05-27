import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/banner/hreo-img.jpg";
import { FaArrowRight } from "react-icons/fa";

const Container = styled.div`
  margin-top: 58px;
  @media (max-width: 480px) {
    margin-top: 40px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-top: 40px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 40px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 48px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-top: 52px;
  }
`;

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.266),
      rgba(0, 0, 0, 0.266),
      rgba(0, 0, 0, 0.266),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 48vh;
  margin: 0;
  position: relative;
  top: 0;
  color: white;
  text-align: center;
  padding: 3rem 2rem;

  @media (max-width: 486px) {
    padding: 1rem;
    height: 26vh;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    padding: 1rem;
    height: 32vh;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 1.111rem;
    height: 34vh;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 1.4rem;
    height: 38vh;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 1.4rem;
    height: 42vh;
  }
`;

const Content = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-bottom: -8px;
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.933rem;
    margin-bottom: -0.2rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.411rem;
    margin-bottom: -0.2rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.311rem;
    margin-bottom: -0.2rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.477rem;
    margin-bottom: -0.2rem;
  }
`;

const Span = styled.span`
  display: inline-block;
  font-size: 1.1rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  @media (max-width: 480px) {
    font-size: 0.6rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.755rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.867rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.94rem;
  }
`;

const Subtitle = styled.p`
  margin-bottom: 2rem;
  font-size: 1rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  text-align: start;
  @media (max-width: 480px) {
    font-size: 0.6rem;
    margin-bottom: 0.8rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.755rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.86rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.867rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.945rem;
    margin-bottom: 1rem;
  }
`;

const Para = styled.p`
  margin-bottom: 0.7rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  width: 40%;
  text-align: start;
  @media (max-width: 480px) {
    font-size: 0.6rem;
    width: 60%;
    margin-bottom: 0.688;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.755rem;
    width: 60%;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.84rem;
    width: 60%;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.867rem;
    width: 60%;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.945rem;
    width: 60%;
  }
`;

const Button = styled.button`
  background-color: unset;
  justify-self: center;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  padding: 6px 14px;
  border: 1px solid #c6dde7;
  color: #c6dde7;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b3aaaa49;
  }
  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 2px 14px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.677rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.777rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.844rem;
  }
`;

const Icon = styled.span`
  margin-left: 8px;
  margin-top: 4px;
`;

function HeroSection() {
  const navigate = useNavigate();
  return (
    <Container>
      <Hero>
        <Content>
          <Title>Hi,SHOP</Title>
          <Span>
            <b>Your Style, Your Rules</b>
          </Span>
          <Subtitle>
            Fresh drops, everyday steals, and fits that flex — <br />
            all at your fingertips.
          </Subtitle>
          <Para>
            Level up your look with trending gear for every vibe and season.
            Ready to glow up your wardrobe?
          </Para>
          <Button onClick={() => navigate("/products")}>
            shop now
            <Icon>
              <FaArrowRight />
            </Icon>
          </Button>
        </Content>
      </Hero>
    </Container>
  );
}

export default HeroSection;

// Big Deals. Fast Shipping. Happy You.

// [Your Company Name]
// Your One-Stop Shop for Style & Essentials

// From trending fashion to everyday must-haves, we bring you quality, value, and convenience — all in one place.

// 👉 [Shop Now]
