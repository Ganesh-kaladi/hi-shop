import styled, { css } from "styled-components";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import { useSelector } from "react-redux";
import Spinner from "../components/spinner/Spinner";

const Section = styled.section`
  margin-top: 52px;

  @media (max-width: 486px) {
    margin-top: 40px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-top: 44px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 46px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 48px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-top: 52px;
  }
`;

const Container = styled.div`
  width: 420px;
  margin: 0 auto;
  background-color: #f3f3f3;
  border-radius: 1rem;
  box-shadow: 0px 0px 12px 1px #47474758;

  @media (max-width: 486px) {
    width: 360px;
  }
`;

const Title = styled.h1`
  font-size: 1.4rem;
  background-color: #8f8f8f;
  padding: 0.9rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  color: #fff;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
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
  margin-bottom: 1rem;
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

const ListItem = styled.li`
  font-size: 0.9rem;
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
  const { isAuthLoading } = useSelector((state) => state.auth);

  return (
    <>
      {isAuthLoading && <Spinner />}
      <Section>
        <Container>
          <Title>Login</Title>
          <Row type="login-box">
            <LoginBody>
              <LoginForm />
              <Span>or</Span>
              <Row type="icon-box">
                <FaFacebook size={30} color=" #0ddbff" />
                <FaTwitter size={30} color=" #0995ad" />
                <FaGoogle size={30} color=" #ee291a" />
              </Row>
              <List>
                <ListItem>
                  Forget &nbsp;
                  <Navigation to="/username-find">
                    <Anchor>Username</Anchor>
                  </Navigation>
                  /
                  <Navigation to="/forget-password">
                    <Anchor> Password</Anchor>
                  </Navigation>
                </ListItem>
                <ListItem>
                  Don't have an account?
                  <Navigation to="/sign-up">
                    <Anchor>&nbsp;Sign Up</Anchor>
                  </Navigation>
                </ListItem>
              </List>
            </LoginBody>
          </Row>
        </Container>
      </Section>
    </>
  );
}

export default Login;
