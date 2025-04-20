import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Links from "../../ui/Links";
import styled, { css } from "styled-components";
import Logo from "../../assets/logo/logo.png";

const FooterBox = styled.footer`
  background-color: var(--color-black-100);
  color: var(--color-white);
  padding: 50px 0 30px;
  margin-top: 70px;
`;

const Container = styled.div`
  margin: var(--container-margin);
  width: var(--container-width);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  ${(props) =>
    props.type === "logo" &&
    css`
      grid-template-columns: 1fr;
      justify-items: center;
    `}
`;

const List = styled.li`
  list-style: none;
  margin-bottom: 10px;
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Image = styled.img`
  width: 220px;
`;

const Row = styled.ul`
  margin-top: 1.2rem;
  display: flex;
  gap: 20px;
`;

const Heading = styled.h1`
  text-align: center;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
`;

const Span = styled.span`
  display: inline-block;
  font-size: 1.6rem;
  margin-bottom: 0.7rem;
`;

function Footer() {
  return (
    <FooterBox>
      <Container>
        <Grid>
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
        </Grid>
      </Container>
    </FooterBox>
  );
}

function FooterLogo() {
  return (
    <Grid type="logo">
      <div className="footer__logo">
        <Link to="/">
          <Image src={Logo} alt="..." />
        </Link>
      </div>
      <div className="footer__social__icons">
        <Row>
          <List>
            <FaInstagram size={40} color="#ffffff" />
          </List>
          <List>
            <FaTwitter size={40} color="#ffffff" />
          </List>
          <List>
            <FaFacebook size={40} color="#ffffff" />
          </List>
          <List>
            <FaYoutube size={40} color="#ffffff" />
          </List>
        </Row>
      </div>
    </Grid>
  );
}

function FooterLink({ heading, linkArr }) {
  return (
    <div className="footer__flex__box footer__link__box">
      <Heading>
        <Span>{heading}</Span>
      </Heading>
      <ul>
        {linkArr?.map((el, i) => {
          return (
            <List key={i}>
              <Links>{el}</Links>
            </List>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
