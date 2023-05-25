import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useFilterContext } from "../context/filter_context";

const ProductList = () => {
  const { filtered_products: products } = useFilterContext();
  return (
    <main>
      <GridView products={products} />
      <ListView products={products} />
    </main>
  );
  // return <main>{grid_view ? <GridView /> : <ListView />}</main>;
};

export default ProductList;
