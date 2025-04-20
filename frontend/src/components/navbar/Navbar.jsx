import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../slice/authSlice";
import Logo from "../../assets/logo/logo.png";

const NavbarBox = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 5;
  transition: background-color 0.6s;
  ${(props) =>
    props.type
      ? css`
          background-color: rgb(61, 61, 61);
        `
      : css`
          background-color: rgba(0, 0, 0, 0);
        `};
`;

const Container = styled.div`
  margin: var(--container-margin);
  width: var(--container-width);
`;

const Row = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Image = styled.img`
  width: 3.6rem;
  height: 3.4rem;
  cursor: pointer;
`;

const NavRow = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const Anchor = styled(NavLink)`
  color: #2e2d2d;
  text-decoration: none;
  margin-right: 20px;
  font-size: 1.285rem;
  color: #ffffff;
  font-weight: bold;
  font-family: "Inconsolata", monospace;
  font-weight: 500;
  font-style: normal;

  &:active,
  &:hover {
    color: #0376d4;
  }
`;

const Button = styled.button`
  background-color: unset;
  font-size: 1.1rem;
  border: none;
  color: #fff;
  font-weight: lighter;
  cursor: pointer;
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 72) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handledLogoutClick() {
    dispatch(logoutUser());
  }

  return (
    <NavbarBox type={scrolled}>
      <Container>
        <Row>
          <div>
            <Link to="/">
              <Image src={Logo} alt="..." />
            </Link>
          </div>
          <nav>
            <NavRow>
              <li>
                <Anchor to="/">Home</Anchor>
              </li>
              <li>
                <Anchor to="cart">Cart</Anchor>
              </li>
              <li>
                <Anchor to="/">Polices</Anchor>
              </li>
              <li>
                <Anchor to="/user">My Account</Anchor>
              </li>
              <li>
                {token === null ? (
                  <Anchor to="/login">Login</Anchor>
                ) : (
                  <Button onClick={handledLogoutClick}>Log Out</Button>
                )}
              </li>
            </NavRow>
          </nav>
        </Row>
      </Container>
    </NavbarBox>
  );
}

export default Navbar;
