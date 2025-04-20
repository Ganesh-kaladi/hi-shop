import shirtA from "../../assets/product/shirt-2.jpg";
import shirtB from "../../assets/product/shirt-3.jpg";
import shirtC from "../../assets/product/shirt-4.jpg";
import shirtD from "../../assets/product/shirt-5.jpg";
import Styles from "./Cart.module.css";

const products = [
  {
    id: 1,
    productName: "Shirt - Casual",
    quantity: 2,
    price: 20.99,
    size: "M",
    imageUrl: shirtA,
    color: "Blue",
    totalPrice: 41.98,
    category: "Men's",
  },
  {
    id: 2,
    productName: "Shirt - Formal",
    quantity: 1,
    price: 30.5,
    size: "L",
    imageUrl: shirtB,
    color: "White",
    totalPrice: 30.5,
    category: "Men's",
  },
  {
    id: 3,
    productName: "Shirt - Graphic",
    quantity: 3,
    price: 15.75,
    size: "S",
    imageUrl: shirtC,
    color: "Black",
    totalPrice: 47.25,
    category: "Men's",
  },
  {
    id: 4,
    productName: "Shirt - Summer",
    quantity: 3,
    price: 15.75,
    size: "S",
    imageUrl: shirtD,
    color: "Black",
    totalPrice: 47.25,
    category: "Men's",
  },
];

function Cart() {
  return (
    <section className={Styles.cart}>
      <div className={Styles.cart__container}>
        <div className={Styles.cart__flex}>
          {/* cart box */}
          <div className={Styles.cart__flex__cart}>
            <h1>Cart </h1>
            <div>
              <CartList prod={products} />
            </div>
          </div>

          {/* check box */}
          <div className={Styles.cart__flex__checkout}>
            <h1>checklist</h1>
            <h3>total price</h3>
            <button>checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CartList({ prod }) {
  return (
    <ul className={Styles.cart__list}>
      <li className={Styles.cart__list__item}>
        <div className={Styles.cart__list__item__p}>
          <h4>Product Details</h4>
        </div>
        <h6>price</h6>
        <h6>size</h6>
        <h6>quantity</h6>
        <h6>total Price</h6>
      </li>
      {prod?.map((el) => (
        <CartListItem key={el.id} prod={el} />
      ))}
    </ul>
  );
}

function CartListItem({ prod }) {
  return (
    <li
      className={`${Styles.cart__list__item} ${Styles.cart__list__item__container}`}
    >
      <div className={Styles.cart__list__item__p}>
        <div>
          <img src={prod.imageUrl} alt="..." />
        </div>
        <div>
          <span>{prod.productName}</span>
          <span>{prod.category}</span>
          <span>{prod.color}</span>
        </div>
      </div>
      <p>{prod.price}</p>
      <p>{prod.size}</p>
      <p>
        <button> - </button>
        {prod.quantity}
        <button> + </button>
      </p>
      <p>{prod.totalPrice}</p>
    </li>
  );
}

export default Cart;
