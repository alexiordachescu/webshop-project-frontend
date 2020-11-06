const initialState = {
  all: [],
  totalProducts: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        all: [...state.all, payload],
      };
    case "INCREMENT_TOTAL":
      return {
        ...state,
        totalProducts: state.totalProducts + 1,
      };

    case "DECREMENT_TOTAL":
      return {
        ...state,
        totalProducts: state.totalProducts - 1,
      };
    default:
      return state;
  }
};
