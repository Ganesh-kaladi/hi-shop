import Footer from "../component/footer/Footer";
import Navbar from "../component/Header/Navbar";
import Slider from "../component/Slider/Slider";
import ProductCategory from "../component/productCategory/ProductCategory";
import Banner from "../component/banner/Banner";

import Men_1 from "../assets/mens/men-1.jpg";
import Women_1 from "../assets/women/women_1.jpg";
import Kid_1 from "../assets/kids/kid_1.jpg";
import Mobile_1 from "../assets/mobile/mobile.jpg";
import Electronics_1 from "../assets/electronics/electronics.jpg";
import Testimonal from "../component/testimonal/Testimonal";
import CategoryNav from "../component/CategoryNav/CategoryNav";
import Product from "../component/product/Product";
import PopularProduct from "../component/product/PopularProduct";

const men = [
  {
    id: 1001,
    categoryName: "Top Wear",
    description:
      "A variety of casual t-shirts, shirts, and jackets for every occasion.",
  },
  {
    id: 1002,
    categoryName: "Bottom Wear",
    description:
      "Comfortable and stylish pants, shorts, and denim for all-day wear.",
  },
  {
    id: 1003,
    categoryName: "Footwear",
    description:
      "Durable, stylish shoes, including sneakers and formal options.",
  },
  {
    id: 1004,
    categoryName: "Accessories",
    description:
      "Add the perfect touch with belts, wallets, hats, and watches.",
  },
];

const women = [
  {
    id: 1005,
    categoryName: "Top Wear",
    description:
      "Trendy blouses, tees, and jackets for every style and occasion.",
  },
  {
    id: 1006,
    categoryName: "Bottom Wear",
    description: "Stylish trousers, skirts, and jeans for every look.",
  },
  {
    id: 1007,
    categoryName: "Footwear",
    description: "Comfortable shoes, from flats to boots, for any outfit.",
  },
  {
    id: 1008,
    categoryName: "Apparel Accessories",
    description: "Elevate your look with scarves, handbags, and jewelry.",
  },
];

const kid = [
  {
    id: 1009,
    categoryName: "Top Wear",
    description: "Cute t-shirts, hoodies, and sweaters for your little ones.",
  },
  {
    id: 1010,
    categoryName: "Bottom Wear",
    description: "Playful leggings, jeans, and shorts for comfort and fun.",
  },
  {
    id: 1011,
    categoryName: "Footwear",
    description:
      "Sneakers, sandals, and boots to keep them stylish and active.",
  },
  {
    id: 1012,
    categoryName: "Apparel Accessories",
    description: "Fun hats, backpacks, socks, and sunglasses for everyday use.",
  },
];

const mobile = [
  {
    id: 2001,
    categoryName: "Smartphones",
    description:
      "Latest smartphones with cutting-edge features and sleek designs.",
  },
  {
    id: 2002,
    categoryName: "Laptops & Tablets",
    description:
      "High-performance laptops and tablets for work, study, and entertainment.",
  },
  {
    id: 2003,
    categoryName: "Headphones & Earbuds",
    description:
      "Wireless and wired headphones, earphones, and earbuds for great sound.",
  },
  {
    id: 2004,
    categoryName: "Wearable Devices",
    description:
      "Smartwatches and fitness trackers to keep you connected and healthy.",
  },
];

const electronics = [
  {
    id: 2005,
    categoryName: "Cameras & Photography",
    description:
      "High-quality cameras and accessories for photography enthusiasts.",
  },
  {
    id: 2006,
    categoryName: "Gaming Consoles",
    description: "Next-gen gaming consoles for immersive gaming experiences.",
  },
  {
    id: 2007,
    categoryName: "Smart Home Devices",
    description:
      "Devices for home automation, from smart lights to security systems.",
  },
  {
    id: 2008,
    categoryName: "Mobile Accessories",
    description:
      "Chargers, phone cases, screen protectors, and more for your mobile devices.",
  },
];

function HomePage() {
  return (
    <>
      <Navbar />
      <Slider />
      <ProductCategory heading={"Men's Collection"} image={Men_1} list={men} />
      <ProductCategory
        heading={"Women's Collection"}
        image={Women_1}
        list={women}
      />
      <ProductCategory heading={"Kids's Collection"} image={Kid_1} list={kid} />
      <Banner />
      <Product />
      <PopularProduct />
      <Testimonal />
      <Footer />
    </>
  );
}

export default HomePage;
