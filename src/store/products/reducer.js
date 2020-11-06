const initialState = {
  categories: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SHOW_PRODUCTS":
      return { ...state, categories: payload };

    default:
      return state;
  }
};
