import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1%.8;
  margin-top: 60px;
`;

const Block = styled.div`
  background: linear-gradient(135deg, #f15167, #ed9af7, #c77aee);

  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #14161a;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
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
