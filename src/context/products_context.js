import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { url, redirect_uri } from "../others/data";
import { listings } from "../others/listings";

const initialState = {
  products_loading: false,
  products_error: false,
  products: listings,
  featured_products: [],
  singleProduct_loading: false,
  singleProduct_error: false,
  singleProduct: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const fetchProducts = async (url) => {
  //     console.log(process.env.REACT_APP_ETSY_KEYSTRING);
  //     const headers = {
  //       "x-api-key": process.env.REACT_APP_ETSY_KEYSTRING,
  //       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  //     };
  //     const params = {
  //       limit: 10,
  //     };
  //     try {
  //       const response = await axios.get(url, {
  //         headers: headers,
  //         params: params,
  //       });
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  useEffect(() => {
    dispatch({ type: "GET_FEATURED", payload: listings });
  }, [state]);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
