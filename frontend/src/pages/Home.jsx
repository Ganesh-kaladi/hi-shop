import Banner from "../components/banners/Banner";
import Collection from "../components/collections/Collection";

import Deals from "../components/collections/Deals";
// import PopularProduct from "../components/product/PopularProduct";
import InfoBlocks from "../components/InfoBlock";
import CompanyHighlights from "../components/CompanyHighlights";
import HeroSection from "../components/Hero";
import styled from "styled-components";

const menCollection = {
  heading: "Men's Collection",
  icon: "/assets/men-icon.png",
  col: [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1748172076/men-top_hu4pps.jpg",
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "TopWare",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1748172111/men-bottom_q6m46q.jpg",
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "BottomWare",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1748172147/men-footware_qu5npt.jpg",
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "Fottware",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1748172158/men-acc_jiqepn.jpg",
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "Accessories",
    },
  ],
};

const womenCollection = {
  heading: "Women's Collection",
  icon: "/assets/women-icon.png",
  col: [
    {
      id: 5,
      image:
        "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1748172152/women-top_wcawk9.jpg",
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "TopWare",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1748172167/women-bottom_um2wm8.jpg",
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "BottomWare",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1748172186/women-footer_xth2bg.jpg",
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "Fottware",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1748172206/women-acc_rvpryc.jpg",
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "Accessories",
    },
  ],
};

const kidCollection = {
  heading: "Kid's Collection",
  icon: "/assets/kid-icon.png",
  col: [
    {
      id: 5,
      image:
        "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1748172223/kid-top_pwytsp.jpg",
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "TopWare",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1748172230/kid-bottomware_apbbn8.jpg",
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "BottomWare",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1748172228/kid-footware_dfqg9q.jpg",
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "Fottware",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/drbklccpt/image/upload/t_discount-images/v1748172240/kid-acc_hoomyy.jpg",
      description:
        "A variety of casual t-shirts, shirts, and jackets for every occasion.",
      category: "Accessories",
    },
  ],
};

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`;

function Home() {
  return (
    <div>
      <Container>
        <HeroSection />
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
