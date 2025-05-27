import styled from "styled-components";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import { useSelector } from "react-redux";
import Spinner from "../components/spinner/Spinner";

const Section = styled.section`
  height: 74vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 360px;
  /* height: 74%; */
  margin: 0 auto;
  background-color: #f3f3f3;
  border-radius: 1rem;
  box-shadow: 0px 0px 12px 1px #47474758;

  @media (max-width: 486px) {
    width: 340px;
  }
`;

const Title = styled.h1`
  font-size: 1.1333rem;
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
  padding: 1rem 1.6rem;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

const LoginBody = styled.div`
  width: 100%;
`;

const Span = styled.span`
  display: block;
  width: 100%;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 0.6rem;
`;

const IconBocRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 0.6rem;
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
          <Row>
            <LoginBody>
              <LoginForm />
              <Span>or</Span>
              <IconBocRow>
                <FaFacebook size={30} color=" #0ddbff" />
                <FaTwitter size={30} color=" #0995ad" />
                <FaGoogle size={30} color=" #ee291a" />
              </IconBocRow>
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
