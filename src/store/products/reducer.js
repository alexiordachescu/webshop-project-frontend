const initialState = { products: [] };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SHOW_PRODUCTS":
      return { ...state, products: payload };

    default:
      return state;
  }
};
