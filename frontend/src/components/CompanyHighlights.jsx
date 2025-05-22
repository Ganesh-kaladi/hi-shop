import styled from "styled-components";
import { FaUsers, FaGem, FaTshirt, FaShippingFast } from "react-icons/fa";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
  margin-top: 56px;

  @media (max-width: 486px) {
    margin-top: 38px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-top: 42px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 46px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 50px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-top: 52px;
  }
`;

const Block = styled.div`
  background-color: #deecf5;
  padding: 1.6rem;
  box-shadow: 0px 0px 8px 1px rgba(85, 85, 85, 0.301);
  transition: transform 0.3s ease;
  backdrop-filter: blur(4px);
  text-align: center;
  border-radius: 1rem;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 486px) {
    padding: 1rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    padding: 1.164rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 1.164rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 1.164rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 1rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #7163f0;

  @media (max-width: 486px) {
    font-size: 1.6rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 1.8rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.96rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 2.111rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 2.4rem;
  }
`;

const Title = styled.h3`
  font-size: 1.255rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: #1f2937;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.845rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.911rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.989rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.1rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #374151;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 486px) {
    font-size: 0.732rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.8rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.923rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.923rem;
  }
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
