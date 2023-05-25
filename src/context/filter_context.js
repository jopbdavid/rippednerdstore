import React, { useContext, useEffect, useReducer } from "react";
import { useProductsContext } from "./products_context";
import reducer from "../reducers/filter_reducer";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    type: "all",
    price: 0,
    max_price: 0,
    min_price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  const gridView = () => {
    dispatch({ type: "SET_GRID" });
  };

  const listView = () => {
    dispatch({ type: "SET_LIST" });
  };

  const updateSort = (value) => {
    dispatch({ type: "UPDATE_SORT", payload: value });
  };

  const updateFilters = (name, value) => {
    dispatch({ type: "UPDATE_FILTERS" });
  };
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);
  useEffect(() => {
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.sort]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        gridView,
        listView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
