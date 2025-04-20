import Banner from "../components/banners/Banner";
import Collection from "../components/collections/Collection";

import men__col__1 from "../assets/feature/men-top.jpeg";
import men__col__2 from "../assets/feature/men-bottom.jpeg";
import men__col__3 from "../assets/feature/men-footware.jpeg";
import men__col__4 from "../assets/feature/men-acc.jpeg";

import women__col__1 from "../assets/feature/women-top.jpeg";
import women__col__2 from "../assets/feature/women-bottom.jpeg";
import women__col__3 from "../assets/feature/women-footer.jpeg";
import women__col__4 from "../assets/feature/women-acc.jpeg";

import kid__col__1 from "../assets/feature/kid-top.jpeg";
import kid__col__2 from "../assets/feature/kid-bottomware.jpeg";
import kid__col__3 from "../assets/feature/kid-footware.jpeg";
import kid__col__4 from "../assets/feature/kid-acc.jpeg";
import Deals from "../components/collections/Deals";
import PopularProduct from "../components/product/PopularProduct";
import InfoBlocks from "../components/InfoBlock";
import CompanyHighlights from "../components/CompanyHighlights";
import HeroSection from "../components/Hero";
import styled from "styled-components";

const menCollection = {
  heading: "Men's Collection",
  col: [
    {
      id: 1,
      image: men__col__1,
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "TopWare",
    },
    {
      id: 2,
      image: men__col__2,
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "BottomWare",
    },
    {
      id: 3,
      image: men__col__3,
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "Fottware",
    },
    {
      id: 4,
      image: men__col__4,
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "Accessories",
    },
  ],
};

const womenCollection = {
  heading: "Women's Collection",
  col: [
    {
      id: 5,
      image: women__col__1,
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "TopWare",
    },
    {
      id: 6,
      image: women__col__2,
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "BottomWare",
    },
    {
      id: 7,
      image: women__col__3,
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "Fottware",
    },
    {
      id: 8,
      image: women__col__4,
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "Accessories",
    },
  ],
};

const kidCollection = {
  heading: "Kid's Collection",
  col: [
    {
      id: 5,
      image: kid__col__1,
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "TopWare",
    },
    {
      id: 6,
      image: kid__col__2,
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "BottomWare",
    },
    {
      id: 7,
      image: kid__col__3,
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "Fottware",
    },
    {
      id: 8,
      image: kid__col__4,
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "Accessories",
    },
  ],
};

const Container = styled.div`
  margin: var(--container-margin);
  width: var(--container-width);
`;

function Home() {
  return (
    <div>
      <HeroSection />
      <Container>
        <Banner />
        <Collection collection={menCollection} />
        <Collection collection={womenCollection} />
        <Collection collection={kidCollection} />
        <InfoBlocks />
        <Deals />
        {/* <PopularProduct /> */}
        <CompanyHighlights />
      </Container>
    </div>
  );
}

export default Home;
