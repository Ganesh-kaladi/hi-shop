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
import { getCartItems } from "../slice/cartSlice";

const Container = styled.div`
  margin: auto;
  width: 90%;
  margin-top: 56px;

  @media (max-width: 486px) {
    margin-top: 38px;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-top: 42px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 44px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 48px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 90%;
    margin-top: 52px;
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

function Products() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
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

  useEffect(function () {
    if (token) {
      dispatch(getCartItems(token));
    }
  }, []);

  return (
    <>
      {isPending && <Spinner />}
      <Container>
        {width > 769 && <Category />}

        <Grid>
          {width > 769 && <AsideBar />}
          <div>
            <ProductGrid type="product">
              {isPending === false && products === null && (
                <p>Check Youn internet connection</p>
              )}
              {products?.map((el) => (
                <Product key={el._id} product={el} id={el._id} />
              ))}
            </ProductGrid>
          </div>
        </Grid>
      </Container>
      {width <= 769 && <Arrange />}
    </>
  );
}

export default Products;
