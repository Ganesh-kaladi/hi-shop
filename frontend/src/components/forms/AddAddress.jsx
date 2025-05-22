import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { addUserAddress, getUserAddress } from "../../slice/authSlice";

const FormContainer = styled.div`
  width: 520px;
  padding: 1rem;
  border: 1px solid #b1abab88;
  margin-bottom: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 12px rgba(129, 126, 126, 0.322);

  @media (max-width: 486px) {
    width: 100%;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    width: 100%;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    width: 100%;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormName = styled.div`
  display: flex;
  gap: 20px;
`;

const FormNameGroup = styled.div`
  flex: 1;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.4rem;

  ${(prop) =>
    prop.typ === "name" &&
    css`
      font-size: 14px;
    `}
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;

  ${(prop) =>
    prop.typ === "name" &&
    css`
      /* Applies only to name fields if needed */
    `}
`;

const Button = styled.button`
  display: block;
  margin-left: auto;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

function AddAddress() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    landmark: "",
    city: "",
    pincode: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const address = formData;
      console.log("Form Data:", { address });
      await dispatch(addUserAddress({ data: { address }, token }));
      dispatch(getUserAddress(token));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormName>
            <FormNameGroup>
              <Label htmlFor="firstName" typ="name">
                First Name
              </Label>
              <Input
                typ="name"
                id="firstName"
                type="text"
                name="firstName"
                onChange={handleChange}
                required
              />
            </FormNameGroup>
            <FormNameGroup>
              <Label htmlFor="lastName" typ="name">
                Last Name
              </Label>
              <Input
                typ="name"
                id="lastName"
                type="text"
                name="lastName"
                onChange={handleChange}
                required
              />
            </FormNameGroup>
          </FormName>
        </FormGroup>

        {["street", "landmark", "city", "pincode", "phone"].map((field) => (
          <FormGroup key={field}>
            <Label htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </Label>
            <Input
              id={field}
              type="text"
              name={field}
              onChange={handleChange}
              required
            />
          </FormGroup>
        ))}

        <Button type="submit">add</Button>
      </form>
    </FormContainer>
  );
}

export default AddAddress;
