import Axios from "axios";

export async function fetchProducts(dispatch, getState) {
  const response = await Axios.get("http://localhost:4000/products");
  console.log("What is response?", response.data.categories);
  dispatch({ type: "SHOW_PRODUCTS", payload: response.data.categories });
}
