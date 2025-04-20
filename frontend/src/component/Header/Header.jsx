import Navbar from "./Navbar";
import Styles from "./Header.module.css";

function Header() {
  return (
    <>
      <Navbar />
      <header className={Styles.header}>
        <div className={Styles.header__bg__img}></div>
        <div className={Styles.header__content}>
          <div>
            <h1>Main Heading</h1>
            <p>
              <strong>side heading</strong>
            </p>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem{" "}
            </p>
            <button>Shop Now...</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
