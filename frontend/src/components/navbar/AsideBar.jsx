import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { getAllProductsBasedOnQuery } from "../../slice/allProductSlice";

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

const P = styled.p`
  background-color: var(--color-grey-0);
  padding: 10px 12px;
  cursor: pointer;

  ${(prop) =>
    prop.type === true &&
    css`
      border: 1px solid var(--color-grey-200);
    `}
`;

const sortFields = [
  {
    id: 1,
    heading: "Gender",
    listItem: [
      { id: 11, uiField: "men", value: "productCollection=men" },
      { id: 12, uiField: "women", value: "productCollection=women" },
    ],
  },
  {
    id: 2,
    heading: "Price",
    listItem: [
      { id: 21, uiField: "Below Rs.30/-", value: "price[lt]=30" },
      { id: 22, uiField: "Rs.30-50/-", value: "price[gte]=31&price[lte]=50" },
      { id: 23, uiField: "Rs.51-70/-", value: "price[gte]=51&price[lte]=70" },
      { id: 24, uiField: "Rs.71-100/-", value: "price[gte]=71&price[lte]=100" },
      { id: 25, uiField: "Rs.101/-", value: "price[gte]=101" },
    ],
  },
  {
    id: 3,
    heading: "discount",
    listItem: [
      { id: 41, uiField: "0-10% ", value: "percentage[lte]=10" },
      {
        id: 42,
        uiField: "21-40%",
        value: "percentage[gte]=21&percentage[lte]=40",
      },
      {
        id: 44,
        uiField: "41-50%",
        value: "percentage[gte]=41&percentage[lte]=50",
      },
      { id: 45, uiField: "51-80%", value: "percentage[gte]=51" },
    ],
  },
  {
    id: 4,
    heading: "Size",
    listItem: [
      { id: 61, uiField: "s ", value: "size=s" },
      { id: 62, uiField: "m", value: "size=m" },
      { id: 63, uiField: "l", value: "size=l" },
      { id: 64, uiField: "xl", value: "size=xl" },
      { id: 65, uiField: "xxl", value: "size=xx;" },
    ],
  },
  {
    id: 5,
    heading: "Rating",
    listItem: [
      { id: 71, uiField: "low to high", value: "sort=ratings" },
      { id: 72, uiField: "high to low", value: "sort=-ratings" },
    ],
  },
];

function AsideBar() {
  const [sortBy, setSortBy] = useState([]);
  const [isClicked, setIsClicked] = useState({
    0: true,
    1: true,
    2: true,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChechBox(index) {
    setIsClicked((prop) => ({
      ...prop,
      [index]: !prop[index],
    }));
  }

  useEffect(
    function () {
      if (sortBy.length < 0) return;
      const query = sortBy.join("&");
      navigate(`?${query}`);
      dispatch(getAllProductsBasedOnQuery(`?${query}`));
    },
    [sortBy, navigate]
  );

  return (
    <aside>
      <div>
        <h1>Sorting</h1>
        <SortList
          isClicked={isClicked}
          handleChechBox={handleChechBox}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
    </aside>
  );
}

function SortList({ isClicked, handleChechBox, sortBy, setSortBy }) {
  return (
    <div>
      {sortFields.map((el, i) => {
        return (
          <>
            <P type={isClicked[i]} onClick={() => handleChechBox(i)}>
              <Span>{isClicked[i] ? <FaPlus /> : <FaMinus />}</Span>
              {el.heading}
            </P>
            {isClicked[i] && (
              <List>
                <SortListItem
                  sortHeading={el.heading}
                  sortFields={el.listItem}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                />
              </List>
            )}
          </>
        );
      })}
    </div>
  );
}

function SortListItem({ sortFields, sortHeading, sortBy, setSortBy }) {
  function handleChange(e) {
    const { value, checked } = e.target;
    console.log(checked);
    setSortBy((el) =>
      checked ? [...el, value] : el.filter((cur) => cur !== value)
    );
  }

  return (
    <>
      {sortFields.map((el) => {
        return (
          <ListItem>
            <Input
              type="checkbox"
              id={el.id}
              name={sortHeading}
              value={el.value}
              onChange={handleChange}
            />
            <Label htmlFor={el.id}>{el.uiField}</Label>
          </ListItem>
        );
      })}
    </>
  );
}

export default AsideBar;
