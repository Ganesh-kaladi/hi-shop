import Category from "../components/navbar/Category";
import styled from "styled-components";
import Product from "../components/product/Product";

import AsideBar from "../components/navbar/AsideBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsBasedOnQuery,
} from "../slice/allProductSlice";
import { Loading } from "../components/spinner/Spinner";
import Arrange from "../components/navbar/Arrange";
import ErrorMessage from "../ErrorMessage";

const Container = styled.div`
  margin: auto;
  width: 90%;
  margin-top: 52px;
  margin-bottom: 4rem;
  min-height: 70vh;

  @media (max-width: 486px) {
    margin-top: 28px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-top: 34px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 40px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 44px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 90%;
    margin-top: 48px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top: 10px;
  gap: 22px;

  @media (max-width: 486px) {
    grid-template-columns: 1fr;
    margin-top: -10px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    grid-template-columns: 2fr 5fr;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;

  @media (max-width: 486px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const P = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  text-align: center;
  width: 100%;
  font-family: sans-serif;
  color: #2d2e30;
`;

function Products() {
  const dispatch = useDispatch();
  const { isPending, products, query, fecthing } = useSelector(
    (state) => state.allProduct
  );

  useEffect(
    function () {
      if (fecthing) {
        return;
      }
      dispatch(getAllProducts());
    },
    [dispatch, fecthing]
  );

  useEffect(
    function () {
      if (query === "") {
        dispatch(getAllProducts());
        return;
      }
      dispatch(getAllProductsBasedOnQuery(query));
    },
    [query, dispatch]
  );
  console.log(query);

  return (
    <>
      <Container>
        <Category />
        <Grid>
          <AsideBar />
          <div>
            {!isPending && (products === null || undefined) && <ErrorMessage />}
            {!isPending && products?.length <= 0 && (
              <P>No products based on your condition.</P>
            )}
            {isPending && <Loading />}
            <ProductGrid type="product">
              {!isPending &&
                products?.map((el) => (
                  <Product key={el._id} product={el} id={el._id} />
                ))}
            </ProductGrid>
          </div>
        </Grid>
      </Container>
      <Arrange />
    </>
  );
}

export default Products;
