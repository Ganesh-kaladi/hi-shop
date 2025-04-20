import React from "react";
import styled, { css } from "styled-components";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import { useSelector } from "react-redux";
import Spinner from "../components/spinner/Spinner";

const Section = styled.section`
  margin-top: 120px;
`;

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "login-box" &&
    css`
      margin: 20px auto auto;
      width: 380px;
      flex-direction: column;
      border-radius: 4px;
      background-color: #ffffff;
    `}

  ${(props) =>
    props.type === "icon-box" &&
    css`
      justify-content: center;
      gap: 10px;
    `}
`;

const Title = styled.h1`
  margin-bottom: 1.2rem;
  font-size: 1.8rem;
  background-color: aqua;
  padding: 1.4rem 2rem;
  text-align: center;
`;

const Span = styled.span`
  display: block;
  width: 100%;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 10px;
`;

const List = styled.ul`
  margin-top: 20px;
  letter-spacing: 1px;
  padding: 1.4rem 2.8rem;
  background-color: #28333d;
  color: #fff;
`;

const Navigation = styled(Link)`
  text-decoration: none;
`;

const Anchor = styled.span`
  color: #128112;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #055a05;
  }
`;

function Login() {
  const { isPending } = useSelector((state) => state.auth);
  return (
    <>
      {isPending && <Spinner />}
      <Section>
        <Row type="login-box">
          <Title>Login</Title>
          <LoginForm />
          <Span>or</Span>
          <Row type="icon-box">
            <FaFacebook size={38} />
            <FaTwitter size={38} />
            <FaGoogle size={38} />
          </Row>
          <List>
            <li>
              Forget &nbsp;
              <Navigation to="/username-find">
                <Anchor>Username</Anchor>
              </Navigation>
              /
              <Navigation to="/forget-password">
                <Anchor> Password</Anchor>
              </Navigation>
            </li>
            <li>
              Don't have an account?
              <Navigation to="/sign-up">
                <Anchor>Sign Up</Anchor>
              </Navigation>
            </li>
          </List>
        </Row>
      </Section>
    </>
  );
}

export default Login;
