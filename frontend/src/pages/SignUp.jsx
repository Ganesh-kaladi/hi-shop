import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAuth, signinUser } from "../slice/authSlice";
import { toast } from "react-toastify";

const Section = styled.section`
  margin-top: 56px;

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

const Form = styled.form`
  padding: 2rem 3rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin-bottom: 0.4rem;
  position: relative;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  background-color: #8f8f8f;
  color: #ffffff;
  padding: 0.9rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 0.2rem;
  letter-spacing: 1px;
  font-size: 1rem;
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

const P = styled.p`
  letter-spacing: 1px;
  width: 100%;
  font-family: sans-serif;
  position: absolute;
  top: 45%;
  left: 120%;
  color: red;
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
  const { authValidationError } = useSelector((state) => state.auth);
  console.log(authValidationError);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errMessage, setErrMessage] = useState({});

  const dispatch = useDispatch();

  function handleFormData(e) {
    const { name, value } = e.target;
    setFormData((cur) => ({ ...cur, [name]: value }));
  }

  function validateFields() {
    let errMsg = {};
    if (formData.name === "") errMsg.nameErr = "name is required";
    if (formData.email === "") errMsg.emailErr = "email is required";
    if (formData.password === "") errMsg.passwordErr = "password is required";
    if (formData.confirmPassword === "")
      errMsg.confirmPasswordErr = "confirm password is required";
    if (formData.password !== formData.confirmPassword) {
      errMsg.passwordErr = "password and confirm password is not matching";
      errMsg.confirmPasswordErr =
        "password and confirm password is not matching";
    }

    return errMsg;
  }

  function handleSigninClick(e) {
    e.preventDefault();
    const errObj = validateFields();
    if (Object.keys(errObj).length > 0) {
      setErrMessage(errObj);
      return;
    }
    setErrMessage({});
    console.log(formData);
    dispatch(
      signinUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      })
    );
  }

  useEffect(
    function () {
      let serverErr = {};
      if (
        authValidationError?.length > 0 &&
        authValidationError[0] === "Invalid input data"
      ) {
        authValidationError.forEach((el) => {
          const err = el.trim().toLowerCase();
          if (err.includes("email")) {
            serverErr.emailErr = el;
          } else if (err.includes("password")) {
            serverErr.passwordErr = el;
          } else if (err.includes("confirmPassword")) {
            serverErr.confirmPasswordErr = el;
          } else if (err.includes("name")) {
            serverErr.nameErr = el;
          }
        });
        toast.error(authValidationError[0].trim());
        setErrMessage(serverErr);
      }

      if (
        authValidationError?.length > 0 &&
        authValidationError[0].includes("Duplicate field value")
      ) {
        toast.error("email address already registered");
        dispatch(clearAuth());
      }
    },
    [authValidationError]
  );

  return (
    <Section>
      <Container>
        <Title>Sing in</Title>
        <Form onSubmit={handleSigninClick} noValidate>
          <Row>
            <Label>user name </Label>
            <Input
              type="text"
              name="name"
              required
              placeholder="Enter your name..."
              onChange={handleFormData}
            />
            <P>{errMessage.nameErr && errMessage.nameErr}</P>
          </Row>
          <Row>
            <Label>email </Label>
            <Input
              type="email"
              name="email"
              required
              placeholder="Enter your email..."
              onChange={handleFormData}
            />
            <P>{errMessage.emailErr && errMessage.emailErr}</P>
          </Row>
          <Row>
            <Label>password </Label>
            <Input
              type="password"
              name="password"
              required
              placeholder="Enter  password..."
              onChange={handleFormData}
            />
            <P>{errMessage.passwordErr && errMessage.passwordErr}</P>
          </Row>
          <Row>
            <Label>conform password </Label>
            <Input
              type="password"
              name="confirmPassword"
              required
              placeholder="Conform Password..."
              onChange={handleFormData}
            />
            <P>
              {errMessage.confirmPasswordErr && errMessage.confirmPasswordErr}
            </P>
          </Row>
          <Button>Sing in</Button>
        </Form>
      </Container>
    </Section>
  );
}

export default SignUp;
