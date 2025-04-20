// CompanyHighlights.jsx
import React from "react";
import styled from "styled-components";
import { FaUsers, FaGem, FaTshirt, FaShippingFast } from "react-icons/fa";

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 70px;
`;

const Block = styled.div`
  flex: 1 1 250px;
  background-color: #ffffffcc;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  backdrop-filter: blur(4px);
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #7163f0;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f2937;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.6;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

function CompanyHighlights() {
  return (
    <Section>
      <Block>
        <IconWrapper>
          <FaUsers />
        </IconWrapper>
        <Title>Who We Are 🌟</Title>
        <Description>
          At TrendSphere, we blend creativity and commerce to deliver a standout
          shopping experience. Our mission is to empower every individual with
          style and confidence.
        </Description>
      </Block>
      <Block>
        <IconWrapper>
          <FaGem />
        </IconWrapper>
        <Title>Our Craft 🧵</Title>
        <Description>
          From handpicked fabrics to intricate detailing, we ensure quality in
          every piece. Crafted with care, our products speak volumes about our
          standards.
        </Description>
      </Block>
      <Block>
        <IconWrapper>
          <FaTshirt />
        </IconWrapper>
        <Title>Beyond Fashion 👗</Title>
        <Description>
          We're more than just an apparel brand. We’re a community that
          celebrates individuality, diversity, and expression through design.
        </Description>
      </Block>
      <Block>
        <IconWrapper>
          <FaShippingFast />
        </IconWrapper>
        <Title>Why Choose Us 🚚</Title>
        <Description>
          Fast delivery, responsive support, and unmatched style—all under one
          roof. Join thousands of happy customers and redefine your wardrobe
          with us.
        </Description>
      </Block>
    </Section>
  );
}

export default CompanyHighlights;
