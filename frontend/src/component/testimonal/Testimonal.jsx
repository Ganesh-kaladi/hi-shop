import Styles from "./Testimonal.module.css";
import { FaTruck, FaMapMarkerAlt, FaLock, FaPercent } from "react-icons/fa";

function Testimonal() {
  return (
    <section className={Styles.testimonal}>
      <div className={Styles.container}>
        <div className={Styles.testimonal__flex}>
          <div className={Styles.testimonal__flex__box}>
            <span>
              <FaMapMarkerAlt size={40} color="green" />
            </span>
            <p>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </p>
          </div>
          <div className={Styles.testimonal__flex__box}>
            <span>
              <FaTruck size={40} color="green" />
            </span>
            <p>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </p>
          </div>
          <div className={Styles.testimonal__flex__box}>
            <span>
              <FaPercent size={40} color="green" />
            </span>
            <p>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </p>
          </div>
          <div className={Styles.testimonal__flex__box}>
            <span>
              <FaLock size={40} color="green" />
            </span>
            <p>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonal;
