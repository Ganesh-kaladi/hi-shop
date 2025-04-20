import Styles from "./PopularProduct.module.css";
import men from "../../assets/product/shirt-2.jpg";
import { FaArrowRight } from "react-icons/fa";

const imgArray = [
  { id: 1, image: men },
  { id: 2, image: men },
  { id: 3, image: men },
  { id: 4, image: men },
];

function PopularProduct() {
  return (
    <section className={Styles.pp}>
      <div className={Styles.pp__container}>
        <div className={Styles.pp__flex}>
          <PopularProductList heading="summer sale" imgArray={imgArray} />
          <PopularProductList heading="winter sale" imgArray={imgArray} />
          <PopularProductList heading="sports lover " imgArray={imgArray} />
          <PopularProductList heading="Hot deals " imgArray={imgArray} />
          <PopularProductList heading="Amazing deals " imgArray={imgArray} />
          <PopularProductList heading="cool sale" imgArray={imgArray} />
        </div>
      </div>
    </section>
  );
}

function PopularProductList({ heading, imgArray }) {
  return (
    <div className={Styles.pp__flex__box}>
      <PopularProductCard heading={heading} imgArray={imgArray} />
    </div>
  );
}

function PopularProductCard({ heading, imgArray }) {
  return (
    <div className={Styles.pp__flex__card}>
      <h1>{heading}</h1>
      <div className={Styles.pp__card__body}>
        {imgArray.map((el) => (
          <PopularProductCardItem key={el.id} image={el.image} />
        ))}
      </div>
      <span>
        <FaArrowRight size={30} />
      </span>
    </div>
  );
}

function PopularProductCardItem() {
  return (
    <div className={Styles.pp__card__product}>
      <div className={Styles.pp__product__container}>
        <div className={Styles.pp__img}>
          <img src={men} alt="..." />
        </div>
        <p>offer price</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
}

export default PopularProduct;
