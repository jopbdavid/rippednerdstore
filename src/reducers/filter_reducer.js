const filter_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    return {
      ...state,
      all_products: action.payload,
      filtered_products: action.payload,
    };
  }
  if (action.type === "SET_GRID") {
    return {
      ...state,
      grid_view: true,
    };
  }
  if (action.type === "SET_LIST") {
    return {
      ...state,
      grid_view: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
