import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useFilterContext } from "../context/filter_context";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  return (
    <main>
      {grid_view ? (
        <GridView products={products} />
      ) : (
        <ListView products={products} />
      )}
    </main>
  );
};

export default ProductList;
