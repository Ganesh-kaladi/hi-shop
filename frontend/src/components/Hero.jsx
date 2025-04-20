import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/banner/hero.png";
import right__icon from "../assets/icons/right__icon.png";

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
  top: 0;
  color: white;
  text-align: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.6)
  );
`;

const Content = styled.div`
  width: 60%;
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: "Courgette", cursive;
  font-weight: 700;
  font-style: normal;
`;

const Span = styled.span`
  display: inline-block;
  margin-bottom: 0.4rem;
  font-size: 1.6rem;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  font-size: 1.2rem;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Para = styled.p`
  margin-bottom: 1.5rem;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Button = styled.button`
  background-color: unset;
  margin-top: 22px;
  justify-self: center;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  padding: 12px 14px;
  border: 2px solid #ffffff;
  border-radius: 4px;
  color: #000000;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b3aaaa49;
  }
`;

function HeroSection() {
  const navigate = useNavigate();
  return (
    <Hero>
      <Overlay />
      <Content>
        <Title>Hi,SHOP</Title>
        <Span>
          <b>Your Style, Your Rules</b>
        </Span>
        <Subtitle>
          Fresh drops, everyday steals, and fits that flex — all at your
          fingertips.
        </Subtitle>
        <Para>
          Level up your look with trending gear for every vibe and season. Ready
          to glow up your wardrobe?
        </Para>
        <Button onClick={() => navigate("/products")}>
          Shop Now
          <img src={right__icon} alt="..." />
        </Button>
      </Content>
    </Hero>
  );
}

export default HeroSection;
