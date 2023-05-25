const products_reducer = (state, action) => {
  if ((action.type = "GET_FEATURED")) {
    const featured = action.payload.filter((product) => {
      return product?.featured === true;
    });
    return { ...state, featured_products: featured };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
