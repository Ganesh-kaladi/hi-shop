import Mobile from "../../assets/category/mobile.png";
import Men from "../../assets/category/men.png";
import Women from "../../assets/category/women.png";
import Electronics from "../../assets/category/electronic.png";
import Bike from "../../assets/category/bike.png";

import Styles from "./CategoryNav.module.css";

function CategoryNav() {
  return (
    <section className={Styles.category}>
      <div className={Styles.container}>
        <div className={Styles.category__container__flex}>
          <CategoryNavItem img={Mobile} caption={"Mobie"} />
          <CategoryNavItem img={Men} caption={"Men"} />
          <CategoryNavItem img={Women} caption={"Women"} />
          <CategoryNavItem img={Bike} caption={"Bikes"} />
          <CategoryNavItem img={Electronics} caption={"Electronics"} />
        </div>
      </div>
    </section>
  );
}

function CategoryNavItem({ img, caption }) {
  return (
    <div className={Styles.category__container__flex__box}>
      <div className={Styles.category__link}>
        <figure>
          <img src={img} alt="..." />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default CategoryNav;
