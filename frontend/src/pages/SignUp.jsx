import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signinUser } from "../slice/authSlice";

const Section = styled.section`
  margin-top: 60px;
`;

const Container = styled.div`
  width: 420px;
  margin: 0 auto;
  background-color: #ced9db65;
`;

const Row = styled.div`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #e9e9e996;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  background-color: #5a8383;
  color: #ffffff;
  padding: 1.2rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 0.2rem;
  letter-spacing: 1px;
  font-size: 1.1rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  padding-left: 7px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 0.9rem;
  border: none;
  outline: none;
  background-color: #f8f9fa;
  border: 1px solid #bfc9ca;
  color: #2c3e50;
  border-radius: 20px;
  padding: 0.6rem 0.6rem 0.6rem 1rem;
  outline: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: all 0.4s;

  &:hover,
  &:active {
    box-shadow: 0 0px 4px 1px rgba(150, 224, 224, 0.9);
  }
  &:focus {
    box-shadow: 0 0px 4px 1px rgba(150, 224, 224, 0.9);
  }
`;

const Button = styled.button`
  width: 100%;
  border: 1px solid #0995ad;
  background-color: #f8f9fa;
  color: #0995ad;
  margin-top: 1.6rem;
  border-radius: 26px;
  padding: 6px 0px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.4s;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  transition: box-shadow 0.3s;
  transition: all 0.4s;

  &:hover {
    background-color: #0995ad;
    color: #122529;
    box-shadow: 0 0px 4px 1px rgba(243, 252, 252, 0.9);
  }
`;

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  function handleSigninClick() {
    if (password !== confirmPassword) return alert("passwords are not match");
    dispatch(signinUser({ name, email, password, confirmPassword }));
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <Section>
      <Container>
        <Title>Sing in</Title>
        <Row>
          <Label>user name </Label>
          <Input
            type="text"
            required
            placeholder="Enter your name..."
            onChange={(e) => setName(e.target.value)}
          />
          <Label>email </Label>
          <Input
            type="email"
            required
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>password </Label>
          <Input
            type="password"
            required
            placeholder="Enter  password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label>conform password </Label>
          <Input
            type="password"
            required
            placeholder="Conform Password..."
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button onClick={handleSigninClick}>Sing in</Button>
        </Row>
      </Container>
    </Section>
  );
}

export default SignUp;
