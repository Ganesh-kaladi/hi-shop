import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signinUser } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  margin-top: 120px;
`;

const Row = styled.div`
  display: flex;

  margin: 20px auto auto;
  width: 380px;
  flex-direction: column;
  border-radius: 4px;
  background-color: #ffffff;
`;

const Title = styled.h1`
  margin-bottom: 1.2rem;
  font-size: 1.8rem;
  background-color: aqua;
  padding: 1.4rem 2rem;
  text-align: center;
`;

export const Label = styled.label`
  margin-bottom: 0.9rem;
  font-size: 1.1rem;
  letter-spacing: 1px;
  padding: 0 2.5rem;
  font-size: 1.6rem;
`;

export const Input = styled.input`
  margin-bottom: 0.9rem;
  border: none;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 0.6rem;
  margin-bottom: 10px;
  margin-left: 2rem;
  margin-right: 2rem;
  outline: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  border: 1px solid rgb(124, 124, 124);
`;

const Button = styled.button`
  background-color: #d4d4d4;
  border: 1px solid rgb(124, 124, 124);
  padding: 0.6rem;
  margin-top: 1.6rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 26px;
  cursor: pointer;
  font-size: 1.4rem;
  transition: background-color 0.4s;
  margin-bottom: 1.6rem;

  &:hover {
    background-color: #3f3f3f;
    color: #fff;
  }
`;

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);

  useEffect(
    function () {
      const localToken = localStorage.getItem("token");
      if (!localToken) return;
      navigate("/");
    },
    [token, navigate]
  );

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
      <Row>
        <Title>Sing in</Title>
        <Label>username </Label>
        <Input
          type="text"
          required
          placeholder="Enter your name..."
          onChange={(e) => setName(e.target.value)}
        />
        <Label>Email </Label>
        <Input
          type="email"
          required
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>Password </Label>
        <Input
          type="password"
          required
          placeholder="Enter  password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label>Conform Password </Label>
        <Input
          type="password"
          required
          placeholder="Conform Password..."
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button onClick={handleSigninClick}>Sing in</Button>
      </Row>
    </Section>
  );
}

export default SignUp;
