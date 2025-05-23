import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  useCollectionFields,
  useDiscountFields,
  usePriceFields,
  useQueryFields,
  useQueryString,
  useSortFields,
} from "../../assets/logics/advanceFiltering";
import { addQuery } from "../../slice/allProductSlice";
import { useDispatch } from "react-redux";

const ArrangeDiv = styled.div`
  position: fixed;
  bottom: 0px;
  background-color: #555353;
  width: 100%;
  height: 3rem;
  display: none;

  @media (max-width: 486px) {
    display: block;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    display: block;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    display: block;
  }
`;
const ArrangeBlock = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
`;

const Filter = styled.div`
  flex-basis: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 4px;
  background: unset;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const DynamicFliter = styled.div`
  position: fixed;
  background-color: #8585856e;
  height: 100vh;
  width: 100%;
  bottom: 3rem;
  z-index: 10;
`;

const DynamicFliterContainer = styled.div`
  height: 70%;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background-color: #ffffff;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

const DynamicFliterBox = styled.div`
  height: 100%;
  padding: 2rem;
  display: flex;
`;

const DynamicFliterrName = styled.div`
  padding: 2rem;
  flex: 0 0 34%;
  min-width: 0;
  overflow: hidden;
  background-color: #dad9d9;
`;
const DynamicFliterrContent = styled.div`
  padding: 2rem;
  flex: 0 0 66%;
  min-width: 0;
  overflow: hidden;
  background-color: #f3f3f3;
`;

const List = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  margin-bottom: 12px;
  font-size: 1.1rem;
  color: #303030;
  border-radius: 0.2rem;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
`;

const FliterNameList = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const FliterNameListItem = styled.li`
  padding-bottom: 8px;
  padding-left: 2px;
  color: #292b2c;
  border-bottom: 1px solid #504b4b;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
`;

const Input = styled.input`
  font-size: 1.1rem;
`;

const Label = styled.label`
  font-size: 1.1rem;
  padding-left: 8px;
`;

const Select = styled.select`
  width: 100%;
  appearance: none;
  padding: 3px 4px;
  list-style: none;
  border-radius: 2px;
  outline: none;
  text-align: center;
  letter-spacing: 1px;
  font-family: "Gabarito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 0.8rem;

  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
  padding: 14px 18px;
`;

