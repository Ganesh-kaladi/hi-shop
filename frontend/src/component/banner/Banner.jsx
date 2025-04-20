import Banner_1 from "../../assets/banner/banner-1050629_1280.jpg";
import Styles from "./Banner.module.css";

function Banner() {
  return (
    <section className={Styles.banner}>
      <div className={Styles.container}>
        <div className={Styles.banner__flex}>
          <div className={Styles.banner__flex__box}>
            <div className={Styles.banner__container}>
              <img src={Banner_1} alt="..." />
              <div className={Styles.banner__text}>
                <h5>Some Heading</h5>
                <p>
                  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                </p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
          <div className={Styles.banner__flex__box}>
            <div className={Styles.banner__container}>
              <img src={Banner_1} alt="..." />
              <div className={Styles.banner__text}>
                <h5>Some Heading</h5>
                <p>
                  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                </p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
