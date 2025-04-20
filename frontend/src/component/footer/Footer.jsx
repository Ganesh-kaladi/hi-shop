import { Link } from "react-router-dom";
import Logo from "../../assets/header/logo.png";
import "./Footer.css";

import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <FooterLogo />
          <FooterLink
            heading={"Get to Know Us"}
            linkArr={[
              "Company",
              "About Us",
              "Contact Us",
              "Careers",
              "Customer Support",
            ]}
          />
          <FooterLink
            heading={"For Consumers"}
            linkArr={[
              "FAQs",
              "Refund Policy",
              "Privacy Policy",
              "Terms & Conditions",
              "Payments",
            ]}
          />
          <FooterLink
            heading={"Hi,SHOP"}
            linkArr={[
              "Offers",
              "Gift cards",
              "Promos & Cupons",
              "Ads",
              "New Stack",
            ]}
          />
        </div>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <div className="footer__flex__box footer__logo__box">
      <div className="footer__logo">
        <Link to="/">
          <img src={Logo} alt="..." />
        </Link>
      </div>
      <div className="footer__social__icons">
        <ul>
          <li>
            <FaInstagram size={40} color="green" />
          </li>
          <li>
            <FaTwitter size={40} color="green" />
          </li>
          <li>
            <FaFacebook size={40} color="green" />
          </li>
          <li>
            <FaYoutube size={40} color="green" />
          </li>
        </ul>
      </div>
    </div>
  );
}

function FooterLink({ heading, linkArr }) {
  return (
    <div className="footer__flex__box footer__link__box">
      <h1>
        <span>{heading}</span>
      </h1>
      <ul>
        {linkArr?.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
