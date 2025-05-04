import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuery } from "../../slice/allProductSlice";

export function useCollectionFields() {
  const [collectionField, setCollectionField] = useState({
    productCollection: "",
    menChecked: false,
    womenChecked: false,
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
  return {
    collectionField,
    handleCollectionClick,
  };
}

export function usePriceFields() {
  const [priceField, setPriceField] = useState({
    price: "",
    below_30: false,
    between_31_50: false,
    between_51_70: false,
    between_71_100: false,
    between_101: false,
  });

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

  return { priceField, handlePriceClick };
}

export function useDiscountFields() {
  const [discountField, setDiscountField] = useState({
    discount: "",
    per_lte_10: false,
    per_gte_21: false,
    per_gte_41: false,
    per_gte_51: false,
  });

  function handleDiscountClick(e) {
    const { name, value, checked } = e.target;

    if (name === "per-lte-10") {
      setDiscountField(
        checked
          ? {
              ...discountField,
              discount: value,
              per_lte_10: true,
              per_gte_21: false,
              per_gte_41: false,
              per_gte_51: false,
            }
          : { ...discountField, discount: "", per_lte_10: false }
      );
    }

    if (name === "per-gte-21") {
      setDiscountField(
        checked
          ? {
              ...discountField,
              discount: value,
              per_lte_10: false,
              per_gte_21: true,
              per_gte_41: false,
              per_gte_51: false,
            }
          : { ...discountField, discount: "", per_gte_21: false }
      );
    }

    if (name === "per-gte-41") {
      setDiscountField(
        checked
          ? {
              ...discountField,
              discount: value,
              per_lte_10: false,
              per_gte_21: false,
              per_gte_41: true,
              per_gte_51: false,
            }
          : { ...discountField, discount: "", per_gte_41: false }
      );
    }

    if (name === "per-gte-51") {
      setDiscountField(
        checked
          ? {
              ...discountField,
              discount: value,
              per_lte_10: false,
              per_gte_21: false,
              per_gte_41: false,
              per_gte_51: true,
            }
          : { ...discountField, discount: "", per_gte_51: false }
      );
    }
  }

  return { discountField, handleDiscountClick };
}

export function useSortFields() {
  const [sortFields, setSortFields] = useState({
    sortFieldValue: "",
  });

  function handleSortFields(e) {
    const { value } = e.target;
    setSortFields({ ...sortFields, sortFieldValue: value });
  }
  return { sortFields, handleSortFields };
}

export function useQueryFields() {
  const dispatch = useDispatch();
  function handleQueryCategory(cat) {
    const category = `category=${cat}`;
    dispatch(addQuery({ category }));
  }
  return { handleQueryCategory };
}

export function useQueryString(
  collectionField,
  priceField,
  discountField,
  sortFields
) {
  let queryFields = "";
  if (!(collectionField.productCollection === "")) {
    queryFields = queryFields + collectionField.productCollection;
  }

  if (!(priceField.price === "")) {
    queryFields = `${queryFields}${
      collectionField.productCollection === "" ? "" : "&"
    }${priceField.price}`;
  }

  if (!(discountField.discount === "")) {
    queryFields = `${queryFields}${queryFields === "" ? "" : "&"}${
      discountField.discount
    }`;
  }

  let sortItems = "";
  if (!(sortFields.sortFieldValue === "")) {
    sortItems = `${sortFields.sortFieldValue}`;
  }

  if (!(sortItems === "")) {
    queryFields = `${queryFields}${
      queryFields === "" ? "" : "&"
    }sort=${sortItems}`;
  }

  return queryFields;
}
