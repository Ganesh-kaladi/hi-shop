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
import Spinner from "../components/spinner/Spinner";
import Arrange from "../components/navbar/Arrange";

const Container = styled.div`
  margin: auto;
  width: 80%;
  margin-top: 60px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top: 10px;
  gap: 22px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin-top: -10px;
  }

  ${(props) =>
    props.type === "product" &&
    css`
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 10px;

      @media (max-width: 480px) {
        grid-template-columns: 1fr 1fr;
      }
    `}
`;

function Products() {
  const dispatch = useDispatch();
  const { isPending, products, query } = useSelector(
    (state) => state.allProduct
  );
  const { width } = useSelector((state) => state.pageWidth);

  useEffect(
    function () {
      dispatch(getAllProducts());
    },
    [dispatch]
  );

  useEffect(
    function () {
      if (query === "") return;
      dispatch(getAllProductsBasedOnQuery(query));
    },
    [query, dispatch]
  );

  return (
    <>
      {isPending && <Spinner />}
      <Container>
        {width > 800 && <Category />}

        <Grid>
          {width > 800 && <AsideBar />}
          <div>
            <Grid type="product">
              {isPending === false && products === null && (
                <p>Check Youn internet connection</p>
              )}
              {products?.map((el) => (
                <Product key={el._id} product={el} id={el._id} />
              ))}
            </Grid>
          </div>
        </Grid>
      </Container>
      {width <= 800 && <Arrange />}
    </>
  );
}

export default Products;
