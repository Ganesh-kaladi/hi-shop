import Sliderimg from "../../assets/slider/slider-1.jpg";
import Styles from "./Slider.module.css";

function Slider() {
  return (
    <section className={Styles.slider}>
      <div className={Styles.container}>
        <div className={Styles.slider__bg__img}>
          <img src={Sliderimg} alt="..." />
          <div className={Styles.slider__text__container}>
            <span>Exclusive Offer upto 65% </span>
            <h2>Brand New Clothes For Mens</h2>
            <p>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
