import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../slice/authSlice";
import { useNavigate } from "react-router-dom";

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
  background-color: white;
  border: 1px solid rgb(124, 124, 124);
  padding: 0.6rem;
  margin-top: 1.6rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 26px;
  cursor: pointer;
  font-size: 1.4rem;
  transition: background-color 0.4s;

  &:hover {
    background-color: #dfdada;
  }
`;

function LoginForm() {
  const [email, setEmail] = useState("user-5@gmail.com");
  const [password, setPassword] = useState("test1234");

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(
    function () {
      const localToken = localStorage.getItem("token");
      if (!localToken) return;
      navigate("/");
    },
    [token, navigate]
  );

  function handleLoginClick() {
    dispatch(loginUser({ email, password }));
  }

  return (
    <>
      <Label>User Name</Label>
      <Input
        value={email}
        type="email"
        placeholder="Enter Your User Name..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <Label>Password</Label>
      <Input
        value={password}
        type="password"
        placeholder="Enter Your User Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLoginClick}>Login</Button>
    </>
  );
}

export default LoginForm;
