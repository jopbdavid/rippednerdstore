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

  if (action.type === "UPDATE_SORT") {
    return {
      ...state,
      sort: action.payload,
    };
  }

  if (action.type === "SORT_PRODUCTS") {
    const { sort, filtered_products } = state;
    console.log(sort);

    if (sort === "price-lowest") {
      const sorted = filtered_products.sort((a, b) => a.price - b.price);

      return {
        ...state,
        filtered_products: sorted,
      };
    }
    if (sort === "price-highest") {
      const sorted = filtered_products.sort((a, b) => b.price - a.price);
      console.log(sorted);
      return {
        ...state,
        filtered_products: sorted,
      };
    }
    if (sort === "name-a") {
      const sorted = filtered_products.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

      return {
        ...state,
        filtered_products: sorted,
      };
    }
    if (sort === "name-z") {
      const sorted = filtered_products.sort((a, b) =>
        b.title.localeCompare(a.title)
      );

      return {
        ...state,
        filtered_products: sorted,
      };
    }
  }
  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        type: "all",
        price: state.filters.max_price,

        shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