function Arrange() {
  const dispatch = useDispatch();

  const { collectionField, handleCollectionClick } = useCollectionFields();
  const { priceField, handlePriceClick } = usePriceFields();
  const { discountField, handleDiscountClick } = useDiscountFields();
  const { sortFields, handleSortFields } = useSortFields();
  const { handleQueryCategory } = useQueryFields();

  const queryFields = useQueryString(
    collectionField,
    priceField,
    discountField,
    sortFields
  );

  useEffect(
    function () {
      if (queryFields === "") return;
      const fields = `${queryFields}`;
      dispatch(addQuery({ fields }));
    },
    [dispatch, queryFields]
  );

  const [isClick, setIsClick] = useState({
    filter: false,
    sort: false,
    category: false,
  });

  const [fliterName, setFlterName] = useState({
    collection: true,
    price: false,
    discount: false,
  });

  function handleArrangeElements(e) {
    const { name } = e.target;
    if (name === "filter") {
      setIsClick((cur) => ({
        ...cur,
        category: false,
        sort: false,
        [name]: !cur[name],
      }));
    }
    if (name === "category") {
      setIsClick((cur) => ({
        ...cur,
        filter: false,
        sort: false,
        [name]: !cur[name],
      }));
    }
    if (name === "sort") {
      setIsClick((cur) => ({
        ...cur,
        filter: false,
        category: false,
        [name]: !cur[name],
      }));
    }
  }

  function handleFilterName(name) {
    if (name === "collection") {
      setFlterName((cur) => ({
        ...cur,
        price: false,
        discount: false,
        [name]: !cur[name],
      }));
    }
    if (name === "price") {
      setFlterName((cur) => ({
        ...cur,
        discount: false,
        collection: false,
        [name]: !cur[name],
      }));
    }
    if (name === "discount") {
      setFlterName((cur) => ({
        ...cur,
        collection: false,
        price: false,
        [name]: !cur[name],
      }));
    }
  }

  function handleAllFCSFields() {
    setIsClick({ ...isClick, filter: false, sort: false, category: false });
  }

  return (
    <>
      <ArrangeDiv>
        <ArrangeBlock>
          <Filter>
            <Button
              bool={isClick.filter}
              name="filter"
              onClick={handleArrangeElements}
            >
              filter
            </Button>
          </Filter>
          <Filter>
            <Button
              bool={isClick.category}
              name="category"
              onClick={handleArrangeElements}
            >
              Category
            </Button>
          </Filter>
          <Filter>
            <Button
              bool={isClick.sort}
              name="sort"
              onClick={handleArrangeElements}
            >
              Sort
            </Button>
          </Filter>
        </ArrangeBlock>
      </ArrangeDiv>
      {isClick.category && (
        <DynamicFliter>
          <DynamicFliterContainer>
            <DynamicFliterBox>
              <DynamicFliterrName>
                <FliterNameList>
                  <FliterNameListItem>Category</FliterNameListItem>
                </FliterNameList>
              </DynamicFliterrName>
              <DynamicFliterrContent>
                <List>
                  <ListItem
                    onClick={() => {
                      handleQueryCategory("topware");
                      handleAllFCSFields();
                    }}
                  >
                    topware
                  </ListItem>
                  <ListItem
                    onClick={() => {
                      handleQueryCategory("bottomware");
                      handleAllFCSFields();
                    }}
                  >
                    bottomware
                  </ListItem>
                  <ListItem
                    onClick={() => {
                      handleQueryCategory("jeans");
                      handleAllFCSFields();
                    }}
                  >
                    jeans
                  </ListItem>
                  <ListItem
                    onClick={() => {
                      handleQueryCategory("shorts");
                      handleAllFCSFields();
                    }}
                  >
                    shorts
                  </ListItem>
                  <ListItem
                    onClick={() => {
                      handleQueryCategory("t-shirts");
                      handleAllFCSFields();
                    }}
                  >
                    t-shirts
                  </ListItem>
                  <ListItem
                    onClick={() => {
                      handleQueryCategory("footware");
                      handleAllFCSFields();
                    }}
                  >
                    footware
                  </ListItem>
                  <ListItem
                    onClick={() => {
                      handleQueryCategory("accessories");
                      handleAllFCSFields();
                    }}
                  >
                    accessories
                  </ListItem>
                </List>
              </DynamicFliterrContent>
            </DynamicFliterBox>
          </DynamicFliterContainer>
        </DynamicFliter>
      )}
      {isClick.filter && (
        <DynamicFliter>
          <DynamicFliterContainer>
            <DynamicFliterBox>
              <DynamicFliterrName>
                <FliterNameList>
                  <FliterNameListItem
                    onClick={() => handleFilterName("collection")}
                  >
                    Collection
                  </FliterNameListItem>
                  <FliterNameListItem onClick={() => handleFilterName("price")}>
                    price
                  </FliterNameListItem>
                  <FliterNameListItem
                    onClick={() => handleFilterName("discount")}
                  >
                    Discount
                  </FliterNameListItem>
                </FliterNameList>
              </DynamicFliterrName>
              <DynamicFliterrContent>
                {fliterName.collection && (
                  <List>
                    <ListItem>
                      <Input
                        id="menCollection"
                        type="checkbox"
                        value="productCollection=men"
                        name="menCollection"
                        checked={collectionField.menChecked}
                        onChange={handleCollectionClick}
                        onClick={() => {
                          if (collectionField.menChecked === false) return;
                          handleAllFCSFields();
                        }}
                      />
                      <Label htmlFor="menCollection">Men</Label>
                    </ListItem>
                    <ListItem>
                      <Input
                        id="womenCollection"
                        type="checkbox"
                        value="productCollection=women"
                        name="womenCollection"
                        checked={collectionField.womenChecked}
                        onChange={handleCollectionClick}
                        onClick={() => {
                          if (collectionField.womenChecked === false) return;
                          handleAllFCSFields();
                        }}
                      />
                      <Label htmlFor="womenCollection">Women</Label>
                    </ListItem>
                  </List>
                )}
                {fliterName.price && (
                  <List>
                    <ListItem>
                      <Input
                        id="price[lt]=30"
                        type="checkbox"
                        value="price[lt]=30"
                        name="price[lt]=30"
                        checked={priceField.below_30}
                        onChange={handlePriceClick}
                        onClick={() => {
                          if (priceField.below_30 === false) return;
                          handleAllFCSFields();
                        }}
                      />
                      <Label htmlFor="price[lt]=30">Below Rs.30/-</Label>
                    </ListItem>
                    <ListItem>
                      <Input
                        id="gte-31"
                        type="checkbox"
                        value="price[gte]=31&price[lte]=50"
                        name="between-31-and-50"
                        checked={priceField.between_31_50}
                        onChange={handlePriceClick}
                        onClick={() => {
                          if (priceField.between_31_50 === false) return;
                          handleAllFCSFields();
                        }}
                      />
                      <Label htmlFor="gte-31">Rs.31-50/-</Label>
                    </ListItem>
                    <ListItem>
                      <Input
                        id="gte-51"
                        type="checkbox"
                        value="price[gte]=51&price[lte]=70"
                        name="between-51-and-70"
                        checked={priceField.between_51_70}
                        onChange={handlePriceClick}
                        onClick={() => {
                          if (priceField.between_51_70 === false) return;
                          handleAllFCSFields();
                        }}
                      />
                      <Label htmlFor="gte-51">Rs.51-70/-</Label>
                    </ListItem>
                    <ListItem>
                      <Input
                        id="gte-71"
                        type="checkbox"
                        value="price[gte]=71&price[lte]=100"
                        name="between-71-and-100"
                        checked={priceField.between_71_100}
                        onChange={handlePriceClick}
                        onClick={() => {
                          if (priceField.between_71_100 === false) return;
                          handleAllFCSFields();
                        }}
                      />
                      <Label htmlFor="gte-71">Rs.71-100/-</Label>
                    </ListItem>
                    <ListItem>
                      <Input
                        id="gte-101"
                        type="checkbox"
                        value="price[gte]=101"
                        name="between-101+"
                        checked={priceField.between_101}
                        onChange={handlePriceClick}
                        onClick={() => {
                          if (priceField.between_101 === false) return;
                          handleAllFCSFields();
                        }}
                      />
                      <Label htmlFor="gte-101">Rs.101/-</Label>
                    </ListItem>
                  </List>
                )}
                {fliterName.discount && (
                  <List>
                    <ListItem>
                      <Input
                        id="per-lte-10"
                        type="checkbox"
                        value="percentage[lte]=10"
                        name="per-lte-10"
                        checked={discountField.per_lte_10}
                        onChange={handleDiscountClick}
                        onClick={() => {
                          if (discountField.per_lte_10 === false) return;
                          handleAllFCSFields();
                        }}
                      />
                      <Label htmlFor="per-lte-10">0-10%</Label>
                    </ListItem>
                    <ListItem>
                      <Input
                        id="per-gte-21"
                        type="checkbox"
                        value="percentage[gte]=21&percentage[lte]=40"
                        name="per-gte-21"
                        checked={discountField.per_gte_21}
                        onChange={handleDiscountClick}
                        onClick={() => {
                          if (discountField.per_gte_21 === false) return;
                          handleAllFCSFields();
                        }}
                      />
                      <Label htmlFor="per-gte-21">21-40%</Label>
                    </ListItem>
                    <ListItem>
                      <Input
                        id="per-gte-41"
                        type="checkbox"
                        value="percentage[gte]=41&percentage[lte]=50"
                        name="per-gte-41"
                        checked={discountField.per_gte_41}
                        onChange={handleDiscountClick}
                        onClick={() => {
                          if (discountField.per_gte_41 === false) return;
                          handleAllFCSFields();
                        }}
                      />
                      <Label htmlFor="per-gte-41">41-50%</Label>
                    </ListItem>
                    <ListItem>
                      <Input
                        id="per-gte-51"
                        type="checkbox"
                        value="percentage[gte]=51"
                        name="per-gte-51"
                        checked={discountField.per_gte_51}
                        onChange={handleDiscountClick}
                        onClick={() => {
                          if (discountField.per_gte_51 === false) return;
                          handleAllFCSFields();
                        }}
                      />
                      <Label htmlFor="per-gte-51">51-80%</Label>
                    </ListItem>
                  </List>
                )}
              </DynamicFliterrContent>
            </DynamicFliterBox>
          </DynamicFliterContainer>
        </DynamicFliter>
      )}
      {isClick.sort && (
        <DynamicFliter>
          <DynamicFliterContainer>
            <DynamicFliterBox>
              <DynamicFliterrName>
                <FliterNameList>
                  <FliterNameListItem>sort</FliterNameListItem>
                </FliterNameList>
              </DynamicFliterrName>
              <DynamicFliterrContent>
                <Select
                  value={sortFields.sortFieldValue}
                  onChange={handleSortFields}
                  name="sort_ratings"
                >
                  <Option value="">--select--</Option>
                  <Option value="ratings">ratings low to high</Option>
                  <Option value="-ratings">ratings high to low</Option>
                  <Option value="price">price low to high</Option>
                  <Option value="-price">price high to low</Option>
                  <Option value="percentage">discount low to high</Option>
                  <Option value="-percentage">discount high to low</Option>
                </Select>
              </DynamicFliterrContent>
            </DynamicFliterBox>
          </DynamicFliterContainer>
        </DynamicFliter>
      )}
    </>
  );
}

export default Arrange;
