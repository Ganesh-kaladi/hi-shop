import Styles from "./ProductCategory.module.css";

function ProductCategory({ image, heading, list }) {
  return (
    <div className={Styles.product__category}>
      <div className={Styles.container}>
        <h1>{heading}</h1>
        <div className={Styles.product__category__flex}>
          {list?.map((el) => {
            return (
              <ProductCategoryListItem key={el.id} image={image} list={el} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProductCategoryListItem({ image, list }) {
  return (
    <div className={Styles.product__category__flex__box}>
      <div className={Styles.product__category__img}>
        <img src={image} alt="..." />
        <div>
          <span>{list.categoryName}</span>
        </div>
      </div>
      <div className={Styles.product__category__text}>
        <p>{list.description}</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
}

export default ProductCategory;
