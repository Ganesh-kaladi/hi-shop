import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { addQuery } from "../../slice/allProductSlice";

const Input = styled.input`
  cursor: pointer;
  margin-right: 12px;
`;

const Label = styled.label`
  cursor: pointer;
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
const Span = styled.span`
  margin-right: 12px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  background-color: var(--color-grey-0);
  padding: 10px 12px;
  cursor: pointer;

  ${(prop) =>
    prop.type === true &&
    css`
      border: 1px solid var(--color-grey-200);
    `}
`;

function AsideBar() {
  // const [sortBy, setSortBy] = useState([]);
  // const [isClicked, setIsClicked] = useState({
  //   0: true,
  //   1: true,
  //   2: true,
  //   3: false,
  //   4: false,
  //   5: false,
  //   6: false,
  //   7: false,
  // })
  // function handleChechBox(index) {
  //   setIsClicked((prop) => ({
  //     ...prop,
  //     [index]: !prop[index],
  //   }));
  // }

  const dispatch = useDispatch();

  const [collectionField, setCollectionField] = useState({
    productCollection: "",
    menChecked: false,
    womenChecked: false,
  });

  const [priceField, setPriceField] = useState({
    price: "",
    below_30: false,
    between_31_50: false,
    between_51_70: false,
    between_71_100: false,
    between_101: false,
  });

  function handleCollectionClick(e) {
    const { name, value, checked } = e.target;

    if (name === "menCollection") {
      setCollectionField(
        checked
          ? {
              ...collectionField,
              productCollection: value,
              menChecked: true,
              womenChecked: false,
            }
          : { ...collectionField, productCollection: "", menChecked: false }
      );
    }

    if (name === "womenCollection") {
      setCollectionField(
        checked
          ? {
              ...collectionField,
              productCollection: value,
              menChecked: false,
              womenChecked: true,
            }
          : { ...collectionField, productCollection: "", womenChecked: false }
      );
    }
  }

  function handlePriceClick(e) {
    const { name, value, checked } = e.target;
    if (name === "price[lt]=30") {
      setPriceField(
        checked
          ? {
              ...priceField,
              price: value,
              below_30: true,
              between_31_50: false,
              between_51_70: false,
              between_71_100: false,
              between_101: false,
            }
          : { ...priceField, price: "", below_30: false }
      );
    }

    if (name === "between-31-and-50") {
      setPriceField(
        checked
          ? {
              ...priceField,
              price: value,
              below_30: false,
              between_31_50: true,
              between_51_70: false,
              between_71_100: false,
              between_101: false,
            }
          : { ...priceField, price: "", between_31_50: false }
      );
    }

    if (name === "between-51-and-70") {
      setPriceField(
        checked
          ? {
              ...priceField,
              price: value,
              below_30: false,
              between_31_50: false,
              between_51_70: true,
              between_71_100: false,
              between_101: false,
            }
          : { ...priceField, price: "", between_51_70: false }
      );
    }

    if (name === "between-71-and-100") {
      setPriceField(
        checked
          ? {
              ...priceField,
              price: value,
              below_30: false,
              between_31_50: false,
              between_51_70: false,
              between_71_100: true,
              between_101: false,
            }
          : { ...priceField, price: "", between_71_100: false }
      );
    }

    if (name === "between-101+") {
      setPriceField(
        checked
          ? {
              ...priceField,
              price: value,
              below_30: false,
              between_31_50: false,
              between_51_70: false,
              between_71_100: false,
              between_101: true,
            }
          : { ...priceField, price: "", between_101: false }
      );
    }
  }

  let fields = "";
  if (!(collectionField.productCollection === "")) {
    fields = fields + collectionField.productCollection;
  }

  if (!(priceField.price === "")) {
    fields = `${fields}&${priceField.price}`;
  }

  console.log(fields);

  useEffect(
    function () {
      if (collectionField.productCollection === "") return;
      const fields = `${collectionField.productCollection}`;
      dispatch(addQuery({ fields }));
    },
    [collectionField, dispatch]
  );

  return (
    <aside>
      <div>
        <h1>Heading</h1>
        <div>
          <InputContainer>
            <Span>
              <FaPlus /> Collection
            </Span>
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
            <Span>
              <FaPlus /> Price
            </Span>
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
          {/*  <InputContainer>
            <Span>
              <FaPlus /> Size
            </Span>
            <SortListItem fields={size} />
          </InputContainer>
          <InputContainer>
            <Span>
              <FaPlus /> Discount
            </Span>
            <SortListItem fields={discount} />
          </InputContainer> */}
        </div>
        <div>
          <h6>Sorting</h6>
          <div>
            <h6>Ratings</h6>
            <select>
              <option value="sort=ratings">low to high</option>
            </select>
          </div>
          <div>
            <h6>Price</h6>
            <select>
              <option value="sort=ratings">low to high</option>
            </select>
          </div>
          <div>
            <h6>Discount</h6>
            <select>
              <option value="sort=ratings">low to high</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}

// function SortListItem({ fields, setCollectionField }) {
//   function handleFieldClick(e) {
//     const { value } = e.target;
//     setCollectionField(value);
//   }
//   return (
//     <>
//       <List>
//         {fields.map((el) => {
//           return (
//             <ListItem>
//               <Button value={el.value} onClick={handleFieldClick}>
//                 {el.uiField}
//               </Button>
//             </ListItem>
//           );
//         })}
//       </List>
//     </>
//   );
// }

export default AsideBar;
