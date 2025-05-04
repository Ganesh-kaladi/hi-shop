import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addQuery } from "../../slice/allProductSlice";
import {
  useCollectionFields,
  useDiscountFields,
  usePriceFields,
  useQueryString,
  useSortFields,
} from "../../assets/logics/advanceFiltering";

const AsideContainer = styled.aside`
  background-color: #fff;
  border-radius: 16px;
  border: 1px solid #948e8e89;
`;

const Heading1 = styled.h1`
  text-align: center;
  padding: 12px 10px;
  background-color: #a5c9e0;
  color: #2e2d2d;
  letter-spacing: 1px;
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top: 4px solid #557deb;
`;

const InputBox = styled.div`
  padding: 14px 18px;
`;

const InputContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
`;

const Heading5 = styled.h6`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 0.9rem;
`;

const List = styled.ul`
  list-style: none;
  margin-top: 16px;
  margin-top: 0px;
`;
const ListItem = styled.li`
  margin-top: 10px;
  margin-left: 22px;
`;

const Input = styled.input`
  cursor: pointer;
  margin-right: 12px;
`;

const Label = styled.label`
  cursor: pointer;
  letter-spacing: 1px;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 0.8rem;
`;

const SortingContainer = styled.div`
  margin-top: 18px;
`;

const Heading6 = styled.h6`
  font-size: 0.9rem;
  margin-bottom: 6px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
`;

const SortList = styled.div`
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Select = styled.select`
  flex-basis: 60%;
  width: 100%;
  appearance: none;
  padding: 3px 4px;
  list-style: none;
  border-radius: 2px;
  outline: none;
  text-align: center;
  letter-spacing: 1px;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 0.8rem;

  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
  padding: 14px 18px;
`;

function AsideBar() {
  const dispatch = useDispatch();

  const { collectionField, handleCollectionClick } = useCollectionFields();
  const { priceField, handlePriceClick } = usePriceFields();
  const { discountField, handleDiscountClick } = useDiscountFields();
  const { sortFields, handleSortFields } = useSortFields();

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

  return (
    <aside>
      <AsideContainer>
        <Heading1>Heading</Heading1>
        <InputBox>
          <InputContainer>
            <Heading5>Collection</Heading5>
            <List>
              <ListItem>
                <Input
                  id="menCollection"
                  type="checkbox"
                  value="productCollection=men"
                  name="menCollection"
                  checked={collectionField.menChecked}
                  onChange={handleCollectionClick}
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
                />
                <Label htmlFor="womenCollection">Women</Label>
              </ListItem>
            </List>
          </InputContainer>
          <InputContainer>
            <Heading5>Price</Heading5>
            <List>
              <ListItem>
                <Input
                  id="price[lt]=30"
                  type="checkbox"
                  value="price[lt]=30"
                  name="price[lt]=30"
                  checked={priceField.below_30}
                  onChange={handlePriceClick}
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
                />
                <Label htmlFor="gte-101">Rs.101/-</Label>
              </ListItem>
            </List>
          </InputContainer>
          <InputContainer>
            <Heading5>Price</Heading5>
            <List>
              <ListItem>
                <Input
                  id="per-lte-10"
                  type="checkbox"
                  value="percentage[lte]=10"
                  name="per-lte-10"
                  checked={discountField.per_lte_10}
                  onChange={handleDiscountClick}
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
                />
                <Label htmlFor="per-gte-51">51-80%</Label>
              </ListItem>
            </List>
          </InputContainer>

          <SortingContainer>
            <Heading6>Sorting</Heading6>
            <SortList>
              <Select onChange={handleSortFields} name="sort_ratings">
                <Option value="">--select--</Option>
                <Option value="ratings">ratings low to high</Option>
                <Option value="-ratings">ratings high to low</Option>
                <Option value="price">price low to high</Option>
                <Option value="-price">price high to low</Option>
                <Option value="percentage">discount low to high</Option>
                <Option value="-percentage">discount high to low</Option>
              </Select>
            </SortList>
          </SortingContainer>
        </InputBox>
      </AsideContainer>
    </aside>
  );
}

export default AsideBar;
