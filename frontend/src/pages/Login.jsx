import React from "react";
import styled, { css } from "styled-components";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import { useSelector } from "react-redux";
import Spinner from "../components/spinner/Spinner";

const Section = styled.section`
  margin-top: 60px;
`;

const Container = styled.div`
  width: 420px;
  margin: 0 auto;
  background-color: #ced9db65;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  background-color: #5a8383;
  padding: 1.2rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  color: #fff;
`;

const Row = styled.div`
  padding: 2rem 3rem;
  display: flex;
  ${(props) =>
    props.type === "login-box" &&
    css`
      flex-direction: column;
      border-radius: 4px;
    `}

  ${(props) =>
    props.type === "icon-box" &&
    css`
      justify-content: center;
      gap: 10px;
    `}
`;

const LoginBody = styled.div`
  width: 100%;
  margin-bottom: 14px;
`;

const Span = styled.span`
  display: block;
  width: 100%;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: -14px;
`;

const List = styled.ul`
  letter-spacing: 1px;
  padding: 0 1rem;
  color: #444644;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Navigation = styled(Link)`
  text-decoration: none;
`;

const Anchor = styled.span`
  color: #14b614;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #18dd18;
  }
`;

function Login() {
  const { isPending } = useSelector((state) => state.auth);
  return (
    <>
      {isPending && <Spinner />}
      <Section>
        <Container>
          <Title>Login</Title>
          <Row type="login-box">
            <LoginBody>
              <LoginForm />
              <Span>or</Span>
              <Row type="icon-box">
                <FaFacebook size={32} color=" #0ddbff" />
                <FaTwitter size={32} color=" #0995ad" />
                <FaGoogle size={32} color=" #ee291a" />
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
                    <Anchor>&nbsp;Sign Up</Anchor>
                  </Navigation>
                </li>
              </List>
            </LoginBody>
          </Row>
        </Container>
      </Section>
    </>
  );
}

export default Login;
