import Styles from "./IdProduct.module.css";
import s from "../../assets/product/shirt-5.jpg";
import { FaStar } from "react-icons/fa";

const product = {
  title: "Stylish Cotton T-Shirt",
  price: "₹999",
  size_selection: ["S", "M", "L", "XL", "XXL"],
  description:
    "A comfortable, stylish cotton t-shirt perfect for casual wear. Soft, breathable fabric ideal for everyday use.",
  product_details: {
    color: "Black",
    production: "India",
    type_of_cloth: "Cotton",
  },
  ratings: {
    average_rating: 4.5,
    total_reviews: 1200,
  },
  bank_offers: [
    "10% off on HDFC Bank Debit Card",
    "5% cashback on ICICI Bank Credit Card",
    "Flat ₹150 off on payments above ₹1000",
  ],
};

function IdProduct() {
  return (
    <section className={Styles.id__product}>
      <div className={Styles.id__product__container}>
        <div>
          <h1>Product Details heading</h1>
          <div className={Styles.id__product__flex}>
            <div className={Styles.id__product__flex__img}>
              <img src={s} alt="..." />
            </div>
            <div className={Styles.id__product__flex__text}>
              <h2>
                <span>Product details</span>
              </h2>
              <h1>{product.title}</h1>

              <p className={Styles.description}>{product.description}</p>
              <div className={Styles.rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                {product.ratings.average_rating}
                <span>|</span>
                {product.ratings.total_reviews}
              </div>
              <p className={Styles.price}>{product.price}/-</p>
              <p className={Styles.color}>
                color: {product.product_details.color}
              </p>
              <div className={Styles.size}>
                <span>size:</span>
                {product.size_selection.map((el) => (
                  <button>{el}</button>
                ))}
              </div>

              <p className={Styles.cloth}>
                <span>Type of Cloth: </span>
                {product.product_details.type_of_cloth}
              </p>
              <div className={Styles.cart__btn}>
                <button>Add to cart</button>
              </div>

              <div>
                {product.bank_offers.map((el) => (
                  <p>{el}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IdProduct;
