import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/banner/hreo-img-1.jpg";
import { FaArrowRight } from "react-icons/fa";

const Container = styled.div`
  margin-top: 60px;
  @media (max-width: 480px) {
    margin-top: 40px;
    background-color: #032849;
  }
`;

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.477),
      rgba(0, 0, 0, 0.477),
      rgba(0, 0, 0, 0.477)
    ),
    url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* height: 60vh; */
  position: relative;
  top: 0;
  color: white;
  text-align: center;
  padding: 3rem 2rem;

  @media (max-width: 480px) {
    padding: 1rem;
    background-size: cover;
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
  font-size: 2.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-bottom: -12px;
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const Span = styled.span`
  display: inline-block;
  font-size: 1.1rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  @media (max-width: 480px) {
    font-size: 0.8rem;
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
    font-size: 0.7rem;
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
    font-size: 0.7rem;
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
    font-size: 0.7rem;
    padding: 2px 14px;
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
