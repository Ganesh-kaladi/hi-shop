import styled, { css } from "styled-components";
import image from "../../assets/feature/kid-acc.jpeg";
import { FaTag, FaArrowAltCircleRight } from "react-icons/fa";

const Section = styled.section`
  margin-top: 60px;
`;

const Title = styled.div`
  font-size: 1.8rem;
  margin-bottom: 1.1rem;
  color: #1f2937;
  text-align: center;
  font-weight: bolder;
`;

const Grid = styled.div`
  display: grid;
  position: relative;

  ${(props) =>
    props.type === "main" &&
    css`
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
    `}

  ${(props) =>
    props.type === "child" &&
    css`
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      background-color: var(--color-grey-50);
      padding: 16px 12px;
    `}
`;

const Card = styled.div`
  background-color: var(--color-white);
  padding: 12px;
  border: 1px solid black;
`;

const Image = styled.img`
  width: 100%;
`;

const Span = styled.span`
  display: block;
  margin-top: 10px;
  color: var(--color-green-500);
  text-align: center;
`;

const CornerIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 12px;
  color: #ffffff;
  padding: 8px;
  border-radius: 50%;
  z-index: 10;
  font-size: 1.8rem;
  padding-bottom: 6px;
  background-color: #fff;
`;

const ProductName = styled.p`
  margin-top: 8px;
  font-weight: bold;
  text-align: center;
  color: var(--color-grey-700);
`;

function Deals() {
  return (
    <Section>
      <Title>Offers</Title>
      <Grid type="main">
        {[...Array(3)].map((_, idx) => (
          <Grid key={idx} type="child">
            <CornerIcon>
              <FaArrowAltCircleRight color="blue" />
            </CornerIcon>
            {[...Array(4)].map((_, index) => (
              <Card key={index}>
                <Image src={image} alt="..." />
                <Span>
                  <FaTag /> Upto 40% off
                </Span>
                <ProductName>Kidswear Combo {index + 1}</ProductName>
              </Card>
            ))}
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

export default Deals;
