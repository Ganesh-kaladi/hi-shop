import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import styled from "styled-components";
import Logo from "../../assets/logo/logo.png";

const FooterBox = styled.footer`
  background-color: #575656;
  color: #ffffff;
  padding: 50px 0 30px;
  margin-top: 70px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px 0px;
  }
`;

const GridLogo = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
`;

const RowLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  /* gap: 16px; */

  @media (max-width: 480px) {
    padding: 0 2rem;
    gap: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 32%;

  @media (max-width: 480px) {
    width: 20%;
  }
`;

const Image = styled.img`
  width: 90%;
`;

const Links = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 0.9rem;
  padding: 6px 20px;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  &:hover {
    color: #a1a1a1;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const Para = styled.p`
  width: 100%;
  font-size: 0.9rem;
  padding: 0 0.6rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 480px) {
    width: 80%;
  }
`;

const Row = styled.ul`
  width: 100%;
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const List = styled.li`
  list-style: none;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
  margin-bottom: 6px;

  &:hover {
    color: #a1a1a1;
  }
`;

const FooterLinkContainer = styled.div``;

const Heading = styled.h3`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
`;

const Span = styled.span`
  display: inline-block;
  font-size: 1.2rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
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
    <GridLogo>
      <RowLogo>
        <ImageContainer>
          <Link to="/">
            <Image src={Logo} alt="..." />
          </Link>
        </ImageContainer>
        <Para>
          We’re here to make your experience smooth and enjoyable. Reach out
          anytime — we’re just a click away.
        </Para>
      </RowLogo>
      <div>
        <Row>
          <List>
            <FaInstagram size={28} color="#ffffff" />
          </List>
          <List>
            <FaTwitter size={28} color="#ffffff" />
          </List>
          <List>
            <FaFacebook size={28} color="#ffffff" />
          </List>
          <List>
            <FaYoutube size={28} color="#ffffff" />
          </List>
        </Row>
      </div>
    </GridLogo>
  );
}

function FooterLink({ heading, linkArr }) {
  return (
    <FooterLinkContainer>
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
    </FooterLinkContainer>
  );
}

export default Footer;
