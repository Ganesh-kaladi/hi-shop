import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAuth, loginUser } from "../../slice/authSlice";
import { useNavigate } from "react-router-dom";
import { removeCartError } from "../../slice/cartSlice";
import { removeOrderError } from "../../slice/orderSlice";
import { toast } from "react-toastify";

const FormContainer = styled.div`
  width: 100%;
  margin-bottom: 0.7rem;
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
  margin-bottom: 0.7rem;
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
  transition: box-shadow 0.3s;
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
  background-color: unset;
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

const P = styled.p`
  color: red;
  font-family: sans-serif;
  font-size: 0.8rem;
  margin-left: 6px;
  margin-bottom: 6px;
`;

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errMessage, setErrMessage] = useState({});

  const { token, authError } = useSelector((state) => state.auth);
  const { cartError } = useSelector((state) => state.cart);
  const { orderError } = useSelector((state) => state.order);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!token) {
        return;
      }
      navigate("/products");
    },
    [token, navigate]
  );

  useDispatch(
    function () {
      if (cartError === "TokenExpiredError") {
        dispatch(removeCartError());
      }
      if (orderError === "TokenExpiredError") {
        dispatch(removeOrderError());
      }
    },
    [dispatch, cartError, orderError]
  );

  useEffect(
    function () {
      if (authError) {
        toast.error(authError);
        dispatch(clearAuth());
      }
    },
    [authError, dispatch]
  );

  function handleInputValue(e) {
    const { name, value } = e.target;
    setFormData((cur) => ({ ...cur, [name]: value }));
  }

  function validate() {
    let errObj = {};
    if (formData.email === "")
      errObj.emailErr = "enter your registered email address";
    if (formData.password === "") errObj.passwordErr = "enter your password";

    return errObj;
  }

  function handleLoginClick() {
    const errMsg = validate();
    if (Object.keys(errMsg).length > 0) {
      setErrMessage(errMsg);
      return;
    }
    dispatch(loginUser({ email: formData.email, password: formData.password }));
  }

  return (
    <FormContainer>
      <Label>user name</Label>
      <Input
        name="email"
        type="email"
        placeholder="Enter Your User Name..."
        onChange={handleInputValue}
      />
      {errMessage.emailErr && <P>{errMessage.emailErr}</P>}
      <Label>password</Label>
      <Input
        name="password"
        type="password"
        placeholder="Enter Your User Password..."
        onChange={handleInputValue}
      />
      {errMessage.passwordErr && <P>{errMessage.passwordErr}</P>}
      <Button onClick={handleLoginClick}>login</Button>
    </FormContainer>
  );
}

export default LoginForm;
