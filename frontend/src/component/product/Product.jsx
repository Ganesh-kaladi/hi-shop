import Styles from "./Product.module.css";
import image from "../../assets/product/shirt-1.jpg";

function Product() {
  return (
    <section className={Styles.product}>
      <div className={Styles.container}>
        <h2>popular products</h2>
        <div className={Styles.product__flex}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </section>
  );
}

function ProductItem() {
  return (
    <div className={Styles.product__flex__box}>
      <div className={Styles.product__img}>
        <img src={image} alt="..." />
        <p className={Styles.product__love__icon}>icon</p>
      </div>
      <div className={Styles.product__text}>
        <h5>brand brand</h5>
        <p>product title </p>
      </div>
      <div className={Styles.product__rating}>
        <p>4.5</p>
        <span>|</span>
        <p>245</p>
      </div>
      <div className={Styles.product__price}>
        <p>offer price</p>
        <p>actual price</p>
      </div>
    </div>
  );
}

export default Product;
