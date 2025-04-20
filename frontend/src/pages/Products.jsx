import Category from "../components/navbar/Category";
import styled, { css } from "styled-components";
import Product from "../components/product/Product";

import AsideBar from "../components/navbar/AsideBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsBasedOnQuery,
} from "../slice/allProductSlice";
import { useLocation, useParams } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";

const Container = styled.div`
  margin: var(--container-margin);
  width: var(--container-width);
  margin-top: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top: 10px;
  gap: 22px;

  ${(props) =>
    props.type === "product" &&
    css`
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 10px;
    `}
`;

function Products() {
  const dispatch = useDispatch();
  const { isPending, products } = useSelector((state) => state.allProduct);
  useEffect(function () {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      {isPending && <Spinner />}
      <Container>
        <Category />
        <Grid>
          <AsideBar />
          <div>
            <Grid type="product">
              {products?.map((el) => (
                <Product key={el._id} product={el} id={el._id} />
              ))}
            </Grid>
          </div>
        </Grid>
      </Container>
    </>
  );
}

export default Products;
