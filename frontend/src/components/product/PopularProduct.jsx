import Product from "./Product";
import image1 from "../../assets/product/shirt-2.jpg";
import image2 from "../../assets/product/shirt-3.jpg";
import image3 from "../../assets/product/shirt-4.jpg";
import image4 from "../../assets/product/shirt-5.jpg";
import styled from "styled-components";

const image = [
  image1,
  image2,
  image3,
  image4,
  image1,
  image2,
  image3,
  image4,
  image1,
  image2,
];

const Section = styled.section`
  margin-top: 70px;
`;

const Heading = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1.1rem;
  color: #1f2937;
  text-align: start;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

function PopularProduct() {
  return (
    <Section>
      <div>
        <Heading>Popular Products</Heading>
        <Grid>
          {image.map((el, i) => (
            <Product key={i} image={el} />
          ))}
        </Grid>
      </div>
    </Section>
  );
}

export default PopularProduct;
