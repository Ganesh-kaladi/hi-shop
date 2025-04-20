import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createProduct, removceProduct } from "../../slice/adminProductSlice";

const Container = styled.div`
  margin-top: 2rem;
  width: 90%;
  margin: auto;
`;

const FormContainer = styled.div`
  margin-top: 100px;
  width: 80%;
  margin: auto;
`;

const Form = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  height: 2.4rem;
  padding: 10px;
`;

const Button = styled.button`
  height: 2.4rem;
  padding: 10px;
`;

function AdminPRoduct() {
  const { token } = useSelector((state) => state.auth);
  const { product, isLoading } = useSelector((state) => state.adminProduct);
  const dispatch = useDispatch();

  const [file, setFile] = useState();
  const [multiValueField, setMultiValueField] = useState({
    highlights: "",
    size: "",
    color: "",
  });

  const [fields, setFields] = useState({
    title: "",
    description: "",
    stock: "",
    price: "",
    discountPrice: "",
    category: "",
    ratings: "",
    productCollection: "",
  });

  function handleMultiValueField(e) {
    setMultiValueField({
      ...multiValueField,
      [e.target.name]: e.target.value.split(","),
    });
  }

  function handleFieldValue(e) {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }

  function appendArrayToFormData(formData, key, value) {
    const values = Array.isArray(value) ? value : [value];
    values.forEach((val) => formData.append(key, val));
  }

  async function handleSubmit() {
    const formData = new FormData();

    formData.append("title", fields.title);
    formData.append("description", fields.description);
    formData.append("stock", fields.stock);
    formData.append("price", fields.price);
    formData.append("category", fields.category);
    formData.append("ratings", fields.ratings);
    formData.append("productCollection", fields.productCollection);
    formData.append("image", file);
    formData.append("discountPrice", fields.discountPrice);

    appendArrayToFormData(formData, "color", multiValueField.color);
    appendArrayToFormData(formData, "size", multiValueField.size);
    appendArrayToFormData(formData, "highlights", multiValueField.highlights);

    dispatch(createProduct({ formData, token }));
  }

  useEffect(
    function () {
      if (!product) return;
      alert("product saved");
      dispatch(removceProduct());
      setFields({
        title: "",
        description: "",
        stock: "",
        price: "",
        discountPrice: "",
        category: "",
        ratings: "",
        productCollection: "",
      });
      setMultiValueField({
        highlights: "",
        size: "",
        color: "",
      });
    },
    [product, fields, multiValueField, file, dispatch]
  );

  return (
    <Container>
      <FormContainer>
        <Form handleSubmit>
          <Input
            value={fields.title}
            type="text"
            placeholder="title"
            name="title"
            onChange={handleFieldValue}
          />
          <Input
            value={multiValueField.highlights}
            type="text"
            placeholder="highlights"
            name="highlights"
            onChange={handleMultiValueField}
          />
          <Input
            value={fields.description}
            type="text"
            placeholder="description"
            name="description"
            onChange={handleFieldValue}
          />
          <Input
            value={fields.stock}
            type="number"
            placeholder="stock"
            name="stock"
            onChange={handleFieldValue}
          />
          <Input
            value={fields.price}
            type="number"
            placeholder="price"
            name="price"
            onChange={handleFieldValue}
          />
          <Input
            value={fields.discountPrice}
            type="number"
            placeholder="discountPrice"
            name="discountPrice"
            onChange={handleFieldValue}
          />
          <Input
            value={fields.category}
            type="text"
            placeholder="category"
            name="category"
            onChange={handleFieldValue}
          />
          <Input
            value={multiValueField.color}
            type="text"
            placeholder="color"
            name="color"
            onChange={handleMultiValueField}
          />
          <Input
            value={multiValueField.size}
            type="text"
            placeholder="size"
            name="size"
            onChange={handleMultiValueField}
          />
          <Input
            value={fields.ratings}
            type="text"
            placeholder="ratings"
            name="ratings"
            onChange={handleFieldValue}
          />
          <Input
            value={fields.productCollection}
            type="text"
            placeholder="productCollection"
            name="productCollection"
            onChange={handleFieldValue}
          />
          <Input
            type="file"
            placeholder="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <Button onClick={handleSubmit}>
            {isLoading ? "creating..." : "submit"}
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default AdminPRoduct;
