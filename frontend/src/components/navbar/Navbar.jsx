import styled, { css, keyframes } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../slice/authSlice";
import Logo from "../../assets/logo/logo.png";
import { FaTimes } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { addWidth } from "../../slice/pageWidthSlice";
import { getCartItems } from "../../slice/cartSlice";

const NavbarBox = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 5;
  transition: background-color 0.6s;
  ${(props) =>
    props.type
      ? css`
          background-color: rgb(48, 48, 48);
        `
      : css`
          background-color: rgb(44, 44, 44);
        `};
`;

const Container = styled.div`
  margin: var(--container-margin);
  width: var(--container-width);
`;

const Row = styled.div`
  height: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
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
  font-size: 1rem;
  color: #ffffff;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
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
  color: #808080;
  font-weight: lighter;
  cursor: pointer;
`;

const Ani = keyframes`
  0% {transform: translateY(-16px);}
  25% {transform: translateY(-12px);}
  50% {transform: translateY(-8px);}
  75% {transform: translateY(-4px);}
  100% {transform: translateY(0px);}
`;

const NavColoumn = styled.ul`
  margin-top: 0px;
  display: block;
  list-style: none;
  background-color: #ffffff;
  padding: 1rem 2rem;
  animation: ${Ani} 0.4s ease;
`;

const NavColumnList = styled.li`
  padding: 8px 0px;
  border-bottom: 1px solid #85858592;
`;

const ColAnchor = styled(NavLink)`
  color: #424242;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  padding-left: 4px;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 0.8rem;
`;

function useHandleWindowWidth() {
  const dispatch = useDispatch();
  let width = null;
  useEffect(
    function () {
      function setWindowWidth() {
        width = window.innerWidth;
        dispatch(addWidth(width));
      }
      setWindowWidth();
      window.addEventListener("resize", setWindowWidth);
      return () => window.removeEventListener("resize", setWindowWidth);
    },
    [width, dispatch]
  );

  return width;
}

function Navbar() {
  useHandleWindowWidth();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const { width } = useSelector((state) => state.pageWidth);

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

  function handleNavTogglerClick() {
    setOpen(false);
  }

  function handleGetCartItems() {
    dispatch(getCartItems(token));
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
          {width <= 800 &&
            (open ? (
              <FaTimes size={24} onClick={() => setOpen((cur) => !cur)} />
            ) : (
              <MdMenu size={28} onClick={() => setOpen((cur) => !cur)} />
            ))}

          {width > 800 && (
            <nav>
              <NavRow>
                <li>
                  <Anchor to="/">Home</Anchor>
                </li>
                <li onClick={handleGetCartItems}>
                  <Anchor to="cart">Cart</Anchor>
                </li>
                <li>
                  <Anchor to="/">Polices</Anchor>
                </li>
                <li>
                  <Anchor to="/products">Products</Anchor>
                </li>
                <li>
                  <Anchor to="/user">My Account</Anchor>
                </li>
                <li>
                  {token === null ? (
                    <Anchor to="/login">Login</Anchor>
                  ) : (
                    <Anchor to="/login" onClick={() => dispatch(logoutUser())}>
                      Logout
                    </Anchor>
                  )}
                </li>
              </NavRow>
            </nav>
          )}
        </Row>
      </Container>
      {width < 800 && open && (
        <nav>
          <NavColoumn>
            <NavColumnList>
              <ColAnchor to="/" onClick={handleNavTogglerClick}>
                Home
              </ColAnchor>
            </NavColumnList>
            <NavColumnList>
              <ColAnchor to="cart" onClick={handleNavTogglerClick}>
                Cart
              </ColAnchor>
            </NavColumnList>
            <NavColumnList>
              <ColAnchor to="/" onClick={handleNavTogglerClick}>
                Polices
              </ColAnchor>
            </NavColumnList>
            <NavColumnList>
              <ColAnchor to="/products" onClick={handleNavTogglerClick}>
                Products
              </ColAnchor>
            </NavColumnList>
            <NavColumnList>
              <ColAnchor to="/user" onClick={handleNavTogglerClick}>
                My Account
              </ColAnchor>
            </NavColumnList>
            <NavColumnList>
              {token === null ? (
                <ColAnchor to="/login" onClick={handleNavTogglerClick}>
                  Login
                </ColAnchor>
              ) : (
                <Anchor
                  to="/login"
                  onClick={() => {
                    dispatch(logoutUser());
                    handleNavTogglerClick();
                  }}
                >
                  Log Out
                </Anchor>
              )}
            </NavColumnList>
          </NavColoumn>
        </nav>
      )}
    </NavbarBox>
  );
}

export default Navbar;
