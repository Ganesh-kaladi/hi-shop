import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css";
import Logo from "../../assets/header/logo.png";

function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.container}>
        <div className={Styles.nav}>
          <div className={Styles.logo}>
            <NavLink to="/">
              <img src={Logo} alt="..." />
            </NavLink>
          </div>
          <div className={Styles.nav__search}>
            <div>
              <input
                type="text"
                placeholder="Search for products, brands, more..."
              />
            </div>
          </div>
          <div className={Styles.nav__link}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Cart</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <select>
                  <option>More</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
