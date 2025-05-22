import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0;
  margin-top: 56px;

  @media (max-width: 486px) {
    grid-template-columns: 1fr;
    margin-top: 38px;
    padding: 0;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    grid-template-columns: 1fr;
    margin-top: 42px;
    padding: 0;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 46px;
    padding: 0;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;
    padding: 0;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-top: 52px;
    padding: 0;
  }
`;

const Block = styled.div`
  background: linear-gradient(135deg, #dddddd, #dddddd, #dddddd);
  border-radius: 12px;
  padding: 1.6rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;

  @media (max-width: 486px) {
    padding: 1rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    padding: 1.2rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 1rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 1rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 1rem;
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #464343;

  @media (max-width: 486px) {
    font-size: 0.866rem;
    margin-bottom: -0.1rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.932rem;
    margin-bottom: 0.1rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.932rem;
    margin-bottom: 0.1rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.996rem;
    margin-bottom: 0.1rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.051rem;
    margin-bottom: 0.1rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #14161a;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: #615d5d;

  @media (max-width: 486px) {
    font-size: 0.78rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.818rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.818rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.922rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.952rem;
  }
`;

function InfoBlocks() {
  return (
    <Section>
      <Block>
        <Title>Fashion Forward</Title>
        <Description>
          Explore the latest trends and timeless styles curated for every
          season. Dress to impress with our versatile collection for all
          occasions.
        </Description>
      </Block>
      <Block>
        <Title>Premium Quality</Title>
        <Description>
          We prioritize quality in every stitch. Our products are made to last
          with superior materials and attention to detail.
        </Description>
      </Block>
      <Block>
        <Title>Accessories Galore</Title>
        <Description>
          Complete your look with our wide range of accessories—from elegant
          watches to practical bags and standout jewelry.
        </Description>
      </Block>
      <Block>
        <Title>For the Little Ones</Title>
        <Description>
          Discover a delightful selection for kids, featuring comfort, style,
          and durability that grows with them.
        </Description>
      </Block>
    </Section>
  );
}

export default InfoBlocks;
