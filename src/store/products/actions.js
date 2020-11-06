import Axios from "axios";

export function fetchProducts() {
  console.log("did we get here");

  return async function thunk(dispatch, getState) {
    try {
      const response = await Axios.get("http://localhost:4000/products");
      console.log("What is response?", response.data.categories);
      const categories = response.data.categories;

      dispatch(renderProducts(categories));
    } catch (error) {
      console.log(error);
    }
  };
}

export function renderProducts(categories) {
  console.log("render products, did we get here");
  return {
    type: "SHOW_PRODUCTS",
    payload: categories,
  };
}
